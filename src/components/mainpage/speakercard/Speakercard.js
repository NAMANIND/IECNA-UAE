"use client";

import * as React from "react";
import { anton } from "@/styles/fonts";
import DescriptionCard from "@/components/description-c/DescriptionCard";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";

// Import Firebase Firestore and initialize Firebase app if not already done
import { firestore } from "../../../../firbase/clientApp";

function SpeakerCard() {
  const [speakers, setSpeakers] = React.useState([]); // State to store fetched speakers data

  React.useEffect(() => {
    // Function to fetch speakers data from Firestore
    const fetchSpeakers = async () => {
      try {
        const speakersCollection = await firestore.collection("speakers").get();
        const speakersData = speakersCollection.docs.map((doc) => doc.data());
        setSpeakers(speakersData);
      } catch (error) {
        console.error("Error fetching speakers:", error);
      }
    };

    // Call the fetchSpeakers function when component mounts
    fetchSpeakers();
  }, []); // Empty dependency array ensures useEffect runs only once

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
    <section
      className={`flex flex-col px-10 bg-white py-[200px] w-full   ${anton.className}`}
    >
      <motion.h2
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.1 }}
        className="self-center text-5xl text-center text-black leading-[61.92px] max-md:max-w-full max-md:text-4xl"
      >
        OUR ESTEEMED SPEAKERS
      </motion.h2>
      <div className="mt-[120px] w-full max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-[150px] w-full">
          {speakers.map((speaker, index) => (
            <motion.div
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.1 }}
              key={index}
            >
              {/* Replace sample data with fetched speaker data */}
              <DescriptionCard
                key={index}
                img={speaker.imageUrl} // Speaker image URL
                title={speaker.firstName + " " + speaker.lastName} // Full name
                job={speaker.company + ", " + speaker.jobTitle} // Job profile and company
                des={speaker.details} // Speaker description
                linkedin={speaker.linkedin} // LinkedIn URL
                instagram={speaker.instagram} // Instagram URL
                tiktok={speaker.tiktok} // TikTok URL
                snapchat={speaker.snapchat} // Snapchat URL
                youtube={speaker.youtube} // YouTube URL
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.1 }}
        className="flex gap-5 self-center mt-[200px] max-w-full text-2xl font-medium tracking-tighter uppercase leading-[90px] w-[688px] max-md:flex-wrap max-md:mt-10"
      >
        <Button href="./speakers" color="green" img="arrow">
          See All Speakers
        </Button>
        <Button href="./speakers" color="black" img="mic">
          Become a Speaker
        </Button>
      </motion.div>
    </section>
  );
}

export default SpeakerCard;
