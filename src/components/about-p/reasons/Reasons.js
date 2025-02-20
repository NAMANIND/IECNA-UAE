"use client";

import {
  FaComments,
  FaLightbulb,
  FaTrophy,
  FaGlassCheers,
} from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";
import { motion } from "framer-motion";

import { work_sans, anton } from "@/styles/fonts";

const content = [
  {
    icon: FaComments,
    title: "Visionary Panel Discussions",
    text: "Engage with industry thought leaders as they decode challenges and unlock the untapped potential in the UAE's influencer marketing landscape. Gain actionable insights into groundbreaking strategies driving success.",
  },
  {
    icon: FaLightbulb,
    title: "Exclusive Presentations & Insights",
    text: "Discover transformative campaigns and technologies that are revolutionizing marketing. Learn to leverage MarTech and AdTech innovations to maximize ROI and captivate your audience.",
  },
  {
    icon: FaTrophy,
    title: "Prestigious Awards Ceremony",
    text: "Celebrate excellence and innovation as we honor the visionaries and disruptors redefining influencer marketing. Witness industry leaders being recognized for their impactful contributions.",
  },
  {
    icon: RiUserFollowLine,
    title: "Elite Networking Opportunities",
    text: "Build meaningful connections with top marketers, influencers, and tech pioneers. Our exclusive networking spaces are designed to foster collaborations and spark growth.",
  },
  {
    icon: FaGlassCheers,
    title: "Gala Dinner & Executive Dialogues",
    text: "Indulge in an elegant culinary experience while engaging in strategic discussions with industry icons. Forge valuable partnerships in a setting that blends sophistication with inspiration.",
  },
];
function Reasons() {
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
    <div className=" bg-white w-full max-md:pt-10 max-md:max-w-full sm:p-20 p-5 ">
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="self-stretch mt-20 w-full sm:text-4xl my-32 text-xl italic font-bold  leading-[130%] text-center text-black uppercase max-md:mt-10 max-md:max-w-full  "
      >
        <span className="font-semibold  italic">
          <span className="font-semibold italic text-[#51B6FF]">
            Influencer marketing{" "}
          </span>
          has become a popular strategy for <br /> brands and businesses due to
          several compelling reasons:
        </span>
      </motion.div>

      <motion.section
        className={`mx-auto grid  sm:grid-cols-3 grid-cols-1 gap-20  ${work_sans.className} `}
      >
        {content.map(({ icon: Icon, title, text }) => (
          <motion.div
            initial={offscreen}
            whileInView={onscreen}
            viewport={{ once: true, amount: 0.3 }}
            key={title}
            className="flex flex-col items-center gap-4 group"
          >
            <span
              className="p-8 mb-4 flex sm:scale-100 scale-80  h-32 w-32 items-center justify-center rounded-[1.8rem]  bg-black
            group-hover:transform group-hover:-translate-y-2 transition-transform duration-300
            group-hover:shadow-lg
             "
            >
              <Icon className="h-12 w-12 text-[#ccff00]" />
            </span>
            <h3 className="mb-2 text-2xl font-medium text-black text-center">
              {title}
            </h3>
            <p className="text-lg  text-gray-600 text-justify">{text}</p>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}

export default Reasons;
