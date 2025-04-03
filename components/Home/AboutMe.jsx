"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AboutMe() {
    return (
        <>
            <section id='AboutMe' className='flex w-full flex-col mb-20 mt-12'>
                <h1 className='heading-lg text-[#D2F220] text-center mb-5 md:mb-3 '> ABOUT ME</h1>
                <div className='flex w-full flex-col md:flex-row gap-y-6  items-center justify-between px-[4%] md:px-[10%]'>
                    <div className='h-[150px] w-[200px] bg-transparent md:h-[300px] md:w-[300px] font-bold rounded-lg font-mono overflow-hidden flex items-center shadow-2xl shadow-slate-700'>
                        <Image
                            src="/picture/Profile_Photo.jpg" // Replace with your image path
                            alt="Profile"
                            width={500} // Adjust width
                            height={500} // Adjust height
                            className="-z-0"
                        /></div>
                    <div className=" w-full text-left max-w-3xl p-2 md:p-6">
                        <h2 className="subheading text-gray-700 mb-4">
                            🚀 Building Scalable, Intelligent, and Future-Ready Software
                        </h2>
                        <p className="text-gray-500 leading-relaxed">
                            I am <strong>Aditya Pandey</strong>, a <strong>Full-Stack Developer</strong> passionate about crafting high-performance applications that blend innovation, efficiency, and seamless user experiences. My expertise lies in <strong>React.js, Next.js, Node.js, and scalable architectures</strong>, allowing me to build cutting-edge solutions that push technological boundaries.
                            <br /><br />
                            With a deep understanding of frontend and backend ecosystems, I have successfully migrated applications to Next.js, optimized website performance, and integrated AI-powered solutions. From enhancing UI/UX to automating workflows using OpenAI, I thrive on solving complex challenges with precision and creativity.
                            <br /><br />
                            Beyond coding, I am constantly learning, exploring AI, finance tech, and robotics, and refining my problem-solving skills. My goal is to build intelligent, scalable systems that redefine user experiences and drive impact.
                            <br /><br />
                            🚀 <strong>Eager to bring my skills to your team?</strong> <Link href="#contact" className="text-blue-600 font-semibold hover:underline">Let’s connect</Link> and explore how we can achieve greatness together!
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutMe