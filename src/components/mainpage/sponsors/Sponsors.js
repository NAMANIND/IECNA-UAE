import * as React from "react";
import { anton } from "@/styles/fonts";

function Sponsors() {
  return (
    <div
      className="flex flex-col justify-center sm:px-20 px-5 sm:pt-32 pt-10 sm:pb-20 pb-0 text-5xl text-center text-black bg-white whitespace-nowrap leading-[61.92px] w-full max-md:text-4xl"
      style={{ alignItems: "center" }}
    >
      <div className={`self-center max-md:text-4xl py-10 ${anton.className} `}>
        SPONSORS
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/972746c7da623dde186080c9f6c5eb3916adcec22ef6a434f3491b0f61772a8b?apiKey=5e27b1defd60460eaa6dca842133145f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/972746c7da623dde186080c9f6c5eb3916adcec22ef6a434f3491b0f61772a8b?apiKey=5e27b1defd60460eaa6dca842133145f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/972746c7da623dde186080c9f6c5eb3916adcec22ef6a434f3491b0f61772a8b?apiKey=5e27b1defd60460eaa6dca842133145f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/972746c7da623dde186080c9f6c5eb3916adcec22ef6a434f3491b0f61772a8b?apiKey=5e27b1defd60460eaa6dca842133145f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/972746c7da623dde186080c9f6c5eb3916adcec22ef6a434f3491b0f61772a8b?apiKey=5e27b1defd60460eaa6dca842133145f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/972746c7da623dde186080c9f6c5eb3916adcec22ef6a434f3491b0f61772a8b?apiKey=5e27b1defd60460eaa6dca842133145f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/972746c7da623dde186080c9f6c5eb3916adcec22ef6a434f3491b0f61772a8b?apiKey=5e27b1defd60460eaa6dca842133145f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/972746c7da623dde186080c9f6c5eb3916adcec22ef6a434f3491b0f61772a8b?apiKey=5e27b1defd60460eaa6dca842133145f&"
        className="mt-20 sm:w-[80%] w-[100%] aspect-[4.76] max-md:mt-10 max-md:max-w-full"
      />
    </div>
  );
}

export default Sponsors;
