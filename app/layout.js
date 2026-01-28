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
  title: "Aditya Pandey | Full Stack Developer",
  description: "Full Stack Developer building scalable backend systems and clean web applications. Experience with Node.js, Express, PostgreSQL, and modern frontend frameworks.",
  keywords: "Full Stack Developer, Node.js, Express, React, Next.js, PostgreSQL, REST API, backend developer",
  author: "Aditya Pandey",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    android: [
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Aditya Pandey | Full Stack Developer",
    description: "Building scalable backend systems and clean, reliable web applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Pandey | Full Stack Developer",
    description: "Full Stack Developer with experience in Node.js, Express, PostgreSQL, and modern frontend frameworks.",
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
