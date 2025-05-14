"use client";
import * as React from "react";
import imgman from "../../../../public/images/DSC04857.png";
import Image from "next/image";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";
import aboutimg1 from "../../../../public/images/aboutnew/about1.jpg";
import aboutimg2 from "../../../../public/images/about/about2.jpg";

function WhyInfluencerMarketing() {
  return (
    <section className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
      <ul className="mt-24 text-xl text-justify tracking-tighter leading-[130%] text-white max-md:mt-10 max-md:max-w-full  list-disc   ">
        <li>
          Elevate search engine rankings by harnessing influencer collaborations
          to increase brand visibility and organic reach.
        </li>
        <br />
        <li>
          Heighten brand awareness by deploying effective influencer marketing
          tactics to amplify your brand's presence across digital platforms.
        </li>
        <br />
        <li>
          Reach target demographics efficiently through impactful influencer
          marketing initiatives tailored to resonate with specific audience
          segments.
        </li>
        <br />
        <li>
          Increase conversions by implementing influencer marketing strategies
          designed to inspire action and drive consumer engagement.
        </li>
        <br />
        <li>
          Foster customer engagement through strategic partnerships with
          influencers, creating compelling marketing campaigns that resonate
          with your audience.
        </li>
        <br />
        <li>
          Establish credibility and foster trust with your audience by
          cultivating authentic relationships with influencers who align with
          your brand values and messaging.
        </li>
      </ul>
    </section>
  );
}

function InfluencerMarketingImage() {
  return (
    <div className="flex flex-col ml-5 right-0  my-10 max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cac9d992ac41ce5818bec6862e5915fda68a5353a5c4b1d4cf72b7d93f798bf6?apiKey=5e27b1defd60460eaa6dca842133145f&"
        alt="Influencer marketing"
        className="shrink-0   max-w-full  w-full opacity-[0.8]    max-md:mt-10"
        style={{ objectFit: "fill", width: "20vw", height: "100vh" }}
      />
    </div>
  );
}

function InfluencerMarketingimg() {
  return (
    <motion.div
      initial={offscreen2}
      whileInView={onscreen2}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full overflow-hidden pt-20 rounded-[46px] flex justify-end ml-10 "
    >
      <Image
        loading="lazy"
        src={imgman}
        alt="Influencer marketing "
        className="shrink-0   max-md:mt-10 rounded-[46px] "
        height="100%"
        style={{ objectFit: "cover", width: "30vw" }}
      />
    </motion.div>
  );
}

function InfluencerMarketingStats({ title, value, description }) {
  return (
    <div className="flex flex-col max-md:mt-10">
      <div
        className={`text-6xl text-[#ccff00]   leading-[130%] max-md:text-4xl ${anton.className} `}
      >
        {value}
      </div>
      <div className="mt-7 text-xl font-medium tracking-tighter leading-[130%] text-white">
        <span className="font-bold text-[#ccff00]">{title}:</span> {description}
      </div>
    </div>
  );
}

