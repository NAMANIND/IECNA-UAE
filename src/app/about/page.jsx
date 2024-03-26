import Aboutone from "@/components/about-p/aboutone/Aboutone";
import Ourmisson from "@/components/about-p/ourmission/Ourmission";
import Venue from "@/components/about-p/venue/Venue";
import Whattoexcept from "@/components/about-p/whattoexpect/Whattoexpect";
import Whyattend from "@/components/about-p/whyattend/Whyattend";
import Head from "@/components/head/Head";
import React from "react";

function About() {
  return (
    <div>
      <Head head="About" />
      <Aboutone />
      <Ourmisson />
      <Whyattend />
      <Whattoexcept />
      <Venue />
    </div>
  );
}

export default About;
