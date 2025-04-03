"use client"
import React from 'react'
import { Timeline } from "@/components/ui/timeline";
import { BackgroundGradient } from "@/components/ui/background-gradient";


function TimelineSection() {
    const data = [
        {
            title: "Present",
            content: (
                <GradientBox title={"📌 Freelance & Personal Projects"} body={
                    <UnOrderdList
                        dataArray={["Currently working on open-source contributions, upskilling in AI/ML, and building scalable software solutions.", "Actively contributing to tech communities and engaging with new technologies.", "Preparing for high-impact software engineering roles at top companies."
                        ]}
                    />
                }
                />
            ),
        },
        {
            title: "Oct 2023-April 2024",
            content: (
                <GradientBox title={"📌 Software Engineer (Remote)"} body={
                    <UnOrderdList
                        dataArray={[
                            "Promoted to Software Engineer at Truman, Via-Casia Brand.",
                            "Revamped website architecture by migrating from React.js to Next.js, boosting performance and SEO.",
                            "Developed an AI-powered bill upload system using AWS S3 and OpenAI API, automating data extraction.",
                            "Improved bill upload efficiency by implementing a PNG-to-JPEG conversion tool (reduced upload time from 20s to 3s).",
                            "Built a Past Activity Dashboard with search, filter, and pagination for better data access.",
                            "Integrated OAuth authentication for Instagram and LinkedIn, streamlining user data retrieval."
                          ]}
                    />
                }
                />
            ),
        },
        {
            title: " July 2023",
            content: (
                <GradientBox title={"📌 Intern Frontend Developer (Remote)"} body={
                    <UnOrderdList
                        dataArray={[
                            "Started a frontend internship at Truman, Via-Casia Brand.",
                            "Worked on a React.js and Next.js codebase, improving UI performance.",
                            "Optimized frontend workflows using Tailwind CSS, Redux Toolkit, and Material UI.",
                            "Fixed critical bugs to enhance application stability and user experience."
                          ]}
                    />
                }
                />
            ),
        },
        {
            title: "2019-2022",
            content: (
                <GradientBox title={"📌 Graduation"} body={
                    <UnOrderdList
                        dataArray={[
                            "🎓 B.Sc. (Hons.) in Computer Science – Babu Banarsi Das University, Lucknow",
                            "Built a strong foundation in data structures, algorithms, and software development.",
                            "Explored full-stack development, contributing to academic and personal projects."
                          ]}
                    />
                }
                />
            ),
        },

    ];

    return (
        <section id='TimelineSection'>
            <h1 className='heading-lg text-[#D2F220]'>TIMELINE</h1>
            <div className="w-full bg-transparent overflow-hidden">
                <Timeline data={data} />
            </div>
        </section>
    )
}

export default TimelineSection





function GradientBox(boxData) {
    return (
        <>
            <div className='w-full md:w-[550px]'>
                <BackgroundGradient className="rounded-[22px]  p-0   ">
                    <div className='text-left bg-zinc-900 rounded-[22px] border-2 border-slate-800  p-7' >
                        <h1 className='text-2xl font-bold text-neutral-700 '>{boxData.title}</h1>
                        <>{boxData.body}</>
                    </div>
                </BackgroundGradient>
            </div>
        </>
    )
}


function UnOrderdList({dataArray}) {
    console.log(typeof (dataArray))
    return (
        <ul className=' mt-2 text-neutral-500'>
            {dataArray.map((point,index) => <li key={index}>{point}</li>)}
        </ul>
    )
}

