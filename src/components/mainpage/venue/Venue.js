"use client";
import * as React from "react";
import Button from "@/components/button/Button";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";

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
  return (
    <div
      className={`flex w-full max-md:flex-col pt-[200px] px-10 max-md:gap-0 bg-white max-h-fit  ${anton.className} `}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.1 }}
        className={`flex w-full max-md:flex-col px-10 max-md:gap-0 bg-white max-h-fit  ${anton.className} `}
      >
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col  font-bold max-md:mt-10 max-md:max-w-full">
            <div className="text-7xl text-black uppercase leading-[120px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
              Venue
              <br />
            </div>
            <div
              className={`mt-12 text-6xl tracking-tighter text-blue-400 uppercase leading-[56px] max-md:mt-10 max-md:max-w-full max-md:text-4xl  ${work_sans.className}  `}
            >
              WE WILL BE WAITING FOR YOU!
            </div>
            <div className="flex flex-col p-16 mt-8 text-5xl  rounded-l-[40px] bg-black text-[#ccff00] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <div
                className={`tracking-tighter leading-[117%] max-md:text-4xl ${work_sans.className}`}
              >
                SAVE THE DATE
              </div>
              <div className="mt-20 text-7xl text-white leading-[120px] max-md:mt-10 max-md:text-4xl">
                <span className="text-white ">12</span>
                <span className="text-white ">th</span>
                <span className="text-white "> JUL 2024</span>
              </div>
              <div
                className={`mt-20 tracking-tighter leading-[56px] max-md:mt-10 max-md:text-4xl max-md:leading-[52px] ${work_sans.className}`}
              >
                VENUE
                <br />
                MUMBAI
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full  max-md:mt-3">
          <div
            className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-14 text-center uppercase  max-md:px-5 max-md:mt-10 max-md:max-w-full "
            style={{
              backgroundImage: "linear-gradient(221deg, #fff 80%, #000 20%)",
            }}
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/927df31f3a6db88ae4468b2806d1762f1ec57b14708866f7702a24ff4b6348e7?apiKey=5e27b1defd60460eaa6dca842133145f&"
              className="object-cover absolute inset-0 w-full h-full rounded-[40px]  "
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
        </div>
      </motion.div>
    </div>
  );
}

export default Venue;
