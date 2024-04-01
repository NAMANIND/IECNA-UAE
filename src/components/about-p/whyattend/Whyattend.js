"use client";
import * as React from "react";
import { useState } from "react";

import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import networking from "../../../../public/images/about/networking.jpg";
import insights from "../../../../public/images/about/insights.jpg";
import buiness from "../../../../public/images/about/business.jpg";
import exclusive from "../../../../public/images/about/exclusive.jpg";

function Whyattend() {
  const cardData = [
    {
      title: "Networking Opportunities",
      imageUrl: networking,
      text: "Connect with over 100 dynamic marketers and 100 key influencers, fostering valuable relationships and partnerships in influencer marketing.",
    },
    {
      title: "Cutting-Edge Insights",
      imageUrl: insights,
      text: "Gain access to top-notch insights and industry expertise from leading marketers, influencers, and technology contributors, staying ahead of the curve with innovative strategies and trends.",
    },
    {
      title: "Business Expansion",
      imageUrl: buiness,
      text: "Explore new business opportunities, expand your network, and collaborate with like-minded professionals, whether you're a brand seeking innovative strategies or an influencer looking to connect with brands.",
    },
    {
      title: "Exclusive Content",
      imageUrl: exclusive,
      text: "Immerse yourself in a curated program featuring keynote speeches, panel discussions, workshops, and networking sessions, ensuring every moment is packed with valuable content and meaningful interactions.",
    },
    // Add more card data objects here as needed
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      className={`flex flex-col items-center px-10 py-20 bg-white ${work_sans.className} `}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black uppercase leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        WHY ATTEND?
      </motion.div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="self-stretch mt-20 w-full text-4xl italic font-bold tracking-tighter leading-7 text-center text-black uppercase max-md:mt-10 max-md:max-w-full  "
      >
        <span className="font-semibold  italic">
          INDIA, WE ARE BRINGING TOGETHER OVER{" "}
        </span>
        <span className="font-semibold italic text-[#51B6FF]">
          100 MARKETERS
        </span>
        <span className="font-semibold italic"> AND </span>
        <span className="font-semibold italic text-[#51B6FF]">
          100 INFLUENCERS!
        </span>
      </motion.div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-11 text-2xl px-10 mb-28 font-medium tracking-tighter leading-8 text-center text-black max-md:mt-10 max-md:max-w-full"
      >
        Experience the future of marketing in the dynamic world of influencer
        marketing at the Influence
        <br /> Exchange & Awards Confex India 2024. Here are some reasons why
        you shouldn't miss this event:
      </motion.div>
      {/* Render each card dynamically */}
      <div className="self-stretch mt-2 w-full max-md:max-w-full">
        <div className="flex gap-y-5 px-[5%] gap-x-[6%] flex-wrap max-md:gap-0 ">
          {cardData.map((card, index) => (
            <motion.div
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className={`flex flex-grow flex-col w-[47%] max-md:ml-0 max-md:w-full my-[30px] px-[30px] ${
                hoveredIndex === index ? "hoveredaward" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-black w-full h-full rounded-[36px] py-[60px]">
                <div
                  className={`text-7xl textaward  text-white uppercase leading-[80px] max-md:mt-10 max-md:text-4xl max-md:leading-[49px] px-[40px] ${anton.className} break-words `}
                >
                  {card.title}
                </div>
                <div className="flex flex-col self-stretch my-auto text-xl font-medium leading-6 text-white max-md:mt-10 max-md:max-w-full">
                  <Image
                    loading="lazy"
                    src={card.imageUrl}
                    width={600}
                    height={300}
                    className="w-full aspect-[2.38] max-md:max-w-full rounded-[32px] relative scale-[1.12]  my-10 imgaward"
                  />
                  <div className="self-center mt-11 max-md:mt-10 px-[40px]">
                    {card.text}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whyattend;
