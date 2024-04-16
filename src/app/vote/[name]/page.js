"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { firestore } from "../../../../firbase/clientApp";
import Headtop from "@/components/head/Headtop";
import Head from "next/head";
import img1 from "../../../../public/images/well.png";

const PersonalVote = ({ params }) => {
  const { name } = params;
  const [nomineeData, setNomineeData] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState({});
  const [email, setEmail] = useState("");
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  useEffect(() => {
    const fetchNomineeData = async () => {
      try {
        // Split the name into first and last names
        const [firstName, lastName] = name.toLowerCase().split("_");

        // Query the database with lowercase first and last names
        const nomineeSnapshot = await firestore
          .collection("india-nominees")
          .where("firstName", "==", firstName)
          .where("lastName", "==", lastName)
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
          initialSelectedCategories[categoryKey] = false;
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
      [categoryKey]: !prevSelectedCategories[categoryKey],
    }));
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

      // Fetch the latest nominee data before voting
      const nomineeRef = firestore
        .collection("india-nominees")
        .doc(nomineeData.id);
      const nomineeDoc = await nomineeRef.get();

      if (!nomineeDoc.exists) {
        console.error("Nominee not found");
        return;
      }

      const updatedNomineeData = nomineeDoc.data();

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

      // Clear selected categories after voting
      setSelectedCategories({});
      setEmail("");
      // Show a popup alert
      window.alert("Thank you for voting!");
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

  const [firstName, lastName] = name.toLowerCase().split("_");
  return (
    <div>
      <Head>
        <title>{`${firstName} ${lastName} - Vote for Me`}</title>
        <meta
          property="og:title"
          content={`${firstName} ${lastName} - Vote for Me`}
        />
        <meta
          property="og:description"
          content={`Vote for ${firstName} ${lastName} in the India Nominees`}
        />
        <meta property="og:image" content={img1} />
        <meta property="og:url" content={`URL_TO_YOUR_PAGE/${name}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${firstName} ${lastName} - Vote for Me`}
        />
        <meta
          name="twitter:description"
          content={`Vote for ${firstName} ${lastName} in the India Nominees`}
        />
        <meta name="twitter:image" content={img1} />
      </Head>
      <Headtop head="Vote for me" />
      {nomineeData && (
        <div className=" mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold uppercase mb-8 text-center ">
            {firstName} {lastName}
          </h1>
          <div className="relative w-full flex justify-center h-[400px] mb-4 overflow-hidden rounded-lg">
            <img
              src={nomineeData.imageUrl}
              alt={name}
              layout="fill"
              objectFit="cover"
              width={300}
              height={400}
              className="object-cover object-top rounded-lg"
            />
          </div>
          <h2 className="text-xl font-semibold mb-4">Categories:</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(nomineeData.categories).map(
              ([categoryKey, category]) => (
                <button
                  key={categoryKey}
                  className={`bg-gray-200 p-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-gray-800 hover:text-white ${
                    selectedCategories[categoryKey]
                      ? "bg-gray-800 text-white"
                      : ""
                  }`}
                  onClick={() => handleCategorySelect(categoryKey)}
                  onChange={() => handleCategorySelect(categoryKey)}
                >
                  {category.og}
                </button>
              )
            )}
          </div>
          {Object.values(selectedCategories).some((value) => value) && (
            <div className="sticky bottom-10 w-full flex justify-center">
              <button
                onClick={handleVote}
                className="newsletterbtn w-1/2 mx-auto"
              >
                Vote
              </button>
            </div>
          )}
        </div>
      )}
      {/* Email input popup/modal */}
      {showEmailPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg min-w-[50vw] shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Enter Your Email</h2>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
              placeholder="Your email address"
            />
            <div className="flex justify-end">
              <button
                onClick={confirmVote}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowEmailPopup(false)}
                className="bg-gray-300 text-gray-700 ml-4 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalVote;
