import Head from "@/components/head/Head";
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
        ? ["20bei033@ietdavv.edu.in", "megha.salian@influenceexchangegroup.com"]
        : [
            "20bei033@ietdavv.edu.in",
            "megha.salian@influenceexchangegroup.com",
            "navya.kotian@influenceexchangegroup.com",
          ];

    return (
      <div>
        <Head head="Event" />
        {name === "sonu" ? <Spkrform /> : <NewMultiPageForm to={to} />}
      </div>
    );
  } else {
    return notFound();
  }
}

export default page;
