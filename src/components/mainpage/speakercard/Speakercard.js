import * as React from "react";
import { anton } from "@/styles/fonts";
import DescriptionCard from "@/components/description-c/DescriptionCard";
import Button from "@/components/button/Button";

function SpeakerCard() {
  const speakers = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/72f444bd8e1e9660c31edb66644158de99a98f7f4c3edea63407f52e679fe118?apiKey=5e27b1defd60460eaa6dca842133145f&",
      name: "Speaker 1",
      description:
        "Meet speakers from big brands, growing startups and innovative consultancies.",
      designation: "Designation, Company",
      socialIcon1:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/637ed5ab8d57951f87837ef7acf1134d47ef09d9965f423219dea47f111c0537?apiKey=5e27b1defd60460eaa6dca842133145f&",
      socialIcon2:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/83f1de3d82d963d38173ea9945805f5c872dc5c7cf4c1dc1cfc4e3c250dde3ac?apiKey=5e27b1defd60460eaa6dca842133145f&",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4ba75476a5bc4670b350da8c0dbaf098cd3789caf9dfea251d265506161cdc08?apiKey=5e27b1defd60460eaa6dca842133145f&",
      name: "Speaker 2",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3786e6f64dc06b5c611e48d72bda89b1166390ba8455fbc685dcfcc4abd2fb30?apiKey=5e27b1defd60460eaa6dca842133145f&",
      name: "Speaker 3",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3c253819a5ac1c5899839c91f531f789bcffab1e0410ad9413896883b2bf8078?apiKey=5e27b1defd60460eaa6dca842133145f&",
      name: "Speaker 4",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/48c91179b60bd5a4d37a413713862bd5548ba97912c75ed3d705ee5b09a24bf2?apiKey=5e27b1defd60460eaa6dca842133145f&",
      name: "Speaker 5",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3786e6f64dc06b5c611e48d72bda89b1166390ba8455fbc685dcfcc4abd2fb30?apiKey=5e27b1defd60460eaa6dca842133145f&",
      name: "Speaker 6",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3c253819a5ac1c5899839c91f531f789bcffab1e0410ad9413896883b2bf8078?apiKey=5e27b1defd60460eaa6dca842133145f&",
      name: "Speaker 7",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3c253819a5ac1c5899839c91f531f789bcffab1e0410ad9413896883b2bf8078?apiKey=5e27b1defd60460eaa6dca842133145f&",
      name: "Speaker 8",
    },
  ];

  return (
    <section
      className={`flex flex-col px-10 bg-white py-[200px] w-full   ${anton.className}`}
    >
      <h2 className="self-center text-5xl text-center text-black leading-[61.92px] max-md:max-w-full max-md:text-4xl">
        OUR ESTEEMED SPEAKERS
      </h2>
      <div className="mt-32 w-full max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-[200px] w-full">
          {speakers.map((speaker, index) => (
            <DescriptionCard
              key={index}
              title={speaker.name}
              des={speaker.description}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-5 self-center mt-[120px] max-w-full text-2xl font-medium tracking-tighter uppercase leading-[90px] w-[688px] max-md:flex-wrap max-md:mt-10">
        <Button href="./speakers" color="green" img="arrow">
          See All Speakers
        </Button>
        <Button href="./speakers" color="black" img="mic">
          Become a Speaker
        </Button>
      </div>
    </section>
  );
}

export default SpeakerCard;
