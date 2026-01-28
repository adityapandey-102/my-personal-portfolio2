"use client"
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Divider from "@/components/ui/Divider";

import dynamic from 'next/dynamic';
import Services from "@/components/sections/Services";

export default function Home() {

  return (
    <main className="bg-[#0b0b0b] text-[#e5e7eb] w-full min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      <Divider />

      <Services/>

      <About />

      <Divider />

      {/* Skills Section */}
      <Skills />

      {/* <Divider /> */}

      {/* Experience Section */}
      <Experience />

      <Divider />

      {/* Projects Section */}
      <Projects />

      {/* <Divider /> */}


      {/* Contact Section */}
      <Contact />
      {/* <ContactMe/> */}


      {/* Footer */}
      <Footer />
    </main>
  );
}
