"use client";

import React from "react";
import { portfolioData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#1f2937] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-[#9ca3af] text-sm md:text-base">
            {portfolioData.footer.text}
          </p>
        </div>
      </div>
    </footer>
  );
}
