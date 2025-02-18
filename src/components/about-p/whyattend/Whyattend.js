"use client";
import * as React from "react";
import { useState } from "react";

import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import networking from "../../../../public/images/aboutnew/networking.jpg";
import insights from "../../../../public/images/aboutnew/insights.jpg";
import buiness from "../../../../public/images/aboutnew/business.jpg";
import exclusive from "../../../../public/images/aboutnew/exclusive.jpg";

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
      title: "Recognition\n& Awards",
      imageUrl: exclusive,
      text: "If your company or work in influencer marketing deserves recognition, participating in awards can offer visibility and credibility within the industry.",
    },
    {
      title: "Stay\nUpdated",
      imageUrl: exclusive,
      text: "Keep abreast of the latest tools, technologies, and platforms in the influencer marketing, ad tech & mar tech landscape. This knowledge can help you adapt and stay competitive in the evolving digital marketing ecosystem.",
    },
    {
      title: "Inspiration\n& Motivation",
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

    {
      title: "Stay Ahead of\nTrends",
      imageUrl: exclusive,
      text: "Dive into the latest influencer marketing strategies shaping the global landscape.",
    },
    {
      title: "Expand Your\nNetwork",
      imageUrl: exclusive,
      text: "Connect with top-tier brands, creators, and innovators.",
    },
    {
      title: "Unlock\nOpportunities",
      imageUrl: exclusive,
      text: "Explore partnerships and collaborations that could redefine your business or career.",
    },
    {
      title: "Elevate\nYourself",
      imageUrl: exclusive,
      text: "Take your professional growth to the next level through expert insights and industry connections.",
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
        className={`text-5xl text-center text-black uppercase leading-[130%] max-md:text-4xl ${anton.className} `}
      >
        WHY ATTEND?
      </motion.div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="self-stretch mt-20 w-full sm:text-4xl text-xl italic font-bold tracking-tighter leading-[130%] text-center text-black uppercase max-md:mt-10 max-md:max-w-full  "
      >
        <span className="font-semibold  italic">
          DUBAI We are back with The Influencer Exchange Confex & Awards Series
          3.0
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
        className="mt-11 text-2xl sm:px-10 px-0 mb-28 font-medium tracking-tighter leading-[130%] text-center text-black max-md:mt-10 max-md:max-w-full"
      >
        This event isn’t just another conference—it’s your gateway to influence,
        innovation, and industry leadership in one of the world’s most dynamic
        digital markets
        <br />
        Here are some reasons why you shouldn't miss this event:
      </motion.div>
      {/* Render each card dynamically */}
      <div className="self-stretch mt-2 w-full max-md:max-w-full">
        <div className="flex gap-y-5 sm:px-[5%] px-[0%] gap-x-[6%] flex-wrap max-md:gap-0 ">
          <div className="grid grid-cols-3 gap-8 md:px-4 md:py-12 mx-auto max-w-7xl py-0 px-0 max-md:grid-cols-1">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                initial={offscreen}
                whileInView={onscreen}
                viewport={{ once: true, amount: 0.3 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`transform transition-all duration-300 !leading-[130%] px-4 py-8   ${
                  hoveredIndex === index ? "scale-[1.02]" : ""
                }`}
              >
                <div
                  className=" bg-white mis group hover:bg-black/90 transition-all duration-500 hover:text-white text-wrap rounded-xl overflow-hidden h-full shadow-[0_0_30px_0_rgba(81,182,255,0.3)]
            hover:shadow-[0_0_30px_0_rgba(81,182,255,0.3)]
    
            "
                >
                  {/* Card Header */}
                  <div className="py-6 px-5">
                    <h2
                      className={`text-[30px] max-md:text-xl font-bold text-[#51B6FF] tracking-tight leading-[130%]  
                    ${anton.className}
                    uppercase   w-full    group-hover:text-[#ccff00]
                    `}
                    >
                      {card.title}
                    </h2>
                  </div>

                  {/* Card Image */}
                  <div className="relative px-5">
                    <div className="relative overflow-hidden rounded-md">
                      <Image
                        src={card.imageUrl}
                        alt={card.title}
                        width={600}
                        height={300}
                        className="w-full  object-cover h-[300px]  transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="py-6 px-5">
                    <p className=" text-neutral-950 text-[16px] leading-[130%]  font-normal group-hover:text-white ">
                      {card.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyattend;
