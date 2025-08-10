import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.json({ success: false, error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // 📩 Email to YOU
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission - ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    // 📩 Auto-reply to USER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Me",
      text: `Hi ${name},Thank you for reaching out to me through my portfolio website. I truly appreciate you taking the time to share your thoughts and interest. I have received your message and will review it at the earliest. You can expect to hear back from me within the next 24 hours.

In the meantime, if you have any additional details or documents you’d like to share, please feel free to reply to this email.

\n\nBest regards,
\nHari Darshan
\nFull Stack Developer`
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: "Failed to send email" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`✅ Server running on http://localhost:${process.env.PORT}`);
});
