"use client";
import React from "react";
import Image from "next/image";
import ok from "../../../../public/ok.jpg";
import ppl from "../../../../public/images/ppl.png";
import { anton } from "@/styles/fonts";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

function Influncers() {
  return (
    <div className={`pt-40 bg-black ${anton.className} `}>
      <motion.h1
        initial={{ top: "5rem" }}
        whileInView={{ top: "1.25rem" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-7xl text-center uppercase leading-[89.7px] text-white text-opacity-90 max-md:text-4xl relative top-5 z-0 "
      >
        The Forces of Influence are with you!
      </motion.h1>
      <Image
        style={{
          boxShadow: "0 -22px 70px 0 rgba(0, 0, 0, 0.7)",
        }}
        loading="lazy"
        src={ppl}
        alt="Hero image"
        className=" shadow-2xl w-full rounded-t-[200px] bg-cover bg-no-repeat bg-lightgray relative z-10"
        height="auto"
      />
      <Marquee
        pauseOnHover
        direction="right"
        gradient={false}
        speed={40}
        className=" z-10  text-[36px] w-full text-white "
        autoFill={true}
        style={{ height: "80px" }}
      >
        &nbsp; DUBAI * RIYADH * MUMBAI *
      </Marquee>
      <Marquee
        pauseOnHover
        direction="left"
        gradient={false}
        speed={40}
        className=" z-10  text-[36px] w-full  "
        autoFill={true}
        style={{ height: "80px", color: "#CCFF00" }}
      >
        &nbsp; REGISTER - REGISTER - REGISTER - REGISTER - REGISTER - REGISTER -
        REGISTER -
      </Marquee>
    </div>
  );
}

export default Influncers;
