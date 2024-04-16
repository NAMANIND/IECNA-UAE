"use client";
import React, { useState, useEffect } from "react";
import { firestore } from "../../../firbase/clientApp";
import Headtop from "@/components/head/Headtop";
import { anton, work_sans } from "@/styles/fonts";

const Voting = () => {
  const [nomineesByCategory, setNomineesByCategory] = useState({});
  const [selectedNominees, setSelectedNominees] = useState([]);
  const [isAnyCategorySelected, setIsAnyCategorySelected] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  useEffect(() => {
    const fetchNominees = async () => {
      try {
        const nomineesSnapshot = await firestore
          .collection("india-nominees")
          .get();
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
    // Open the email input popup
    setShowEmailPopup(true);
  };

  const confirmVote = async () => {
    // Close the email input popup

    // Perform email validation and check if the email already exists in Firebase
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      alert("You have already voted with this email address.");
      return;
    }

    setShowEmailPopup(false);
    // If all checks pass, proceed with voting
    try {
      const batch = firestore.batch();

      const isNewEmail = await checkEmailExists(email);

      if (!isNewEmail) {
        // Add the email to the votes collection if it's a new email
        const voteRef = firestore.collection("india-votes").doc();
        batch.set(voteRef, { email: email });
      }
      for (const nomineeSelection of selectedNominees) {
        const { category, nomineeId } = nomineeSelection;
        const nomineeRef = firestore
          .collection("india-nominees")
          .doc(nomineeId);
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

      // Clear selected nominees and email input
      setSelectedNominees([]);
      setEmail("");
    } catch (error) {
      console.error("Error recording votes:", error);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const checkEmailExists = async (email) => {
    try {
      const query = await firestore
        .collection("india-votes")
        .where("email", "==", email)
        .get();
      return !query.empty;
    } catch (error) {
      console.error("Error checking email existence:", error);
      return false;
    }
  };

  return (
    <div>
      <Headtop head="Voting" />
      <div className={` mx-auto p-8 bg-white ${work_sans.className} `}>
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
              {nominees
                .sort((a, b) => a.firstName.localeCompare(b.firstName))
                .map((nominee) => (
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
                      className="w-full h-[400px] object-cover object-top rounded-[20px]"
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

        {/* Email input popup/modal */}
        {showEmailPopup && (
          <div className="fixed top-0 left-0 w-full  h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md min-w-[50vw]">
              <h2 className="text-xl font-semibold mb-4">Enter Your Email</h2>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
                placeholder="Your email"
              />
              <div className="flex justify-end">
                <button
                  onClick={() => setShowEmailPopup(false)}
                  className="mr-4 px-6 py-2 bg-gray-300 text-gray-800 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmVote}
                  className="px-6 py-2 bg-blue-500 text-white rounded-md"
                >
                  Vote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Voting;
