"use client";

import dynamic from "next/dynamic";
import { ArrowRight, Mail, Briefcase } from "lucide-react";
import Button from "@/components/ui/button";
import animation5 from "@/public/lottieeJSON/anim5.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const Typewriter = dynamic(
    () => import("react-simple-typewriter").then((mod) => mod.Typewriter || mod),
    { ssr: false }
);

export default function Services() {

    const handleScrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

       const handleHireMeClick = () => {
        const email = "adityapandeyp1234@gmail.com";
        const subject = encodeURIComponent("Exploring Opportunities with Aditya Pandey");
        const body = encodeURIComponent(
            `Dear Aditya,\n\n` +
            `I came across your profile and was greatly impressed by your work. We are currently looking for talented engineers like you to join our team.\n\n` +
            `We would love to discuss how your expertise aligns with our current projects and opportunities. Please let us know a convenient time for a chat.\n\n` +
            `Looking forward to connecting!\n\n` +
            `Best Regards,\n[Your Name]\n[Your Company]\n[Your Designation]`
        );

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };
    return (
        <section
            id="services"
            className="py-28 bg-gradient-to-b from-[#0b0b0b] to-[#111111]"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* ===== SECTION HEADING ===== */}
                <div className="mb-16 max-w-xl">
                    <p className="text-sm uppercase tracking-widest text-blue-400 font-medium">
                        Services
                    </p>

                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-200 tracking-tight">
                        What I Do
                    </h2>

                    <p className="mt-4 text-gray-400 leading-relaxed">
                        I help startups and companies design, build and scale
                        production-ready web applications.
                    </p>
                </div>


                {/* ===== CONTENT GRID ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT — LOTTIE */}
                    <div className="flex justify-center">
                        <div className="w-[320px] md:w-[420px] h-[320px] md:h-[420px]">
                            <Lottie
                                animationData={animation5}
                                loop
                                autoplay
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-8">

                        {/* FIXED HEIGHT TYPEWRITER */}
                        <div className="h-[96px] md:h-[120px]">
                            <p className="text-2xl md:text-4xl font-mono font-medium text-gray-200 leading-snug">
                                <Typewriter
                                    words={[
                                        "I build scalable full-stack applications.",
                                        "I turn ideas into production-ready systems.",
                                        "I help startups ship fast and clean.",
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={65}
                                    deleteSpeed={45}
                                    delaySpeed={1200}
                                />
                            </p>
                        </div>

                        {/* SERVICES */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            <ServiceCard
                                title="Full Stack Development"
                                desc="End-to-end applications using React, Next.js, Node.js and modern architecture."
                            />

                            <ServiceCard
                                title="Backend & API Engineering"
                                desc="Secure APIs, authentication, authorization and scalable backend logic."
                            />

                            <ServiceCard
                                title="Startup MVP Development"
                                desc="Rapid MVP development with clean code and real production standards."
                            />

                            <ServiceCard
                                title="Freelance Development"
                                desc="Dashboards, admin panels, landing pages and custom systems."
                            />

                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Button 
                            className="flex items-center gap-2"
                            onClick={handleHireMeClick}
                            >
                                <Briefcase size={18} />
                                Hire Me
                                <ArrowRight size={18} />
                            </Button>

                            <Button
                                variant="secondary"
                                className="flex items-center gap-2"
                                onClick={handleScrollToContact}
                            >
                                <Mail size={18} />
                                Contact Me
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ title, desc }) {
    return (
        <div className="border border-white/10 rounded-xl p-5 bg-[#111111] hover:border-blue-400/40 transition">
            <h4 className="text-gray-200 font-semibold mb-2">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}
