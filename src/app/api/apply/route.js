import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "u66gy9f4",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // secret token
});

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const coverLetter = formData.get("coverLetter");
    const jobId = formData.get("jobId");
    const resume = formData.get("resume");

    // Upload resume file
    const uploadedFile = await client.assets.upload(
      "file",
      resume,
      { filename: resume.name }
    );

    // Create application document
    await client.create({
      _type: "application",
      job: {
        _type: "reference",
        _ref: jobId,
      },
      name,
      email,
      phone,
      coverLetter,
      resume: {
        _type: "file",
        asset: {
          _type: "reference",
          _ref: uploadedFile._id,
        },
      },
      status: "New",
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Submission failed" },
      { status: 500 }
    );
  }
}