"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import ok from "../../../../public/ok.jpg";
import got from "../../../../public/images/mainok.png";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";

function Ig() {
  const [isMobileView, setIsMobileView] = useState(false);

  const offscreen = {
    x: -50,
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
      className={`  items-end   text-2xl text-right sm:overflow-visible overflow-hidden  relative -top-14 align-middle font-bold  ${work_sans.className} `}
    >
      <div
        className="flex md:flex-row  flex-col md:pr-8 pr-2 align-middle  sm:bg-center bg-bottom "
        style={{
          backgroundImage:
            "linear-gradient(90deg, #00A4F1 0.41%, #00A4F1 34.07%, #9B75EC 64.85%, #9B75EC 96.58%)",
          backgroundSize: "100% 250px",
          backgroundRepeat: "no-repeat", // Ensure it doesn't repeat
          alignItems: "center",
        }}
      >
        <div
          className=" absolute h-[250px] w-[80%] sm:flex hidden    right-0 md:flex-row  z-40 flex-col md:pr-8 pr-2 align-middle justify-end  sm:bg-center bg-bottom "
          style={{
            backgroundImage:
              "linear-gradient(90deg, #00A4F1 0.41%,#9B75EC 34.07%, #9B75EC 64.85%, #9B75EC 96.58%)",
            backgroundSize: "100% 250px",
            backgroundRepeat: "no-repeat", // Ensure it doesn't repeat
            alignItems: "center",
          }}
        >
          <div className="md:mt-0 mt-5 w-full flex flex-row-reverse justify-between  ">
            <div className="w-1/2 ">
              <h1 className="leading-7 text-black uppercase   sm:text-4xl text-lg sm:mb-0 mb-4 max-md:max-w-full  font-bold">
                The D-day for Brands and Marketing Tech in the World of
                Influencer Marketing is here!
              </h1>
            </div>
            <div>
              <time
                className={`mt-7 text-7xl text-white leading-[90px] w-full max-md:text-4xl ${anton.className}`}
                dateTime="2025-07-12"
              >
                20<sup className="text-white ">th</sup> SEPT 2025
              </time>
              <p className="mt-1 text-[#ccff00] uppercase text-7xl text-left leading-[117%]  sm:mb-0 mb-4  font-bold">
                Dubai
              </p>
            </div>
          </div>
        </div>
        <motion.div
          initial={offscreen}
          whileInView={onscreen}
          viewport={{ once: true, amount: 0.3 }}
          className="relative sm:top-auto top-10 sm:left-20 left-0"
        >
          <Image
            src={got}
            alt="Igate"
            width="auto"
            height="auto"
            className=" scl "
            style={{
              transform: "rotate(-3deg)",
              scale: "0.75",
            }}
          />
        </motion.div>
        <div className="md:mt-0 mt-5">
          <h1 className="leading-7 text-black uppercase  sm:text-2xl text-lg sm:mb-0 mb-4 max-md:max-w-full  font-bold">
            The D-day for Brands and Marketing Tech in the World of Influencer
            Marketing is here!
          </h1>
          <time
            className={`mt-7 text-5xl text-white leading-[90px]  max-md:text-4xl ${anton.className}`}
            dateTime="2024-07-12"
          >
            20<sup className="text-white ">th</sup> SEPTEMBER 2025
          </time>
          <p className="mt-5 text-[#ccff00] uppercase leading-[117%]  sm:mb-0 mb-4  font-bold">
            Dubai
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ig;
