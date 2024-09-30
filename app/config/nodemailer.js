import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});
// kirv yiri umor hfjw

export const mailOptions = {
  from: "dhimannavjot1@gmail.com",
  to: "dhimannavjot1@gmail.com",
};
