"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { storage, firestore } from "../../../firbase/clientApp";

const NominateForm = () => {
  const [step, setStep] = useState(1);
  const [field, setField] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    country: "",
    industry: "",
    linkedin: "",
    image: null,
  });

  const handleFieldSelect = (selectedField) => {
    setField(selectedField);
    setStep(2);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategories((prevCategories) => {
      const existingCategoryIndex = prevCategories.findIndex(
        (c) => c.category === category
      );

      if (existingCategoryIndex !== -1) {
        // If category already exists, remove it
        const updatedCategories = [...prevCategories];
        updatedCategories.splice(existingCategoryIndex, 1);
        return updatedCategories;
      } else {
        // If category doesn't exist, add it
        return [...prevCategories, { category }];
      }
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    setFormData({ ...formData, image: imageFile });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prevent default form submission behavior
    e.stopPropagation();

    // Upload image to Firebase storage
    const imageRef = storage.ref().child(`nominate/${formData.image.name}`);
    await imageRef.put(formData.image);
    const imageUrl = await imageRef.getDownloadURL();

    // Save form data to Firestore
    const nomineeRef = firestore.collection("nominees").doc();
    const nomineeId = nomineeRef.id;

    const categoriesData = {};
    selectedCategories.forEach((category) => {
      console.log(category);
      const cat = category.category
        .toString()
        .replace(/\s/g, "")
        .replace(/[/\\.,;:'"!@#$%^&*()_+|~=`{}[\]]/g, "_");
      const og = category.category;
      categoriesData[cat] = {
        og,
        vote: 0,
      };
    });

    await nomineeRef.set({
      id: nomineeId,
      field,
      categories: { ...categoriesData }, // Save categories and their votes
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      jobTitle: formData.jobTitle,
      country: formData.country,
      industry: formData.industry,
      linkedin: formData.linkedin,
      imageUrl,
    });

    alert("Nomination submitted successfully!");
    // Reset form to first step
    setStep(1);
    setField("");
    setSelectedCategories([]);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      country: "",
      industry: "",
      linkedin: "",
      image: null,
    });
  };

  // Render different steps based on current step
  let stepComponent;
  switch (step) {
    case 1:
      stepComponent = (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Select Field</h2>
          <select
            className="border border-gray-300 rounded px-4 py-2 mb-4"
            onChange={(e) => handleFieldSelect(e.target.value)}
            value={field}
          >
            <option value="">Select Field</option>
            <option value="influencer">Influencer</option>
            <option value="marketer">Marketer</option>
          </select>
        </motion.div>
      );
      break;
    case 2:
      stepComponent = (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Select Award Categories
          </h2>
          {field === "influencer" ? (
            <>
              {influencerCategories.map((category, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="checkbox"
                    id={category}
                    checked={selectedCategories.some(
                      (c) => c.category === category
                    )}
                    onChange={() => handleCategorySelect(category)}
                    className="mr-2"
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
            </>
          ) : (
            <>
              {marketerCategories.map((category, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="checkbox"
                    id={category}
                    checked={selectedCategories.some(
                      (c) => c.category === category
                    )}
                    onChange={() => handleCategorySelect(category)}
                    className="mr-2"
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
            </>
          )}

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleNextStep}
          >
            Next
          </button>
        </motion.div>
      );
      break;
    case 3:
      stepComponent = (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Fill in Personal Details and Upload Image
          </h2>
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleFormDataChange}
              className="border border-gray-300 rounded px-4 py-2 mb-4"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleFormDataChange}
              className="border border-gray-300 rounded px-4 py-2 mb-4"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleFormDataChange}
              className="border border-gray-300 rounded px-4 py-2 mb-4"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleFormDataChange}
              className="border border-gray-300 rounded px-4 py-2 mb-4"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              onChange={handleFormDataChange}
              className="border border-gray-300 rounded px-4 py-2 mb-4"
              required
            />
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              onChange={handleFormDataChange}
              className="border border-gray-300 rounded px-4 py-2 mb-4"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              onChange={handleFormDataChange}
              className="border border-gray-300 rounded px-4 py-2 mb-4"
              required
            />
            <input
              type="text"
              name="industry"
              placeholder="Industry"
              onChange={handleFormDataChange}
              className="border border-gray-300 rounded px-4 py-2 mb-4"
              required
            />
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn"
              onChange={handleFormDataChange}
              className="border border-gray-300 rounded px-4 py-2 mb-4"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-4"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-4"
            onClick={handlePrevStep}
          >
            Previous
          </button>
        </motion.div>
      );
      break;
    default:
      stepComponent = null;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8">Nominate Form</h1>
      {stepComponent}
    </div>
  );
};

const influencerCategories = [
  "Social Media Engagement Champion",
  "Micro-Influencer of the Year",
  "Macro-Influencer of the Year",
  "Mega/Celeb-Influencer of the Year",
  "Collaborative Content Creator",
  "Influencer Campaign of the Year",
  "Niche Expert Influencer",
  "Engaging storyteller",
  "Creative Visual Content Creator",
  "Social Impact Advocate",
];

const marketerCategories = [
  "Marketing Leader of the Year",
  "Branding Excellence",
  "Digital Marketing Innovator",
  "Influencer Marketing Strategy",
  "Innovation in Brand Activation",
  "Data-Driven Marketing Excellence",
  "Customer Experience Advocate",
  "Strategic Digital Transformation",
  "Social Media Engagement Champion",
  "Influencer Relationship Builder",
];

export default NominateForm;
