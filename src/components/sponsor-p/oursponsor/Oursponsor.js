"use client";
import * as React from "react";
import { anton, work_sans } from "@/styles/fonts";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";
import proven from "../../../../public/images/sponsors/uae/proven.png";
import takefluence from "../../../../public/images/sponsors/uae/takef.png";
import socialChameleon from "../../../../public/images/sponsors/uae/socialc.png";
import yalaYala from "../../../../public/images/sponsors/uae/yalayala.png";
import whoyer from "../../../../public/images/sponsors/uae/whoyer.png";
import proExpo from "../../../../public/images/sponsors/uae/proexpo.png";
import socialCash from "../../../../public/images/sponsors/uae/socialcash.png";
import Image from "next/image";

function Oursponsor() {
  // Define data for sponsors
  const sponsors = [
    {
      title: "Lanyard Sponsor",
      name: "Socio Genee",
      description:
        "Socio Genee is the leading platform offering 100% transparency and business growth for Influencers, focused on building communities to enhance and uplift the creator ecosystem.",
      imageUrl: "https://india2024.theiena.com/images/sponsors/soge-og.jpg",
      logoUrl: "https://india2024.theiena.com/images/sponsors/soge.png",
      link: "https://sociogenee.com/",
      special: true,
    },
    {
      title: "Solution Partner",
      name: "Greenroom now",
      description:
        "Greenroom is a content and influencer marketing agency based in Bangalore and Mumbai. We believe in turning attention to retention: crafting long-term impact. We are here for brands and creators who are looking to navigate and thrive in the attn economy and work with some of the top brands in the country.",
      imageUrl:
        "https://india2024.theiena.com/images/sponsors/greenroom-og.png",
      logoUrl: "https://india2024.theiena.com/images/sponsors/greenroom.png",
      link: "https://www.greenroomnow.com/",
      special: true,
    },
    {
      title: "Gold Sponsor",
      name: "Social Chameleon",
      description:
        "Social Chameleon is a leading Search-First Social Media® agency with expertise in social media, search, and content creation. Our teams in London and Sydney work with pioneering brands to deliver measurable outcomes and strategies that get noticed.",
      imageUrl: "/images/sponsors/uae/og/socialc.png",
      logoUrl: socialChameleon,
      link: "https://socialchameleon.com",
    },
    {
      title: "Exhibitor",
      name: "PROVEN 360",
      description:
        "Founded in 2022, PROVEN 360 is a premier digital marketing agency dedicated to helping businesses grow through tailored strategies. They offer website development, social media, SEO, and more to drive engagement and conversions.",
      imageUrl: "/images/sponsors/uae/og/proven.png",
      logoUrl: proven,
      link: "https://www.proven-360.com",
    },
    {
      title: "Solution partner",
      name: "Takefluence",
      description:
        "Takefluence is a platform to collaborate with creators/influencers or even engage customers to create, distribute, amplify content, drive sales with promocode attribution, write reviews and get paid. We automate all the flow from invitation, moderation, reporting to payouts.",
      imageUrl: "/images/sponsors/uae/og/takef.png",
      logoUrl: takefluence,
      link: "https://takefluence.com",
    },
    {
      title: "Exhibitor",
      name: "Yala Yala Media CO. L.L.C",
      description:
        "Yala Yala Media CO. L.L.C, a Dubai-based social media company focused on TikTok. With a founding team from China. They understand TikTok’s commercial potential and aim to foster stronger collaborations with brands and media companies to build a robust MCN ecosystem in the Middle East.",
      imageUrl: "/images/sponsors/uae/og/yalayala.png",
      logoUrl: yalaYala,
      link: "https://yalayala.ae",
    },
    {
      title: "Supporting Partner",
      name: "Whoyer",
      description:
        "Whoyer connects influencers, brands, and fashion enthusiasts, offering tools, mentorship, and personalized fashion guidance to help users succeed, grow their audience, and make smart style choices.",
      imageUrl: "/images/sponsors/uae/og/whoyer.png",
      logoUrl: whoyer,
      link: "https://www.whoyer.com",
    },
    {
      title: "Event contracting partner",
      name: "Pro Expo",
      description:
        "Pro Expo Ltd, based in Kenya, specializes in creative exhibition and stand construction solutions for events and conferences. Since 2016, the company has delivered over 870,000 square meters of stands across 46 exhibitions, serving diverse sectors like health, technology, hospitality, and automotive. Renowned for its efficiency and high-quality service, Pro Expo offers customized event setups, branding, and AV equipment hire. With a strong track record of delivering major projects like Medic East Africa and China Trade Week, Pro Expo is a trusted partner for businesses across East Africa and beyond.",
      imageUrl: "/images/sponsors/uae/og/proexpo.png",
      logoUrl: proExpo,
      link: "https://www.pro-expo.co.ke/",
    },
    {
      title: "Exhibitor",
      name: "Social Cash",
      description:
        "Social Cash is a UAE-based Influencer Marketing Platform where anyone can become an influencer, regardless of their follower count and get paid based on their social engagement. Social Cash empowers brands to connect with influencers who truly align with their campaign goals through advanced algorithms that match profiles based on demographics, interests, and engagement rates. By focusing on authentic digital word-of-mouth marketing, Social Cash enables brands to run targeted, impactful campaigns with influencers who resonate with their audience, ensuring maximum reach and meaningful connections.",
      imageUrl: "/images/sponsors/uae/og/socialcash.png",
      logoUrl: socialCash,
      link: "https://www.socialcash.ae/",
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
      className={`flex flex-col items-center sm:p-20 p-5 sm:pt-[250px] bg-white ${work_sans.className}`}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black leading-[130%] max-md:text-4xl ${anton.className} `}
      >
        OUR SERIES SPONSORS
      </motion.div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 text-2xl font-medium tracking-tighter leading-[130%] text-center text-black max-md:mt-10 max-md:max-w-full"
      >
        We extend our sincere gratitude to our valued sponsors for their
        <br />
        support and contribution towards the success of the event.
      </motion.div>
      <div className="self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-[2%] gap-y-14 flex-wrap  max-md:flex-col max-md:gap-0">
          {/* Map over sponsors array and render sponsor cards dynamically */}
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-wrap w-[32%] max-md:ml-0 max-md:w-full"
            >
              <div
                className="flex flex-col grow pb-11 w-full text-2xl tracking-tighter 
              group
               leading-[130%] text-white bg-black rounded-[36px] max-md:mt-6"
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
                  <div className="self-center font-medium text-center">
                    {sponsor.title}
                  </div>
                  <div className="mt-9 font-bold text-[#ccff00]">
                    {sponsor.name}
                  </div>
                  <div className="mt-6 text-sm tracking-tight leading-[130%]">
                    {sponsor.description}
                  </div>
                  <a href={sponsor.link} target="_blank" rel="noreferrer">
                    {sponsor.special ? (
                      <img
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        className="mt-14 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                      />
                    ) : (
                      <Image
                        loading="lazy"
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        className="mt-14 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                      />
                    )}
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20">
        <Button href="./register" color="green" img="arrow">
          Become a Sponsor
        </Button>
      </div>
    </div>
  );
}

export default Oursponsor;
