import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";


const RATE_LIMIT_TIME = 5 * 60 * 1000;
const ipStore = new Map();

const filePath = path.join(process.cwd(), "public/resume/Aditya_Pandey_Resume.pdf");
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isRateLimited(ip) {
  const last = ipStore.get(ip);

  if (!last) {
    ipStore.set(ip, Date.now());
    return false;
  }

  if (Date.now() - last < RATE_LIMIT_TIME) {
    return true;
  }

  ipStore.set(ip, Date.now());
  return false;
}

export async function POST(req) {
  try {
    const { name, email, company, purpose } = await req.json();

    if (!email || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ message: "Invalid email address" }),
        { status: 400 },
      );
    }

    const ip = req.headers.get("x-forwarded-for") || "unknown";

    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({
          message: "Please wait 5 minutes before requesting again",
        }),
        { status: 429 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Aditya Pandey" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Resume – Aditya Pandey",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for your interest.</p>
        <p>Please find my resume attached.</p>
        <br/><br/>
        <p>Regards,<br/>Aditya Pandey</p>
      `,
      attachments: [
        {
          filename: "Aditya_Pandey_Resume.pdf",
          content: fs.readFileSync(filePath),
        },
      ],
    });

    // SEND YOU LEAD INFO
    await transporter.sendMail({
      from: `"Portfolio Alert" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "New Resume Request",
      text: `
Name: ${name}
Email: ${email}
Company: ${company}
Purpose: ${purpose}
`,
    });

    return new Response(
      JSON.stringify({ message: "Resume sent successfully" }),
      { status: 200 },
    );
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}