function Aboutone() {
  const influencerMarketingStats = [
    {
      title: "Ad spending",
      value: "$294.3 M",
      description:
        "The projected ad spending in the Influencer Advertising market is US$294.30 million in 2024.",
    },
    {
      title: "Growth",
      value: "$462.7 M",
      description:
        "Anticipated annual growth at a rate of 11.98% from 2024 to 2028, resulting in a projected market volume of US$462.70 million.",
    },
    {
      title: "Social Media Users",
      value: "$462 M",
      description:
        "Dubai was home to 462.0 million social media users in January 2024, equating to 32.2 percent of the total population.",
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

  const offscreen3 = {
    y: 100,
    opacity: 0,
  };

  const onscreen3 = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.2,
      duration: 0.41,
    },
  };

  const offscreen2 = {
    x: 100,
    opacity: 0,
  };
  const onscreen2 = {
    x: 0,
    opacity: 1,

    transition: {
      delay: 0.2,
      duration: 0.41,
    },
  };

  return (
    <div className={`flex flex-col bg-black ${work_sans.className}   `}>
      <div className="flex flex-col pt-1.5 pb-20 w-full max-md:px-5 max-md:max-w-full rounded-b-[42px]">
        <motion.p
          initial={offscreen}
          whileInView={onscreen}
          viewport={{ once: true, amount: 0.3 }}
          className="sm:text-md text-xl  sm:px-20 px-0 font-medium text-justify tracking-tighter leading-[130%] text-white max-md:max-w-full slidein"
        >
          Dubai stands as an ideal destination for The Influence Exchange Confex
          & Awards due to its position as a global hub for innovation, business,
          and digital transformation. The UAE's influencer marketing landscape
          is thriving, with the sector experiencing exponential growth as brands
          increasingly recognize its power to drive authentic engagement and
          measurable results. <br />
          <br />
          The global influencer marketing market, valued at $21.1 billion in
          2023, is projected to reach $24 billion by year-end. Within this
          vibrant ecosystem, Dubai emerges as a beacon for creativity and
          collaboration, offering a unique blend of cultural diversity,
          tech-savvy consumers, and a robust digital infrastructure. The UAE's
          marketing ecosystem reflects this growth, with 80% of marketers
          dedicating budgets to influencer campaigns and 67% planning to
          increase spending, signaling confidence in the region's ROI potential.{" "}
          <br />
          <br />
          Discover the future of marketing with the latest trends and
          technologies in AdTech, Martech and Influencer at our event. Whether
          you are a marketer seeking innovative strategies to leverage the power
          of influencers or an influencer looking to collaborate with brands,
          this event is the perfect platform to expand your network and explore
          new business opportunities. Gain practical knowledge from industry
          experts, discover cutting-edge trends, and unlock the potential of ad
          tech, mar tech & influencer marketing for your brand. <br />
          <br />
          <span className="text-[#ccff00]">
            Welcome to the 6th Edition of The Influence Exchange Confex &
            Awards!
          </span>
        </motion.p>
        <motion.div
          initial={offscreen}
          whileInView={onscreen}
          viewport={{ once: true, amount: 0.3 }}
          className="sm:px-20 px-0 sm:pl-24 pl-5 sm:mt-44 mt-20 mb-32  max-md:max-w-full"
        >
          <h2
            className={`self-end text-5xl text-center leading-[130%] max-md:max-w-full max-md:text-4xl text-white slidein ${anton.className} `}
          >
            WHY INFLUENCER MARKETING?
          </h2>
          <div className="flex bg-black">
            <div className="flex sm:flex-row flex-col-reverse  sm:h-[100vh] h-auto ">
              <div className="col-span-5">
                <div className="flex flex-col h-full">
                  <div className="flex h-full sm:flex-row flex-col-reverse">
                    <WhyInfluencerMarketing />
                    <motion.div
                      initial={offscreen2}
                      whileInView={onscreen2}
                      viewport={{ once: true, amount: 0.3 }}
                      className="w-full  sm:pt-20 pt-0 relative sm:right-[-10px] right-0 z-10 rounded-[46px] flex justify-end sm:ml-10 ml-0 "
                      style={{
                        boxShadow: "50px 0 100px 0 rgba(0, 0, 0, 0.95)",
                      }}
                    >
                      <Image
                        loading="lazy"
                        src={aboutimg1}
                        alt="Influencer marketing "
                        className="shrink-0  sm:object-cover sm:w-[30vw] w-[100%]  max-md:mt-10 rounded-[46px] hover:scale-105 transition-transform duration-500 ease-in-out"
                        height="100%"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="h-full sm:relative absolute sm:opacity-100 opacity-0 ">
                <InfluencerMarketingImage />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="flex overflow-hidden relative flex-col justify-center w-full shadow-2xl min-h-[400px] max-md:max-w-full "
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgb(255 255 255 / 90%) 80%, #000 20%)",
        }}
      >
        <Image
          loading="lazy"
          src={aboutimg2}
          alt=""
          className="object-cover   absolute inset-0 size-full rounded-[82px] "
        />
        <div className="relative px-10 py-20 w-full bg-black bg-opacity-30 flex justify-center size-full min-h-[400px] rounded-[82px] max-md:px-5 max-md:max-w-full">
          <motion.div
            initial={offscreen3}
            whileInView={onscreen3}
            viewport={{ once: true, amount: 0.3 }}
            className="flex gap-5 max-md:flex-col max-md:gap-0"
          >
            {influencerMarketingStats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
              >
                <InfluencerMarketingStats {...stat} />
              </div>
            ))}
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <p className="relative text-base font-medium tracking-tighter leading-[130%] text-justify text-white max-md:mt-10">
                <span className="text-xl font-bold text-[#ccff00]">
                  Instagram Growth:{" "}
                </span>{" "}
                Instagram Influencer marketing in Dubai has witnessed
                significant growth and evolution in recent years, becoming a
                prominent strategy for brands to reach and engage with their
                target audiences. In Dubai, influencers have become a vital
                channel for businesses, forging authentic connections with
                audiences through relatable content. The influencer marketing
                industry has witnessed widespread adoption across sectors.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Aboutone;
