"use client";
import * as React from "react";
import Button from "@/components/button/Button";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import img2 from "../../../../public/images/home/dv1.jpg";
import Image from "next/image";

function Venue() {
  const offscreen = {
    y: 100,
    opacity: 0,
  };
  const onscreen = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.1,
      duration: 0.41,
    },
  };

  const offscreen2 = {
    y: 100,
  };
  const onscreen2 = {
    y: 0,

    transition: {
      delay: 0.2,
      duration: 0.41,
    },
  };
  const maskImageStyle = {
    maskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
  };

  return (
    <div
      className={`flex w-full flex-col  md:px-20 px-0 max-md:gap-0 bg-white  max-h-fit  ${anton.className} `}
    >
      <div className="text-9xl relative top-20 -z-1 text-black w-full uppercase  max-md:max-w-full max-md:text-4xl ">
        <Marquee
          gradient={false}
          speed={40}
          className={` z-10 md:text-9xl text-7xl w-full ${work_sans.className} font-bold absolute top-12 `}
          autoFill={true}
          style={{ height: "300px", ...maskImageStyle }}
        >
          <h1>&nbsp; venue</h1>
        </Marquee>
      </div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`flex w-full sm:flex-row flex-col md:px-0 px-5 overflow-hidden max-md:gap-0 bg-white max-h-fit  ${anton.className} `}
      >
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col  font-bold max-md:mt-10 max-md:max-w-full">
            <div
              className={`mt-20 text-6xl tracking-tighter text-blue-400 uppercase leading-[56px] max-md:mt-10 max-md:max-w-full max-md:text-4xl  ${work_sans.className}  `}
            >
              WE WILL BE WAITING FOR YOU!
            </div>
            <div className="flex flex-col px-16 py-8 mt-8 text-5xl  md:rounded-l-[40px]  bg-black text-[#ccff00] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <div
                className={`tracking-tighter leading-[117%] max-md:text-4xl ${work_sans.className}`}
              >
                SAVE THE DATE
              </div>
              <div className="my-5 text-7xl text-white  leading-[120px] max-md:mt-10 max-md:text-4xl">
                <span className="text-white ">20</span>
                <sup className="text-white ">th</sup>
                <span className="text-white "> SEPTEMBER 2024</span>
              </div>
              <div
                className={`mt-0 tracking-tighter leading-[56px] max-md:mt-10 max-md:text-4xl max-md:leading-[52px] ${work_sans.className}`}
              >
                VENUE
                <br />
                DUBAI
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={offscreen2}
          whileInView={onscreen2}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full relative z-10   max-md:mt-3"
        >
          <div className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-14 text-center uppercase  max-md:px-5 max-md:mt-10 max-md:max-w-full rounded-t-[40px] sm:bg-gradient-to-l bg-white from-white via-white to-black rotate-60 ">
            <Image
              loading="lazy"
              src={img2}
              className="object-cover absolute inset-0 w-full h-full rounded-[40px]    "
            />
            <div className="relative bottom-0 left-0 flex w-full sm:flex-col flex-col items-center gap-4  text-lg text-white sm:h-full sm:justify-between md:gap-0">
              <div className="text-6xl text-white leading-[120px] max-md:text-4xl">
                Don't Miss Out!
              </div>
              <div
                className="sm:scale-100 scale-75 
              
              "
              >
                <Button href="./register" color="green" img="arrow">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Venue;
