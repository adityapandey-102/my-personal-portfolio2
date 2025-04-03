import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aditya Pandey | MERN Stack Developer & UI/UX Designer",
  description: "Expert MERN stack developer specializing in scalable web applications, UI/UX design, and AI-driven solutions. Get top-notch website development services tailored for startups and enterprises.",
  keywords: "MERN stack developer, Next.js expert, UI/UX design, scalable web applications, AI-driven solutions, website development, software engineering",
  author: "Aditya Pandey",
  robots: "index, follow",
  openGraph: {
    title: "Aditya Pandey | MERN Stack Developer & UI/UX Designer",
    description: "Building high-performance web applications with cutting-edge technologies like Next.js, AI integration, and modern UI/UX design.",
    url: "https://yourwebsite.com", // Replace with your actual URL
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Replace with an actual Open Graph image URL
        width: 1200,
        height: 630,
        alt: "Aditya Pandey - MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle", // Replace with your actual Twitter handle
    title: "Aditya Pandey | MERN Stack Developer & UI/UX Designer",
    description: "Providing scalable web solutions with expertise in MERN stack, UI/UX design, and AI-powered development.",
    images: ["https://yourwebsite.com/twitter-image.jpg"], // Replace with an actual image URL
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
