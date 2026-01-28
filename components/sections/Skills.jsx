"use client";

import React from "react";
import { portfolioData } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Layout,
  Server,
  Database,
  Wrench,
  Cloud,
  Code2,
} from "lucide-react";

const categoryIcons = {
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  "Tools & DevOps": Wrench,
  DevOps: Cloud,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 bg-[#0b0b0b]-- bg-gradient-to-b from-[#0b0b0b] to-[#111111]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={portfolioData.skills.title} />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolioData.skills.categories.map((category) => {
            const Icon =
              categoryIcons[category.name] || Code2;

            return (
              <div
                key={category.name}
                className="group relative bg-[#111111] border border-white/10 rounded-2xl p-7 transition-all duration-300 hover:border-blue-400/40"
              >
                {/* HEADER */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-200">
                    {category.name}
                  </h3>
                </div>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-blue-400/30 hover:text-blue-300 transition"
                    >
                      <Code2 size={14} className="text-blue-400/70" />
                      {skill}
                    </span>
                  ))}
                </div>

                {/* subtle glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-blue-500/5 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
