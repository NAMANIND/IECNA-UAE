"use client";

import * as React from "react";
import { work_sans, anton } from "@/styles/fonts";
import { motion } from "framer-motion";

const AttendeeCard = ({ title, isBold = false }) => (
  <div
    className={`flex flex-col w-[100%] h-[100%] max-md:ml-0 max-md:w-full group`}
  >
    <div
      className={`grow justify-center align-middle flex items-center px-16 py-12 w-full text-[28px] ${
        isBold ? "font-semibold" : "font-medium"
      } leading-7 text-center text-black whitespace-nowrap bg-[#ccff00] rounded-3xl max-md:px-5 max-md:mt-10 transition-colors duration-300 group-hover:bg-black group-hover:text-white  hover-box-shadow text-wrap`}
    >
      <h1>{title} </h1>
    </div>
  </div>
);

const attendees = [
  { title: "Leading Brands", isBold: true },
  { title: "Influencers", isBold: true },
  { title: "Retailers", isBold: true },
  { title: "Marketing Professionals", isBold: true },
  { title: "Advertising and Marketing agencies", isBold: true },
  { title: "Social Media Managers", isBold: true },
  { title: "CMO", isBold: true },
  { title: "CDO", isBold: true },
  { title: "Influencer Marketing Specialists", isBold: true },
];

function Wsa() {
  const offscreen = {
    y: 100,
    opacity: 0,
  };
  const onscreen = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.1,
      duration: 0.41,
    },
  };
  return (
    <section className="flex flex-col px-10 py-20 bg-black max-md:px-5">
      <motion.h2
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`self-center mt-1 text-5xl text-center text-white uppercase leading-[61.92px] max-md:text-4xl ${anton.className}  `}
      >
        Who Should Attend?
      </motion.h2>
      <div
        className={`mt-20 max-md:mt-10 max-md:max-w-full  flex justify-center  ${work_sans.className}`}
      >
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 w-[100%] justify-center">
          {attendees.slice(0, 3).map((attendee, index) => (
            <motion.div
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="w-[33%]"
            >
              <AttendeeCard title={attendee.title} isBold={attendee.isBold} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-9 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0  w-[100%]  justify-center">
          {attendees.slice(3, 6).map((attendee, index) => (
            <motion.div
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="w-[33%]"
            >
              <AttendeeCard title={attendee.title} isBold={attendee.isBold} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-9 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0  w-[100%]  justify-center">
          {attendees.slice(6).map((attendee, index) => (
            <motion.div
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="w-[33%]"
            >
              <AttendeeCard title={attendee.title} isBold={attendee.isBold} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Wsa;
