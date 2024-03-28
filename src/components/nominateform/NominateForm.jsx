import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { storage, firestore } from "../../../firbase/clientApp";
import Marquee from "react-fast-marquee";
import { work_sans } from "@/styles/fonts";
import { Select, SelectItem, Input } from "@nextui-org/react";
import Image from "next/image";
import img1 from "../../../public/images/Intersect.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { MuiPhone } from "../phone/MuiPhone";
import { Sendemail } from "../../app/email/page";

const NominateForm = () => {
  const [step, setStep] = useState(1);
  const [field, setField] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [values, setValues] = useState(new Set([]));

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    field: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    country: "",
    industry: "",
    linkedin: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    snapchat: "",
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

  const handleFieldSelect = (selectedField) => {
    setFormData({ ...formData, field: selectedField });
    setField(selectedField);
  };

  const handleCategorySelect = (e) => {
    setValues(new Set(e.target.value.split(",")));
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const maskImageStyle = {
    maskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
  };
  const handleFormDataChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    console.log(imageFile);
    setFormData({ ...formData, image: imageFile });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prevent default form submission behavior
    e.stopPropagation();

    if (field === "") {
      setErrorMessage("*Please select a field*");
      return;
    }

    if (values.size <= 0) {
      setErrorMessage("*Please select at least one category*");
      return;
    }

    // Upload image to Firebase storage
    const imageRef = storage.ref().child(`nominate/${formData.image.name}`);
    await imageRef.put(formData.image);
    const imageUrl = await imageRef.getDownloadURL();

    // Save form data to Firestore
    const nomineeRef = firestore.collection("nominees").doc();
    const nomineeId = nomineeRef.id;

    const categoriesData = {};
    values.forEach((category) => {
      console.log(category);
      const cat = category
        .toString()
        .replace(/\s/g, "")
        .replace(/[/\\.,;:'"!@#$%^&*()_+|~=`{}[\]]/g, "_");
      const og = category;
      categoriesData[cat] = {
        og,
        vote: 0,
      };
    });

    console.log(categoriesData);

    const htmlcontent = `
    <p>First Name: ${formData.firstName}</p>
    <p>Last Name: ${formData.lastName}</p>
    <p>Field: ${field}</p>
    <p>Categories: ${Array.from(values)
      .map((category) => `<span>${category}</span>`)
      .join(", ")}</p>
    <p>Email: ${formData.email}</p>
    <p>Phone: ${formData.phone}</p>
    <p>Company: ${formData.company}</p>
    <p>Job Title: ${formData.jobTitle}</p>
    <p>Country: ${formData.country}</p>
    <p>Industry: ${formData.industry}</p>
    <p>LinkedIn: ${formData.linkedin}</p>
    <p>Instagram: ${formData.instagram}</p>
    <p>Youtube: ${formData.youtube}</p>
    <p>Tiktok: ${formData.tiktok}</p>
    <p>Snapchat: ${formData.snapchat}</p>


    <img src=${imageUrl} alt="nominee-image" width="200" height="200" />
    `;
    const to = ["20bei033@ietdavv.edu.in", "namanrai309@gmail.com"];
    const subject =
      field +
      " Nomination form submission by: " +
      formData.firstName +
      " " +
      formData.lastName;
    const html = htmlcontent;

    await Sendemail(to, subject, html);

    if (Object.keys(categoriesData).length === 0) {
      setErrorMessage("*Please select at least one category*");
      return;
    }

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
    setErrorMessage("");
    setValues(new Set([]));
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
      instagram: "",
      youtube: "",
      tiktok: "",
      snapchat: "",
      field: "",
      image: null,
    });
  };

  // Render different steps based on current step
  let stepComponent;
  switch (step) {
    case 1:
      stepComponent = (
        <div className="flex  flex-col md:flex-nowrap gap-4 transition-none">
          <h2 className={` text-black `}>Select Field*</h2>
          <Select
            onChange={(key) => handleFieldSelect(key.target.value)}
            value={field}
            variant="underlined"
            label="Select Field"
            className="max-w-md"
            isRequired
            errorMessage={errorMessage}
          >
            <SelectItem key="influencer">Influencer</SelectItem>
            <SelectItem key="marketer">Marketer</SelectItem>
          </Select>

          <button
            onClick={() => {
              if (field !== "") {
                setErrorMessage("");
                handleNextStep();
              } else {
                setErrorMessage("*Please select a field*");
              }
            }}
            className="
                newsletterbtn "
          >
            Next
          </button>
        </div>
      );
      break;
    case 2:
      stepComponent = (
        <div className="flex  flex-col md:flex-nowrap gap-4 transition-none">
          <h2 className={` text-black `}>Select Award Categories</h2>
          <Select
            multiple
            // placeholder="Select categories"
            onChange={handleCategorySelect}
            // value={selectedCategories}
            // onSelectionChange={setValues}
            selectedKeys={values}
            variant="underlined"
            label="Award Categories"
            className="max-w-md"
            selectionMode="multiple"
            isRequired
            errorMessage={errorMessage}
          >
            {field === "influencer"
              ? influencerCategories.map((category, index) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))
              : marketerCategories.map((category, index) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
          </Select>
          {values.size > 0 && (
            <p className="text-small text-default-500">
              Selected: {Array.from(values).join(", ")}
            </p>
          )}
          <div className="flex flex-row justify-between w-full gap-4">
            <button onClick={handlePrevStep} className="newsletterbtn w-6/12 ">
              Previous
            </button>
            <button
              onClick={() => {
                if (values.size > 0) {
                  setErrorMessage("");
                  handleNextStep();
                } else {
                  setErrorMessage("*Please select at least one category*");
                }
              }}
              className="newsletterbtn w-6/12 "
            >
              Next
            </button>
          </div>
        </div>
      );
      break;
    case 3:
      stepComponent = (
        <div className="flex  flex-col md:flex-nowrap gap-4 transition-none">
          <h2 className={` text-black `}>
            Fill in Personal Details and Upload Image
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-row gap-4 w-full">
              <Input
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleFormDataChange}
                className="w-1/2 "
                variant="underlined"
                isRequired
              />
              <Input
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleFormDataChange}
                className="w-1/2 "
                variant="underlined"
                isRequired
              />
            </div>
            <div className="flex flex-row gap-4 w-full">
              <Input
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleFormDataChange}
                className="w-1/2 "
                variant="underlined"
                isRequired
              />
              <MuiPhone
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                className="w-1/2 "
              />
            </div>
            <div className="flex flex-row gap-4 w-full">
              <Input
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleFormDataChange}
                className="w-1/2 "
                variant="underlined"
                isRequired
              />
              <Input
                label="Job Title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleFormDataChange}
                className="w-1/2 "
                variant="underlined"
                isRequired
              />
            </div>
            <div className="flex flex-row gap-4 w-full">
              {/* <Input
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleFormDataChange}
                className="w-1/2 "
                variant="underlined"
                isRequired
              /> */}

              <Select
                variant="underlined"
                label="Select Country"
                value={selectedCountry}
                onChange={(e) => {
                  setFormData({ ...formData, country: e.target.value });
                  setSelectedCountry(e.target.value);
                }}
                className="w-1/2"
                isRequired
              >
                {countries.map((country) => (
                  <SelectItem key={country.label}>{country.label}</SelectItem>
                ))}
              </Select>
              <Input
                label="Industry"
                name="industry"
                value={formData.industry}
                onChange={handleFormDataChange}
                className="w-1/2 "
                variant="underlined"
                isRequired
              />
            </div>

            {field === "influencer" ? (
              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-row gap-4 w-full">
                  <Input
                    label="Instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleFormDataChange}
                    className="w-1/2 "
                    variant="underlined"
                    isRequired
                  />
                  <Input
                    label="Youtube"
                    name="youtube"
                    value={formData.youtube}
                    onChange={handleFormDataChange}
                    className="w-1/2 "
                    variant="underlined"
                  />
                </div>
                <div className="flex flex-row gap-4 w-full">
                  <Input
                    label="Tiktok"
                    name="tiktok"
                    value={formData.tiktok}
                    onChange={handleFormDataChange}
                    className="w-1/2 "
                    variant="underlined"
                  />

                  <Input
                    label="Snapchat"
                    name="snapchat"
                    value={formData.snapchat}
                    onChange={handleFormDataChange}
                    className="w-1/2 "
                    variant="underlined"
                  />
                </div>
                <div className="flex flex-row gap-4 w-full">
                  <Input
                    type="file"
                    label="Upload Image"
                    accept="image/*"
                    placeholder="."
                    onChange={handleImageUpload}
                    className="w-1/2 "
                    variant="underlined"
                    isRequired
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-row gap-4 w-full">
                <Input
                  label="LinkedIn"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleFormDataChange}
                  className="w-1/2 "
                  variant="underlined"
                  isRequired
                />
                <Input
                  type="file"
                  label="Upload Image"
                  accept="image/*"
                  placeholder="."
                  onChange={handleImageUpload}
                  className="w-1/2 "
                  variant="underlined"
                  isRequired
                />
              </div>
            )}

            <div className="flex flex-row gap-4 w-full">
              <button onClick={handlePrevStep} className="newsletterbtn w-6/12">
                Previous
              </button>
              <button type="submit" className="newsletterbtn w-6/12">
                Submit
              </button>
            </div>
          </form>
        </div>
      );
      break;
    default:
      stepComponent = null;
  }

  return (
    <div
      className={`p-20 bg-white text-black text-2xl  ${work_sans.className} font-extralight`}
    >
      <Marquee
        direction="left"
        gradient={false}
        speed={40}
        className={` z-10 text-9xl w-full ${work_sans.className} font-bold absolute top-12 `}
        autoFill={true}
        style={{ height: "300px", ...maskImageStyle }}
      >
        &nbsp; Nominate
      </Marquee>
      <div className="flex flex-row justify-center  w-full max-w-[100%] max-md:mt-10 relative bottom-20 z-20  ">
        <div
          className=" w-[60%]  p-16   rounded-[32px] "
          style={{
            boxShadow: "0px 0px 10px 0px #0000001a ",
            background: "rgba(255, 255, 255, 1.15) ",
            border: "1px solid #0000001a",
            color: "rgba(0, 0, 0, 0.18)",
            filter: "drop-shadow(40px 40px 76px)",
            mixBlendMode: "normal",
          }}
        >
          {stepComponent}
        </div>
      </div>
    </div>
  );
};

const influencerCategories = [
  "Social Media Impact Champion",
  "Micro-Influencer of the Year",
  "Macro-Influencer of the Year",
  "Mega/Celeb-Influencer of the Year",
  "Collaborative Content Creator",
  "Influencer Campaign of the Year",
  "Niche Expert Influencer",
  "Engaging Storyteller",
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
