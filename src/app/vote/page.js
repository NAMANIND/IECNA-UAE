"use client";

import React, { useState, useEffect } from "react";
import { firestore } from "../../../firbase/clientApp";

const Voting = () => {
  const [nomineesByCategory, setNomineesByCategory] = useState({});
  const [selectedNominees, setSelectedNominees] = useState([]);

  useEffect(() => {
    const fetchNominees = async () => {
      try {
        const nomineesSnapshot = await firestore.collection("nominees").get();
        const nomineesData = nomineesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const nomineesByCategoryObj = {};
        nomineesData.forEach((nominee) => {
          for (const categoryKey in nominee.categories) {
            const category = nominee.categories[categoryKey];
            console.log("categoryereeeeeeeee", category);
            if (category.og !== undefined) {
              if (!nomineesByCategoryObj[category.og]) {
                nomineesByCategoryObj[category.og] = [];
              }
              nomineesByCategoryObj[category.og].push({
                id: nominee.id,
                imageUrl: nominee.imageUrl,
                selected: false,

                category: category.og,
                vote: category.vote,
                firstName: nominee.firstName,
                lastName: nominee.lastName,
              });
            }
          }
        });

        setNomineesByCategory(nomineesByCategoryObj);
      } catch (error) {
        console.error("Error fetching nominees:", error);
      }
    };

    fetchNominees();
  }, []);

  const handleNomineeSelect = (category, nomineeId) => {
    setSelectedNominees((prevSelectedNominees) => {
      // Check if any nominee is already selected for the category
      const isCategorySelected = prevSelectedNominees.some(
        (selectedNominee) => selectedNominee.category === category
      );

      if (isCategorySelected) {
        // Replace the existing selection with the newly selected nominee for the category
        return prevSelectedNominees.map((selectedNominee) =>
          selectedNominee.category === category
            ? { ...selectedNominee, nomineeId: nomineeId }
            : selectedNominee
        );
      } else {
        // Add the newly selected nominee to the selectedNominees array
        return [
          ...prevSelectedNominees,
          {
            nomineeId: nomineeId,
            category: category,
          },
        ];
      }
    });
  };

  const handleVote = async () => {
    try {
      const batch = firestore.batch();

      for (const nomineeSelection of selectedNominees) {
        const { category, nomineeId } = nomineeSelection;
        const nomineeRef = firestore.collection("nominees").doc(nomineeId);
        const nomineeSnapshot = await nomineeRef.get();

        if (nomineeSnapshot.exists) {
          const nomineeData = nomineeSnapshot.data();
          const updatedCategories = { ...nomineeData.categories };

          const categoryKey = category
            .replace(/\s/g, "")
            .replace(/[/\\.,;:'"!@#$%^&*()_+|~=`{}[\]]/g, "_"); // Remove spaces from the category name for the key

          if (updatedCategories.hasOwnProperty(categoryKey)) {
            // Check if the selected category exists in the nominee's categories
            console.log(
              "updatedCategories[categoryKey]",
              updatedCategories[categoryKey],
              updatedCategories[categoryKey].vote
            );
            updatedCategories[categoryKey].vote += 1; // Increment vote count for the selected category
          }

          const updatedVote = updatedCategories[categoryKey].vote;
          console.log("path" + [`categories.${categoryKey}.vote`]);
          batch.update(nomineeRef, {
            [`categories.${categoryKey}.vote`]: updatedVote,
          });
        }
      }

      await batch.commit();
      console.log("Votes recorded successfully!");
    } catch (error) {
      console.error("Error recording votes:", error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8">Vote for Nominees</h1>
      {Object.entries(nomineesByCategory).map(([category, nominees]) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-3 gap-4">
            {nominees.map((nominee) => (
              <div
                key={nominee.id}
                className={`flex flex-col items-center border ${
                  selectedNominees.some(
                    (selectedNominee) =>
                      selectedNominee.category === category &&
                      selectedNominee.nomineeId === nominee.id
                  )
                    ? "border-white"
                    : "border-transparent"
                }`}
                onClick={() => handleNomineeSelect(category, nominee.id)}
              >
                <img
                  src={nominee.imageUrl}
                  alt={nominee.firstName}
                  className="w-24 h-24 rounded-full mb-2"
                />
                <p>
                  {nominee.firstName} {nominee.lastName}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleVote}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Vote
      </button>
    </div>
  );
};

export default Voting;
