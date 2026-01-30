"use client";

import { useEffect, useState } from "react";
import { X, Mail, Send, Timer } from "lucide-react";

const COOLDOWN_TIME = 5 * 60 * 1000;
const STORAGE_KEY = "resume_request_cooldown";

export default function ResumeRequestModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    purpose: "",
  });

  // ⏱ check cooldown on open
  useEffect(() => {
    if (!open) return;

    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const remaining = Math.floor((+saved - Date.now()) / 1000);
      if (remaining > 0) {
        setCooldown(remaining);
      }
    }
  }, [open]);

  // ⏳ countdown
  useEffect(() => {
    if (cooldown <= 0) return;

    const interval = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          localStorage.removeItem(STORAGE_KEY);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [cooldown]);

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

    const data = await res.json();

    setLoading(false);

    if (res.ok) {
      // ⏱ start cooldown
      const nextAllowed = Date.now() + COOLDOWN_TIME;
      localStorage.setItem(STORAGE_KEY, nextAllowed.toString());
      setCooldown(COOLDOWN_TIME / 1000);

      alert("Resume sent to your email ✅");
      onClose();
    } else {
      alert(data.message);
    }
  };

  if (!open) return null;

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
          Resume will be sent directly to your email.
        </p>

        {/* COOLDOWN MESSAGE */}
        {cooldown > 0 && (
          <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5 px-4 py-3 text-sm text-yellow-300">

            <div className="flex items-center justify-center gap-2 font-medium">
              <Timer size={16} />
              Request limit active
            </div>

            <p className="mt-1 text-center text-yellow-300/80 leading-relaxed">
              To keep resources optimized, only one resume request is allowed every
              <span className="font-medium"> 5 minutes</span>.
              <br />
              You can try again in{" "}
              <span className="font-semibold text-yellow-200">
                {Math.floor(cooldown / 60)}m {cooldown % 60}s
              </span>.
            </p>

          </div>
        )}

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
            disabled={loading || cooldown > 0}
            className={`mt-4 w-full rounded-xl py-3 font-medium transition flex items-center justify-center gap-2
              ${cooldown > 0
                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                : "bg-white text-black hover:bg-gray-200"}
            `}
          >
            <Send size={18} />
            {loading
              ? "Sending..."
              : cooldown > 0
                ? "Please wait"
                : "Send to my Email"}
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
