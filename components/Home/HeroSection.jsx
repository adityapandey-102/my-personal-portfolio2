"use client"

import React from 'react'
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const Typewriter = dynamic(() => import("react-simple-typewriter").then(mod => mod.Typewriter || mod), { ssr: false });
// import { Typewriter } from 'react-simple-typewriter'
import * as animation1 from '@/public/lottieeJSON/anim1.json';
import Image from 'next/image';
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconBrandLinkedin
} from "@tabler/icons-react";
import Link from 'next/link';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


function HeroSection() {
    const styleLottie2 = {
        height: "100%",
        width: "100%",
        backgroundSize: "cover"
    }



    const handleDownloadResume = () => {
        const resumeLink = "https://drive.google.com/file/d/1OH3KBmot6OyJh842sfIg1kJq-HPMd65C/view?usp=sharing"; // Replace with your actual Google Drive link
        const link = document.createElement("a");
        link.href = resumeLink;
        link.target = "_blank"; // Opens in a new tab
        link.rel = "noopener noreferrer";
        link.download = "Aditya_Pandey_Resume.pdf"; // Suggested filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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


    const animation1DataClone = JSON.parse(JSON.stringify(animation1));

    const links = [
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-black dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/aditya-pandey-0661881ba/",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-black dark:text-neutral-300" />
            ),
            href: "https://x.com/AdityaP34493702",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-black dark:text-neutral-300" />
            ),
            href: "https://github.com/adityapandey-102",
        },

        {
            title: "LeetCode",
            icon: (
                <Image src="/picture/leetcode.svg"
                    alt="Profile"
                    width={30} // Adjust width
                    height={30}
                    className="h-full w-full text-black dark:text-neutral-300" />
            ),
            href: "",
        },
        {
            title: "Components",
            icon: (
                <IconNewSection className="h-full w-full text-black dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-black dark:text-neutral-300" />
            ),
            href: "#",
        },


    ];


    const companyTagline = [" a Fullstack Developer.", "a Frontend Engineer.", "A.I Learner.", " a PolyMaths."]
    return (
        <>
            <div id='page1' className="w-full --md:h-[100vh] text-center  bg-[#010228] pb-1 pt-20">
                <section className='flex  justify-between px-[4%] md:px-[10%]  flex-col md:flex-row'>
                    <div className="text-slate-200  ">
                        <div className="w-full md:w-[670px] h-[120px] mt-10  md:h-[220px] space-y-3 text-xl md:text-5xl font-mono font-medium text-left text-neutral-100">
                            <p>Hey👋I'm</p>
                            <p className='heading-xl text-neutral-500'> Aditya Pandey👨🏻&zwj;💻</p>
                            <Typewriter
                                words={companyTagline}
                                loop={0} // Set to 0 for infinite loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />

                        </div>
                        <div className="md:w-[700px]--  font-mono font-medium text-left mt-5 mb-5">
                            <h2 className='text-sm md:text-xl text-neutral-500'>Innovate. Build. Scale.</h2>
                            <div className='flex mt-6 gap-3'>
                                <button className='py-2 cursor-pointer px-1 border-2 hover:text-[#010228] w-[150px] hover:bg-slate-200 shadow-[4px_4px_0px_theme(colors.slate.400)] border-slate-200' onClick={() => handleDownloadResume()}>Resume &#8599;</button>
                                <button className='py-2 px-1 cursor-pointer  w-[150px] border-2 bg-slate-200 hover:bg-transparent text-[#010228] shadow-[4px_4px_0px_theme(colors.slate.400)] hover:text-slate-200 border-slate-200' onClick={() => handleHireMeClick()}>Hire Me &#8599;</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center  justify-center relative  md:h-[500px] overflow-hidden'>
                        <div width={250} // Adjust width
                            height={250} className=' w-[150px] h-[150px] md:w-[250px] md:h-[250px] text-5xl font-bold rounded-full font-mono absolute z-20 overflow-hidden shadow-2xl shadow-slate-800 '><Image
                                src="/picture/developer.jpg" // Replace with your image path
                                alt="Profile"
                                width={250} // Adjust width
                                height={250} // Adjust height
                                className=""
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/2wBDAA..." // Your small base64 image
                            /></div>
                        <Lottie animationData={animation1DataClone} style={styleLottie2} />
                    </div>
                </section>

                <section className="--md:w-[600px] pl-[10%]">
                    <h3 className='text-left font-light text-sm md:text-xl mb-5 text-neutral-500'>Find Me Here</h3>
                    <div className='flex  flex-col-- md:flex-row flex-wrap space-x-5 space-y-2'>
                        {links.map((link) => {

                            return (
                                <div key={link.title} className='btn_shadow h-[60px] w-[60px] p-3 --border-2 bg-slate-200 hover:bg-blue-600 '>
                                <TooltipProvider >
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link  href={link.href} alt={link.title} >{link.icon}</Link>
                                        </TooltipTrigger>
                                        <TooltipContent className={"bg-white"}>
                                            <p className='py-1 px-2'>{link.title}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </div>
                            )
                        })}

                    </div>
                </section>
            </div>
        </>
    )
}

export default HeroSection