import { mailOptions, transporter } from "../../config/nodemailer";

export async function POST(req, res) {
  // Ensure the request is a POST request
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ answer: "Method not allowed" }), {
      status: 405, // Method not allowed
    });
  }

  // Parse the request body as JSON
  try {
    const requestBody = await req.json();

    // Access the data from the request body
    const { firstName, eMail, message, lastName } = requestBody;

    // Now you can use 'firstName' and 'eMail' in your logic
    console.log("First Name:", firstName);
    console.log("Email:", eMail);

    await transporter.sendMail({
      ...mailOptions,
      subject: "Email from website",
      text: "This is a TEST string",
      html: `<h1>
      Hi I am ${firstName} ${lastName}
      </h1><p>${message}</p>
      <p>My Email adress is : ${eMail}</p>
      `,
    });

    return new Response(JSON.stringify({ answer: "Email Send Successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return new Response(JSON.stringify({ answer: "Could not send Email" }), {
      status: 402,
    });
  }
}
