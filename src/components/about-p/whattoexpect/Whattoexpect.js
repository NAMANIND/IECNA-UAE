"use client";
import * as React from "react";
import Marquee from "react-fast-marquee";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";
import engaging from "../../../../public/images/aboutnew/engaging.jpg";
import curated from "../../../../public/images/aboutnew/curated.jpg";
import future from "../../../../public/images/about/future.jpg";
import top from "../../../../public/images/aboutnew/top.jpg";

import Image from "next/image";
function Whattoexpect() {
  // Sample data for cards
  const cardData = [
    {
      title: "Engaging Interactions",
      imgUrl: engaging,
      description:
        "Immerse in a vibrant atmosphere where marketeers and influencers converge to share ideas, insights, and business prospects.",
    },
    {
      title: "Curated Program",
      imgUrl: curated,
      description:
        "Our carefully designed agenda features keynote speeches, interactive panel discussions, workshops, and networking sessions. Every moment is crafted to deliver valuable content and foster meaningful interactions.",
    },
    {
      title: "Top-Notch Insights",
      imgUrl: top,
      description:
        "Rub shoulders with leading marketeers and influencers from the region, gaining valuable insights and establishing significant relationships that transcend the event.",
    },
    {
      title: "Future of Marketing",
      imgUrl: future,
      description:
        "Explore the future of marketing with a focus on the latest trends and technologies in MarTech and AdTech. Stay ahead of the curve with innovative strategies and cutting-edge approaches.",
    },
    {
      title: "Opportunities for All",
      imgUrl: future,
      description:
        "Whether you're a marketer seeking innovative strategies or an influencer eager to collaborate with brands, this event provides the perfect platform to expand your network and explore new business opportunities.",
    },
    {
      title: "Industry Expertise: ",
      imgUrl: future,
      description:
        "Gain practical knowledge from industry experts, discover cutting-edge trends, and unlock the full potential of influencer marketing for your brand.",
    },
    // Add more objects as needed
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
    <div className="flex flex-col items-center  bg-white">
      <div className={`${anton.className} w-full`}>
        <h1 className="uppercase text-5xl relative z-10 text-center text-black leading-[62.4px] max-md:text-4xl max-md:leading-7 max-md:max-w-full max-md:mt-10 max-md:mb-5  top-[132px]">
          What to expect
        </h1>
        <Marquee
          gradient={false}
          speed={50}
          autoFill
          className="self-stretch w-full h-[200px] text-8xl text-center leading-[62.4px] text-black text-opacity-10 max-md:max-w-full "
        >
          <h2> &nbsp; EXPECT EVERYTHING UNEXPECTED!</h2>
        </Marquee>
      </div>

      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`mt-10 text-xl  sm:px-20 px-5 font-medium tracking-tighter leading-8 text-center text-black max-md:mt-10 max-md:max-w-full ${work_sans.className} `}
      >
        The Influence Exchange Confex & Awards Series 3.0 in Dubai promises an
        enriching experience that combines learning, networking, inspiration,
        and celebration within the dynamic world of influencer marketing.
        Prepare for a memorable event that leaves you with new perspectives,
        valuable connections, and actionable insights to propel your influencer
        marketing endeavors forward.
      </motion.div>

      <div className="w-full max-md:mt-10 max-md:max-w-full sm:p-20 p-5">
        <div className="grid grid-cols-2 gap-[4%] rounded-[36px] max-md:gap-0 max-md:grid-cols-1">
          {cardData.map((card, index) => (
            <motion.div
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="flex flex-col w-full h-full max-md:ml-0 max-md:w-full py-5 group"
              style={{ display: "flex" }}
            >
              <div
                className="flex overflow-hidden relative flex-col pt-20 max-md:mt-10 max-md:max-w-full h-full rounded-[36px]"
                style={{ flex: 1 }}
              >
                <Image
                  loading="lazy"
                  src={card.imgUrl}
                  alt={card.title}
                  className="object-cover absolute inset-0 size-full group-hover:scale-105 transition-transform duration-300 ease-in-out rounded-[36px]"
                />
                <div
                  className="flex relative flex-col overflow-hidden px-6 pt-20 pb-8 mt-40 rounded-[36px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                    flex: 1,
                  }}
                >
                  <div
                    className={`mt-12 text-5xl text-[#ccff00] uppercase leading-[62px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[58px] ${anton.className}`}
                  >
                    {card.title}
                  </div>
                  <div
                    className={`mt-6 sm:text-2xl text-lg font-medium tracking-tighter leading-7 text-white max-md:max-w-full ${work_sans.className}`}
                  >
                    {card.description}
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

export default Whattoexpect;
