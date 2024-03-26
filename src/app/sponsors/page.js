import Head from "@/components/head/Head";
import Oursponsor from "@/components/sponsor-p/oursponsor/Oursponsor";
import Whoshould from "@/components/sponsor-p/whoshould/Whoshould";
import React from "react";

function Sponsors() {
  return (
    <div>
      <Head head="Sponsors" />
      <Whoshould />
      <Oursponsor />
      <Oursponsor />
    </div>
  );
}

export default Sponsors;
