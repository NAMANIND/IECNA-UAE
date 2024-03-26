import * as React from "react";
import img from "../../../../public/images/well.png";
import Image from "next/image";
import { anton } from "@/styles/fonts";
import Button from "@/components/button/Button";

function Well() {
  return (
    <div className="bg-white py-28 px-10 relative w-full">
      <div
        className="relative flex gap-5 max-md:flex-col max-md:gap-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #000 0.41%, #000 34.07%, #000 64.85%, #000 96.58%)",
          backgroundSize: "100% 100%",
          backgroundPositionY: "100%",
          backgroundRepeat: "no-repeat",
          alignItems: "end",
          borderRadius: "36px", // Adjust the value as per your preference
        }}
      >
        <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
          <div className="absolute left-7 bottom-4  max-md:mt-10 max-md:max-w-full">
            <Image
              loading="lazy"
              src={img}
              className="w-full h-full scale-[1.1]  rounded-[36px] aspect-[1.61]"
            />
          </div>
        </div>
        <div
          className={`flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full ${anton.className}`}
        >
          <div className="flex flex-col p-10 uppercase max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl leading-10 text-white max-md:max-w-full">
              Well, they say third time is a{" "}
              <span className="text-lime-400">charm!</span>
              <br />
              And IXG is back with the{" "}
              <span className="text-lime-400">third edition </span>
              <br /> of the much awaited{" "}
              <span className="text-lime-400">IEC&A!</span>
            </div>
            <div className="flex gap-1.5 self-start  text-lg font-semibold tracking-tighter leading-[90px] rounded-[40px]">
              <Button href="./register" color="black" img="arrow">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Well;
