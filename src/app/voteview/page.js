"use client";
import React, { useState, useEffect } from "react";
import { firestore } from "../../../firbase/clientApp";
import Headtop from "@/components/head/Headtop";
import { anton, work_sans } from "@/styles/fonts";
import { Snippet } from "@nextui-org/react";

const influencerCategories = [
  "Mega/Celeb-Influencer of the Year",
  "Macro-Influencer of the Year",
  "Micro-Influencer of the Year",
  "Nano Influencer of the year",
  "Creative Visual Content Creator",
  "Social Media Engagement Champion",
  "Best Fashion and Style Influencer of the Year",
  "Best Travel Influencer of the Year",
  "Best Beauty Influencer of the Year",
  "Best Health & Wellbeing Influencer of the Year",
  "Best Financial Influencer Award",
  "Blogger of the year",
  "Mom Influencer of the year",
  "Youtuber of the year",
  "Entertainment Maven of the Year",
  "Food/Culinary Influencer of the Year",
  "Educational Content Creator of the Year",
  "Best Art & Photography Influencer",
  "Plus size influencer of the Year",
  "Most Promising Influencer of the Year",
];

const marketerCategories = [
  "Marketing Leader of the Year",
  "Branding Leader of the Year",
  "Digital Marketeer of the Year",
  "Influencer Marketeer of the Year",
  "Social Media Marketeer of the Year",
  "Data-Driven Marketer of the Year",
  "Marketing Campaign of the Year",
  "Best Innovative Marketing Campaign",
  "Content Marketing Leader",
  "Email Marketeer of the Year",
  "Affiliate Marketeer of the Year",
  "SEO/SEM Marketeer of the Year",
  "B2B Marketeer of the Year",
  "B2C Marketeer of the Year",
  "Product Marketing Leader",
  "Customer Experience Marketeer of the Year",
  "Growth Marketeer of the Year",
  "SaaS Marketeer of the Year",
  "Best Influencer Marketing Campaign",
  "Performance Marketeer of the Year",
];

const allCategories = [...marketerCategories, ...influencerCategories];

