"use client";

import React, { useState } from "react";
import { work_sans, anton } from "@/styles/fonts";
import Button from "@/components/button/Button";

function CriteriaIn() {
  // Define state to manage which heading's criteria to display
  const [selectedHeading, setSelectedHeading] = useState(
    "Marketing Leader of the Year"
  );

  // Define data structure to store headings, descriptions, and criteria
  const data = [
    {
      "Marketing Leader of the Year": {
        description:
          "Recognizes a marketing professional who has demonstrated exceptional leadership skills and achieved remarkable results in driving successful marketing strategies.",
        criteria: [
          "Resume/CV showcasing leadership experience in marketing roles.",
          "A summary of major marketing achievements and outcomes.",
          "Two professional references who can vouch for their marketing leadership skills.",
        ],
      },
      "Branding Excellence": {
        description:
          "Honors brands that have excelled in creating and maintaining a strong brand identity, positioning, and recognition in the market.",
        criteria: [
          "Evidence of consistent brand messaging and visual identity.",
          "Examples of successful brand campaigns and initiatives.",
          "Metrics demonstrating brand awareness and perception.",
        ],
      },
      "Digital Marketing Innovator": {
        description:
          "Celebrates individuals or teams that have demonstrated creativity and innovation in digital marketing strategies and campaigns.",
        criteria: [
          "Examples of innovative digital marketing campaigns or initiatives.",
          "Metrics showcasing the effectiveness and impact of digital marketing efforts.",
          "Evidence of using cutting-edge technologies or techniques in digital marketing.",
        ],
      },
      "Influencer Marketing Strategy": {
        description:
          "Recognizes brands or agencies that have developed and executed effective influencer marketing strategies to reach and engage target audiences.",
        criteria: [
          "Case studies demonstrating successful influencer marketing campaigns.",
          "Metrics on campaign performance, including reach, engagement, and ROI.",
          "Evidence of strategic planning and execution in influencer partnerships.",
        ],
      },
      "Social Media Engagement Champion": {
        description:
          "Honours individuals or brands that have excelled in engaging their audience on social media platforms through compelling content and interactions.",
        criteria: [
          "Metrics demonstrating high levels of social media engagement, including likes, shares, comments, and followers.",
          "Examples of engaging social media content and campaigns.",
          "Evidence of community building and fostering meaningful interactions on social media.",
        ],
      },
      "Customer Experience Advocate": {
        description:
          "Celebrates organizations that prioritize and excel in delivering exceptional customer experiences across all touchpoints.",
        criteria: [
          "Evidence of customer-centric initiatives and strategies.",
          "Metrics demonstrating high levels of customer satisfaction and loyalty.",
          "Examples of innovative approaches to improving the customer experience.",
        ],
      },
      "Data-Driven Marketing Excellence": {
        description:
          "Recognizes organizations that leverage data and analytics to drive informed marketing decisions and achieve measurable results.",
        criteria: [
          "Examples of data-driven marketing campaigns or initiatives.",
          "Metrics demonstrating the impact of data-driven marketing efforts on business outcomes.",
          "Evidence of using data analytics tools and methodologies to optimize marketing strategies.",
        ],
      },
      "Innovation in Brand Activation": {
        description:
          "Honors brands that have demonstrated creativity and innovation in activating their brand across various channels and touchpoints.",
        criteria: [
          "Examples of innovative brand activation campaigns or initiatives.",
          "Metrics demonstrating the effectiveness and impact of brand activation efforts.",
          "Evidence of using creative approaches and techniques to connect with target audiences.",
        ],
      },
      "Strategic Digital Transformation": {
        description:
          "Celebrates organizations that have successfully embraced digital transformation to adapt to changing market dynamics and customer preferences.",
        criteria: [
          "Evidence of digital transformation initiatives and strategies.",
          "Examples of successful digital transformation projects and their impact on business outcomes.",
          "Metrics demonstrating the effectiveness of digital transformation efforts in achieving organizational goals.",
        ],
      },
      "Influencer Relationship Builder": {
        description:
          "Recognizes individuals or organizations that have excelled in building and nurturing relationships with influencers to drive successful partnerships and collaborations.",
        criteria: [
          "Examples of successful influencer partnerships and collaborations.",
          "Testimonials from influencers highlighting positive experiences working with the nominee.",
          "Evidence of strategic relationship-building efforts and long-term partnerships with influencers.",
        ],
      },
    },
  ];

  // Function to handle button click and set the selected heading
  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };

  return (
    <div className={`bg-black ${work_sans.className}  p-10 `}>
      <div
        className={`pt-44 text-5xl text-center anton-f text-white leading-[61.92px] max-md:mt-10 max-md:max-w-full max-md:text-4xl ${anton.className} `}
      >
        INFLUENCER AWARD CATEGORIES AND CRITERIA
      </div>

      <div className="flex justify-center pt-10 ">
        <div className="w-1/2 p-5">
          {/* Display description and criteria for the selected heading */}
          {selectedHeading &&
            data.map((item, index) => (
              <React.Fragment key={index}>
                {Object.keys(item).map((heading, index) =>
                  heading === selectedHeading ? (
                    <div key={index} className="text-white">
                      <div className="mb-5 font-bold text-3xl text-lime-400">
                        {heading}
                      </div>
                      <div className="mb-5  text-md">
                        {item[heading].description}
                      </div>
                      <div>
                        <div className="mb-5 font-bold text-3xl text-lime-400">
                          Criteria
                        </div>
                        <ul className="list-disc pl-5  text-md">
                          {item[heading].criteria.map((criterion, index) => (
                            <li key={index}>{criterion}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null
                )}
              </React.Fragment>
            ))}
        </div>
        <div className="flex flex-wrap w-1/2 gap-[4%]">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              {Object.keys(item).map((heading, index) => (
                <button
                  key={index}
                  className={`w-[48%] h-10 flex align-middle justify-center px-8 py-6 my-4 items-center rounded-2xl shadow-sm max-md:px-5 text-center ${
                    selectedHeading === heading ? "bg-lime-400" : "bg-gray-200"
                  }`}
                  onClick={() => handleHeadingClick(heading)}
                >
                  <p className={`${anton.className}`}> {heading}</p>
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Button color="green" img="trophy" href="/nominate">
          Nominate
        </Button>
      </div>
    </div>
  );
}

export default CriteriaIn;
