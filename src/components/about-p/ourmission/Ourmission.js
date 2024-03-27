import * as React from "react";
import Marquee from "react-fast-marquee";
import { anton, work_sans } from "@/styles/fonts";

function Ourmisson() {
  return (
    <section className="flex flex-col items-center  text-center text-black bg-white py-10">
      <h1
        className={`text-5xl leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        OUR MISSION
      </h1>
      <p
        className={`mt-20 px-60 text-2xl font-medium tracking-tighter leading-8 max-md:mt-10 max-md:max-w-full ${work_sans.className} `}
      >
        At Influence Exchange Confex and Awards, we are dedicated to fostering
        connections, inspiring creativity, and acknowledging the efforts of
        influencers and marketers who are leading transformative initiatives
        across various sectors.
      </p>

      <div
        className="overflow-hidden h-[500px]
      relative z-10

     
      "
      >
        <div
          style={{ transform: "rotate(-5deg)" }} // Rotate the text by -5 degrees
          className="w-[120%] bg-black relative  left-[-10%] "
        >
          <Marquee
            gradient={false}
            speed={50}
            className="self-stretch mt-32  shadow-2xl min-h-[99px] max-md:mt-10 "
            autoFill
          >
            <h2
              className={`text-5xl text-center text-lime-400 ${anton.className} `}
            >
              DUBAI * RIYADH * MUMBAI * DUBAI * RIYADH * MUMBAI * DUBAI * RIYADH
              * MUMBAI * DUBAI *
            </h2>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Ourmisson;
