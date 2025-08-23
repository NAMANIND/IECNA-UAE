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
import uae_cargoinsights from "../../../../public/images/sponsors/cargo.png";
import uae_bharatcxo from "../../../../public/images/sponsors/bharath.png";
import uae_bd from "../../../../public/images/sponsors/db_ventures.png";

function Mediapartners() {
  // Define data for sponsors
  const sponsors = [
    {
      name: "Business Minds Media",
      description:
        "Business Minds Media is a global media platform committed to delivering authentic and valuable business insights to entrepreneurs, industry leaders, and decision-makers. The publication serves as a trusted source of information, offering high-quality content designed to inform, inspire, and empower its readership.",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2Fbmm.png?alt=media&token=49127510-b79d-4a4b-84c0-1ff40032fbd6",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2Fbmm-og.png?alt=media&token=18a4318f-066b-426c-9092-077cd03048c4",
      link: "https://www.businessmindsmedia.com",
      new: true,
    },
    {
      name: "Cyber Defense Magazine",
      description:
        "Cyber Defense Magazine is by ethical, honest, passionate information security professionals for IT Security professionals.",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2Fcd-og.png?alt=media&token=c9d90160-e5b9-468f-bd43-24a6f087993b",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2Fcd.png?alt=media&token=1c3a54c9-93a6-4246-b331-828e6a3669a6",
      link: "https://www.cyberdefensemagazine.com/",
      new: true,
    },
    {
      name: "News Patrolling",
      description:
        "News Patrolling is an independent news platform that brings you unbiased stories, trending updates, and insightful articles across politics, lifestyle, startups, technology, and more shaping informed perspectives daily.",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2Fnp-og.png?alt=media&token=805e6192-a32e-4488-8f0e-40aea5ed1a50",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2Fnp.png?alt=media&token=1abdf08a-123f-4c5d-bb5e-dd377092219c",
      link: "https://newspatrolling.com/",
      new: true,
    },
    {
      name: "Silicon India",
      description:
        "Siliconindia, your window to the US-India tech boom. This trailblazing magazine spotlights rising entrepreneurs, tech wizards, and top CEOs, offering crucial business insights that bridge two powerhouse nations. It's the go-to platform for game-changers, featuring stories of icons like Satya Nadella and Sundar Pichai. From startup dreams to public company triumphs, Siliconindia captures it all. With editions in both the US and India, it's not just a magazine – it's a launchpad for the next generation of global tech leaders.",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2Fsi-og.png?alt=media&token=28db2fd1-a04b-4eb9-b2e5-69d139af4d6c",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2Fsi.png?alt=media&token=fdf29922-3dc4-418f-a5cd-e9314e328d1a",
      link: "https://www.siliconindia.com/",
      new: true,
    },
    {
      name: "TechCrack",
      description:
        "TechCrack is a technology blog founded & managed by Romit Sharma. TechCrack is a destination which updates you about the latest technology by providing info on tech news, gadgets, how to's, apps & softwares, gaming, business, marketing and much more... Our aim is to look for Tech In Every Thing.",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2Ftc-og.png?alt=media&token=8308586e-1477-4a23-9d35-ef8c941ef660",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2Ftc.png?alt=media&token=16e5094d-a98b-4603-8108-0f3017c463e5",
      link: "http://www.techcrackblog.com/",
      new: true,
    },
    {
      name: "The Business Fame",
      description:
        "The Business Fame Magazine is ISO 9001:2015 Certified Media Firm that caters business information to the C- level professionals of a vast series of industries. We are providing the innovative online advertising platform to the new start-up companies and young entrepreneurs to showcase their product and services over the globe. The main vision is to boost the start-up and recognize by respective sectors.",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2Fbf-og.png?alt=media&token=985004f8-fb35-44ab-8f8e-8053f42f37c1",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2Fbf.png?alt=media&token=4aa23108-4e1d-4a53-9c83-2ab39cefcc54",
      link: "https://thebusinessfame.com/",
      new: true,
    },

    {
      name: "Business Lens Media",
      description:
        "Business Lens Media is a worldwide magazine for industries and inspiring leaders, reaching 75K+ print subscribers and 320K+ monthly online visitors globally. They cover diverse sectors including finance, technology, consulting, manufacturing, engineering, and more through print and digital platforms.",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2F5.png?alt=media&token=6b70030c-b839-436d-aa3c-1127a239e874",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2F6-og.png?alt=media&token=e52a56dd-5991-441b-995a-b7eb5b7c003f",
      link: "http://www.businesslensmedia.com/",
      new: true,
    },
    {
      name: "World Business Outlook",
      description:
        "World Business Outlook is a Singapore-based business magazine delivering global financial news, market insights and industry perspectives. With 50k+ monthly visitors and strong social media presence, they showcase innovative companies and thought leadership across sectors.",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2F4.png?alt=media&token=0ed48abf-2cdf-4e94-a794-1839fab35a2e",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2F5-og.png?alt=media&token=f2f9d55d-7c60-475a-aa48-02bc5f065c19",
      link: "https://worldbusinessoutlook.com/",
      new: true,
    },
    {
      name: "CIOTechOutlook",
      description:
        "CIOTechOutlook serves as a premier platform for enterprises to showcase innovative solutions, particularly focusing on the growing Indian enterprise market and startup ecosystem. They bridge the information gap between enterprise startups and their target audience.",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2F2.png?alt=media&token=877ae1c0-7f16-4271-b63b-d862b6699adc",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2F3-og.png?alt=media&token=ae899f9b-e377-4aba-a084-5b5dc79bd8b3",
      link: "https://www.ciotechoutlook.com/",
      new: true,
    },
    {
      name: "Corporate Achievers Club",
      description:
        "Corporate Achievers Club (CAC) is a digital media organization specializing in digital promotions, personal branding, and career acceleration, helping professionals and businesses enhance visibility and establish authority in their fields.",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2F6.png?alt=media&token=ec1b234b-f985-47dd-b5c8-5905da188195",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2F2-og.png?alt=media&token=a7ec2335-dd19-4f50-9c03-a319ca6ef24a",
      link: "https://www.linkedin.com/company/corporate-achiever-club",
      new: true,
    },
    {
      name: "AIPressRoom",
      description:
        "AIPressRoom is dedicated to curating AI news, providing in-depth industry analyses, and showcasing AI startup innovations. They offer specialized news distribution services focused on artificial intelligence developments and startups.",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2F1.png?alt=media&token=5e7afce0-51ce-45af-81d5-9270511f7b46",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2F1-og.png?alt=media&token=7cc02b42-4d84-418d-b198-51306b70e23c",
      link: "https://aipressroom.com/",
      new: true,
    },
    {
      name: "Middle East News 247",
      description:
        "Middle East News 247 is a digital portal delivering verified news and information about the Middle East and GCC region. Their experienced journalists provide high-quality, fact-checked content while maintaining the perfect balance between AI technology and human expertise.",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2F3.png?alt=media&token=8d3777a3-c46e-46ba-9496-1af11b576591",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/media-partners%2F4-og.png?alt=media&token=1f3b9434-7e02-4289-80d3-6a74ec13ab7b",
      link: "https://menews247.com/",
      new: true,
    },

    {
      name: "BD Ventures",
      description:
        "BD Ventures (short for Big Deal) is a professional organization founded in 2020 in Vietnam. The company currently operates two main sections: BD Ventures, which functions as a dynamic crypto community, and BD Agency, which serves as a dedicated marketing agency. BD Ventures focuses on supporting and engaging with high-quality projects within the blockchain space, particularly in areas such as the Metaverse, DeFi, NFTs, GameFi, and Layer-1/Layer-2 technologies. Through both its community and agency arms, BD Ventures aims to drive innovation and foster growth in the evolving landscape of blockchain applications.",
      imageUrl: "/images/sponsors/db_ventures-og.png",
      logoUrl: uae_bd,
      link: "https://www.bdventures.vn/",
    },
    {
      name: "Cargo Insights",
      description:
        "Cargo Insights is a premier trade media platform dedicated to the logistics and cargo industry. We offer impactful industry coverage and branding through our monthly magazine, digital news portal, weekly bulletin, daily newsletter, Cargo Insights TV, and the flagship CargoNXT Conference & Recognitions. With a digital reach of 1.8+ lakh, 15,000+ LinkedIn followers, and 5,000+ print circulation, we deliver sharp insights and powerful exposure to logistics professionals navigating today's fast-evolving market landscape.",
      imageUrl: "/images/sponsors/cargo-og.png",
      logoUrl: uae_cargoinsights,
      link: "https://www.cargoinsights.co",
    },
    {
      name: "Bharat CXO",
      description:
        "Bharat CXO is a business and technology media platform spotlighting India's CXOs, entrepreneurs, and innovators through blogs, videos, podcasts, and magazines. We amplify leadership voices, sharing insights that inspire and inform.",
      imageUrl: "/images/sponsors/bharath-og.png",
      logoUrl: uae_bharatcxo,
      link: "https://www.bharatcxo.com",
    },
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
      imageUrl: "/images/sponsors/uae/og/aprochentertainment.png",
      logoUrl: uae_approachentertainment,
      link: "https://www.approachentertainment.com/",
    },
    {
      name: "Approach Bollywood",
      description:
        "Approach Bollywood is a comprehensive newswire service, portal, and app dedicated to creating and distributing multimedia Bollywood and entertainment content for newspapers, magazines, TV channels, radio, apps, and all digital media platforms. Launched by Approach Entertainment, India’s premier group specializing in Celebrity Management, Film Production, Advertising and Corporate Film Solutions, Film Marketing, and Events & Entertainment Marketing, Approach Bollywood serves as a dynamic platform for delivering entertainment news across a wide array of media channels.",
      imageUrl: "/images/sponsors/uae/og/approchbolywood.png",
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
        className={`text-5xl text-center text-black leading-[130%] max-md:text-4xl ${anton.className} `}
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
                  <div className=" font-bold text-[#ccff00]">
                    {sponsor.name}
                  </div>
                  <div className="mt-6 text-sm tracking-tight leading-[130%]">
                    {sponsor.description}
                  </div>
                  <a href={sponsor.link} target="_blank">
                    <img
                      src={sponsor.new ? sponsor.logoUrl : sponsor.logoUrl.src}
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
