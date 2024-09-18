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
import uae_businessoutlook from "../../../../public/images/sponsors/uae/asia-business-outlook.png";
import uae_gazet from "../../../../public/images/sponsors/uae/gazet-international.png";
import uae_utoday from "../../../../public/images/sponsors/uae/utoday.png";
import uae_mideastinfo from "../../../../public/images/sponsors/uae/mid.png";
import uae_cbhtimes from "../../../../public/images/sponsors/uae/cbhtimes.png";
import uae_globalhues from "../../../../public/images/sponsors/uae/global-hues.png";
import uae_startupnews from "../../../../public/images/sponsors/uae/startupnews.png";
import uae_approachentertainment from "../../../../public/images/sponsors/uae/approchentertainment.png";
import uae_approachbollywood from "../../../../public/images/sponsors/uae/approchbollywood.png";
import uae_publicfront from "../../../../public/images/sponsors/uae/publicfront.png";

function Mediapartners() {
  // Define data for sponsors
  const sponsors = [
    {
      name: "iMPACT",
      description:
        "iMPACT serves as a dedicated media outlet for nonprofits, civil society, and socially-focused businesses, offering curated news, trends, insights, and best practices from influential voices within the development sector.",
      imageUrl: "/images/sponsors/uae/og/4.png",
      logoUrl: uae_impact,
      link: "https://www.theimpactmagazine.org/",
    },
    {
      name: "AI Time Journal",
      description:
        "AI Time Journal explores how Artificial Intelligence and Exponential Technologies bring opportunities for people, organizations, and societies to increase their wealth and health. They provide insights from industry leaders and experts, and use cases of exponential technologies across multiple fields, including finance, healthcare, and education.",
      imageUrl: "/images/sponsors/uae/og/6.png",
      logoUrl: uae_ai,
      link: "https://www.aitimejournal.com/",
    },
    {
      name: "Abudhabi Explorer",
      description:
        "Abudhabi.explorer uncovers the hidden gems, vibrant culture, and must-see attractions of Abu Dhabi. With the support of prominent media blogs in the UAE, they bring the latest events, in-depth reviews, and insider tips to enhance your experience.",
      imageUrl: "/images/sponsors/uae/og/7.png",
      logoUrl: uae_explorer,
      link: "https://www.instagram.com/abudhabi.explorer?igsh=eWIwN3Vrc3IwY2Y0",
    },
    {
      name: "Business Outreach",
      description:
        "Business Outreach is one of the fastest-growing business magazines in India, where CEOs, CXOs, and top executives of a company share their insights about their industry and initiate productive discussions about the latest market trends with the editorial staff and peers.",
      imageUrl: "/images/sponsors/uae/og/3.png",
      logoUrl: uae_outreach,
      link: "https://www.businessoutreach.in/",
    },
    {
      name: "Gulf Good News",
      description:
        "Gulf Good News is the most reliable source for good news. Gulf Good News is a Google News approved high authority domain. Our aim is to spread positive news from within GCC & all around the world to uplift and inspire millions to become more optimistic.",
      imageUrl: "/images/sponsors/uae/og/5.png",
      logoUrl: uae_gulf,
      link: "https://gulfgoodnews.com",
    },
    {
      name: "Latin & Gulf Magazine",
      description:
        "Latin&Gulf Magazine is a News Media platform covering cultural exchange, business collaboration, and diplomatic relations between Latin America and the Gulf Cooperation Council (GCC).",
      imageUrl: "/images/sponsors/uae/og/8.png",
      logoUrl: uae_magazine,
      link: "https://latingulf.ae/business/",
    },
    {
      name: "Asia Business Outlook",
      description:
        "Asia Business Outlook is a premier business magazine delivering a comprehensive analysis of Asia's dynamic industrial landscape. Catering to C-level executives, it provides valuable insights into market trends, disruptive technologies, regulatory changes, and investment opportunities.",
      imageUrl: "/images/sponsors/uae/og/1.png",
      logoUrl: uae_businessoutlook,
      link: "https://www.asiabusinessoutlook.com/",
    },
    {
      name: "Gazet International",
      description:
        "Gazet International is a global entity that aims to become the leading destination for the latest and most in-depth news from diverse industries worldwide. With a steadfast commitment to delivering accurate, up-to-the-minute information, we have established ourselves as a trusted source for all things related to business, technology, finance, banking, and corporate affairs. Our mission is to empower readers with the knowledge they need to navigate the rapidly evolving global landscape.",
      imageUrl: "/images/sponsors/uae/og/2.png",
      logoUrl: uae_gazet,
      link: "https://gazetinternational.com/",
    },
    {
      name: "U. Today",
      description:
        "U. Today is a leading cryptocurrency and blockchain media outlet launched in 2017, covering trends in Web3, crypto, blockchain, and AI. With a global team, it provides a range of content including news, guides, reviews, and price forecasts to its three million readers.",
      imageUrl: "/images/sponsors/uae/og/utoday.png",
      logoUrl: uae_utoday,
      link: "https://u.today/",
    },
    {
      name: "Mid East Info",
      description:
        "Mid-east.info is a leading business news and information publisher that covers the greater Middle East region. Since 2012, we have been providing daily updates on news, articles, reports, and other forms of content for professionals interested in doing business in the Middle East. Our goal is to offer instant business updates, market data, tips, reports, and analysis to help business professionals stay informed about the MENA region.",
      imageUrl: "/images/sponsors/uae/og/mid.png",
      logoUrl: uae_mideastinfo,
      link: "https://mid-east.info/",
    },
    {
      name: "CBHtimes Media",
      description:
        "CBHtimes Media - A UAE-based media personality with 15+ years of experience. Chanda Bhatia, a celebrated influencer and advocate for Women Empowerment, with 12 million+ Google viewers and prestigious awards from Sharjah and Abu Dhabi Authorities.",
      imageUrl: "/images/sponsors/uae/og/cbhtimes.png",
      logoUrl: uae_cbhtimes,
      link: "https://www.cbhtimes.com/",
    },
    {
      name: "The Global Hues",
      description:
        "The Global Hues is a leading media platform focused on delivering engaging and insightful content across various industries. They specialize in offering comprehensive news, trends, and analysis, providing valuable perspectives and information to a global audience.",
      imageUrl: "/images/sponsors/uae/og/global-hues.png",
      logoUrl: uae_globalhues,
      link: "https://www.theglobalhues.com/",
    },
    {
      name: "Startupnews.fyi",
      description:
        "Startupnews.fyi is a media platform dedicated to providing the latest news, insights, and resources for the startup community. They focus on delivering timely updates, industry trends, and expert opinions to support entrepreneurs, investors, and innovators. As a media partner, Startup.fyi offers valuable exposure and thought leadership within the startup ecosystem.",
      imageUrl: "/images/sponsors/uae/og/startupnews.png",
      logoUrl: uae_startupnews,
      link: "https://startupnews.fyi/",
    },
    {
      name: "Approach Entertainment",
      description:
        "Approach Entertainment Group is a distinguished leader in the fields of Celebrity Management, Film Production, Advertising and Corporate Film Solutions, Film Marketing, and Events & Entertainment Marketing. Complementing these core services, Approach Communications operates as a premier PR and Integrated Communications agency, catering to diverse sectors including Corporate, Healthcare, Entertainment, Finance, Education, and Social domains. The group's unwavering commitment to excellence has been recognized through numerous prestigious accolades, such as The Biz India 2010 Award from the World Confederation of Business, the Service Excellence Award from the Worldwide Marketing Organization, the PR Agency of the Year Award, and the Yuva Ratn Award.",
      imageUrl: "/images/sponsors/uae/approchentertainment.png",
      logoUrl: uae_approachentertainment,
      link: "https://www.approachentertainment.com/",
    },
    {
      name: "Approach Bollywood",
      description:
        "Approach Bollywood is a comprehensive newswire service, portal, and app dedicated to creating and distributing multimedia Bollywood and entertainment content for newspapers, magazines, TV channels, radio, apps, and all digital media platforms. Launched by Approach Entertainment, India’s premier group specializing in Celebrity Management, Film Production, Advertising and Corporate Film Solutions, Film Marketing, and Events & Entertainment Marketing, Approach Bollywood serves as a dynamic platform for delivering entertainment news across a wide array of media channels.",
      imageUrl: "/images/sponsors/uae/approchbollywood.png",
      logoUrl: uae_approachbollywood,
      link: "https://www.approachbollywood.com/",
    },
    {
      name: "Public Front",
      description:
        '"Public Front" National English Weekly is among India\'s leading newspapers and journals (since 2002), with wide circulation at home and abroad (in print and e-paper modes). It covers local, national, and international news on ongoing political situations, current affairs, business and economic affairs, legal affairs, world affairs, cinema and entertainment, and sports news, among other subjects of national and global importance. We are a dedicated team of dynamic aristocrats who voice facts to the public.',
      imageUrl: "/images/sponsors/uae/publicfront.png",
      logoUrl: uae_publicfront,
      link: "https://publicfront.news/",
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
