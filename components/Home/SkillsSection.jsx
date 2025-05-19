"use client"
import React from 'react'
import Image from 'next/image';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"



function SkillsSection() {
    const FrontendDevIcons = {
        title: "Frontend Development",
        icons: [
            { name: "JavaScript", src: "/picture/skill_icons/js.webp" },
            { name: "HTML", src: "/picture/skill_icons/html.webp" },
            { name: "CSS", src: "/picture/skill_icons/css.webp" },
            { name: "ReactJs", src: "/picture/skill_icons/reactJs.webp" },
            { name: "TailwindCSS", src: "/picture/skill_icons/tailwindcss.svg" },
            { name: "NextJs", src: "/picture/skill_icons/nextjs.svg" },
            { name: "Redux Toolkit", src: "/picture/skill_icons/redux.webp" },
        ]
    }
    const BackendDevIcons = {
        title: "Backend Development",
        icons: [
            { name: "NodeJs", src: "/picture/skill_icons/node.webp" },
            { name: "ExpressJs", src: "/picture/skill_icons/express.webp" },
            { name: "Postman", src: "/picture/skill_icons/postman.webp" },

        ]
    }
    const DB_Icons = {
        title: "Database",
        icons: [
            { name: "MongoDB", src: "/picture/skill_icons/mongo.webp" },
            { name: "SQL", src: "/picture/skill_icons/sql.webp" },
        ]
    }
    const OtherToolsIcons = {
        title: "Other Tools",
        icons: [
            { name: "Git", src: "/picture/skill_icons/git.webp" },
            { name: "Figma", src: "/picture/skill_icons/figma.webp" },
            { name: "AceternityUI", src: "/picture/skill_icons/AceternityUI.png" },
            { name: "MaterialUI", src: "/picture/skill_icons/material-ui-1.svg" },
            // { name: "ShadcnUI", src: "/picture/skill_icons/shadcnUI.svg" },
        ]
    }


    const iconArrays = [FrontendDevIcons, BackendDevIcons, DB_Icons, OtherToolsIcons]
    return (
        <>
            <section id='SkillsSection' className='px-[10%] pb-16 pt'>
                <h1 className='heading-lg text-[#D2F220] mb-11'>MY SKILLS</h1>
                <p className='text-xl text-left my-7 text-neutral-600'>I like to take responsibility to craft good user experiences using my skills</p>
                {
                    iconArrays.map((item, index) => {
                        return <div key={index} className='mb-7 '>
                            <h2 className='text-lg text-left mb-3'>{item.title}</h2>
                            <div className='flex flex-wrap gap-6'>
                                {
                                    item.icons.map((iconData, index) => {
                                        return <div height={80}
                                            width={80} key={index}> <TooltipProvider >
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Image

                                                            src={iconData.src}
                                                            alt={iconData.name}
                                                            height={80}
                                                            width={80}
                                                            className='bg-neutral-200 rounded-2xl p-2'
                                                        />
                                                    </TooltipTrigger>
                                                    <TooltipContent className={"bg-white"}>
                                                        <p className='py-1 px-2'>{iconData.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider></div>
                                    })}
                            </div>
                        </div>
                    })
                }


            </section ></>
    )
}

export default SkillsSection