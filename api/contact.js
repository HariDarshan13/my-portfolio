import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📩 Email to YOU
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Senders must be authenticated users
      to: 'haridarshanhari123@gmail.com', // Recipient email
      subject: `New Contact Form Submission - ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 📩 Auto-reply to USER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // Auto-reply to the user's email
      subject: "Thank You for Contacting Me",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to me through my portfolio website. I have received your message and will review it at the earliest. You can expect to hear back from me within the next 24 hours.</p>
        <p>In the meantime, if you have any additional details or documents you’d like to share, please feel free to reply to this email.</p>
        <br/>
        <p>Best regards,<br/>Hari Darshan<br/>Full Stack Developer</p>
      `,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
}
