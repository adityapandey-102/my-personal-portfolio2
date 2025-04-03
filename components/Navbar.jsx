"use client"
import Link from 'next/link'
import React from 'react'



import {
  IconMenu2
} from "@tabler/icons-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


function Navbar() {
  const linkStyle2 = `relative --hover:font-bold font-semibold 
            before:content-[''] before:absolute before:left-0 before:bottom-0 
            before:w-0 before:h-[2px] before:bg-[#D2F220] 
            before:transition-all before:duration-300 before:ease-in-out 
            hover:before:w-full border-b-2 md:border-0 py-2 bg-neutral-900 px-5  `

            const linkStyle = `relative --hover:font-bold font-semibold 
            before:content-[''] before:absolute before:left-0 before:bottom-0 
            before:w-0 before:h-[2px] before:bg-[#D2F220] 
            before:transition-all before:duration-300 before:ease-in-out 
            hover:before:w-full border-b-2 md:border-0 pb-2`
  return (

      <>
             <div className="text-[#D2F220]  flex font  justify-between items-center font-mono py-6 px-5 md:px-16 AppGlassK fixed top-0 z-50 bg-[#D2F220] opacity-90 ">
             <div className='sm:text-xl md:text-4xl font-semibold'>
        <Link className='flex' href={"/"}><h1>DEVSPACE</h1></Link>
        </div>
         <div className='space-x-5 text-xl font-semibold hidden  md:flex '>
         <Link className={linkStyle} href={"#Home"}>HOME</Link>
              <Link className={linkStyle} href={"#AboutMe"} >ABOUT ME</Link>
              <Link className={linkStyle} href={"#SkillsSection"}>SKILLS</Link>
              <Link className={linkStyle} href={"#ProjectSection"}>PROJECTS</Link>
              <Link className={linkStyle} href={"#ContactMe"}>CONTACT</Link>
         </div>
         <Sheet>
           <SheetTrigger asChild>
               <IconMenu2 className="h-[30px] w-[30px] text-[#D2F220] dark:text-neutral-300 inline md:hidden" />
           </SheetTrigger>
           <SheetContent className="AppGlassN text-slate-300">
             <SheetHeader>
               <SheetTitle>Menu</SheetTitle>
               {/* <SheetDescription>
                 Make changes to your profile here. Click save when you're done.
               </SheetDescription> */}
             </SheetHeader>
             <div className='text-lg flex flex-col px-5 py-3 space-y-2  '>
             <Link className={linkStyle2} href={"#Home"}>HOME</Link>
              <Link className={linkStyle2} href={"#AboutMe"} >ABOUT ME</Link>
              <Link className={linkStyle2} href={"#SkillsSection"}>SKILLS</Link>
              <Link className={linkStyle2} href={"#ProjectSection"}>PROJECTS</Link>
              {/* <Link className={linkStyle2} href={"#"}>SERVICES</Link> */}
              <Link className={linkStyle2} href={"#ContactMe"}>CONTACT</Link>
             </div>
             <SheetFooter>
             </SheetFooter>
           </SheetContent>
         </Sheet>
 
 
 
       </div>
    </>
  )
}

export default Navbar