"use client";
import * as React from "react";
import { anton, work_sans } from "@/styles/fonts";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";
import proven from "../../../../public/images/sponsors/uae/proven.png";
import takefluence from "../../../../public/images/sponsors/uae/takef.png";
import socialChameleon from "../../../../public/images/sponsors/uae/socialc.png";
import yalaYala from "../../../../public/images/sponsors/uae/yalayala.png";
import whoyer from "../../../../public/images/sponsors/uae/whoyer.png";
import proExpo from "../../../../public/images/sponsors/uae/proexpo.png";
import socialCash from "../../../../public/images/sponsors/uae/socialcash.png";
import Image from "next/image";

function Mainsponsors() {
  // Define data for sponsors
  const sponsors = [
    {
      title: "Event contracting partner",
      name: "Pro Expo",
      description:
        "Pro Expo Ltd, based in Kenya, specializes in creative exhibition and stand construction solutions for events and conferences. Since 2016, the company has delivered over 870,000 square meters of stands across 46 exhibitions, serving diverse sectors like health, technology, hospitality, and automotive. Renowned for its efficiency and high-quality service, Pro Expo offers customized event setups, branding, and AV equipment hire. With a strong track record of delivering major projects like Medic East Africa and China Trade Week, Pro Expo is a trusted partner for businesses across East Africa and beyond.",
      imageUrl: "/images/sponsors/uae/og/proexpo.png",
      logoUrl: proExpo,
      link: "https://www.pro-expo.co.ke/",
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
      className={`flex flex-col items-center sm:p-20 p-5 sm:pt-[250px] bg-white ${work_sans.className}`}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black leading-[130%] max-md:text-4xl ${anton.className} `}
      >
        OUR SPONSORS
      </motion.div>
      {/* <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 text-2xl font-medium tracking-tighter leading-[130%] text-center text-black max-md:mt-10 max-md:max-w-full"
      >
        We extend our sincere gratitude to our valued sponsors for their
        <br />
        support and contribution towards the success of the event.
      </motion.div> */}
      <div className="self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-[2%] gap-y-14 flex-wrap  max-md:flex-col max-md:gap-0">
          {/* Map over sponsors array and render sponsor cards dynamically */}
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-wrap w-[32%] max-md:ml-0 max-md:w-full"
            >
              <div
                className="flex flex-col grow pb-11 w-full text-2xl tracking-tighter 
              group
               leading-[130%] text-white bg-black rounded-[36px] max-md:mt-6"
              >
                <div className="overflow-hidden rounded-t-[36px]">
                  <img
                    loading="lazy"
                    src={sponsor.imageUrl}
                    className="w-full aspect-[2.38] group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
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
                  <div className="mt-6 text-sm tracking-tight leading-[130%]">
                    {sponsor.description}
                  </div>
                  <a href={sponsor.link} target="_blank" rel="noreferrer">
                    {sponsor.special ? (
                      <img
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        className="mt-14 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                      />
                    ) : (
                      <Image
                        loading="lazy"
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        className="mt-14 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                      />
                    )}
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mainsponsors;
