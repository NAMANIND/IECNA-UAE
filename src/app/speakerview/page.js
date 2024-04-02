"use client";
import React, { useState, useEffect } from "react";
import { firestore } from "../../../firbase/clientApp";
import Head from "@/components/head/Head";
import { anton, work_sans } from "@/styles/fonts";

const SpeakerViews = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const speakersSnapshot = await firestore.collection("speakers").get();
        const speakersData = speakersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort speakers alphabetically by first name
        const sortedSpeakers = speakersData.sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        );

        setSpeakers(sortedSpeakers);
      } catch (error) {
        console.error("Error fetching speakers:", error);
      }
    };

    fetchSpeakers();
  }, []);

  const deleteSpeaker = async (speakerId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this speaker?"
    );
    if (isConfirmed) {
      try {
        await firestore.collection("speakers").doc(speakerId).delete();
        // Refresh the speakers list after deletion
        const updatedSpeakers = speakers.filter(
          (speaker) => speaker.id !== speakerId
        );
        setSpeakers(updatedSpeakers);
        console.log("Speaker deleted successfully!");
      } catch (error) {
        console.error("Error deleting speaker:", error);
      }
    }
  };

  return (
    <div>
      <Head head="Speaker Views" />
      <div className={`container mx-auto p-8 bg-white ${work_sans.className}`}>
        <h1
          className={`text-3xl font-semibold mb-8 w-full text-center ${anton.className}`}
        >
          Speaker View
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="border rounded-lg w-[400px] overflow-hidden shadow-md relative"
            >
              <img
                src={speaker.imageUrl}
                alt={`${speaker.firstName} ${speaker.lastName}`}
                className="w-full h-56 object-cover object-top"
              />
              <div className="p-4">
                <p className="text-xl font-semibold mb-2">
                  {speaker.firstName} {speaker.lastName}
                </p>
                <p className="text-lg font-medium mb-2">
                  Job Title: {speaker.jobTitle}
                </p>
              </div>
              <button
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md"
                onClick={() => deleteSpeaker(speaker.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerViews;
