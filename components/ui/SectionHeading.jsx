"use client";

import React from "react";

const SectionHeading = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-[#e5e7eb] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[#9ca3af] text-base md:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
