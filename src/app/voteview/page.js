"use client";
import React, { useState, useEffect } from "react";
import { firestore } from "../../../firbase/clientApp";
import Head from "@/components/head/Head";
import { anton, work_sans } from "@/styles/fonts";

const VoteViews = () => {
  const [nomineesByCategory, setNomineesByCategory] = useState([]);

  useEffect(() => {
    const fetchNominees = async () => {
      try {
        const nomineesSnapshot = await firestore.collection("nominees").get();
        const nomineesData = nomineesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const nomineesWithVotes = [];

        nomineesData.forEach((nominee) => {
          for (const categoryKey in nominee.categories) {
            const category = nominee.categories[categoryKey];
            if (category.og !== undefined) {
              nomineesWithVotes.push({
                id: nominee.id,
                imageUrl: nominee.imageUrl,
                category: category.og,
                vote: category.vote,
                firstName: nominee.firstName,
                lastName: nominee.lastName,
              });
            }
          }
        });

        // Sort nominees by vote count in descending order
        const sortedNominees = nomineesWithVotes.sort(
          (a, b) => b.vote - a.vote
        );

        // Group nominees by category
        const groupedNominees = sortedNominees.reduce((acc, nominee) => {
          const category = nominee.category;
          acc[category] = acc[category] || [];
          acc[category].push(nominee);
          return acc;
        }, {});

        setNomineesByCategory(groupedNominees);
      } catch (error) {
        console.error("Error fetching nominees:", error);
      }
    };

    fetchNominees();
  }, []);

  return (
    <div>
      <Head head="Vote Views" />
      <div className={`container mx-auto p-8 bg-white ${work_sans.className}`}>
        <h1
          className={`text-3xl font-semibold mb-8 w-full text-center ${anton.className}`}
        >
          Vote Views
        </h1>
        {Object.entries(nomineesByCategory).map(([category, nominees]) => (
          <div key={category} className="mb-8">
            <h2
              className={`text-2xl font-semibold mb-4 w-full text-center ${anton.className}`}
            >
              {category}
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {nominees.map((nominee) => (
                <div
                  key={nominee.id}
                  className="border rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={nominee.imageUrl}
                    alt={`${nominee.firstName} ${nominee.lastName}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xl font-semibold mb-2">
                      {nominee.firstName} {nominee.lastName}
                    </p>
                    <p className="text-lg font-medium mb-2">
                      Votes: {nominee.vote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoteViews;
