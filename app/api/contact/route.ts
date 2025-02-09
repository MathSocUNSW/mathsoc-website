import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/contact"; // Importing from /lib/

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    await sendContactEmail(name, email, subject, message);
    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    let errorMessage = "Error sending email.";

    // Check if error is an instance of Error
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
