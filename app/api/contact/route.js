import { mailOptions, transporter } from "../../config/nodemailer";

export async function POST(req, res) {
  console.log(req.body);

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Email from website",
      text: "This is a TEST string",
      html: "<h1>Test Title</h1><p>Some Body text</p>",
    });

    return new Response(JSON.stringify({ answer: "Email Send Sucessfuly" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return new Response(JSON.stringify({ answer: "Could not send Email" }), {
      status: 402,
    });
  }
}
