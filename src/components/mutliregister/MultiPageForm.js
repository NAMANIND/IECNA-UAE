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

const MultiPageForm = () => {
  const [phone, setPhone] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [page, setPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
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
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission here
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
      className={`p-20 bg-white text-2xl ${work_sans.className} font-extralight`}
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
                    <SelectItem value="influencer">Influencer</SelectItem>
                    <SelectItem value="marketer">Marketer</SelectItem>
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
                  onChange={(phone) => setPhone(phone)}
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
                  onChange={(value) => {
                    setSelectedCountry(value);
                    setSelectedCountryCode(countries[value]);
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
    </div>
  );
};

export default MultiPageForm;
