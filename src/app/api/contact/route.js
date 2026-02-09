import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, email, mobile, company, jobTitle, companySize, industry, message } = await req.json();

    // 1. Setup Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    // 2. Email to Admin    company: "",
    const adminTask = transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: [
    "sales@la-technologiesindia.com",
    "development@syspreedigital.com",
  ],
      subject: `New Lead: ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> +91 ${mobile}</p>
        <p><strong>Company Name:</strong> ${company}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company Size (No. of Employees):</strong> ${companySize}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 3. Confirmation to User
    const userTask = transporter.sendMail({
      from: `"LA Technologies" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your inquiry - LA Technologies",
      html: `<p>Hi ${firstName},</p><p>Thank you for reaching out. Our team will contact you shortly.</p>`,
    });

    // Run both emails in parallel
    await Promise.all([adminTask, userTask]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
