import * as React from "react";
import { anton } from "@/styles/fonts";

function Head({ head }) {
  return (
    <main className="flex overflow-hidden relative flex-col pt-20 text-9xl text-center h-[40vh] md:min-h-[574px] text-white">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/063b8e8fe7eb40e3446e090b35f861bbf4fa8f4b8d7560523fc2deb330431dd3?apiKey=5e27b1defd60460eaa6dca842133145f&"
        className="object-cover absolute inset-0 w-full h-full"
        alt=""
      />
      <h1
        className={`relative z-50 md:mt-36 mt-14 w-full max-md:max-w-full text-6xl md:text-9xl uppercase  ${anton.className} `}
        style={{ textShadow: "0 44px 44px rgba(0, 0, 0, 0.85)" }}
      >
        {head}
      </h1>
      <section
        className="absolute bottom-0 w-full md:min-h-[25%] h-[50%] max-md:min-h-auto"
        style={{
          background: "linear-gradient(0deg, #000, transparent)",
        }}
      />
    </main>
  );
}

export default Head;
