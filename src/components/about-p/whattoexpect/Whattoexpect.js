"use client";
import * as React from "react";
import Marquee from "react-fast-marquee";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";
import engaging from "../../../../public/images/about/engaging.jpg";
import curated from "../../../../public/images/about/curated.jpg";
import future from "../../../../public/images/about/future.jpg";
import top from "../../../../public/images/about/top.jpg";

import Image from "next/image";
function Whattoexpect() {
  // Sample data for cards
  const cardData = [
    {
      title: "Engaging Interactions",
      imgUrl: engaging,
      description:
        "Immerse yourself in a vibrant atmosphere where marketeers and influencers converge to share ideas, insights, and business prospects, fostering genuine connections and collaborations.",
    },
    {
      title: "Curated Program",
      imgUrl: curated,
      description:
        "Dive into a carefully designed agenda featuring keynote speeches, interactive panel discussions, and hands-on workshops, providing actionable strategies and practical knowledge to drive success in influencer marketing.",
    },
    {
      title: "Top-Notch Insights",
      imgUrl: top,
      description:
        "Rub shoulders with industry leaders and experts, gaining valuable insights and establishing significant relationships that transcend the event, empowering you to stay ahead of industry trends and developments.",
    },
    {
      title: "Future of Marketing",
      imgUrl: future,
      description:
        "Explore the latest trends and technologies in MarTech and AdTech, uncovering innovative approaches and cutting-edge solutions to reshape the future of marketing and influencer collaboration.",
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
          className="self-stretch w-full h-[200px] text-8xl text-center leading-[62.4px] text-black text-opacity-10 max-md:max-w-full max-md:text-4xl"
        >
          <h2> &nbsp; EXPECT EVERYTHING UNEXPECTED!</h2>
        </Marquee>
      </div>

      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`mt-10 text-2xl  px-20 font-medium tracking-tighter leading-8 text-center text-black max-md:mt-10 max-md:max-w-full ${work_sans.className} `}
      >
        At the Influence Exchange & Awards Confex India 2024, expect an
        unforgettable experience <br /> filled with engaging interactions,
        curated content, and invaluable insights:
      </motion.div>

      <div className=" w-full max-md:mt-10 max-md:max-w-full  p-20">
        <div className="flex flex-wrap gap-[4%] max-md:gap-0 rounded-[36px] ">
          {cardData.map((card, index) => (
            <motion.div
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="flex flex-col w-[48%] h-full max-md:ml-0 max-md:w-full py-5 group"
            >
              <div
                className="flex overflow-hidden relative flex-col pt-20 max-md:mt-10 max-md:max-w-full 
                h-full
                rounded-[36px]
               "
              >
                <Image
                  loading="lazy"
                  src={card.imgUrl}
                  alt={card.title}
                  className="object-cover absolute inset-0 size-full
                  group-hover:scale-105 
                  
                  transition-transform duration-300 ease-in-out
              
                   rounded-[36px]"
                />
                <div
                  className="flex relative flex-col overflow-hidden px-6 pt-20 pb-8 mt-40 rounded-[36px] max-md:px-5 max-md:mt-10 max-md:max-w-full
                
                "
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)  ",
                  }}
                >
                  <div
                    className={`mt-12 text-5xl text-[#ccff00] uppercase leading-[62px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[58px] ${anton.className} `}
                  >
                    {card.title}
                  </div>
                  <div
                    className={`mt-6 text-2xl font-medium tracking-tighter leading-7 text-white max-md:max-w-full ${work_sans.className}`}
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
