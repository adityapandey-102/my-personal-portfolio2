"use client";

import React from "react";
import { portfolioData } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-[#0b0b0b] to-[#111111]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title={portfolioData.experience.title} />

        <div className="space-y-8">
          {portfolioData.experience.items.map((job, index) => (
            <div
              key={index}
              className="border-l-2 border-blue-400/50 hover:border-blue-400 pl-6 pb-8 last:pb-0 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-400 rounded-full border-2 border-[#0b0b0b] group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-blue-400/50" />

              <div className="mb-3 group-hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-lg md:text-xl font-semibold text-[#e5e7eb] group-hover:text-blue-300 transition-colors">
                  {job.company}
                </h3>
                <p className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  {job.position} • {job.type}
                </p>
              </div>
              <p className="text-sm text-[#9ca3af] mb-4 group-hover:text-[#b5bdc7] transition-colors">
                {job.startDate} – {job.endDate}
              </p>
              <ul className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-[#9ca3af] flex items-start before:content-['•'] before:mr-3 before:text-blue-400 before:font-bold group-hover:text-[#b5bdc7] transition-colors duration-300"
                    style={{ animation: `slideInLeft 0.6s ease-out backwards`, animationDelay: `${index * 0.15 + i * 0.05}s` }}
                  >
                    <span className="flex-1">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
