import * as React from "react";
import { anton } from "@/styles/fonts";

function Head({ head }) {
  return (
    <main className="flex overflow-hidden relative flex-col pt-20 text-9xl text-center text-white whitespace-nowrap  min-h-[574px] max-md:text-4xl">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/063b8e8fe7eb40e3446e090b35f861bbf4fa8f4b8d7560523fc2deb330431dd3?apiKey=5e27b1defd60460eaa6dca842133145f&"
        className="object-cover absolute inset-0 size-full"
        alt=""
      />
      <h1
        className={`relative mt-36 w-full max-md:mt-10 max-md:max-w-full max-md:text-4xl uppercase  ${anton.className} `}
        style={{ textShadow: "0 44px 44px rgba(0, 0, 0, 0.85)" }}
      >
        {head}
      </h1>
      <section
        className="relative bottom-0 w-full min-h-[244px] max-md:max-w-full"
        style={{
          background: "linear-gradient(0deg, #000, transparent)",
        }}
      />
    </main>
  );
}

export default Head;
