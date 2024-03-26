import * as React from "react";
import { work_sans, anton } from "@/styles/fonts";

function Whoshould() {
  // Define an array of objects representing each card's data
  const cardData = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5779ca208416dcca9972733648b9f2e822b58e87df707e6b2dc66f129f2c39a3?apiKey=5e27b1defd60460eaa6dca842133145f&",
      title: "SOCIAL MEDIA PLATFORMS",
      description:
        "Social media platforms are used by influencers to reach the target audiences.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5779ca208416dcca9972733648b9f2e822b58e87df707e6b2dc66f129f2c39a3?apiKey=5e27b1defd60460eaa6dca842133145f&",
      title: "SOCIAL MEDIA PLATFORMS",
      description:
        "Social media platforms are used by influencers to reach the target audiences.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5779ca208416dcca9972733648b9f2e822b58e87df707e6b2dc66f129f2c39a3?apiKey=5e27b1defd60460eaa6dca842133145f&",
      title: "SOCIAL MEDIA PLATFORMS",
      description:
        "Social media platforms are used by influencers to reach the target audiences.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5779ca208416dcca9972733648b9f2e822b58e87df707e6b2dc66f129f2c39a3?apiKey=5e27b1defd60460eaa6dca842133145f&",
      title: "SOCIAL MEDIA PLATFORMS",
      description:
        "Social media platforms are used by influencers to reach the target audiences.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5779ca208416dcca9972733648b9f2e822b58e87df707e6b2dc66f129f2c39a3?apiKey=5e27b1defd60460eaa6dca842133145f&",
      title: "SOCIAL MEDIA PLATFORMS",
      description:
        "Social media platforms are used by influencers to reach the target audiences.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5779ca208416dcca9972733648b9f2e822b58e87df707e6b2dc66f129f2c39a3?apiKey=5e27b1defd60460eaa6dca842133145f&",
      title: "SOCIAL MEDIA PLATFORMS",
      description:
        "Social media platforms are used by influencers to reach the target audiences.",
    },
    // Add more card data as needed
  ];

  return (
    <div className="flex flex-col pt-11 pb-20 bg-black">
      <div
        className={`self-center text-5xl text-center text-white leading-[61.92px] max-md:max-w-full max-md:text-4xl ${anton.className}`}
      >
        WHO SHOULD SPONSOR?
      </div>
      <div className="flex flex-col px-10 mt-28 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="px-px max-md:max-w-full">
          <div
            className={`flex flex-wrap max-md:flex-col gap-[3%] max-md:gap-0 ${work_sans.className} `}
          >
            {/* Map over the cardData array to render each card dynamically */}
            {cardData.map((card, index) => (
              <div
                key={index}
                className="flex flex-col w-[31%] max-md:ml-0 my-10 max-md:w-full"
              >
                <div className="flex flex-col grow max-md:mt-10">
                  <img
                    loading="lazy"
                    src={card.imageUrl}
                    className="w-full aspect-square"
                  />
                  <div
                    className={`shrink-0 my-12 h-px  max-md:my-10 
                  
                  ${index % 3 === 1 ? "bg-lime-400" : "bg-white"}
                  `}
                  />
                </div>
                <div className="text-xl font-medium tracking-tighter leading-7 text-white uppercase max-md:mt-10">
                  <span className="text-3xl font-bold text-lime-400 uppercase">
                    {card.title}
                  </span>
                  <br />
                  <br />
                  {card.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whoshould;
