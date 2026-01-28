"use client";

import React from "react";
import { portfolioData } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import {
  User,
  Code2,
  Server,
  Briefcase,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-[#0b0b0b]-- bg-gradient-to-b from-[#0b0b0b] to-[#111111]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={portfolioData.about.title} />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT — PROFILE IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-white/10 bg-[#111111]">
              {/* Replace src with your image later */}
              <Image
                src="/picture/Profile_Photo.jpg"
                alt="Aditya Pandey"
                fill
                className="object-cover"
                priority
              />

              {/* subtle glow */}
              <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="space-y-8">

            {/* INTRO */}
            <div className="flex gap-4">
              <div className="p-3 h-fit rounded-xl bg-blue-500/10 text-blue-400">
                <User size={22} />
              </div>
              <p className="text-gray-300 leading-relaxed">
                {portfolioData.about.content[0]}
              </p>
            </div>

            {/* ENGINEERING */}
            <div className="flex gap-4">
              <div className="p-3 h-fit rounded-xl bg-blue-500/10 text-blue-400">
                <Code2 size={22} />
              </div>
              <p className="text-gray-300 leading-relaxed">
                {portfolioData.about.content[1]}
              </p>
            </div>

            {/* BACKEND FOCUS */}
            <div className="flex gap-4">
              <div className="p-3 h-fit rounded-xl bg-blue-500/10 text-blue-400">
                <Server size={22} />
              </div>
              <p className="text-gray-300 leading-relaxed">
                {portfolioData.about.content[2]}
              </p>
            </div>

            {/* WORK STYLE */}
            <div className="flex gap-4">
              <div className="p-3 h-fit rounded-xl bg-blue-500/10 text-blue-400">
                <Briefcase size={22} />
              </div>
              <p className="text-gray-300 leading-relaxed">
                {portfolioData.about.content[3]}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
