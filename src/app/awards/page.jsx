"use client";
import Criteria from "@/components/award-p/criteria/Criteria";
import CriteriaIn from "@/components/award-p/criteria2/CriteriaIn";
import Head from "@/components/head/Head";
import NominateForm from "@/components/nominateform/NominateForm";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";

function Awards() {
  return (
    <NextUIProvider>
      <Head head="Awards" />

      <Criteria />
      <CriteriaIn />
      <NominateForm />
    </NextUIProvider>
  );
}

export default Awards;
