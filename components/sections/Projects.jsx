"use client";

import React from "react";
import { portfolioData } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import {
  FolderKanban,
  Github,
  ExternalLink,
  Server,
  ShoppingCart,
  LayoutDashboard,
  Code2,
} from "lucide-react";

const projectIcons = {
  backend: Server,
  ecommerce: ShoppingCart,
  dashboard: LayoutDashboard,
  default: FolderKanban,
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-gradient-to-b from-[#0b0b0b] to-[#111111]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={portfolioData.projects.title} />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioData.projects.items.map((project) => {
            const Icon =
              project.type && projectIcons[project.type]
                ? projectIcons[project.type]
                : projectIcons.default;

            return (
              <div
                key={project.id}
                className="group relative bg-[#111111] border border-white/10 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40"
              >
                {/* HEADER */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      <Code2 size={12} />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition"
                    >
                      <Github size={16} />
                      Code
                    </Link>
                  )}

                  {project.links.live && (
                    <Link
                      href={project.links.live}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Link>
                  )}
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-blue-500/5" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
