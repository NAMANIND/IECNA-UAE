"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import ok from "../../../../public/ok.jpg";
import got from "../../../../public/images/got.png";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";

function Ig() {
  const [isMobileView, setIsMobileView] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobileView(window.innerWidth <= 768); // Adjust breakpoint as needed
  //   };

  //   handleResize(); // Call once on mount to set initial value
  //   window.addEventListener("resize", handleResize); // Add event listener for window resize

  //   return () => {
  //     window.removeEventListener("resize", handleResize); // Clean up on unmount
  //   };
  // }, []);
  const offscreen = {
    x: -100,
    opacity: 0,
  };
  const onscreen = {
    x: 0,
    opacity: 1,

    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  };
  return (
    <section
      className={`  items-end   text-2xl text-right max-md:px-5 relative bg-white   pt-[120px] align-middle font-bold  ${work_sans.className} `}
    >
      <div
        className="flex md:flex-row  flex-col md:pr-8 pr-2 align-middle "
        style={{
          backgroundImage:
            "linear-gradient(90deg, #00A4F1 0.41%, #51B6FF 34.07%, #A098DF 64.85%, #9B75EC 96.58%)",
          backgroundSize: isMobileView ? "cover" : "100% 300px", // Different background sizes for mobile and desktop
          backgroundPositionY: "center", // Default background position
          backgroundRepeat: "no-repeat", // Ensure it doesn't repeat
          alignItems: "center",
        }}
      >
        <motion.div
          initial={offscreen}
          whileInView={onscreen}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={got}
            alt="Igate"
            width={1000}
            height="auto"
            style={{
              boxShadow: "0 20px 60px 0 rgba(0, 0, 0, 0.25)",
              transform: "rotate(-5deg)",
            }}
          />
        </motion.div>
        <div className="md:mt-0 mt-5">
          <h1 className="leading-7 text-black uppercase max-md:max-w-full  font-bold">
            The D-day for Brands and Marketing Tech in the World of Influencer
            Marketing is here!
          </h1>
          <time
            className={`mt-7 text-5xl text-white leading-[90px] max-md:text-4xl ${anton.className}`}
            dateTime="2024-07-12"
          >
            12<span className="text-white">TH</span> JULY 2024
          </time>
          <p className="mt-5 text-[#ccff00] uppercase leading-[117%]  font-bold">
            MUMBAI
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ig;
