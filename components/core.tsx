import { IdCard } from "lucide-react";
import React from "react";

function Core() {
  const advantageDesc = [
    {
      stat: "96%",
      title: "Increase in crop yields",
      description:
        "Boost your crop yields with personalized AI-driven forecasts to increase your profits.",
    },
    {
      stat: "2X",
      title: "Faster delivery of goods",
      description:
        "Product delivery is faster thanks to our partners' numerous distribution locations, cutting down on delivery times and unnecessary costs.",
    },
    {
      stat: "80%",
      title: "Time-efficient operations",
      description:
        "Many partners from the corporate and agricultural sectors are ready to supply and purchase these products through our marketplace.",
    },
    {
      stat: "24/7",
      title: "Monitoring from anywhere, anytime",
      description:
        "Access and monitor statistics from anywhere, at anytime without an internet connection, thanks to our PWA platform.",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center gap-12 py-12 px-4 w-full">
        <h2 className="capitalize font-semibold gap-6 text-4xl max-w-[800px] text-center">
          increasing profits through our smart supply chain process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
          {advantageDesc.map((card, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-2xl p-8 border border-gray-200 justify-center items-center cursor-pointer shadow-sm hover:shadow-lg hover:border-[#3BA275]/50 transition-all duration-500"
            >
              <span className="text-6xl font-bold text-[#3BA275]/80 mb-3 group-hover:-translate-y-1 transition-transform duration-500">
                {card.stat}
              </span>
              <p className="font-regular text-2xl text-center group-hover:-translate-y-1 transition-transform duration-500">
                {card.title}
              </p>
              <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out w-full">
                <div className="overflow-hidden">
                  <p className="pt-4 text-sm text-justify text-gray-500 font-normal leading-relaxed border-t border-gray-100 mt-4">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Core;
