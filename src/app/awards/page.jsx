import Criteria from "@/components/award-p/criteria/Criteria";
import Head from "@/components/head/Head";
import NominateForm from "@/components/nominateform/NominateForm";
import React from "react";

function Awards() {
  return (
    <div>
      <Head head="Awards" />
      <Criteria />
      <NominateForm />
    </div>
  );
}

export default Awards;
