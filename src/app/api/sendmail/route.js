import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ status: "error", message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SMTP,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Email setup
    const mailData = {
      from: process.env.MAIL_USER,
      to: "amirchampion30@gmail.com",
      // to: "robert@talentsuite.io",
      // to: ["robert@talentsuite.io", "Lukas@talentsuite.io","leander@talentsuite.io"],
      // to: ["amirchampion30@gmail.com", "sarfraz@xefast.com"],

      
      subject: "Neue Nachricht von deiner Website",
      text: `Name: ${name}\nEmail: ${email}\n\nNachricht:\n${message}`,
    };

    await transporter.sendMail(mailData);

    return new Response(
      JSON.stringify({ status: "success", message: "Message sent successfully!" }),
      { status: 200 }
    );

  } catch (error) {
    console.log("Error:", error);
    alert(error)
    return new Response(
      JSON.stringify({ status: "error", message: "Failed to send message" }),
      { status: 500 }
    );
  }
}
