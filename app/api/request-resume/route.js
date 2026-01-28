import nodemailer from "nodemailer";

const RATE_LIMIT_TIME = 10 * 60 * 1000;
const ipStore = new Map();

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
    const body = await req.json();
    const { email } = body;

    if (!email || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ message: "Invalid email address" }),
        { status: 400 }
      );
    }

    const ip =
      req.headers.get("x-forwarded-for") ||
      "unknown";

    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({
          message: "Please wait 10 minutes before requesting again",
        }),
        { status: 429 }
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
        <p>Hello,</p>
        <p>Thank you for your interest.</p>
        <p>You can download my resume here:</p>
        <a href="${process.env.NEXT_PUBLIC_RESUME_LINK}">
          Download Resume
        </a>
        <br/><br/>
        <p>Regards,<br/>Aditya Pandey</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Resume sent successfully" }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
}
