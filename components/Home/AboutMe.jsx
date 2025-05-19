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
                            I am <strong>Aditya Pandey</strong>, a <strong>Full-Stack & Cross-Platform Mobile App Developer</strong> passionate about crafting high-performance applications that blend innovation, efficiency, and seamless user experiences. I specialize in <strong>React.js, Next.js, Node.js, and Flutter</strong>, enabling me to build modern, scalable web and mobile solutions across platforms.
                            <br /><br />
                            With a deep understanding of both frontend and backend ecosystems, I've built e-commerce platforms, social media apps, and finance tools using clean architecture principles and modern UI/UX practices. I've migrated web apps to Next.js for improved SEO and performance, and developed cross-platform mobile apps in Flutter with integrated Firebase and advanced state management like Bloc and Cubit.
                            <br /><br />
                            From optimizing load times and automating workflows using OpenAI APIs, to implementing role-based authentication and data-driven dashboards, I thrive on solving complex problems with precision and creativity.
                            <br /><br />
                            Beyond coding, I’m constantly learning—exploring AI, finance tech, and robotics—while sharpening my problem-solving mindset. My mission is to create intelligent, scalable systems that elevate user experiences and drive real-world impact.
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