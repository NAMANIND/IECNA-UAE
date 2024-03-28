"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { anton, work_sans } from "@/styles/fonts";
import Image from "next/image";
import img1 from "../../../public/images/Intersect.png";
import {
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaSnapchat,
  FaYoutube,
} from "react-icons/fa";

const DescriptionCard = ({
  title,
  img,
  des,
  job,
  linkedin,
  instagram,
  tiktok,
  snapchat,
  youtube,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative text-white w-full h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div>
        <Image
          src={img}
          alt="Speaker Image"
          width={300}
          height={200}
          className="rounded-[32px]"
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
          <p className={` text-[16px] my-2 ${work_sans.className}`}>{job}</p>
          <div className="flex gap-5 ">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} />
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} />
              </a>
            )}
            {tiktok && (
              <a href={tiktok} target="_blank" rel="noopener noreferrer">
                <FaTiktok size={28} />
              </a>
            )}
            {snapchat && (
              <a href={snapchat} target="_blank" rel="noopener noreferrer">
                <FaSnapchat size={28} />
              </a>
            )}
            {youtube && (
              <a href={youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube size={28} />
              </a>
            )}
          </div>

          {isHovered && (
            <p className={`text-[16px] my-2 ${work_sans.className}`}>
              {" "}
              {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              ipsum facilis nisi, blanditiis omnis, sit dolor culpa molestiae
              neque temporibus corrupti. Possimus maiores unde quam nesciunt
              laudantium at iste amet asperiores */}
              {des}
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DescriptionCard;