const VoteViews = () => {
  const [nomineesByCategory, setNomineesByCategory] = useState([]);
  const [searchQuery1, setSearchQuery1] = useState("");
  const [searchQuery2, setSearchQuery2] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeSection, setActiveSection] = useState("ranking");

  const [fetchedImages, setFetchedImages] = useState([]);
  const [searchResults2, setSearchResults2] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchTransformedImages = async () => {
      try {
        const imagesSnapshot = await firestore
          .collection("uae-transformed-images2025")
          .get();
        const imagesData = imagesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFetchedImages(imagesData);
      } catch (error) {
        console.error("Error fetching transformed images:", error);
      }
    };

    fetchTransformedImages();
  }, []);

  const handleSearch2 = () => {
    const query = searchQuery.trim().toLowerCase();

    if (query === "") {
      alert("Please enter a search query");
      setSearchResults([]); // Clear the search results
      return;
    }

    const filteredImages = fetchedImages.filter(
      (image) =>
        image.name.toLowerCase().includes(query) ||
        image.trf.toLowerCase().includes(query) ||
        image.url.toLowerCase().includes(query)
    );

    setSearchResults2(filteredImages);
  };

  useEffect(() => {
    const fetchNominees = async () => {
      try {
        const nomineesSnapshot = await firestore
          .collection("uae-nominees2025")
          .get();
        const nomineesData = nomineesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const nomineesWithVotes = [];
        // alert(nomineesSnapshot.size);
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
                allData: nominee,
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

        // Sort the categories: marketers first, then influencers
        const sortedGroupedNominees = {};

        // Add marketer categories first
        marketerCategories.forEach((category) => {
          if (groupedNominees[category]) {
            sortedGroupedNominees[category] = groupedNominees[category];
          }
        });

        // Then add influencer categories
        influencerCategories.forEach((category) => {
          if (groupedNominees[category]) {
            sortedGroupedNominees[category] = groupedNominees[category];
          }
        });

        setNomineesByCategory(sortedGroupedNominees);
      } catch (error) {
        console.error("Error fetching nominees:", error);
      }
    };

    fetchNominees();
  }, []);

  function totalVotes(nomineesByCategory) {
    let total = 0;
    for (const category in nomineesByCategory) {
      nomineesByCategory[category].forEach((nominee) => {
        total += nominee.vote;
      });
    }
    alert(`Total Votes: ${total}`);
  }

  const deleteNominee = async (nomineeId, categoryToDelete) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this nominee?"
    );

    if (isConfirmed) {
      try {
        const nomineeRef = firestore
          .collection("uae-nominees2025")
          .doc(nomineeId);
        const nomineeDoc = await nomineeRef.get();
        const nomineeData = nomineeDoc.data();

        if (!nomineeData) {
          console.error("Nominee not found");
          return;
        }

        const nomineeCategories = Object.keys(nomineeData.categories);

        if (nomineeCategories.length === 1) {
          // Only one category, delete the entire nominee
          await nomineeRef.delete();
          console.log("Nominee deleted successfully!");
        } else {
          // More than one category, remove only the specified category
          const updatedCategories = { ...nomineeData.categories };
          console.log(updatedCategories);

          // Convert the category name to its original format
          const formattedCategoryToDelete = Object.keys(updatedCategories).find(
            (key) =>
              key
                .toLowerCase()
                .replace(/\s/g, "")
                .replace(/[/\\.,;:'"!@#$%^&*()_+|~=`{}[\]]/g, "_") ===
              categoryToDelete
                .toLowerCase()
                .replace(/\s/g, "")
                .replace(/[/\\.,;:'"!@#$%^&*()_+|~=`{}[\]]/g, "_")
          );

          if (!formattedCategoryToDelete) {
            console.error("Category not found");
            return;
          }

          delete updatedCategories[formattedCategoryToDelete];

          // Update the nominee document with the modified categories
          await nomineeRef.update({ categories: updatedCategories });
          console.log("Category deleted successfully!");
        }

        // Refresh the nominees list after deletion
        const updatedNominees = { ...nomineesByCategory };
        for (const category in updatedNominees) {
          updatedNominees[category] = updatedNominees[category].filter(
            (nominee) => nominee.id !== nomineeId
          );
        }
        setNomineesByCategory(updatedNominees);
      } catch (error) {
        console.error("Error deleting nominee:", error);
      }
    }
  };

  const handleSearch = () => {
    const results = [];

    // Assuming searchQuery1 and searchQuery2 are state variables
    // declared and updated elsewhere in your component
    // If not, you may need to adjust this part
    const query1 = searchQuery1.trim().toLowerCase();
    const query2 = searchQuery2.trim().toLowerCase();

    if (query2 === "") {
      alert("Please enter a search query");
      setSearchResults([]); // Assuming setSearchResults is a state setter function
      return;
    }

    for (const category in nomineesByCategory) {
      const categoryResults = nomineesByCategory[category].filter(
        (nominee) =>
          nominee.firstName.toLowerCase().includes(query1) &&
          nominee.lastName.toLowerCase().includes(query2)
      );
      if (categoryResults.length > 0) {
        results.push({
          category: category,
          nominees: categoryResults,
        });
      }
    }
    setSearchResults(results); // Assuming setSearchResults is a state setter function
  };

  return (
    <div>
      <Headtop head="Vote View" />
      {/* <button onClick={totalVotes}>Total Votes</button> */}
      <div className="w-full h-full bg-white">
        <div
          className={`container mx-auto p-8 bg-white ${work_sans.className}`}
        >
          <h1
            className={`text-3xl font-semibold mb-8 w-full text-center ${anton.className}`}
          >
            Vote View
          </h1>

          <div className="flex justify-center my-20 text-xl">
            <button
              className={`mx-4 px-4 py-2 ${
                activeSection === "ranking" ? "bg-gray-200 font-bold" : ""
              }`}
              onClick={() => setActiveSection("ranking")}
            >
              Ranking
            </button>
            <button
              className={`mx-4 px-4 py-2 ${
                activeSection === "voteCount" ? "bg-gray-200 font-bold" : ""
              }`}
              onClick={() => setActiveSection("voteCount")}
            >
              Vote Count
            </button>

            {/* banner data */}
            <button
              className={`mx-4 px-4 py-2 ${
                activeSection === "banner" ? "bg-gray-200 font-bold" : ""
              }`}
              onClick={() => setActiveSection("banner")}
            >
              Banner
            </button>
          </div>

          {activeSection === "ranking" ? (
            <>
              {Object.entries(nomineesByCategory).map(
                ([category, nominees]) => (
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
                          id={nominee.id}
                          className="border rounded-lg overflow-hidden shadow-md relative"
                        >
                          <img
                            src={nominee.imageUrl}
                            alt={`${nominee.firstName} ${nominee.lastName}`}
                            className="w-full h-56 object-contain object-top"
                          />
                          <div className="p-4">
                            <p className="text-xl font-semibold mb-2">
                              {nominee.firstName} {nominee.lastName}
                            </p>
                            <p className="text-lg font-medium mb-2">
                              Votes: {nominee.vote}
                            </p>
                            <Snippet
                              codeString={`https://uae.theiena.com/vote/${nominee.firstName
                                .toLowerCase()
                                .replace(/\s/g, "")}_${nominee.lastName
                                .toLowerCase()
                                .replace(/\s/g, "")}`}
                              symbol={`https://uae.theiena.com/vote/${nominee.firstName
                                .toLowerCase()
                                .replace(/\s/g, "")}_${nominee.lastName
                                .toLowerCase()
                                .replace(/\s/g, "")}`}
                              variant="flat"
                              color="default"
                            />
                          </div>
                          {nominee && (
                            <button
                              className="absolute top-2 left-2 px-2 py-1  bg-yellow-500  text-black rounded-md"
                              onClick={() => {
                                setDetails(nominee.allData);
                              }}
                            >
                              See Details
                            </button>
                          )}
                          <button
                            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md"
                            onClick={() =>
                              deleteNominee(nominee.id, nominee.category)
                            }
                          >
                            Delete
                          </button>
                          {/* see details button open a popup with all the details of that person */}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
              {details && (
                <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 flex justify-center items-center z-50 ">
                  <div className="w-1/2 h-auto bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex justify-end">
                      <button
                        className="text-2xl font-bold"
                        onClick={() => setDetails(null)}
                      >
                        x
                      </button>
                    </div>

                    <div className="flex space-y-2 text-medium flex-col">
                      <p className="">
                        First Name: {details.firstName}
                        {details.firstName && ` ${details.lastName}`}
                      </p>

                      {details.lastName && (
                        <p className="">Last Name: {details.lastName}</p>
                      )}
                      {details.company && (
                        <p className="">Company: {details.company}</p>
                      )}
                      {details.country && (
                        <p className="">Country: {details.country}</p>
                      )}
                      {details.email && (
                        <p className="">Email: {details.email}</p>
                      )}
                      {details.field && (
                        <p className="">Field: {details.field}</p>
                      )}
                      {details.imageUrl && (
                        <p className="" style={{ whiteSpace: "pre-wrap" }}>
                          Image URL: {details.imageUrl}
                        </p>
                      )}
                      {details.industry && (
                        <p className="">Industry: {details.industry}</p>
                      )}
                      {details.instagram && (
                        <p className="">Instagram: {details.instagram}</p>
                      )}
                      {details.jobTitle && (
                        <p className="">Job Title: {details.jobTitle}</p>
                      )}
                      {details.linkedin && (
                        <p className="">LinkedIn: {details.linkedin}</p>
                      )}
                      {details.phone && (
                        <p className="">Phone: {details.phone}</p>
                      )}
                      {/* also map categories */}
                      <div className="flex flex-row flex-wrap gap-[1%] ">
                        {details.categories &&
                          Object.entries(details.categories).map(
                            ([category, data]) => (
                              <div
                                key={category}
                                className="w-[48%] shadow-md p-2 rounded-lg"
                              >
                                <p className="text-lg font-semibold">
                                  {data.og}
                                </p>
                                <p className="">Votes: {data.vote}</p>
                              </div>
                            )
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : activeSection === "voteCount" ? (
            <>
              <div className="flex justify-center my-10">
                <input
                  type="text"
                  placeholder="First Name"
                  value={searchQuery1}
                  onChange={(e) => setSearchQuery1(e.target.value)}
                  className="mr-4 px-4 py-2 border border-gray-300 rounded-md"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  value={searchQuery2}
                  onChange={(e) => setSearchQuery2(e.target.value)}
                  className="mr-4 px-4 py-2 border border-gray-300 rounded-md"
                />

                <button
                  onClick={handleSearch}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Search
                </button>
                {searchResults.length > 0 && (
                  <button
                    className="px-4 py-2 bg-yellow-500 ml-5 text-black rounded-md"
                    onClick={() => {
                      setDetails(searchResults[0].nominees[0].allData);
                    }}
                  >
                    See Details
                  </button>
                )}
              </div>

              {/* Render search results */}
              {searchResults.length > 0 && (
                <div className="text-center mb-4">
                  <img
                    src={searchResults[0].nominees[0].imageUrl} // Taking the image URL for the first nominee
                    alt={`${searchResults[0].nominees[0].firstName} ${searchResults[0].nominees[0].lastName}`}
                    className="w-80 h-80 object-contain mx-auto"
                  />
                  <p className="text-xl font-semibold">
                    {searchResults[0].nominees[0].firstName}{" "}
                    {searchResults[0].nominees[0].lastName}
                  </p>
                </div>
              )}

              <div className="flex flex-row flex-wrap mt-8">
                {searchResults.map((result) => (
                  <div key={result.category} className="mb-8 w-1/2 px-20">
                    <div className="p-2 bg-gray-200 rounded-lg">
                      <h2
                        className={`text-xl font-semibold mb-1 ${anton.className}`}
                      >
                        {result.category}
                      </h2>
                      <div className="grid grid-cols-1 gap-4">
                        {result.nominees.map((nominee) => (
                          <div key={nominee.id}>
                            <p className="text-lg font-medium mb-2">
                              Votes: {nominee.vote}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {details && (
                <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 flex justify-center items-center z-50 ">
                  <div className="w-1/2 h-auto bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex justify-end">
                      <button
                        className="text-2xl font-bold"
                        onClick={() => setDetails(null)}
                      >
                        x
                      </button>
                    </div>

                    <div className="flex space-y-2 text-medium flex-col">
                      <p className="">
                        First Name: {details.firstName}
                        {details.firstName && ` ${details.lastName}`}
                      </p>

                      {details.lastName && (
                        <p className="">Last Name: {details.lastName}</p>
                      )}
                      {details.company && (
                        <p className="">Company: {details.company}</p>
                      )}
                      {details.country && (
                        <p className="">Country: {details.country}</p>
                      )}
                      {details.email && (
                        <p className="">Email: {details.email}</p>
                      )}
                      {details.field && (
                        <p className="">Field: {details.field}</p>
                      )}
                      {details.imageUrl && (
                        <p className="" style={{ whiteSpace: "pre-wrap" }}>
                          Image URL: {details.imageUrl}
                        </p>
                      )}
                      {details.industry && (
                        <p className="">Industry: {details.industry}</p>
                      )}
                      {details.instagram && (
                        <p className="">Instagram: {details.instagram}</p>
                      )}
                      {details.jobTitle && (
                        <p className="">Job Title: {details.jobTitle}</p>
                      )}
                      {details.linkedin && (
                        <p className="">LinkedIn: {details.linkedin}</p>
                      )}
                      {details.phone && (
                        <p className="">Phone: {details.phone}</p>
                      )}
                      {/* also map categories */}
                      <div className="flex flex-row flex-wrap ">
                        {details.categories &&
                          Object.entries(details.categories).map(
                            ([category, data]) => (
                              <div key={category} className="w-1/2">
                                <p className="text-lg font-semibold">
                                  {data.og}
                                </p>
                                <p className="">Votes: {data.vote}</p>
                              </div>
                            )
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="w-full h-full bg-white">
                {/* Search input */}
                <div className="flex justify-center my-10">
                  <input
                    type="text"
                    placeholder="Search by Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mr-4 px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <button
                    onClick={handleSearch2}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    Search
                  </button>
                </div>
                {/* Display transformed images */}
                <div className="flex-wrap justify-center flex gap-5">
                  {(searchResults2.length > 0
                    ? searchResults2
                    : fetchedImages
                  ).map((image) => (
                    <div
                      key={image.id}
                      className="p-4 w-[45%] border rounded-lg shadow-md"
                    >
                      <p className="text-xl font-semibold mb-2">
                        Name: {image.name}
                      </p>
                      <p className="text-sm font-medium mb-2">
                        TRF: {image.trf}
                      </p>
                      <p className="text-sm font-medium mb-2 break-words">
                        URL: {image.url}
                      </p>
                      <img
                        src={image.url}
                        alt={image.email}
                        className="w-full h-56 object-contain object-top"
                      />
                      {/* <p className="text-lg font-medium mb-2">Values: {JSON.stringify(image.values)}</p> */}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoteViews;
