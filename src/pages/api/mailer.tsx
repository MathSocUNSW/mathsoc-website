"use strict";
import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
async function main(req: any, res: any) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_API_EMAIL,
      pass: process.env.EMAIL_API_PASSWORD
    }
  });

  const textString =
    "New contact form request from MathSoc website:" +
    "\n" +
    "First Name: " +
    req.body.firstname +
    "\n" +
    "Last Name: " +
    req.body.lastname +
    "\n" +
    "Email: " +
    req.body.email +
    "\n" +
    "Message: \n" +
    req.body.message +
    "\n";

  // send mail with defined transport object
  await transporter
    .sendMail({
      from: process.env.EMAIL_API_EMAIL, // sender address
      to: process.env.EMAIL_API_EMAIL, // list of receivers
      subject: req.body.subject, // Subject line
      text: textString, // html body
      replyTo: req.body.email
    })
    .catch((res: any) => {
      console.log(res);
    });
}

export default function (req: any, res: any) {
  main(req, res).catch(console.error);
  res.send("success");
}
