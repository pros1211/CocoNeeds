import React from "react";
import Image from "next/image";
const cardData = [
  { text: "Land Area", stat: "3 Ha", picture: "/cocoSeed.jpg" },
  {
    text: "Coconut Plant",
    stat: "560 pohon",
    picture: "/cocoPlant.jpg",
  },
  {
    text: "Coconut Harvested",
    stat: "7.8 Tn",
    picture: "/coconut.png",
  },
  {
    text: "Total Profit",
    stat: "300 Mil",
    picture: "/money.png",
  },
];
const FarmerStat = () => {
  return (
    <div className="flex items-center justify-evenly px-3 py-3">
      {cardData.map((data, index) => (
        <div
          key={index}
          className="bg-[#F9DFB1] max-w-[250px] flex items-center gap-2 px-4 py-2 rounded-2xl shadow-sm border border-gray-50"
        >
          <div className="w-20 h-20 shrink-0 flex items-center justify-center">
            <Image
              src={data.picture}
              width={80}
              height={80}
              alt={`${data.text} icon`}
              className="rounded-full p-2"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="font-medium text-md">{data.text}</span>
            <span className="font-semibold text-lg">{data.stat}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FarmerStat;
