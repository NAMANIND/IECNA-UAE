"use client";

import Head from "@/components/head/Head";
import MultiPageForm from "@/components/mutliregister/MultiPageForm";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

function Register() {
  return (
    <NextUIProvider>
      <div>
        <Head head="Register" />
        <MultiPageForm />
      </div>
    </NextUIProvider>
  );
}

export default Register;
