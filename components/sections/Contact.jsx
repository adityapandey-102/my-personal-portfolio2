"use client";

import React, { useState } from "react";
import { portfolioData } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/button";
import Link from "next/link";
import { Mail, Send, CheckCircle } from "lucide-react";
import { DynamicIcon } from 'lucide-react/dynamic';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#0b0b0b]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={portfolioData.contact.title}
          subtitle={portfolioData.contact.description}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* LEFT — CONTACT INFO */}
          <div className="space-y-10">

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <Link
                  href={`mailto:${portfolioData.contact.email}`}
                  className="text-gray-200 hover:text-blue-400 transition"
                >
                  {portfolioData.contact.email}
                </Link>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                <Send size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-3">Social Profiles</p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  {portfolioData.contact.social.map((social, i) => {

                    return (
                      <Link
                        key={i}
                        href={social.url}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:border-blue-400/40 hover:text-blue-400 transition"
                      >
                        <DynamicIcon name={social.icon} size={18} />                        

                        {social.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#111111] border border-white/10 rounded-xl p-8 space-y-5"
          >
            {submitted && (
              <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-400 text-sm rounded-lg p-4">
                <CheckCircle size={18} />
                Message sent successfully. I’ll get back to you soon.
              </div>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-blue-400 focus:outline-none transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-blue-400 focus:outline-none transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-blue-400 focus:outline-none transition resize-none"
            />

            <Button variant="primary" size="md" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
