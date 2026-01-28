"use client";

import { useState } from "react";
import { X, Mail, Send } from "lucide-react";

export default function ResumeRequestModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    purpose: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.name) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/request-resume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      alert("Resume sent to your email ✅");
      onClose();
    } else {
      alert("Failed to send resume");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 shadow-2xl">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* ICON */}
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
          <Mail />
        </div>

        <h2 className="text-center text-xl font-semibold text-white">
          Get Resume Copy
        </h2>

        <p className="mt-2 text-center text-sm text-gray-400">
          Resume will be sent directly to your email address.
        </p>

        {/* FORM */}
        <div className="mt-6 space-y-4">

          <Input
            name="name"
            placeholder="Your Name *"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            name="email"
            placeholder="Your Email *"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            name="company"
            placeholder="Company / Organization"
            value={form.company}
            onChange={handleChange}
          />

          <textarea
            name="purpose"
            rows="3"
            placeholder="Job role / purpose"
            value={form.purpose}
            onChange={handleChange}
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white border border-white/10 outline-none focus:border-blue-500"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-4 w-full rounded-xl bg-white py-3 font-medium text-black hover:bg-gray-200 transition flex items-center justify-center gap-2"
          >
            <Send size={18} />
            {loading ? "Sending..." : "Send to my Email"}
          </button>

        </div>
      </div>
    </div>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white border border-white/10 outline-none focus:border-blue-500"
    />
  );
}
