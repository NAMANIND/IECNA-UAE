import Headtop from "@/components/head/Headtop";
import MultiPageForm from "@/components/mutliregister/MultiPageForm";
import NominateForm from "@/components/nominateform/NominateForm";
import React from "react";
import { notFound } from "next/navigation";
import NewMultiPageForm from "@/components/prform/NewMultiPageForm";
import Spkrform from "@/components/spkr/Spkrform";

function page({ params }) {
  const { name } = params;

  const data = ["megha", "navya", "sonu"];

  if (data.includes(name)) {
    const to =
      name === "megha"
        ? [
            "20bei033@ietdavv.edu.in",
            "megha.salian@influenceexchangegroup.com",
            "mohamed.suhel@influenceexchangegroup.com",
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
        {name === "sonu" ? (
          <Spkrform />
        ) : (
          <NewMultiPageForm to={to} name={name} />
        )}
      </div>
    );
  } else {
    return notFound();
  }
}

export default page;

export function generateMetadata({ params }) {
  return {
    openGraph: {
      image: "/lop.jpg",
    },
  };
}
