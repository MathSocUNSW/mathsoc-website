"use strict";
import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
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
    const status = await transporter.sendMail({
      from: process.env.EMAIL_API_EMAIL, // sender address
      to: process.env.EMAIL_API_EMAIL, // list of receivers
      subject: req.body.subject, // Subject line
      text: textString, // html body
      replyTo: req.body.email
    });
    res.status(200).send("success");
  } catch (error: any) {
    res.status(500).send({ error: res });
  }
}
