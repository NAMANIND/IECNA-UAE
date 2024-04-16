"use client";

import Headtop from "@/components/head/Headtop";
import MultiPageForm from "@/components/mutliregister/MultiPageForm";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

function Register() {
  return (
    <NextUIProvider>
      <div>
        <Headtop head="Register" />
        <MultiPageForm />
      </div>
    </NextUIProvider>
  );
}

export default Register;
