"use client";

import React, { useState, useEffect } from "react";
import { Select, SelectItem, Input } from "@nextui-org/react";
import Marquee from "react-fast-marquee";
import { anton, work_sans } from "@/styles/fonts";
import { storage, firestore } from "../../../firbase/clientApp";
import "react-phone-input-2/lib/bootstrap.css";
import { MuiPhone } from "../phone/MuiPhone";
import Sendemail from "../../app/email/page";
import ImageDownloadPage from "@/app/imagetransform/page";
const NewMultiPageForm = () => {
  const [page, setPage] = useState(1);
  const [topics, setTopics] = useState(new Set([]));
  const [values, setValues] = useState(new Set([]));
  const [errorMessage, setErrorMessage] = useState("");
  const [field, setField] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState([]);
  const [sent, setSent] = useState(false);
  const [poppage, setPoppage] = useState(null);

  const [formData, setFormData] = useState({
    registrationType: "",
    field: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    country: "",
    industry: "",

    recommendation1: "",
    recommendation2: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
    snapchat: "",
    image: null,
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    console.log(imageFile);
    setFormData({ ...formData, image: imageFile });

    const popup = (
      <ImageDownloadPage imageData={imageFile} title="IECNA" text="IECNA" />
    );
    setPoppage(popup);
  };

  const handleselect = (key) => {
    setFormData({ ...formData, registrationType: key.target.value });
  };

  const handleCategorySelect = (key) => {
    setValues(new Set(key.target.value.split(",")));
  };

  const handletopicSelect = (e) => {
    setTopics(new Set(e.target.value.split(",")));
  };

  const handleFieldSelect = (key) => {
    setField(key);
    setFormData({ ...formData, field: key });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(formData); // For testing purposes

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
      <p>Recommendation 1: ${formData.recommendation1}</p>
      <p>Recommendation 2: ${formData.recommendation2}</p>
      <p>Topics: ${Array.from(topics)
        .map((topic) => `<span>${topic}</span>`)
        .join(", ")}</p>
      <img src="${imageUrl}" alt="nominee-image" width="200" height="200" />
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

    if (formData.registrationType === "nomination") {
      await nomineeRef.set({
        nomineeId,
        firstName: formData.firstName.toLowerCase(),
        lastName: formData.lastName.toLowerCase(),
        field,
        categories: { ...categoriesData },
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        jobTitle: formData.jobTitle,
        country: formData.country,
        industry: formData.industry,
        recommendation1: formData.recommendation1,
        recommendation2: formData.recommendation2,
        topics: Array.from(topics),
        imageUrl,
      });
    }
    setSent(true);
    alert("Form submitted successfully!");

    // Form submission logic goes here

    // Reset form and page state
    setFormData({
      registrationType: "",
      category: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      country: "",
      industry: "",
      socialMedia: "",
    });
    setPage(1);
    setTopics(new Set([]));
    setValues(new Set([]));
  };

  const maskImageStyle = {
    maskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
  };

  return (
    <div
      className={`p-20 bg-white text-2xl ${work_sans.className} font-extralight`}
    >
      <Marquee
        direction="left"
        gradient={false}
        speed={40}
        className={` z-10 text-9xl w-full ${work_sans.className} font-bold absolute uppercase top-12 `}
        autoFill={true}
        style={{ height: "300px", ...maskImageStyle }}
      >
        &nbsp; REGISTER - REGISTER - REGISTER - REGISTER - REGISTER - REGISTER -
        REGISTER -
      </Marquee>
      <div className="flex flex-row justify-center  w-full max-w-[100%] max-md:mt-10 relative bottom-20 z-20  ">
        <form
          onSubmit={handleSubmit}
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
          {page === 1 && (
            <div className="flex  flex-col md:flex-nowrap gap-4">
              <h2 className={` text-black  `}>Choose Registration Type*</h2>

              <Select
                label="Select registration type"
                className="max-w-md"
                onChange={handleselect}
                variant="underlined"
                defaultSelectedKeys={
                  formData.registrationType ? [formData.registrationType] : []
                }
                isRequired
              >
                <SelectItem key="delegate">Delegate Registration</SelectItem>
                <SelectItem key="nomination">Nomination</SelectItem>
              </Select>

              <button
                onClick={() => {
                  if (formData.registrationType !== "") {
                    nextPage();
                  } else {
                    alert("Please select a registration type");
                  }
                }}
                className="newsletterbtn"
              >
                Next
              </button>
            </div>
          )}

          {page === 2 && (
            <div className="flex  flex-col md:flex-nowrap gap-4">
              <h2 className={` text-black  `}>Choose Field*</h2>

              <Select
                label="Select category"
                className="max-w-md"
                onChange={(key) => handleFieldSelect(key.target.value)}
                variant="underlined"
                defaultSelectedKeys={formData.field ? [formData.field] : []}
                isRequired
              >
                <SelectItem key="influencer">Influencer</SelectItem>
                <SelectItem key="marketer">Marketer</SelectItem>
              </Select>

              <div className="flex flex-row justify-between w-full gap-4">
                <button onClick={prevPage} className="newsletterbtn w-6/12 ">
                  Previous
                </button>
                <button onClick={nextPage} className="newsletterbtn w-6/12 ">
                  Next
                </button>
              </div>
            </div>
          )}

          {page === 3 &&
            (formData.registrationType === "delegate" ? (
              <div className="flex  flex-col md:flex-nowrap gap-4 ">
                <h2 className={` text-black `}>Topics you are looking for*</h2>
                <Select
                  multiple
                  // placeholder="Select categories"
                  onChange={handletopicSelect}
                  // value={selectedCategories}
                  // onSelectionChange={setValues}
                  selectedKeys={topics}
                  variant="underlined"
                  label="Topics you are looking for"
                  className="w-full"
                  selectionMode="multiple"
                  isRequired
                  errorMessage={errorMessage}
                >
                  {options.map((category, index) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </Select>
                {topics.size > 0 && (
                  <p className="text-small text-default-500">
                    Selected: {Array.from(topics).join(", ")}
                  </p>
                )}

                <h2 className={` text-black text-xl `}>
                  Would you like to recommend a colleague or peer to attend the
                  event? If yes, please provide his/her details(Full name, Job
                  title, Email and Phone)
                </h2>

                <div className="flex flex-row gap-4 w-full">
                  <Input
                    variant="underlined"
                    className="w-1/2 "
                    label="Recommendation 1"
                    name="recommendation1"
                    value={formData.recommendation1}
                    onChange={handleChange}
                    size="lg"
                  />
                  <Input
                    variant="underlined"
                    className="w-1/2 "
                    label="Recommendation 2"
                    name="recommendation2"
                    value={formData.recommendation2}
                    onChange={handleChange}
                    size="lg"
                  />
                </div>

                <div className="flex flex-row justify-between w-full gap-4">
                  <button onClick={prevPage} className="newsletterbtn w-6/12 ">
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      if (topics.size > 0) {
                        setErrorMessage("");
                        nextPage();
                      } else {
                        setErrorMessage(
                          "*Please select at least one category*"
                        );
                      }
                    }}
                    className="newsletterbtn w-6/12 "
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex  flex-col md:flex-nowrap gap-4 ">
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
                  <button onClick={prevPage} className="newsletterbtn w-6/12 ">
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      if (values.size > 0) {
                        setErrorMessage("");
                        nextPage();
                      } else {
                        setErrorMessage(
                          "*Please select at least one category*"
                        );
                      }
                    }}
                    className="newsletterbtn w-6/12 "
                  >
                    Next
                  </button>
                </div>
              </div>
            ))}

          {page === 4 && (
            <div className="flex  flex-col md:flex-nowrap gap-4 transition-none">
              <h2 className={` text-black `}>
                Fill in Personal Details and Upload Image
              </h2>

              <div className="flex flex-row gap-4 w-full">
                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-1/2 "
                  variant="underlined"
                  isRequired
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  className="w-1/2 "
                  variant="underlined"
                  isRequired
                />
                <Input
                  label="Job Title"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                      onChange={handleChange}
                      className="w-1/2 "
                      variant="underlined"
                      isRequired
                    />
                    <Input
                      label="Youtube"
                      name="youtube"
                      value={formData.youtube}
                      onChange={handleChange}
                      className="w-1/2 "
                      variant="underlined"
                    />
                  </div>
                  <div className="flex flex-row gap-4 w-full">
                    <Input
                      label="Tiktok"
                      name="tiktok"
                      value={formData.tiktok}
                      onChange={handleChange}
                      className="w-1/2 "
                      variant="underlined"
                    />

                    <Input
                      label="Snapchat"
                      name="snapchat"
                      value={formData.snapchat}
                      onChange={handleChange}
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
                    onChange={handleChange}
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

const options = [
  "The Future of AdTech in Saudi Arabia: Innovations and Trends Shaping Influencer Campaigns.",
  "Data-Driven AdTech Strategies for Targeted and Cost-Efficient Influencer Marketing.",
  "MarTech Mastery: Leveraging Technology to Amplify Influencer Marketing ROI in Saudi Arabia.",
  "The Role of Martech Stack Integration in Streamlining Influencer Campaigns for Saudi Brands.",
  "Influencer Marketing Agencies in Saudi Arabia: Navigating the Evolving Landscape of Influence.",
  "Best Practices for Saudi Influencer Marketing Agencies: Building Trust and Credibility.",
  "Saudi Arabia's Influencer Marketing Software Solutions: Enhancing Efficiency and Effectiveness.",
  "Influencer Marketing Tools and Technology: Empowering Saudi Arabian Marketers and Influencers.",
  "Influence Unleashed: The Power of Saudi Arabian Influencer Marketing Platforms for Brands.",
  "Connecting Brands and Influencers in Saudi Arabia: The Evolution of Influence Platforms.",
  "Digital Marketing Transformation in Saudi Arabia: Strategies for Influencing the Future.",
  "Saudi Arabian Digital Marketing Solutions: Driving Brand Success through Innovation.",
];

export default NewMultiPageForm;
