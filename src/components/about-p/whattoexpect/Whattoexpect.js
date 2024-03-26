import * as React from "react";
import Marquee from "react-fast-marquee";
import { anton, work_sans } from "@/styles/fonts";

function Whattoexpect() {
  // Sample data for cards
  const cardData = [
    {
      title: "Engaging Interactions",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/53a9391213ddc0738c4fa05c1b241e2fe741f6d50ac59fe6baa51499b6659059?apiKey=5e27b1defd60460eaa6dca842133145f&",
      description:
        "Immerse yourself in a vibrant atmosphere where marketeers and influencers converge to share ideas, insights, and business prospects, fostering genuine connections and collaborations.",
    },
    {
      title: "Engaging Interactions",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/53a9391213ddc0738c4fa05c1b241e2fe741f6d50ac59fe6baa51499b6659059?apiKey=5e27b1defd60460eaa6dca842133145f&",
      description:
        "Immerse yourself in a vibrant atmosphere where marketeers and influencers converge to share ideas, insights, and business prospects, fostering genuine connections and collaborations.",
    },
    {
      title: "Engaging Interactions",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/53a9391213ddc0738c4fa05c1b241e2fe741f6d50ac59fe6baa51499b6659059?apiKey=5e27b1defd60460eaa6dca842133145f&",
      description:
        "Immerse yourself in a vibrant atmosphere where marketeers and influencers converge to share ideas, insights, and business prospects, fostering genuine connections and collaborations.",
    },
    {
      title: "Engaging Interactions",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/53a9391213ddc0738c4fa05c1b241e2fe741f6d50ac59fe6baa51499b6659059?apiKey=5e27b1defd60460eaa6dca842133145f&",
      description:
        "Immerse yourself in a vibrant atmosphere where marketeers and influencers converge to share ideas, insights, and business prospects, fostering genuine connections and collaborations.",
    },
    // Add more objects as needed
  ];

  return (
    <div className="flex flex-col items-center  bg-white">
      <div className={`${anton.className} w-full`}>
        <h1 className="uppercase text-4xl relative z-10 text-center text-black leading-[62.4px] max-md:text-4xl max-md:leading-7 max-md:max-w-full max-md:mt-10 max-md:mb-5 top-32">
          What to expect
        </h1>
        <Marquee
          gradient={false}
          speed={50}
          autoFill
          className="self-stretch w-full h-[200px] text-8xl text-center leading-[62.4px] text-black text-opacity-10 max-md:max-w-full max-md:text-4xl"
        >
          <h2>EXPECT EVERYTHING UNEXPECTED!</h2>
        </Marquee>
      </div>

      <div
        className={`mt-20 text-2xl  p-10 font-medium tracking-tighter leading-8 text-center text-black max-md:mt-10 max-md:max-w-full ${work_sans.className} `}
      >
        At the Influence Exchange & Awards Confex India 2024, expect an
        unforgettable experience filled with engaging interactions, curated
        content, and invaluable insights:
      </div>

      <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full  p-10">
        <div className="flex flex-wrap gap-[2%] max-md:gap-0 rounded-[36px] ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col w-[49%] max-md:ml-0 max-md:w-full py-5"
            >
              <div className="flex overflow-hidden relative flex-col pt-20 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={card.imgUrl}
                  alt={card.title}
                  className="object-cover absolute inset-0 size-full  rounded-[36px]"
                />
                <div
                  className="flex relative flex-col px-6 pt-20 pb-8 mt-40 rounded-[36px] max-md:px-5 max-md:mt-10 max-md:max-w-full
                
                "
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)  ",
                  }}
                >
                  <div
                    className={`mt-12 text-5xl text-lime-400 uppercase leading-[62px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[58px] ${anton.className} `}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whattoexpect;
