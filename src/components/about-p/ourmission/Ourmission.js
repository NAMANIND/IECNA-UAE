"use client";

import * as React from "react";
import Marquee from "react-fast-marquee";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";

function Ourmisson() {
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
    <section className="flex flex-col items-center  text-center text-black bg-white pt-44">
      <motion.h1
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.1 }}
        className={`text-5xl leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        OUR MISSION
      </motion.h1>
      <motion.p
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.1 }}
        className={`mt-20 px-60 text-2xl font-medium tracking-tighter leading-8 max-md:mt-10 max-md:max-w-full ${work_sans.className} `}
      >
        At Influence Exchange Confex and Awards, we are dedicated to fostering
        connections, inspiring creativity, and acknowledging the efforts of
        influencers and marketers who are leading transformative initiatives
        across various sectors.
      </motion.p>

      <div
        className="overflow-hidden h-[500px]
      relative z-10
      py-20
     
      "
      >
        <div
          style={{ transform: "rotate(-5deg)" }} // Rotate the text by -5 degrees
          className="w-[120%] bg-black relative  left-[-10%] "
        >
          <Marquee
            gradient={false}
            speed={50}
            className="self-stretch mt-32  shadow-2xl min-h-[99px] max-md:mt-10 "
            autoFill
          >
            <h2
              className={`text-5xl text-center text-[#ccff00] ${anton.className} `}
            >
              DUBAI * RIYADH * MUMBAI * DUBAI * RIYADH * MUMBAI * DUBAI * RIYADH
              * MUMBAI * DUBAI *
            </h2>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Ourmisson;
