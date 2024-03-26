// pages/vote/[name].js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { firestore } from "../../../../firbase/clientApp";

const PersonalVote = ({ params }) => {
  const { name } = params;
  const [nomineeData, setNomineeData] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState({});

  useEffect(() => {
    const fetchNomineeData = async () => {
      try {
        const nomineeSnapshot = await firestore
          .collection("nominees")
          .where("firstName", "==", name)
          .get();

        if (nomineeSnapshot.empty) {
          console.log("Nominee not found!");
          // Handle nominee not found (show 404 or a message)
          return;
        }

        const nominee = nomineeSnapshot.docs[0].data();
        setNomineeData(nominee);
        // Initialize selected categories
        const initialSelectedCategories = {};
        for (const categoryKey in nominee.categories) {
          initialSelectedCategories[categoryKey] = null;
        }
        setSelectedCategories(initialSelectedCategories);
      } catch (error) {
        console.error("Error fetching nominee data:", error);
      }
    };

    if (name) {
      fetchNomineeData();
    }
  }, [name]);

  const handleCategorySelect = (categoryKey) => {
    setSelectedCategories((prevSelectedCategories) => ({
      ...prevSelectedCategories,
      [categoryKey]: nomineeData.categories[categoryKey].vote,
    }));
  };

  const handleVote = async () => {
    try {
      // Fetch the latest nominee data before voting
      const nomineeRef = firestore.collection("nominees").doc(nomineeData.id);
      const nomineeDoc = await nomineeRef.get();

      if (!nomineeDoc.exists) {
        console.error("Nominee not found");
        return;
      }

      const updatedNomineeData = nomineeDoc.data();

      const batch = firestore.batch();

      // Iterate over the selected categories and update their vote counts
      for (const [categoryKey, voteCount] of Object.entries(
        selectedCategories
      )) {
        if (voteCount !== null) {
          // Check if the category was selected for voting
          batch.update(nomineeRef, {
            [`categories.${categoryKey}.vote`]:
              updatedNomineeData.categories[categoryKey].vote + 1,
          });
        }
      }

      await batch.commit();
      console.log("Votes recorded successfully!");
    } catch (error) {
      console.error("Error recording votes:", error);
    }
  };

  if (!nomineeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8">{name}</h1>
      <Image src={nomineeData.imageUrl} alt={name} className="mb-4" />
      <h2 className="text-xl font-semibold mb-4">Categories:</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(nomineeData.categories).map(
          ([categoryKey, category]) => (
            <div key={categoryKey} className="flex flex-col">
              <label>
                <input
                  type="radio"
                  name={categoryKey}
                  value={category.og}
                  onChange={() => handleCategorySelect(categoryKey)}
                />
                {category.og}
              </label>
            </div>
          )
        )}
      </div>
      <button
        onClick={handleVote}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Vote
      </button>
    </div>
  );
};

export default PersonalVote;
