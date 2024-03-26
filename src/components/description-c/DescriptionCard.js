"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { anton, work_sans } from "@/styles/fonts";
import Image from "next/image";
import img1 from "../../../public/images/Intersect.png";

const DescriptionCard = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative text-white w-full h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div>
        <Image
          src={img1}
          alt="Speaker Image"
          width={300}
          height={200}
          layout="responsive"
        />

        <motion.div
          className="bg-black shadow-2xl overflow-hidden rounded-[32px] px-5 py-5 absolute bottom-[-100px] w-full "
          initial={{ y: 0, height: 200 }}
          animate={isHovered ? { y: 0, height: 350 } : { y: 0, height: 150 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className={`text-[24px] text-[#ccff00] ${anton.className}`}>
            {title}
          </h2>
          <p className={` text-[16px] ${work_sans.className}`}>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <p>Author: John Doe</p>
          {isHovered && (
            <p>
              Additional information Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magnam asperiores obcaecati reprehenderit
              tempore nam laudantium alias magni animi, officia recusandae iusto
              nisi error rem excepturi vel sapiente hic eos. Architecto
              doloribus nulla non porro iusto.
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DescriptionCard;
