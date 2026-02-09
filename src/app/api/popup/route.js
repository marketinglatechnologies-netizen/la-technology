import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      fullName,
      contactNumber,
      email,
      companyName,
      jobTitle,
      companySize,
      industry,
      message,
    } = body;

    // Basic validation
    if (!fullName || !contactNumber || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Required fields missing" },
        { status: 400 }
      );
    }

    // ✅ For now, just log the data
    console.log("New Contact Form Submission:", {
      fullName,
      contactNumber,
      email,
      companyName,
      jobTitle,
      message,
    });

    // Later you can:
    // - Send email
    // - Save to DB
    // - Push to CRM

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Form submission error:", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
