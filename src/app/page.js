import Awardnrec from "@/components/mainpage/awrdnrec/Awardnrec";
import Faq from "@/components/mainpage/faq/Faq";
import Herosection from "@/components/mainpage/herosection/Herosection";
import Ig from "@/components/mainpage/igate/Igate";
import Influncers from "@/components/mainpage/influncers/Influncers";
import Missing from "@/components/mainpage/missing/Missing";
import Pastevents from "@/components/mainpage/pastevent/Pastevents";
import Speakercard from "@/components/mainpage/speakercard/Speakercard";
import Wsa from "@/components/mainpage/whoshouldattend/Wsa";
import Venue from "@/components/mainpage/venue/Venue";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import Well from "@/components/mainpage/well/Well";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Herosection />

      <Pastevents />
      <Influncers />
      <Speakercard />
      <Ig />
      <div className="bg-white w-full">
        <Missing />
      </div>
      <Wsa />
      <div className="bg-white w-full">
        <Awardnrec />
      </div>

      <Well />
      <Venue />
      <Faq />
    </main>
  );
}
