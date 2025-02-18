"use client";
import * as React from "react";
import { anton, work_sans } from "@/styles/fonts";
import Marquee from "react-fast-marquee";
import Button from "@/components/button/Button";
import img from "../../../../public/images/home/dv2.jpg";
import Image from "next/image";

import { motion } from "framer-motion";

function RegisterNowButton() {
  return (
    <button
      className={`relative justify-center items-center px-16 py-5 mt-72 max-w-full bg-lime-400 shadow-2xl rounded-[40px] w-[314px] max-md:px-5 max-md:mt-10 ${work_sans.className} `}
    >
      Register Now
    </button>
  );
}

function EventDetails() {
  return (
    <>
      <p className={`text-md   text-white font-light   ${work_sans.className}`}>
        Influence Exchange Confex & Awards Series 2025 will take place at a
        prestigious venue in Dubai, providing a luxurious and conducive
        environment for networking, learning, and collaboration. Stay tuned for
        more details on the venue, and get ready to experience an event like no
        other in the heart of Dubai's vibrant landscape.
      </p>
      <div
        className={`flex flex-col pl-14 mt-14 max-md:pl-5  max-md:mt-10 max-md:max-w-full ${anton.className}  `}
      >
        <time className=" text-7xl text-white max-md:text-4xl">
          <span className="text-white">10</span>
          <sup>
            <span className="text-white">th</span>
          </sup>
          <span className="text-white"> SEPTEMBER 2025</span>
        </time>

        <div
          className={`self-end sm:mt-12 my-5 text-5xl uppercase  font-bold  text-[#ccff00] tracking-tighter	 leading-[130%] w-[282px]  max-md:text-4xl max-md:leading-[130%] ${work_sans.className}  `}
        >
          VENUE
          <br />
          Dubai
        </div>
      </div>
    </>
  );
}

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
    x: -100,
    opacity: 0,
  };
  const onscreen2 = {
    x: 0,
    opacity: 1,

    transition: {
      delay: 0.2,
      duration: 0.41,
    },
  };
  return (
    <div className="flex flex-col items-center bg-white">
      <div
        className="overflow-hidden sm:h-[400px] h-[200px]
      relative z-10

     mt-20
      "
      >
        <div
          style={{ transform: "rotate(2deg)" }} // Rotate the text by -5 degrees
          className="w-[120%] bg-black relative  left-[-10%] "
        >
          <Marquee
            gradient={false}
            speed={50}
            className="self-stretch mt-32  shadow-2xl min-h-[59px] max-md:mt-10 group"
            autoFill
            pauseOnHover
          >
            <h2
              className={`text-4xl text-center text-white group-hover:text-[#ccff00]  ${anton.className} `}
            >
              &nbsp; REGISTER - REGISTER - REGISTER - REGISTER - REGISTER -
              REGISTER - REGISTER - REGISTER -
            </h2>
          </Marquee>
        </div>
      </div>

      <div className={`w-full bg-white ${work_sans.className}  sm:p-20 p-5 `}>
        <motion.h1
          initial={offscreen}
          whileInView={onscreen}
          viewport={{ once: true, amount: 0.3 }}
          className={`uppercase text-5xl  text-center text-black leading-[130%] max-md:text-4xl max-md:leading-[130%] max-md:max-w-full max-md:mt-10 max-md:mb-5 mb-10 ${anton.className} `}
        >
          Venue
        </motion.h1>

        <motion.div
          initial={offscreen}
          whileInView={onscreen}
          viewport={{ once: true, amount: 0.3 }}
          className="flex gap-5 my-20 max-md:flex-col bg-black rounded-[36px]    max-md:gap-0"
        >
          <motion.div
            initial={offscreen2}
            whileInView={onscreen2}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full"
          >
            <div className="flex overflow-hidden relative flex-col grow items-center px-16 pt-20 pb-12 text-2xl font-semibold text-center text-black uppercaseleading-[130%] min-h-[460px]  max-md:mt-0 max-md:max-w-full rounded-[36px] ">
              <Image
                loading="lazy"
                src={img}
                className="object-cover absolute inset-0 size-full rounded-[36px] "
                alt=""
              />
              {/* <RegisterNowButton /> */}
              <div
                className={`sm:relative absolute bottom-0 px-16 justify-center items-center  sm:py-5 py-0 sm:mt-72 sm:max-w-full   shadow-2xl  max-md:px-5 max-md:mt-10 ${work_sans.className} `}
              >
                <Button color="green" href="./register" img="arrow">
                  Register
                </Button>
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col mr-10 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto font-bold text-right max-md:mt-10 max-md:max-w-full">
              <h2 className="text-3xl py-5 tracking-tighter text-[#ccff00] uppercase leading-[130%] max-md:max-w-full">
                We will be waiting for you, HERE!
              </h2>
              <EventDetails />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Venue;
