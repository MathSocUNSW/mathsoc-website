import nodemailer from "nodemailer";

export async function sendContactEmail(name: string, email: string, subject: string, message: string) {
  if (!name || !email || !subject || !message) {
    throw new Error("All fields are required.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL_SENDER,
      pass: process.env.CONTACT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.CONTACT_EMAIL_SENDER,
    to: process.env.CONTACT_EMAIL_RECEIVER,
    subject: `New Contact Form Submission: ${subject}`,
    text: `
      Name/Company: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `,
  };

  await transporter.sendMail(mailOptions);
}
