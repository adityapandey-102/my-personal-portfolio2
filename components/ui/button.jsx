"use client";

import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden group";

  const variants = {
    primary:
      "bg-blue-500 hover:bg-blue-600 text-white border border-blue-500 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95",
    secondary:
      "bg-transparent hover:bg-[#1f2937] text-[#e5e7eb] border border-[#1f2937] hover:border-blue-400 hover:text-blue-300 hover:shadow-md hover:shadow-blue-900/20 active:scale-95",
    ghost: "bg-transparent hover:bg-[#1f2937] text-[#e5e7eb] border-0 hover:text-blue-300 active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" style={{ animation: "none" }} />
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;
