"use client";

import React, { useState } from "react";

function Criteria() {
  // Define state to manage which heading's criteria to display
  const [selectedHeading, setSelectedHeading] = useState(
    "Marketing Award Categories and Criteria"
  );

  // Define data structure to store headings, descriptions, and criteria
  const data = [
    {
      "Marketing Award Categories and Criteria": {
        description:
          "Celebrate excellence with us as we honour outstanding contributions across various domains. Nominate deserving individuals, brands, or organizations for their achievements and innovation in marketing and influencer engagement.",
        criteria: [
          "Resume/CV showcasing leadership experience in marketing roles.",
          "A summary of major marketing achievements and outcomes.",
          "Two professional references who can vouch for their marketing leadership skills.",
        ],
      },
      "ooMarketing Award Categories and Criteria": {
        description:
          "Celebrate excellence with us as we honour outstanding contributions across various domains. Nominate deserving individuals, brands, or organizations for their achievements and innovation in marketing and influencer engagement.",
        criteria: [
          "Resume/CV showcasing leadership experience in marketing roles.",
          "A summary of major marketing achievements and outcomes.",
          "Two professional references who can vouch for their marketing leadership skills.",
        ],
      },

      "Influencer Award Categories and Criteria": {
        description:
          "Recognize the efforts of influencers who have made a significant impact on their audience and the industry. Nominate influencers who have demonstrated creativity, authenticity, and engagement in their content.",
        criteria: [
          "A portfolio of influencer campaigns and collaborations.",
          "A summary of the influencer's unique value proposition and audience engagement strategies.",
          "Two professional references who can vouch for the influencer's authenticity and impact.",
        ],
      },

      "kRANDING EXCELLENCE": {
        description:
          "Acknowledges a marketer who has successfully built and managed a strong brand identity, effectively communicating brand values and unique selling propositions.",

        criteria: [
          "Brand portfolio showcasing successful branding projects.",
          "Brand strategy documents outlining unique selling propositions and brand values.",
          "Testimonials or case studies from clients/customers regarding the effectiveness of the branding efforts.",
        ],
      },

      "tBRANDING EXCELLENCE": {
        description:
          "Acknowledges a marketer who has successfully built and managed a strong brand identity, effectively communicating brand values and unique selling propositions.",

        criteria: [
          "Brand portfolio showcasing successful branding projects.",
          "Brand strategy documents outlining unique selling propositions and brand values.",
          "Testimonials or case studies from clients/customers regarding the effectiveness of the branding efforts.",
        ],
      },

      "oBRANDING EXCELLENCE": {
        description:
          "Acknowledges a marketer who has successfully built and managed a strong brand identity, effectively communicating brand values and unique selling propositions.",

        criteria: [
          "Brand portfolio showcasing successful branding projects.",
          "Brand strategy documents outlining unique selling propositions and brand values.",
          "Testimonials or case studies from clients/customers regarding the effectiveness of the branding efforts.",
        ],
      },

      "NBRANDING EXCELLENCE": {
        description:
          "Acknowledges a marketer who has successfully built and managed a strong brand identity, effectively communicating brand values and unique selling propositions.",

        criteria: [
          "Brand portfolio showcasing successful branding projects.",
          "Brand strategy documents outlining unique selling propositions and brand values.",
          "Testimonials or case studies from clients/customers regarding the effectiveness of the branding efforts.",
        ],
      },

      "mBRANDING EXCELLENCE": {
        description:
          "Acknowledges a marketer who has successfully built and managed a strong brand identity, effectively communicating brand values and unique selling propositions.",

        criteria: [
          "Brand portfolio showcasing successful branding projects.",
          "Brand strategy documents outlining unique selling propositions and brand values.",
          "Testimonials or case studies from clients/customers regarding the effectiveness of the branding efforts.",
        ],
      },

      "vBRANDING EXCELLENCE": {
        description:
          "Acknowledges a marketer who has successfully built and managed a strong brand identity, effectively communicating brand values and unique selling propositions.",

        criteria: [
          "Brand portfolio showcasing successful branding projects.",
          "Brand strategy documents outlining unique selling propositions and brand values.",
          "Testimonials or case studies from clients/customers regarding the effectiveness of the branding efforts.",
        ],

        "cBRANDING EXCELLENCE": {
          description:
            "Acknowledges a marketer who has successfully built and managed a strong brand identity, effectively communicating brand values and unique selling propositions.",

          criteria: [
            "Brand portfolio showcasing successful branding projects.",
            "Brand strategy documents outlining unique selling propositions and brand values.",
            "Testimonials or case studies from clients/customers regarding the effectiveness of the branding efforts.",
          ],
        },
        "iBRANDING EXCELLENCE": {
          description:
            "Acknowledges a marketer who has successfully built and managed a strong brand identity, effectively communicating brand values and unique selling propositions.",

          criteria: [
            "Brand portfolio showcasing successful branding projects.",
            "Brand strategy documents outlining unique selling propositions and brand values.",
            "Testimonials or case studies from clients/customers regarding the effectiveness of the branding efforts.",
          ],
        },
      },

      // Add more headings with their respective criteria
    },
  ];

  // Function to handle button click and set the selected heading
  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };

  return (
    <div className="bg-black">
      <div className="text-2xl font-medium tracking-tighter leading-8 text-white max-md:max-w-full">
        Celebrate excellence with us as we honour outstanding contributions
        across various domains. Nominate deserving individuals, brands, or
        organizations for their achievements and innovation in marketing and
        influencer engagement.
      </div>
      <div className="mt-44 text-5xl text-center text-white leading-[61.92px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        MARKETING AWARD CATEGORIES AND CRITERIA
      </div>

      <div className="flex justify-center  m-10">
        <div className="flex flex-wrap w-1/2 gap-[2%]">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              {Object.keys(item).map((heading, index) => (
                <button
                  key={index}
                  className={`w-[48%] h-10 flex align-middle justify-center px-8 py-6 items-center rounded-2xl shadow-sm max-md:px-5 text-center ${
                    selectedHeading === heading ? "bg-lime-400" : "bg-gray-200"
                  }`}
                  onClick={() => handleHeadingClick(heading)}
                >
                  <p> {heading}</p>
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>
        <div className="w-1/2 p-5">
          {/* Display description and criteria for the selected heading */}
          {selectedHeading &&
            data.map((item, index) => (
              <React.Fragment key={index}>
                {Object.keys(item).map((heading, index) =>
                  heading === selectedHeading ? (
                    <div key={index} className="text-white">
                      <div className="mb-5 font-bold text-lime-400">
                        {heading}
                      </div>
                      <div className="mb-5">{item[heading].description}</div>
                      <div>
                        <div className="mb-5 font-bold text-lime-400">
                          Criteria
                        </div>
                        <ul className="list-disc pl-5">
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
      </div>
    </div>
  );
}

export default Criteria;
