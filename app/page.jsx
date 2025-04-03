"use client"
import React from 'react'
// import Lottie from 'lottie-react'
// import { Typewriter } from 'react-simple-typewriter'
import dynamic from 'next/dynamic';
const Typewriter = dynamic(() => import("react-simple-typewriter").then(mod => mod.Typewriter || mod), { ssr: false });
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import * as animation4 from '../public/lottieeJSON/anim4.json';
import * as animation5 from '@/public/lottieeJSON/anim5.json';
import * as animation6 from '@/public/lottieeJSON/anim6.json';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Home/HeroSection';
import AboutMe from '@/components/Home/AboutMe';
import ContactMe from '@/components/Home/ContactMe';
import TimelineSection from '@/components/Home/TimelineSection';
import SkillsSection from '@/components/Home/SkillsSection';
import ProjectsSection from '@/components/Home/ProjectsSection';

function page() {

  // const options = {
  //     animationData: animation1,
  //     loop: true
  //   };



  const styleLottie = {
    height: "300px",
    width: "300px",
    backgroundSize: "cover"
  }
  const styleLottie2 = {
    height: "500px",
    width: "100%",
    backgroundSize: "cover"
  }
  const animation4DataClone = JSON.parse(JSON.stringify(animation4));
  const animation5DataClone = JSON.parse(JSON.stringify(animation5));


  return (
    <main id='#Home' className='bg-[#010228] text-white w-full'>
      <Navbar />
      <HeroSection id="contact"/>
      <div className='mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent ---my-6' />
      <AboutMe />
      <div id='page2' className="w-full  text-center bg-black bg-opacity-70 --backdrop-blur-lg pb-1">
        <div className='flex items-center justify-center'>
          <Lottie className='' animationData={animation4DataClone} style={{
            height: "600px",
            width: "600px",
            backgroundSize: "cover"
          }} />
        </div>
        <div className='heading-xl text-white'>
          <Typewriter
            words={["VIRTUAL HUB FOR REAL INNOVATION"]}
            loop={1}
            cursor
            cursorStyle="#"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></div>
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        <SkillsSection/>
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        <TimelineSection />
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        <ProjectsSection/>

      </div>

      <div id='page3' className="w-full text-center bg-[#010228] pb-1">
        <div className='flex flex-col md:flex-row items-center justify-between px-[0%] md:px-[10%]'>

          <div className='md:w-[500px] overflow-hidden'>
            <Lottie animationData={animation5DataClone} style={styleLottie2} />
            </div>
          <div className="md:w-[600px] h-[220px] text-3xl md:text-5xl font-mono font-medium text-left text-[#D2F220] px-[5%] md:px-[0%]">
            <Typewriter
              words={["We’re building next-level experiences beamed from tomorrow to blow minds today."]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <ContactMe />

      </div>

    </main>
  )
}

export default page