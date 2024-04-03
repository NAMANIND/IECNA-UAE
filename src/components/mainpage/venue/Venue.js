"use client";
import * as React from "react";
import Button from "@/components/button/Button";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import img2 from "../../../../public/images/Intersect2.png";

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
      className={`flex w-full flex-col  md:px-20 px-0 max-md:gap-0 bg-white max-h-fit  ${anton.className} `}
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
        className={`flex w-full flex-row md:px-0 px-5 overflow-hidden max-md:gap-0 bg-white max-h-fit  ${anton.className} `}
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
              <div className="my-5 text-7xl text-white leading-[120px] max-md:mt-10 max-md:text-4xl">
                <span className="text-white ">12</span>
                <sup className="text-white ">th</sup>
                <span className="text-white "> JULY 2024</span>
              </div>
              <div
                className={`mt-0 tracking-tighter leading-[56px] max-md:mt-10 max-md:text-4xl max-md:leading-[52px] ${work_sans.className}`}
              >
                VENUE
                <br />
                MUMBAI
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
          <div
            className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-14 text-center uppercase  max-md:px-5 max-md:mt-10 max-md:max-w-full rounded-t-[40px]  "
            style={{
              backgroundImage: "linear-gradient(221deg, #fff 80%, #000 20%)",
            }}
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/927df31f3a6db88ae4468b2806d1762f1ec57b14708866f7702a24ff4b6348e7?apiKey=5e27b1defd60460eaa6dca842133145f&"
              className="object-cover absolute inset-0 w-full h-full rounded-[40px]    "
            />
            <div className="flex relative justify-between flex-col max-w-full w-full h-full">
              <div className="text-6xl text-white leading-[120px] max-md:text-4xl">
                Don't Miss Out!
              </div>
              <div className="flex justify-center w-full self-start  text-lg font-semibold tracking-tighter leading-[90px] rounded-[40px]">
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
