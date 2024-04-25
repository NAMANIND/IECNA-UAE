import Headtop from "@/components/head/Headtop";
import MultiPageForm from "@/components/mutliregister/MultiPageForm";
import NominateForm from "@/components/nominateform/NominateForm";
import React from "react";
import { notFound } from "next/navigation";
import NewMultiPageForm from "@/components/prform/NewMultiPageForm";
import Spkrform from "@/components/spkr/Spkrform";
import { firestore } from "../../../../firbase/clientApp";

// put meta image

export async function generateMetadata({ params }) {
  const { name } = params;
  const nameArr = name.split("_");

  // load data from firebase search using trf:nameArr[1]

  if (nameArr.length > 1) {
    const nomineeSnapshot = await firestore
      .collection("transformed-images")
      .where("trf", "==", nameArr[1])
      .get();

    if (!nomineeSnapshot.empty) {
      const nominee = nomineeSnapshot.docs[0].data();
      return {
        title: "IEC&A Registration",
        description: "Influence Exchange Confex and Awards Registration",
        openGraph: {
          title: "Register for the event",
          description: "Influence Exchange Confex and Awards Registration",

          images: [
            {
              url: nominee.url,
              alt: "Register for the event",
            },
          ],
        },
      };
    }
  }

  return {
    title: "IEC&A Registration",
    description: "Influence Exchange Confex and Awards Registration",
    openGraph: {
      title: "Register for the event",
      description: "Influence Exchange Confex and Awards Registration",

      images: [
        {
          url: "https://india.theiena.com/lop.jpg",
          alt: "Register for the event",
        },
      ],
    },
  };
}

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
