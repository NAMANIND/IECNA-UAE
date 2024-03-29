"use client";

import React, { useState, useEffect } from "react";
import { Select, SelectItem, Input } from "@nextui-org/react";
import Image from "next/image";
import img1 from "../../../public/images/Intersect.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { MuiPhone } from "../phone/MuiPhone";
import Marquee from "react-fast-marquee";
import { anton, work_sans } from "@/styles/fonts";

import { firestore, storage } from "../../../firbase/clientApp";
import Sendemail from "../../app/email/page";
import ImageDownloadPage from "../../app/imagetransform/page";

const MultiPageForm = () => {
  const [phone, setPhone] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedImageurl, setSelectedImageurl] = useState("");
  const [page, setPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [poppage, setPoppage] = useState("");
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    field: "",
    details: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    country: "",
    industry: "",
    instagram: "",
    tiktok: "",
    snapchat: "",
    youtube: "",
    linkdin: "",
    coupon: "",
    image: null,
  });
  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);

        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const nextPage = () => {
    console.log(formData.category);
    if (
      formData.category === "mediapartner" ||
      formData.category === "sponsor"
    ) {
      setPage(3); // Go to the final page directly
    } else {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    setErrorMessage("");
    if (
      formData.category === "mediapartner" ||
      formData.category === "sponsor"
    ) {
      setPage(1); // Go to the first page directly
    } else {
      setPage(page - 1);
    }
  };

  const handleChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];
    setFormData({ ...formData, image: imageFile });
    console.log(imageFile);
    const popup = (
      <ImageDownloadPage imageData={imageFile} title="IECNA" text="IECNA" />
    );
    setPoppage(popup);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // For testing purposes

    // Send email with form details
    if (formData.category !== "speaker") {
      const to = "20bei033@ietdavv.edu.in";
      const subject =
        formData.category +
        " Registration Form Submission by " +
        formData.firstName +
        " " +
        formData.lastName;

      const html = `
    <h1>Registration Form Submission</h1>
    <p><strong>First Name:</strong> ${formData.firstName}</p>
    <p><strong>Last Name:</strong> ${formData.lastName}</p>
    <p><strong>Category:</strong> ${formData.category}</p>
    <p><strong>Field:</strong> ${formData.field}</p>
    <p><strong>Details:</strong> ${formData.details}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Company:</strong> ${formData.company}</p>
    <p><strong>Job Title:</strong> ${formData.jobTitle}</p>
    <p><strong>Country:</strong> ${formData.country}</p>
    <p><strong>Industry:</strong> ${formData.industry}</p>
    <p><strong>Instagram:</strong> ${formData.instagram}</p>
    <p><strong>Tiktok:</strong> ${formData.tiktok}</p>
    <p><strong>Snapchat:</strong> ${formData.snapchat}</p>
    <p><strong>Youtube:</strong> ${formData.youtube}</p>
    <p><strong>Linkdin:</strong> ${formData.linkdin}</p>
    <p><strong>Coupon:</strong> ${formData.coupon}</p>

    <p><strong>Image:</strong></p>
    <img src="${selectedImageurl}" alt="Uploaded Image" width="200" height="200"  />
  `;

      await Sendemail(to, subject, html);
    }

    if (formData.category === "speaker") {
      // Upload image to Firebase storage
      const imageRef = storage.ref().child(`nominate/${formData.image.name}`);
      await imageRef.put(formData.image);
      const imageUrl = await imageRef.getDownloadURL();
      setSelectedImageurl(imageUrl);

      const nomineeRef = firestore.collection("speakers").doc();
      const nomineeId = nomineeRef.id;

      // Save speaker details to Firestore
      await nomineeRef.set({
        id: nomineeId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        jobTitle: formData.jobTitle,
        country: formData.country,
        industry: formData.industry,
        imageUrl: imageUrl,
        instagram: formData.instagram,
        tiktok: formData.tiktok,
        snapchat: formData.snapchat,
        youtube: formData.youtube,
        linkdin: formData.linkdin ? formData.linkdin : "",
        details: formData.details,
      });

      const to = "20bei033@ietdavv.edu.in";
      const subject =
        formData.category +
        " Registration Form Submission by " +
        formData.firstName +
        " " +
        formData.lastName;

      const html = `
      <h1>Registration Form Submission</h1>
      <p><strong>First Name:</strong> ${formData.firstName}</p>
      <p><strong>Last Name:</strong> ${formData.lastName}</p>
      <p><strong>Category:</strong> ${formData.category}</p>
      <p><strong>Field:</strong> ${formData.field}</p>
      <p><strong>Details:</strong> ${formData.details}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Company:</strong> ${formData.company}</p>
      <p><strong>Job Title:</strong> ${formData.jobTitle}</p>
      <p><strong>Country:</strong> ${formData.country}</p>
      <p><strong>Industry:</strong> ${formData.industry}</p>
      <p><strong>Instagram:</strong> ${formData.instagram}</p>
      <p><strong>Tiktok:</strong> ${formData.tiktok}</p>
      <p><strong>Snapchat:</strong> ${formData.snapchat}</p>
      <p><strong>Youtube:</strong> ${formData.youtube}</p>
      <p><strong>Linkdin:</strong> ${formData.linkdin}</p>
      <p><strong>Coupon:</strong> ${formData.coupon}</p>
  
      <p><strong>Image:</strong></p>
      <img src="${imageUrl}" alt="Uploaded Image" width="200" height="200"  />
    `;

      await Sendemail(to, subject, html);

      alert("Speaker details submitted successfully!");
    } else {
      alert("Form submitted successfully!"); // For other categories
    }

    if (formData.category === "speaker" || formData.category === "delegate") {
      setSent(true);
    }
    // Reset form and page state
    setFormData({
      category: "",
      field: "",
      details: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      country: "",
      industry: "",
      instagram: "",
      tiktok: "",
      snapchat: "",
      youtube: "",
      image: null,
    });
    setPage(1);
  };

  const handleFormDataChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleselect = (key) => {
    setFormData({ ...formData, category: key.target.value });
  };
  const maskImageStyle = {
    maskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
  };
  return (
    <div
      className={`md:p-20 sm:p-5 bg-white text-2xl ${work_sans.className} font-extralight`}
    >
      <Marquee
        direction="left"
        gradient={false}
        speed={40}
        className={` z-10 text-9xl w-full ${work_sans.className} font-bold absolute top-12 `}
        autoFill={true}
        style={{ height: "300px", ...maskImageStyle }}
      >
        &nbsp; REGISTER - REGISTER - REGISTER - REGISTER - REGISTER - REGISTER -
        REGISTER -
      </Marquee>
      <div className="flex flex-row justify-center  w-full max-w-[100%] max-md:mt-10 relative bottom-20 z-20  ">
        <form
          onSubmit={handleSubmit}
          className=" md:w-3/5 sm:w-11/12  p-16   rounded-[32px] "
          style={{
            boxShadow: "0px 0px 10px 0px #0000001a ",
            background: "rgba(255, 255, 255, 1.15) ",
            border: "1px solid #0000001a",
            color: "rgba(0, 0, 0, 0.18)",
            filter: "drop-shadow(40px 40px 76px)",
            mixBlendMode: "normal",
          }}
        >
          {page === 1 && (
            <div className="flex  flex-col md:flex-nowrap gap-4">
              <h2 className={` text-black  `}>Register as*</h2>

              <Select
                label="Select category"
                className="max-w-md"
                onChange={handleselect}
                variant="underlined"
                defaultSelectedKeys={
                  formData.category ? [formData.category] : []
                }
                isRequired
                errorMessage={errorMessage}
              >
                <SelectItem key="delegate">Delegate</SelectItem>
                <SelectItem key="speaker">Speaker</SelectItem>
                <SelectItem key="sponsor">Sponsor</SelectItem>
                <SelectItem key="mediapartner">Media Partner</SelectItem>
              </Select>

              <button
                onClick={() => {
                  if (formData.category !== "") {
                    setErrorMessage("");
                    nextPage();
                  } else {
                    setErrorMessage("*Please select a category*");
                  }
                }}
                className="
                newsletterbtn "
              >
                Next
              </button>
            </div>
          )}

          {page === 2 && (
            <div className="flex  flex-col md:flex-nowrap gap-4">
              <h2 className={` text-black  `}>Field*</h2>
              {formData.category !== "sponsor" &&
                formData.category !== "mediapartner" && (
                  <Select
                    variant="underlined"
                    label="Select Field"
                    defaultSelectedKeys={formData.field ? [formData.field] : []}
                    onChange={(key) =>
                      setFormData({ ...formData, field: key.target.value })
                    }
                    className="max-w-md"
                    isRequired
                    errorMessage={errorMessage}
                  >
                    <SelectItem key="influencer">Influencer</SelectItem>
                    <SelectItem key="marketer">Marketer</SelectItem>
                  </Select>
                )}
              <div className="flex flex-row justify-between w-full gap-4">
                <button onClick={prevPage} className="newsletterbtn w-6/12 ">
                  Previous
                </button>
                <button
                  onClick={() => {
                    if (formData.category) {
                      nextPage();
                    } else {
                      setErrorMessage("*Please select a field*");
                    }
                  }}
                  className="newsletterbtn w-6/12 "
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {page === 3 && (
            <div className="flex  flex-wrap    gap-4">
              <h2 className={` text-black `}>Details*</h2>
              <div className="flex flex-row gap-4 w-full">
                <Input
                  variant="underlined"
                  className="w-1/2 "
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  size="lg"
                  isRequired
                />
                <Input
                  variant="underlined"
                  className="w-1/2"
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  size="lg"
                  isRequired
                />
              </div>
              <div className="flex flex-row align-bottom gap-4 w-full">
                <Input
                  label="Business Email"
                  name="email"
                  className="w-1/2"
                  value={formData.email}
                  onChange={handleChange}
                  variant="underlined"
                  size="lg"
                  isRequired
                />
                {/* <Input
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                /> */}

                <MuiPhone
                  value={formData.phone}
                  // onChange={handleFormDataChange}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  className="w-1/2"
                />
              </div>

              <div className="flex flex-row gap-4 w-full">
                <Input
                  variant="underlined"
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  size="lg"
                  isRequired
                />
                <Input
                  variant="underlined"
                  label="Job Title"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  size="lg"
                  isRequired
                />
              </div>
              <div className="flex flex-row gap-4 w-full">
                {/* <Input
                  label="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                /> */}

                <Select
                  variant="underlined"
                  label="Select Country"
                  value={selectedCountry}
                  onChange={(e) => {
                    setFormData({ ...formData, country: e.target.value });
                    setSelectedCountry(e.target.value);
                  }}
                  size="lg"
                  isRequired
                >
                  {countries.map((country) => (
                    <SelectItem key={country.label}>{country.label}</SelectItem>
                  ))}
                </Select>
                <Input
                  variant="underlined"
                  label="Industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  size="lg"
                  isRequired
                />
              </div>

              {(formData.category === "sponsor" ||
                formData.field === "marketer") && (
                <div className="flex flex-row gap-4 w-full">
                  <Input
                    variant="underlined"
                    label="Linkdin"
                    name="linkdin"
                    value={formData.linkdin}
                    onChange={handleChange}
                    size="lg"
                    isRequired
                  />
                </div>
              )}

              {formData.category === "mediapartner" && (
                <div className="flex flex-row gap-4 w-full">
                  <Input
                    variant="underlined"
                    label="Linkdin"
                    name="linkdin"
                    value={formData.linkdin}
                    onChange={handleFormDataChange}
                    size="lg"
                    isRequired
                  />

                  <Input
                    variant="underlined"
                    label="Coupon"
                    name="coupon"
                    value={formData.cupon}
                    onChange={handleFormDataChange}
                    size="lg"
                  />
                </div>
              )}

              {formData.field === "influencer" && (
                <div className="flex flex-row gap-4 w-full">
                  <Input
                    variant="underlined"
                    label="Instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleFormDataChange}
                    size="lg"
                    isRequired
                  />
                  <Input
                    label="Youtube"
                    name="youtube"
                    value={formData.youtube}
                    onChange={handleFormDataChange}
                    size="lg"
                    variant="underlined"
                  />
                </div>
              )}

              {formData.field === "influencer" && (
                <div className="flex flex-row gap-4 w-full">
                  <Input
                    variant="underlined"
                    label="Tiktok"
                    name="tiktok"
                    value={formData.tiktok}
                    onChange={handleFormDataChange}
                    size="lg"
                  />
                  <Input
                    variant="underlined"
                    label="Snapchat"
                    name="snapchat"
                    value={formData.snapchat}
                    onChange={handleFormDataChange}
                    size="lg"
                  />
                </div>
              )}

              {formData.category === "speaker" && (
                <div className="flex flex-row gap-4 w-full">
                  <Input
                    variant="underlined"
                    label="Details"
                    name="details"
                    value={formData.details}
                    onChange={handleFormDataChange}
                    size="lg"
                    isRequired
                  />
                </div>
              )}

              {(formData.category === "speaker" ||
                formData.category === "delegate") && (
                <div className="flex flex-row gap-4 w-full">
                  <Input
                    type="file"
                    label="Upload Image"
                    accept="image/*"
                    placeholder="."
                    onChange={handleImageUpload}
                    className="w-full "
                    variant="underlined"
                    isRequired
                  />
                </div>
              )}

              {/* Add other input fields as needed */}
              <div className="flex flex-row justify-between w-full gap-4">
                <button onClick={prevPage} className="newsletterbtn w-6/12">
                  Previous
                </button>
                <button type="submit" className="newsletterbtn w-6/12">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* popup */}

      {sent && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div
            className="bg-white p-10 rounded-lg m-10 max-h-fit"
            style={{ width: "800px" }}
          >
            <h1 className="text-2xl font-bold mb-10 text-center text-black">
              Form submitted successfully!
            </h1>
            <div className="flex justify-center items-center w-full h-[400px]">
              `{poppage}`
            </div>
            <div className="flex justify-center items-center w-full">
              <button
                onClick={() => setSent(false)}
                className="newsletterbtn w-6/12"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiPageForm;
