"use client";

import React, { useState } from "react";
import { work_sans } from "@/styles/fonts";
import Image from "next/image";

import logo from "../../../public/logo.svg";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Navbar() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else if (previous - latest > 20) {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className=" py-4 fixed w-full top-0 z-[1000]  right-0 bottom-0 left-0  0 0 0 0 h-fit "
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className="my-5 border-1 
        border-zinc-400
        
          rounded-full  sm:px-10 w-100 backdrop-blur bg-black/10 px-7"
        >
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <a href="/" className="text-white text-xl font-bold">
                <Image src={logo} alt="logo" width={100} height={100} />
              </a>
            </div>
            <div className="hidden md:flex nav-p">
              <ul
                className={`flex space-x-8  text-white font-medium ${work_sans.className} `}
              >
                <li className="relative group">
                  <a href="/about" className=" hover:text-gray-700">
                    ABOUT
                  </a>
                  <div className="absolute top-full left-0 w-[200px] bg-white text-white z-10 hidden group-hover:block">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Why Attend
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      What to Expect
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Venue
                    </a>
                  </div>
                </li>
                <li className="relative group">
                  <a href="/awards" className=" hover:text-gray-700">
                    AWARDS
                  </a>
                  <div className="absolute top-full left-0 w-40 bg-white text-white z-10 hidden group-hover:block">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Categories
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Nominate
                    </a>
                  </div>
                </li>
                <li className="relative group">
                  <a href="/speakers" className=" hover:text-gray-700">
                    SPEAKERS
                  </a>
                  <div className="absolute top-full left-0 w-[200px] bg-white text-white z-10 hidden group-hover:block">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Speakers
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Become a Speaker
                    </a>
                  </div>
                </li>
                <li className="relative group">
                  <a href="/sponsors" className=" hover:text-gray-700">
                    SPONSORS
                  </a>
                  <div className="absolute top-full left-0 w-[250px] bg-white text-white z-10 hidden group-hover:block">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Sponsors
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Media Partner
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Become a Sponsor
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Become a Media Partner
                    </a>
                  </div>
                </li>
                <li>
                  <a href="/register" className=" hover:text-gray-700">
                    REGISTER
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
