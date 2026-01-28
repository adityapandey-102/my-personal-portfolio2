"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { portfolioData } from "@/lib/data";
import Button from "@/components/ui/button";
import { Sparkles, ArrowRight,LockIcon} from "lucide-react";
import ResumeRequestModal from "@/components/modals/ResumeRequestModal";


const Typewriter = dynamic(
    () => import("react-simple-typewriter").then((mod) => mod.Typewriter || mod),
    { ssr: false }
);

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Hero() {
    const [open, setOpen] = useState(false);
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        const loadAnimation = async () => {
            try {
                const res = await fetch("/lottieeJSON/anim1.json");
                const data = await res.json();
                setAnimationData(data);
            } catch { }
        };
        loadAnimation();
    }, []);

    const handleScrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen pt-36 px-6 bg-[#0b0b0b] flex items-center overflow-hidden"
        >
            {/* SOFT LIGHT GRADIENT */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/10 blur-[140px]" />

            <div className="relative max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-24">

                    {/* LEFT */}
                    <div className="max-w-xl">

                        {/* BADGE */}
                        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-blue-500/10 border border-blue-400/20
              text-blue-400 text-sm font-medium">
                            <Sparkles size={15} />
                            Full Stack Developer
                        </div>

                        {/* NAME */}
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-200 leading-[1.02]">
                            {portfolioData.hero.name}
                        </h1>

                        {/* ROLE */}
                        <p className="mt-4 text-xl md:text-2xl font-medium text-gray-300">
                            <Typewriter
                                words={portfolioData.hero.role}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={65}
                                deleteSpeed={45}
                                delaySpeed={1200}
                            />
                        </p>

                        {/* POWER LINE */}
                        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                            {portfolioData.hero.tagline}
                        </p>

                        {/* CTA GROUP */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">

                            {/* Primary */}
                            <Button
                                size="lg"
                                variant="primary"
                                onClick={handleScrollToProjects}
                                className="w-full sm:w-auto flex items-center justify-center gap-2"
                            >
                                View Projects
                                <ArrowRight size={18} />
                            </Button>

                            {/* Secondary */}
                            <Button
                                size="lg"
                                variant="secondary"
                                // onClick={handleDownloadResume}
                                onClick={() => setOpen(true)}
                                className="w-full sm:w-auto flex items-center justify-center gap-2"
                            >
                                Request Resume
                                {/* <Download size={18} /> */}
                                <LockIcon size={18} />
                            </Button>

                            <ResumeRequestModal
                                open={open}
                                onClose={() => setOpen(false)}
                            />

                        </div>

                    </div>

                    {/* RIGHT */}
                    {animationData && (
                        <div className="hidden lg:flex justify-end">
                            <div className="relative w-[420px] h-[420px] opacity-80">
                                <Lottie animationData={animationData} loop autoplay />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
