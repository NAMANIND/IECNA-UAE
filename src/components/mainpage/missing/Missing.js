"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ok from "../../../../public/ok.jpg";
import img1 from "../../../../public/images/Intersect.png";
import { anton, work_sans } from "@/styles/fonts";

const SectionTitle = ({ children }) => (
  <h2 className="text-5xl text-center text-black uppercase leading-[61.92px] max-md:max-w-full max-md:text-4xl">
    {children}
  </h2>
);

const HighlightedText = ({ children, color }) => (
  <div
    className={`text-7xl uppercase leading-[80px] max-md:mt-10 max-md:text-4xl max-md:leading-[49px]  ${color} w-[30%]   group-hover:text-[#ccff00]`}
  >
    {children}
  </div>
);

const TextContent = ({ children, wid }) => (
  <div
    className={`self-stretch my-auto text-xl  font-medium leading-7 text-right text-black group-hover:text-white w-[${wid}]  max-md:mt-10 max-md:max-w-full`}
  >
    {children}
  </div>
);

const highlights = [
  {
    title: "Exceptional Networking",
    content:
      "Meet under one roof with top-notch marketers and influencers from the region, gaining valuable insights and forging valuable relationships.",
    color: "text-blue-400",
  },
  {
    title: "Cutting-Edge Insights",
    content:
      "Discover the future of marketing with the latest trends and technologies in Martech and AdTech.",
    color: "text-blue-400",
  },
  {
    title: "Business Opportunities",
    content:
      "Whether you're a marketer seeking innovative strategies or an influencer looking to collaborate with brands, this event is the perfect platform to expand your network and explore new business opportunities.",
    color: "text-blue-400",
  },
  {
    title: "Engaging Interactions",
    content:
      "Immerse in a vibrant atmosphere where marketers and influencers converge to share ideas, insights, and business prospects.",
    color: "text-blue-400",
  },
];

function Missing() {
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
      duration: 0.2,
    },
  };

  return (
    <section
      className={`flex justify-center items-center px-10 py-20  max-md:px-5 transition-all duration-[0.25s]  ${anton.className} `}
      style={{
        background:
          "linear-gradient(192deg, rgba(255, 255, 255, 0.15) 0%, rgba(81, 182, 255, 0.15) 14.5%, rgba(81, 182, 255, 0.15) 76%, rgba(255, 255, 255, 0.15) 100%)",
      }}
    >
      <div className="flex flex-col mt-20 w-full max-w-[100%] pb-[200px] max-md:mt-10 max-md:max-w-full">
        <motion.div
          initial={offscreen}
          whileInView={onscreen}
          viewport={{ once: true, amount: 0.3 }}
          className={` ${anton.className} 
         text-5xl text-center text-black uppercase  pt-[200px] pb-[100px] leading-[61.92px]  max-md:max-w-full max-md:text-4xl
         
              `}
        >
          What will you be missing out on, if you don't attend?
        </motion.div>
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            className={`mt-24 max-md:mt-10 max-md:max-w-full bg-white mis group hover:bg-black hover:text-white text-wrap transition-all duration-300
            w-[100%]
            rounded-[40px] shadow-2xl px-10 py-10 max-md:px-5 max-md:py-5
            h-[300px]
            flex align-middle
            `}
            // initial={offscreen}
            // whileInView={onscreen}
            // viewport={{ once: true, amount: 0.3 }}
            // whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div
                className={`flex flex-row w-[100%] justify-between   max-md:ml-0 max-md:w-full`}
                style={{ alignItems: "center" }}
              >
                <HighlightedText color={highlight.color}>
                  {highlight.title}
                </HighlightedText>

                {hoveredIndex === index && (
                  <motion.div
                    className="w-[40%] max-md:w-full ml-10"
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: 1, rotate: -5 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Image
                      src={img1}
                      alt={highlight.title}
                      width={400}
                      height={400}
                      className="shadow-lg"
                      style={{
                        width: "400px",
                        boxShadow: " 8px 15px 80px 0 rgba(81, 182, 255, 0.6)",
                      }}
                    />
                  </motion.div>
                )}
                <div
                  className={`flex flex-col ml-5 w-[${
                    hoveredIndex === index ? "30%" : "60%"
                  }] max-md:ml-0 max-md:w-full font-medium  text-[21px] ${
                    work_sans.className
                  } `}
                >
                  <TextContent wid={hoveredIndex !== index ? "100%" : "100%"}>
                    {highlight.content}
                  </TextContent>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Missing;
