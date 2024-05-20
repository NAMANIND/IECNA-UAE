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
      title: "Networking\nOpportunities",
      imageUrl: networking,
      text: "The event provides a platform to connect with industry experts, influencers, marketers, and professionals from various sectors. Networking can lead to valuable partnerships, collaborations, and insights.",
    },
    {
      title: "Industry\nInsights",
      imageUrl: insights,
      text: "The conference features speakers and panel discussions on the latest trends, strategies, and innovations in influencer marketing, ad tech & mar tech. Attending these sessions can provide you with valuable industry insights and knowledge.",
    },
    {
      title: "Business\nOpportunities",
      imageUrl: buiness,
      text: "Discover potential business opportunities, partnerships, and collaborations with influencers or brands attending the event. It's a chance to explore new markets and expand your business network.",
    },
    {
      title: "Recognition\nand Awards",
      imageUrl: exclusive,
      text: "If your company or work in influencer marketing deserves recognition, participating in awards can offer visibility and credibility within the industry.",
    },
    {
      title: "Stay\nUpdated",
      imageUrl: exclusive,
      text: "Keep abreast of the latest tools, technologies, and platforms in the influencer marketing, ad tech & mar tech landscape. This knowledge can help you adapt and stay competitive in the evolving digital marketing ecosystem.",
    },
    {
      title: "Inspiration\nand Motivation",
      imageUrl: exclusive,
      text: "Conferences often inspire attendees with success stories, case studies, and motivational talks. This can ignite creativity and motivation within your own influencer marketing campaigns.",
    },
    {
      title: "Brand\nExposure",
      imageUrl: exclusive,
      text: "If you're a brand or agency, attending or sponsoring such an event can enhance your visibility and brand reputation within the influencer marketing community.",
    },
    {
      title: "International\nPerspective",
      imageUrl: exclusive,
      text: "Dubai attracts a diverse international audience. Engaging with attendees from different countries and cultures can provide a broader perspective on influencer marketing strategies and practices worldwide.",
    },
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
      className={`flex flex-col items-center sm:px-10 px-5 sm:py-20 py-5 bg-white ${work_sans.className} `}
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
        className="self-stretch mt-20 w-full sm:text-4xl text-xl italic font-bold tracking-tighter leading-7 text-center text-black uppercase max-md:mt-10 max-md:max-w-full  "
      >
        <span className="font-semibold  italic">
          DUBAI We are back with The Influencer Exchange Confex & Awards Series
          2.0
          <br /> WE ARE BRINGING TOGETHER OVER{" "}
        </span>
        <span className="font-semibold italic text-[#51B6FF]">
          100+ Marketers
        </span>
        <span className="font-semibold italic"> & </span>
        <span className="font-semibold italic text-[#51B6FF]">
          100+ Influencers!
        </span>
      </motion.div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-11 text-2xl sm:px-10 px-0 mb-28 font-medium tracking-tighter leading-8 text-center text-black max-md:mt-10 max-md:max-w-full"
      >
        Experience the future of marketing in the dynamic world of influencer
        marketing at the Influence
        <br /> Influence Exchange Confex & Awards Series 2024. Here are some
        reasons why you shouldn't miss this event:
      </motion.div>
      {/* Render each card dynamically */}
      <div className="self-stretch mt-2 w-full max-md:max-w-full">
        <div className="flex gap-y-5 sm:px-[0%] px-[0%]  gap-x-[3%] flex-wrap max-md:gap-0 ">
          {cardData.map((card, index) => (
            <motion.div
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className={`flex flex-grow flex-col w-[22%] max-md:ml-0 max-md:w-full my-[30px] sm:px-[10px] px-[10px] ${
                hoveredIndex === index ? "hoveredaward" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-black w-full h-full rounded-[36px] py-[60px]">
                <div
                  className={`text-3xl textaward  text-white uppercase  max-md:mt-10 max-md:text-4xl sm:pb-[40px] pb-[5px]  px-[40px] ${anton.className} whitespace-pre-line `}
                >
                  {card.title}
                </div>
                <div className="flex flex-col self-stretch my-auto text-xl font-medium leading-6 text-white max-md:mt-10 max-md:max-w-full">
                  <Image
                    loading="lazy"
                    src={card.imageUrl}
                    width={600}
                    height={300}
                    className="w-full aspect-[2.38] max-md:max-w-full rounded-[32px] relative scale-[1.12]  my-0 imgaward"
                  />
                  <div className="self-center mt-11 text-sm max-md:mt-10 px-[10px]">
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
