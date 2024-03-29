"use client";
import * as React from "react";
import { anton, work_sans } from "@/styles/fonts";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";

function Oursponsor() {
  // Define data for sponsors
  const sponsors = [
    {
      title: "TITLE SPONSOR",
      name: "Insta Chef",
      description:
        "The platform provides brand awareness across various channels like web search engines, content and email marketing and provides measurable and transparent results.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2177b778065eb53456e9aae35c54027c06ae1da4769bc4ccee832d4b516451f3?apiKey=5e27b1defd60460eaa6dca842133145f&",
      logoUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8eb572c6bcb2e9d6d96173aae0cd6f58203c9b71b657ca18ae0ff64ac9201e72?apiKey=5e27b1def  d60460eaa6dca842133145f&",
    },
    {
      title: "PRESENTING PARTNER",
      name: "Fly Bharathi",
      description:
        "The platform provides brand awareness across various channels like web search engines, content and email marketing and provides measurable and transparent results.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/33fb82163e184dc6552b9979bad2416cc4c21439f2e7c743300ba914b5848db5?apiKey=5e27b1defd60460eaa6dca842133145f&",
      logoUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8eb572c6bcb2e9d6d96173aae0cd6f58203c9b71b657ca18ae0ff64ac9201e72?apiKey=5e27b1def  d60460eaa6dca842133145f&",
    },
    {
      title: "DATA ANALYTICS PARTNER",
      name: "Views",
      description:
        "The platform provides brand awareness across various channels like web search engines, content and email marketing and provides measurable and transparent results.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/08f747f6e806c82cd97edd553d7e8d1d09cf3c52ce4db0accfa46dc521bc396b?apiKey=5e27b1defd60460eaa6dca842133145f&",
      logoUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8eb572c6bcb2e9d6d96173aae0cd6f58203c9b71b657ca18ae0ff64ac9201e72?apiKey=5e27b1def  d60460eaa6dca842133145f&",
    },
  ];

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
      className={`flex flex-col items-center p-10 pt-[250px] bg-white ${work_sans.className}`}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        OUR SPONSORS
      </motion.div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 text-2xl font-medium tracking-tighter leading-8 text-center text-black max-md:mt-10 max-md:max-w-full"
      >
        We extend our sincere gratitude to our valued sponsors for their
        <br />
        support and contribution towards the success of the event.
      </motion.div>
      <div className="self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-[3%] max-md:flex-col  max-md:gap-0">
          {/* Map over sponsors array and render sponsor cards dynamically */}
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-wrap w-[32%] max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col grow pb-11 w-full text-2xl tracking-tighter leading-6 text-white bg-black rounded-[36px] max-md:mt-6">
                <img
                  loading="lazy"
                  src={sponsor.imageUrl}
                  className="w-full aspect-[2.38]"
                />
                <motion.div
                  initial={offscreen}
                  whileInView={onscreen}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-col px-11 mt-7 max-md:px-5"
                >
                  <div className="self-center font-medium text-center">
                    {sponsor.title}
                  </div>
                  <div className="mt-9 font-bold text-[#ccff00]">
                    {sponsor.name}
                  </div>
                  <div className="mt-6 text-sm tracking-tight leading-5">
                    {sponsor.description}
                  </div>
                  <img
                    loading="lazy"
                    src={sponsor.logoUrl}
                    className="mt-14 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20">
        <Button href="./sponsors" color="black">
          Become a Sponsor
        </Button>
      </div>
    </div>
  );
}

export default Oursponsor;
