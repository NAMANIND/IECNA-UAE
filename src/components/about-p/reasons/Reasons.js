"use client";

import { AiOutlineGlobal } from "react-icons/ai";
import { RiUserFollowLine } from "react-icons/ri";
import { FaBullseye } from "react-icons/fa";
import { GiPencilRuler } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

import { work_sans, anton } from "@/styles/fonts";

const content = [
  {
    icon: AiOutlineGlobal,
    title: "Reach and Exposure",
    text: "Influencers have built large, engaged audiences across various platforms like Instagram, LinkedIn, YouTube, and blogs. Partnering with them allows brands to reach these targeted audiences effectively.",
  },
  {
    icon: RiUserFollowLine,
    title: "Credibility and Trust",
    text: "Influencers often have a close connection with their followers, who trust their opinions and recommendations. When an influencer promotes a product or service, it can lend credibility and authenticity to the brand.",
  },
  {
    icon: FaBullseye,
    title: "Audience Targeting",
    text: "Influencers often specialize in specific niches or demographics. This targeting capability allows brands to reach their ideal customers more precisely.",
  },
  {
    icon: GiPencilRuler,
    title: "Content Creation",
    text: "Influencers are skilled content creators. By collaborating with them, brands can leverage their creativity to develop engaging and authentic content that resonates with their audience.",
  },
  {
    icon: FaCheckCircle,
    title: "Social Proof and Conversions",
    text: "Recommendations from influencers can lead to increased social proof. When consumers see influencers using and endorsing products, it can positively impact purchase decisions and conversions.",
  },
  {
    icon: FaDollarSign,
    title: "Cost-Effective",
    text: "Compared to traditional advertising, influencer marketing can offer a good return on investment. It can be more affordable and potentially more impactful, especially for smaller brands.",
  },
  {
    icon: FaShieldAlt,
    title: "Ad Blocker Immunity",
    text: "As traditional advertising faces challenges like ad blockers, influencer marketing provides a way to reach audiences organically through content.",
  },
  {
    icon: FaSearch,
    title: "SEO Benefits",
    text: "Collaborating with influencers can also contribute to SEO efforts, especially through backlinks and increased brand mentions across the web.",
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
        className="self-stretch mt-20 w-full sm:text-4xl my-32 text-xl italic font-bold  leading-7 text-center text-black uppercase max-md:mt-10 max-md:max-w-full  "
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
