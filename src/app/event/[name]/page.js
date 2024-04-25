import Headtop from "@/components/head/Headtop";
import MultiPageForm from "@/components/mutliregister/MultiPageForm";
import NominateForm from "@/components/nominateform/NominateForm";
import React from "react";
import { notFound } from "next/navigation";
import NewMultiPageForm from "@/components/prform/NewMultiPageForm";
import Spkrform from "@/components/spkr/Spkrform";

// put meta image
export const metadata = {
  title: "IEC&A Registration",
  description: "Influence Exchange Confex and Awards Registration",
  openGraph: {
    title: "Register for the event",
    description: "Influence Exchange Confex and Awards Registration",

    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/india-nomination-image%2F414703364_906521701176023_6721006003139314478_n.jpg?alt=media&token=ff3a157a-173e-4f68-8662-5a2115b82ad3",
        alt: "Description of the image",
      },
    ],
  },
};

function page({ params }) {
  const { name } = params;

  // check if name consists  _ or not and make it two wordsif yes

  const nameArr = name.split("_");

  const data = ["megha", "navya", "sonu"];

  if (data.includes(nameArr[0])) {
    const to =
      nameArr[0] === "megha"
        ? [
            "20bei033@ietdavv.edu.in",
            // "megha.salian@influenceexchangegroup.com",
            // "mohamed.suhel@influenceexchangegroup.com",
          ]
        : [
            "20bei033@ietdavv.edu.in",
            "megha.salian@influenceexchangegroup.com",
            "navya.kotian@influenceexchangegroup.com",
            "mohamed.suhel@influenceexchangegroup.com",
          ];

    return (
      <div>
        <Headtop head="Event Registration" />
        {nameArr[0] === "sonu" ? (
          <Spkrform />
        ) : (
          <NewMultiPageForm to={to} name={nameArr[0]} />
        )}
      </div>
    );
  } else {
    return notFound();
  }
}

export default page;
