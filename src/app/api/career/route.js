import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("resume");

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "hr@la-technologiesindia.com", // Your target HR email
      subject: `Career Application: ${data.get("jobTitle")} - ${data.get(
        "firstName"
      )}`,
      html: `
        <h3>Application Details:</h3>
        <p><strong>Candidate:</strong> ${data.get("firstName")} ${data.get(
        "lastName"
      )}</p>
        <p><strong>Email:</strong> ${data.get("email")}</p>
        <p><strong>Experience:</strong> ${data.get("experience")}</p>
        <p><strong>Qualification:</strong> ${data.get("qualification")}</p>
      `,
      attachments: [{ filename: file.name, content: buffer }],
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
