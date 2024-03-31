"use client";
import React, { useState, useEffect } from "react";
import { firestore } from "../../../firbase/clientApp";
import Head from "@/components/head/Head";
import { anton, work_sans } from "@/styles/fonts";

const Voting = () => {
  const [nomineesByCategory, setNomineesByCategory] = useState({});
  const [selectedNominees, setSelectedNominees] = useState([]);
  const [isAnyCategorySelected, setIsAnyCategorySelected] = useState(false);

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
      const isCategorySelected = prevSelectedNominees.some(
        (selectedNominee) => selectedNominee.category === category
      );

      if (isCategorySelected) {
        // Check if the selected nominee is already in the selected nominees list
        const isNomineeSelected = prevSelectedNominees.some(
          (selectedNominee) =>
            selectedNominee.category === category &&
            selectedNominee.nomineeId === nomineeId
        );

        if (isNomineeSelected) {
          // If the selected nominee is already selected, remove it from the list
          return prevSelectedNominees.filter(
            (selectedNominee) =>
              !(
                selectedNominee.category === category &&
                selectedNominee.nomineeId === nomineeId
              )
          );
        } else {
          // Otherwise, replace the existing selection with the newly selected nominee for the category
          return prevSelectedNominees.map((selectedNominee) =>
            selectedNominee.category === category
              ? { ...selectedNominee, nomineeId: nomineeId }
              : selectedNominee
          );
        }
      } else {
        // Add the newly selected nominee to the selectedNominees array
        setIsAnyCategorySelected(true); // Set flag to true when any category is selected
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
            .replace(/[/\\.,;:'"!@#$%^&*()_+|~=`{}[\]]/g, "_");

          if (updatedCategories.hasOwnProperty(categoryKey)) {
            updatedCategories[categoryKey].vote += 1;
          }

          const updatedVote = updatedCategories[categoryKey].vote;
          batch.update(nomineeRef, {
            [`categories.${categoryKey}.vote`]: updatedVote,
          });
        }
      }

      await batch.commit();
      console.log("Votes recorded successfully!");
      // Trigger popup after voting is done
      alert("Thank you for voting! Your vote has been recorded successfully.");

      // Clear selected nominees
      setSelectedNominees([]);
    } catch (error) {
      console.error("Error recording votes:", error);
    }
  };

  return (
    <div>
      <Head head="Voting" />
      <div className={`container mx-auto p-8 bg-white ${work_sans.className} `}>
        <h1
          className={`text-4xl font-semibold my-20 w-full text-center ${anton.className} `}
        >
          Vote for Nominees
        </h1>
        {Object.entries(nomineesByCategory).map(([category, nominees]) => (
          <div key={category} className="mb-8">
            <h2
              className={`text-3xl font-semibold my-10 w-full text-center ${work_sans.className} `}
            >
              {category}
            </h2>
            <div className="grid md:grid-cols-3 grid-flow-row md:gap-4 gap-10">
              {nominees.map((nominee) => (
                <div
                  key={nominee.id}
                  className={`relative border rounded-[32px] overflow-hidden shadow-md ${
                    selectedNominees.some(
                      (selectedNominee) =>
                        selectedNominee.category === category &&
                        selectedNominee.nomineeId === nominee.id
                    )
                      ? "border-blue-500  border-[4px] "
                      : "border-gray-300  border-[4px]"
                  }`}
                  onClick={() => handleNomineeSelect(category, nominee.id)}
                >
                  <img
                    src={nominee.imageUrl}
                    alt={nominee.firstName}
                    className="w-full h-[400px] object-cover rounded-[20px]"
                  />
                  <div className="p-4">
                    <p className="text-xl font-semibold mb-2">
                      {nominee.firstName} {nominee.lastName}
                    </p>
                  </div>
                  {selectedNominees.some(
                    (selectedNominee) =>
                      selectedNominee.category === category &&
                      selectedNominee.nomineeId === nominee.id
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        {selectedNominees.length !== 0 && (
          <div className="sticky bottom-10 w-full flex justify-center">
            <button onClick={handleVote} className="newsletterbtn w-1/2">
              Vote
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Voting;
