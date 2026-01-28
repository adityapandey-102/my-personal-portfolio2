"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/constants";
import {
  User,
  Layers,
  FolderKanban,
  Briefcase,
  Mail,
  Menu,
  X,
  HomeIcon,
  Code2
  
} from "lucide-react";

const icons = {
  Home: HomeIcon,
  About: User,
  Services:Code2,
  Skills: Layers,
  Projects: FolderKanban,
  Experience: Briefcase,
  Contact: Mail,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0b0b]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* BRAND + FAVICON */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/favicon/android-chrome-512x512.png"
              alt="logo"
              width={45}
              height={45}
              className="rounded-sm"
            />
            <span className="text-lg font-semibold text-gray-200 tracking-wide">
              Aditya<span className="text-blue-400">.</span>
            </span>
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = icons[link.label];
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
                >
                  {Icon && (
                    <Icon
                      size={16}
                      className="text-gray-500 group-hover:text-blue-400 transition"
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* MOBILE MENU BTN */}
          <button
            className="md:hidden text-gray-200"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE FULL SCREEN MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0b0b0b]">

          {/* HEADER */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div className="flex items-center gap-4">
              <Image
                src="/favicon/android-chrome-512x512.png"
                alt="logo"
                width={45}
                height={45}
              />
              <span className="text-gray-200 font-medium">
                Navigation
              </span>
            </div>

            <button onClick={() => setIsOpen(false)}>
              <X size={26} className="text-gray-400 hover:text-white" />
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col px-8 py-10 gap-7">
            {navLinks.map((link) => {
              const Icon = icons[link.label];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 text-lg text-gray-300 hover:text-blue-400 transition"
                >
                  {Icon && (
                    <Icon size={22} className="text-blue-400" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
