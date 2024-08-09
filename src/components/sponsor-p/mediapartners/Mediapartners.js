"use client";
import * as React from "react";
import { anton, work_sans } from "@/styles/fonts";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import uae_ai from "../../../../public/images/sponsors/uae/ai-time-journal.png";
import uae_explorer from "../../../../public/images/sponsors/uae/abudhabi-explorer.png";
import uae_impact from "../../../../public/images/sponsors/uae/impact.png";
import uae_outreach from "../../../../public/images/sponsors/uae/business-outreach.png";
import uae_gulf from "../../../../public/images/sponsors/uae/gulf-good-news.png";
import uae_magazine from "../../../../public/images/sponsors/uae/latin-gulf-magazine.png";

function Mediapartners() {
  // Define data for sponsors
  const sponsors = [
    {
      name: "iMPACT",
      description:
        "iMPACT serves as a dedicated media outlet for nonprofits, civil society, and socially-focused businesses, offering curated news, trends, insights, and best practices from influential voices within the development sector.",
      imageUrl: "/images/sponsors/deriveply-og.jpg",
      logoUrl: uae_impact,
      link: "https://www.theimpactmagazine.org/",
    },
    {
      name: "AI Time Journal",
      description:
        "AI Time Journal explores how Artificial Intelligence and Exponential Technologies bring opportunities for people, organizations, and societies to increase their wealth and health. They provide insights from industry leaders and experts, and use cases of exponential technologies across multiple fields, including finance, healthcare, and education.",
      imageUrl: "/images/sponsors/deriveply-og.jpg",
      logoUrl: uae_ai,
      link: "https://www.aitimejournal.com/",
    },
    {
      name: "Abudhabi Explorer",
      description:
        "Abudhabi.explorer uncovers the hidden gems, vibrant culture, and must-see attractions of Abu Dhabi. With the support of prominent media blogs in the UAE, they bring the latest events, in-depth reviews, and insider tips to enhance your experience.",
      imageUrl: "/images/sponsors/deriveply-og.jpg",
      logoUrl: uae_explorer,
      link: "https://www.instagram.com/abudhabi.explorer?igsh=eWIwN3Vrc3IwY2Y0",
    },
    {
      name: "Business Outreach",
      description:
        "Business Outreach is one of the fastest-growing business magazines in India, where CEOs, CXOs, and top executives of a company share their insights about their industry and initiate productive discussions about the latest market trends with the editorial staff and peers.",
      imageUrl: "/images/sponsors/deriveply-og.jpg",
      logoUrl: uae_outreach,
      link: "https://www.businessoutreach.in/",
    },
    {
      name: "Gulf Good News",
      description:
        "Gulf Good News is the most reliable source for good news. Gulf Good News is a Google News approved high authority domain. Our aim is to spread positive news from within GCC & all around the world to uplift and inspire millions to become more optimistic.",
      imageUrl: "/images/sponsors/deriveply-og.jpg",
      logoUrl: uae_gulf,
      link: "https://gulfgoodnews.com",
    },
    {
      name: "Latin & Gulf Magazine",
      description:
        "Latin&Gulf Magazine is a News Media platform covering cultural exchange, business collaboration, and diplomatic relations between Latin America and the Gulf Cooperation Council (GCC).",
      imageUrl: "/images/sponsors/deriveply-og.jpg",
      logoUrl: uae_magazine,
      link: "https://latingulf.ae/business/",
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
      className={`flex flex-col items-center sm:p-20 p-5 sm:pt-[150px] bg-white ${work_sans.className}`}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        MEDIA PARTNERS
      </motion.div>

      <div className="self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-[3%] gap-y-14 flex-wrap  max-md:flex-col max-md:gap-0">
          {/* Map over sponsors array and render sponsor cards dynamically */}
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-wrap w-[31%] max-md:ml-0 max-md:w-full"
            >
              <div
                className="flex flex-col grow pb-11 w-full text-2xl tracking-tighter 
              group
               leading-6 text-white bg-black rounded-[36px] max-md:mt-6"
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
                  <div className=" font-bold text-[#ccff00]">
                    {sponsor.name}
                  </div>
                  <div className="mt-6 text-sm tracking-tight leading-5">
                    {sponsor.description}
                  </div>
                  <a href={sponsor.link} target="_blank">
                    <Image
                      loading="lazy"
                      src={sponsor.logoUrl}
                      className="mt-20 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                    />
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20">
        <Button href="./register" color="green" img="arrow">
          BECOME A PARTNER
        </Button>
      </div>
    </div>
  );
}

export default Mediapartners;
