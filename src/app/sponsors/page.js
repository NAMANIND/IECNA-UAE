import Headtop from "@/components/head/Headtop";
import Mediapartners from "@/components/sponsor-p/mediapartners/Mediapartners";
import Oursponsor from "@/components/sponsor-p/oursponsor/Oursponsor";
import Mainsponsors from "@/components/sponsor-p/oursponsor/Mainsponsors";
import Whoshould from "@/components/sponsor-p/whoshould/Whoshould";
import React from "react";

function Sponsors() {
  return (
    <div>
      <Headtop head="Sponsors" />
      <Mainsponsors />
      <Oursponsor />
      <Mediapartners />
      <Whoshould />
    </div>
  );
}

export default Sponsors;
