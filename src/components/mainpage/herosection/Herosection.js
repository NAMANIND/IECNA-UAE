import * as React from "react";
import Image from "next/image";
import ok from "../../../../public/ok.jpg";
import headimg from "../../../../public/images/head.png";
import { ephesis, anton } from "@/styles/fonts";

function Herosection() {
  return (
    <section
      className="flex overflow-hidden relative z-10 flex-col  w-full text-white   bg-black h-full min-h-[100vh] max-md:max-w-full
    "
    >
      <div className="" style={{ paddingTop: "56.25%", pointerEvents: "none" }}>
        <iframe
          src="https://www.youtube.com/embed/rSuQHzr-TvI?autoplay=1&mute=1&loop=1&showinfo=0&controls=0&rel=0&playlist=rSuQHzr-TvI"
          title="YouTube video player"
          frameborder="0"
          allowFullScreen
          className="absolute  inset-0 w-full h-full top-0 scale-125"
        ></iframe>
      </div>
      <div
        className={`flex absolute w-full bottom-0 z-40 flex-col px-10 pt-20 pb-12 mt-48 max-md:px-5 max-md:mt-10 max-md:max-w-full 
      
         ${anton.className} `}
        style={{
          background: "linear-gradient(0deg, #000, transparent)",
        }}
      >
        <div className="flex gap-5 relative z-50 items-end mt-44 text-4xl max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto mt-6 leading-[250%] text-left">
            3<sup className="text-white">RD</sup> EDITION
          </div>
          <div
            className={`flex-auto self-stretch text-7xl text-center text-[#ccff00] max-md:max-w-full max-md:text-4xl ${ephesis.className}`}
          >
            Aamchi Mumbai
          </div>
          <div className="flex-auto mt-6 leading-[250%] text-right">
            12<sup className="text-white">TH</sup> JULY 2024
          </div>
        </div>
        {/* <h1 className="mt-5 text-8xl text-center leading-[89.68px] max-md:max-w-full max-md:text-4xl font-anton">
          INFLUENCE EXCHANGE CONFEX AND AWARDS
        </h1> */}
        <svg viewBox="0 0 253 18" className="w-[100%]">
          <text x="0" y="15" fill="#ffffff" className="text-white">
            INFLUENCE EXCHANGE CONFEX AND AWARDS
          </text>
        </svg>
      </div>
    </section>
  );
}

export default Herosection;
