"use client"
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import Image from 'next/image';
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
// import Lottie from 'lottie-react';
import { CardSpotlight } from "@/components/ui/card-spotlight";
import * as animation6 from '@/public/lottieeJSON/anim6.json';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";



function ContactMe() {

  const animation6DataClone = JSON.parse(JSON.stringify(animation6));
  const styleLottie = {
    height: "100%",
    width: "100%",
    backgroundSize: "cover"
  }
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    setLoading(true);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ fullname: "", email: "", message: "" }); // Reset form
      } else {
        throw new Error(result.message);
      }
      setLoading(false)
    } catch (error) {
      setStatus("Failed to submit. Try again!");
      setLoading(false)
    }
  };

  return (
    <section id='ContactMe'>

      {/* <div className='flex items-center justify-center flex-col'>
                <div className='text-white text-xl font-mono font-medium my-10 m'>Click on Rocket to Move Upward!</div>


                <Lottie onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }} className='transform rotate-[318deg] flex items-center justify-center cursor-pointer' animationData={animation6DataClone} style={styleLottie} />
            </div> */}

        <h1 className='heading-lg text-[#D2F220] mb-12'>CONTACT ME</h1>
      <div className='flex flex-col md:flex-row justify-between items-center px-[6%] space-y-4 md:px-[10%]'>

        <CardSpotlight className="h-[600px] md:w-[450px] rounded-lg p-5">
          <Image
            src="/picture/handshake.png" // Replace with your image path
            alt="Profile"
            width={440} // Adjust width
            height={450} // Adjust height
            className="relative z-20 mt- text-white rounded-lg shadow-xl shadow-slate-800"
          />
          <p className="text-3xl font-bold relative z-20 mt-2 text-white text-left px-2">
            Get In Touch!
          </p>
          <div className="text-neutral-200 mt-3 text-left relative z-20 px-2">
            <p>
              I am available for full-time roles in Software Development. If you have a project or opportunity that aligns with my skill set, or if you just want to connect, feel free to reach out using the details below.
            </p>
            <ul className='space-y-1 my-2'>
              {/* <li>📞 Phone: [Your Phone Number]</li> */}
              <li>📧 Email: adityapandeyp1234@gmail.com</li>
              {/* <li>📍 Address: Noida, Uttar Pradesh, India</li> */}
            </ul>

            Let's build something amazing together! 🚀
          </div>
          <div className="text-neutral-300 mt-4 relative z-20 text-sm">
          </div>
        </CardSpotlight>

        <section className='w-full md:w-[450px] bg-black rounded-lg p-5 text-white '>
          <form className="my-8" onSubmit={handleSubmit}>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="fullname" className="text-white text-left">Your Name</Label>
              <Input id="fullname" placeholder="Jhon Doe" type="text"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email" className="text-white text-left">Email Address</Label>
              <Input id="email" placeholder="projectmayhem@fc.com" type="email"
                value={formData.email}
                onChange={handleChange}
                required />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="message" className="text-white text-left">Your Message</Label>
              <Input
                id="message"
                placeholder="Type here"
                type="text"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </LabelInputContainer>

            <button
              className="group/btn relative  h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] text-center flex items-center justify-center cursor-pointer "
              type="submit"
            >
              {loading ? (
          <>

            <Image alt='Loading...' src={"/picture/buttonLoader.svg"} width={20} height={20}
            className='text-center text-white'
            />
          </>
        ) : (
          <>Submit &rarr;</>
        )}
              <BottomGradient />
            </button>

            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
          </form>
        </section>

      </div>

      <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      <div className='text-center text-white pb-12'>
      &copy; 2025, Designed and Developed by Aditya Pandey with love ❤️.
      </div>

    </section>
  )
}

export default ContactMe


const Step = ({ title }) => {

  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};



const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};