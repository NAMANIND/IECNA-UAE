"use client";
import React, { useState } from "react";
import ImageDownloadPage from "../imagetransform/page"; // Import ImageDownloadPage component

const DelegateRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    field: "",
    image: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [poppage, setPoppage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.jobTitle === "" ||
      formData.company === "" ||
      formData.field === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    if (imageFile.size > 1000000) {
      alert("Image size should be less than 1MB");
      return;
    }

    // Assuming imageFile.width and imageFile.height are available
    if (imageFile.width > 800 || imageFile.height > 800) {
      alert("Image should be in 800px x 800px");
      return;
    }

    setFormData({ ...formData, image: imageFile });

    const randomString = Math.random().toString(36).substring(7);

    const title1 = (formData.firstName + " " + formData.lastName).replace(
      /[_\-,]/g,
      ""
    );
    const company1 = formData.jobTitle.replace(/[_\-,]/g, "");
    const marco1 = formData.company.replace(/[_\-,]/g, "");

    const popup = (
      <ImageDownloadPage
        imageData={imageFile}
        title={title1}
        marco={marco1}
        company={company1}
        category="delegate"
        field={formData.field}
        rem={randomString}
        email="bulkform@mail.com"
      />
    );

    setPoppage(popup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    // Reset form data

    // console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      jobTitle: "",
      field: "",
      image: null,
    });
  };

  return (
    <div className="w-full h-full bg-white flex justify-around">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto mt-40 bg-black/10 p-5 space-y-6"
      >
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="jobTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Job Title
          </label>
          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="field"
            className="block text-sm font-medium text-gray-700"
          >
            Field
          </label>
          <select
            id="field"
            name="field"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={formData.field}
            onChange={handleChange}
            required
          >
            <option value="">Select Field</option>
            <option value="influencer">Influencer</option>
            <option value="marketer">Marketer</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image Upload
          </label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="popup max-w-lg mx-auto mt-40 bg-black/10 p-5 space-y-6">
        Banner:
        {submitted && poppage}
      </div>
    </div>
  );
};

export default DelegateRegistrationForm;
