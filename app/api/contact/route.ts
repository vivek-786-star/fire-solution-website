import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactEmailTemplate } from "@/components/email-template";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, service, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_SERVER_USER,
      to: process.env.EMAIL_SERVER_USER,
      cc: process.env.EMAIL_SERVER_CC_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: ContactEmailTemplate({ name, email, phone, company, service, message }),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
