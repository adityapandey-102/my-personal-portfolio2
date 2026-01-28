"use client";

import React from "react";

const Divider = ({ className = "" }) => {
  return (
    <div
      className={`h-px bg-gradient-to-r from-transparent via-[#1f2937] to-transparent my-12-- ${className}`}
    />
  );
};

export default Divider;
