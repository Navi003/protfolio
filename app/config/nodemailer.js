import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dhimannavjot1@gmail.com",
    pass: "kirvyiriumorhfjw",
  },
});
// kirv yiri umor hfjw

export const mailOptions = {
  from: "dhimannavjot1@gmail.com",
  to: "dhimannavjot1@gmail.com",
};
