import * as React from "react";
import { anton, work_sans } from "@/styles/fonts";
import Marquee from "react-fast-marquee";

function RegisterNowButton() {
  return (
    <button
      className={`relative justify-center items-center px-16 py-5 mt-72 max-w-full bg-lime-400 shadow-2xl rounded-[40px] w-[314px] max-md:px-5 max-md:mt-10 ${work_sans.className} `}
    >
      Register Now
    </button>
  );
}

function EventDetails() {
  return (
    <div
      className={`flex flex-col pl-14 mt-14 max-md:pl-5 max-md:mt-10 max-md:max-w-full ${anton.className}  `}
    >
      <time className=" text-7xl text-white max-md:text-4xl">
        <span className="text-white">12</span>
        <span className="text-white">th</span>
        <span className="text-white"> JUL 2024</span>
      </time>
      <div className="self-end mt-12 text-5xl  font-medium  text-lime-400 tracking-[4px]	 leading-[56px] w-[282px] max-md:mt-10 max-md:text-4xl max-md:leading-[52px]">
        VENUE
        <br />
        MUMBAI
      </div>
    </div>
  );
}

function Venue() {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="overflow-hidden h-[500px] ">
        <Marquee
          gradient={false}
          speed={50}
          className="self-stretch mt-32 w-[100%] bg-black shadow-2xl min-h-[99px] max-md:mt-10 max-md:max-w-full"
          style={{ transform: "rotate(5deg)" }} // Rotate the text by -5 degrees
        >
          <h2 className={`text-5xl text-center text-white ${anton.className}`}>
            REGISTER - REGISTER - REGISTER - REGISTER - REGISTER - REGISTER -
            REGISTER - REGISTER
          </h2>
        </Marquee>
      </div>
      <div className={`w-full bg-white ${work_sans.className}  p-10 `}>
        <div className="flex gap-5 max-md:flex-col bg-black rounded-[36px]   max-md:gap-0">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow items-center px-16 pt-20 pb-12 text-2xl font-semibold text-center text-black uppercaseleading-[90px] min-h-[460px] max-md:px-5 max-md:mt-10 max-md:max-w-full rounded-[36px] ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f437b9ee47c5ec45b677804bf3ebcb7e7116cf67ea2bc8d3f00f64bde1e7e28?apiKey=5e27b1defd60460eaa6dca842133145f&"
                className="object-cover absolute inset-0 size-full rounded-[36px] "
                alt=""
              />
              <RegisterNowButton />
            </div>
          </div>
          <div className="flex flex-col mr-10 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto font-bold text-right max-md:mt-10 max-md:max-w-full">
              <h2 className="text-3xl tracking-tighter text-lime-400 uppercase leading-[56px] max-md:max-w-full">
                We will be waiting for you!
              </h2>
              <EventDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Venue;
