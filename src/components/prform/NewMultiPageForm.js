"use client";

import React, { useState, useEffect } from "react";
import { Select, SelectItem, Input, Checkbox } from "@nextui-org/react";
import Marquee from "react-fast-marquee";
import { anton, work_sans } from "@/styles/fonts";
import { storage, firestore } from "../../../firbase/clientApp";
import "react-phone-input-2/lib/bootstrap.css";
import { MuiPhone } from "../phone/MuiPhone";
import Sendemail from "../../app/email/page";
import ImageDownloadPage from "@/app/imagetransform/page";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const NewMultiPageForm = ({ to }) => {
  const [page, setPage] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState(new Set([]));
  const [errorMessage, setErrorMessage] = useState("");
  const [field, setField] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState([]);
  const [sent, setSent] = useState(false);
  const [poppage, setPoppage] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [topics, setTopics] = useState([]);
  const [industry, setIndustry] = useState("");
  const [votelink, setvotelink] = useState("");
  const [rtype, setrtype] = useState("");

  const [imgu, setimgu] = useState("");
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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

  const handleFormDataChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handletopicSelect = (category) => {
    if (topics.includes(category)) {
      setTopics(topics.filter((cat) => cat !== category));
    } else {
      setTopics([...topics, category]);
    }
  };

  const handleFieldSelect = (key) => {
    setField(key);
    setFormData({ ...formData, field: key });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(formData); // For testing purposes

    if (page === 3) {
      return;
    }

    if (
      formData.firstName === "" &&
      formData.lastName === "" &&
      formData.email === "" &&
      formData.phone === "" &&
      formData.company === "" &&
      formData.jobTitle === "" &&
      formData.country === "" &&
      formData.industry === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    const notallowedemail = [
      "gmail",
      "yahoo",
      "hotmail",
      "outlook",
      "rediffmail",
      "aol",
      "zoho",
      "protonmail",
      "icloud",
      "yandex",
      "gmx",
      "mail",
      "inbox",
      "live",
    ];
    if (formData.field === "marketer") {
      // check email is buissnes email or not

      if (notallowedemail.some((el) => formData.email.includes(el))) {
        alert("Please enter a valid business email address");
        return;
      }
    }

    setSubmitted(true);

    const imageRef = storage.ref().child(`nominate/${formData.image.name}`);
    await imageRef.put(formData.image);
    const imageUrl = await imageRef.getDownloadURL();
    setimgu(imageUrl);

    // Save form data to Firestore
    const nomineeRef = firestore.collection("nominees").doc();
    const nomineeId = nomineeRef.id;

    const categoriesData = {};
    selectedCategories.forEach((category) => {
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
      <p>Categories: ${Array.from(selectedCategories)
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
     ${imageRef ? `<img src="${imageUrl}" alt="nominee image" />` : ""}
   
    `;

    const subject =
      field +
      " Nomination form submission by: " +
      formData.firstName +
      " " +
      formData.lastName;
    const html = htmlcontent;

    if (formData.registrationType === "nomination") {
      setrtype("nomination");
    }
    const vlink = `https://iena.vercel.app/vote/${formData.firstName
      .toLowerCase()
      .replace(/\s/g, "")}_${formData.lastName
      .toLowerCase()
      .replace(/\s/g, "")}`;
    setvotelink(vlink);

    await nomineeRef.set({
      nomineeId,
      firstName: formData.firstName.toLowerCase().replace(/\s/g, ""),
      lastName: formData.lastName.toLowerCase().replace(/\s/g, ""),
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
      topics: { ...topics },
      imageUrl,
    });

    await Sendemail(to, subject, html);
    alert("Form submitted successfully!");
    setSent(true);
    // Form submission logic goes here
    setSubmitted(false);
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
    setTopics([]);
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
      className={` sm:p-20 p-5 bg-white text-2xl ${work_sans.className} font-extralight`}
    >
      <Marquee
        direction="left"
        gradient={false}
        speed={40}
        className={` z-10 text-9xl w-full ${work_sans.className} font-bold absolute uppercase top-12 `}
        autoFill={true}
        style={{ height: "300px", ...maskImageStyle }}
      >
        &nbsp; REGISTER
      </Marquee>
      <div className="flex flex-row justify-center  w-full max-w-[100%] max-md:mt-10 relative bottom-20 z-20  ">
        <form
          onSubmit={handleSubmit}
          className=" sm:w-[60%] w-[100%]  sm:p-16 p-8   rounded-[32px] "
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
                errorMessage={errorMessage}
              >
                <SelectItem key="delegate">Delegate Registration</SelectItem>
                <SelectItem key="nomination">Nomination</SelectItem>
              </Select>

              <button
                onClick={() => {
                  if (formData.registrationType !== "") {
                    setErrorMessage("");
                    nextPage();
                  } else {
                    setErrorMessage("*Please select a registration type*");
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
                errorMessage={errorMessage}
              >
                <SelectItem key="influencer">Influencer</SelectItem>
                <SelectItem key="marketer">Marketer</SelectItem>
              </Select>

              <div className="flex flex-row justify-between w-full gap-4">
                <button onClick={prevPage} className="newsletterbtn w-6/12 ">
                  Previous
                </button>
                <button
                  onClick={() => {
                    if (field !== "") {
                      setErrorMessage("");
                      nextPage();
                    } else {
                      setErrorMessage("*Please select a field*");
                      alert("Please select a field");
                    }
                  }}
                  className="newsletterbtn w-6/12 "
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {page === 3 &&
            (formData.registrationType === "delegate" ? (
              <div className="flex  flex-col md:flex-nowrap gap-4 ">
                <h2 className={` text-black `}>Topics you are looking for*</h2>

                <div className="w-full">
                  {options.map((topic, index) => (
                    <div key={topic}>
                      <Checkbox
                        id={`topic-${index}`}
                        checked={topics.includes(topic)}
                        defaultSelected={topics.includes(topic)}
                        onChange={() => handletopicSelect(topic)}
                        label={topic}
                      >
                        {topic}
                      </Checkbox>
                    </div>
                  ))}
                </div>

                <h2 className={` text-black text-xl `}>
                  Would you like to recommend a colleague or peer to attend the
                  event? If yes, please provide his/her details(Full name, Job
                  title, Email and Phone)
                </h2>

                <div className="flex sm:flex-row flex-col gap-4 w-full">
                  <Input
                    variant="underlined"
                    className="sm:w-1/2 w-full "
                    label="Recommendation 1"
                    name="recommendation1"
                    value={formData.recommendation1}
                    onChange={handleChange}
                    size="lg"
                  />
                  <Input
                    variant="underlined"
                    className="sm:w-1/2 w-full "
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
                      if (topics.length > 0) {
                        setErrorMessage("");
                        nextPage();
                      } else {
                        // setErrorMessage("*Please select at least one topic*");
                        alert("Please select at least one topic");
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
                <div className="max-w-md">
                  {field === "influencer"
                    ? influencerCategories.map((category, index) => (
                        <div key={category}>
                          <Checkbox
                            id={`category-${index}`}
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategorySelect(category)}
                            label={category}
                          >
                            {category}
                          </Checkbox>
                        </div>
                      ))
                    : marketerCategories.map((category, index) => (
                        <div key={category}>
                          <Checkbox
                            id={`category-${index}`}
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategorySelect(category)}
                            label={category}
                          >
                            {category}
                          </Checkbox>
                        </div>
                      ))}
                </div>

                <div className="flex flex-row justify-between w-full gap-4">
                  <button onClick={prevPage} className="newsletterbtn w-6/12 ">
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      if (selectedCategories.length > 0) {
                        console.log(selectedCategories.length);
                        // setErrorMessage("");
                        nextPage();
                      } else {
                        // setErrorMessage(
                        //   "*Please select at least one category*"
                        // );

                        alert("Please select at least one category");
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

              <div className="flex sm:flex-row flex-col gap-4 w-full">
                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="sd:w-1/2 w-full "
                  variant="underlined"
                  isRequired
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="sd:w-1/2 w-full "
                  variant="underlined"
                  isRequired
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4 w-full">
                <Input
                  type="email"
                  label={
                    formData.field === "influencer"
                      ? "Business Email"
                      : "Business Email"
                  }
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="sd:w-1/2 w-full "
                  variant="underlined"
                  isRequired
                />
                <MuiPhone
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  className="sd:w-1/2 w-full "
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4 w-full">
                <Input
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="sd:w-1/2 w-full "
                  variant="underlined"
                  isRequired
                />
                <Input
                  label="Job Title"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="sd:w-1/2 w-full "
                  variant="underlined"
                  isRequired
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4 w-full">
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
                  className="sd:w-1/2 w-full "
                  isRequired
                >
                  {countries.map((country) => (
                    <SelectItem key={country.label}>{country.label}</SelectItem>
                  ))}
                </Select>
                {industry === "Other" ? (
                  <Input
                    label="Industry"
                    name="industry"
                    value={formData.industry}
                    placeholder="Enter other industry"
                    onChange={handleChange}
                    className="sd:w-1/2 w-full "
                    variant="underlined"
                    isRequired
                  />
                ) : (
                  <Select
                    onChange={(key) => {
                      key.target.value === "Other"
                        ? setIndustry(key.target.value)
                        : setFormData({
                            ...formData,
                            industry: key.target.value,
                          });
                    }}
                    value={field}
                    variant="underlined"
                    label="Select Industry"
                    className="sd:w-1/2 w-full"
                    isRequired
                    errorMessage={errorMessage}
                  >
                    {IndustryCategories.map((category, index) => (
                      <SelectItem key={category}>{category}</SelectItem>
                    ))}
                  </Select>
                )}
              </div>

              {field === "influencer" ? (
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex sm:flex-row flex-col gap-4 w-full">
                    <Input
                      label="Instagram"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      className="sd:w-1/2 w-full "
                      variant="underlined"
                      isRequired
                    />
                    <Input
                      label="Youtube"
                      name="youtube"
                      value={formData.youtube}
                      onChange={handleChange}
                      className="sd:w-1/2 w-full "
                      variant="underlined"
                    />
                  </div>
                  <div className="flex sm:flex-row flex-col gap-4 w-full">
                    <Input
                      label="Tiktok"
                      name="tiktok"
                      value={formData.tiktok}
                      onChange={handleChange}
                      className="sd:w-1/2 w-full "
                      variant="underlined"
                    />

                    <Input
                      label="Snapchat"
                      name="snapchat"
                      value={formData.snapchat}
                      onChange={handleChange}
                      className="sd:w-1/2 w-full "
                      variant="underlined"
                    />
                  </div>

                  <label className="text-sm form-color ">Upload Image</label>
                  <Button
                    component="label"
                    role={undefined}
                    variant="outlined"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    className="newsletterbtn"
                    style={{ color: "#71717a", border: "1px solid #71717a" }}
                  >
                    <VisuallyHiddenInput
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ color: "#71717a" }}
                    />
                    {formData.image
                      ? "Image Selected: " + formData.image.name
                      : "Upload Image"}
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex sm:flex-row flex-col gap-4 w-full">
                    <Input
                      label="LinkedIn"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full "
                      variant="underlined"
                      isRequired
                    />
                  </div>
                  <div className="flex md:flex-col flex-col gap-2 w-full">
                    <label className="text-sm form-color ">Upload Image</label>
                    <Button
                      component="label"
                      role={undefined}
                      variant="outlined"
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                      className="newsletterbtn"
                      style={{ color: "#71717a", border: "1px solid #71717a" }}
                    >
                      <VisuallyHiddenInput
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ color: "#71717a" }}
                      />
                      {formData.image
                        ? "Image Selected: " + formData.image.name
                        : "Upload Image"}
                    </Button>
                  </div>
                </>
              )}

              <div className="flex flex-row gap-4 w-full">
                <button onClick={prevPage} className="newsletterbtn w-6/12">
                  Previous
                </button>
                <button
                  type="submit"
                  disabled={submitted}
                  className="newsletterbtn w-6/12"
                >
                  {submitted ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
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
              {poppage}
            </div>
            {rtype === "nomination" && (
              <div className="flex justify-center items-center w-full">
                <a
                  href={votelink}
                  target="_blank"
                  className="text-black underline pt-10 text-center w-full"
                >
                  {votelink}
                </a>
              </div>
            )}
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

const IndustryCategories = [
  "Airline",
  "Retail",
  "Real Estate",
  "Education",
  "Telecommunication",
  "Banking/Finance",
  "Tourism Hospitality",
  "Consumer Electronics",
  "Media",
  "Entertainment",
  "Logistic Supply Chain",
  "Other",
];

export default NewMultiPageForm;
