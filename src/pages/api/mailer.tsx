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
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASSWORD
      }
    });

    const textString = `Message from ${req.body.name} <${req.body.email}> via Mathsoc Website: ${req.body.message}`;

    // send mail with defined transport object
    const status = await transporter.sendMail({
      from: process.env.CONTACT_EMAIL, // sender address
      to: process.env.CONTACT_EMAIL, // list of receivers
      subject: req.body.subject, // Subject line
      text: textString, // html body
      replyTo: req.body.email
    });
    res.status(200).send("success");
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send("Message could not be sent");
    }
  }
}
