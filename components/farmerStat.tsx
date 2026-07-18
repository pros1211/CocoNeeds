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
    picture: "/coconut.jpg",
  },
  {
    text: "Total Profit",
    stat: "300 Mil",
    picture: "/money.jpg",
  },
  // {
  //   text: "Active Shipment",
  //   stat: "3 Deliveries",
  //   picture: "/money.jpg",
  // },
  // {
  //   text: "Coconut Harvested (last 3 months)",
  //   stat: "1 Tn",
  //   picture: "/coconut.jpg",
  // },
];
const FarmerStat = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 w-full">
      {cardData.map((data, index) => (
        <div
          key={index}
          className="bg-[#F9DFB1] w-full h-full flex items-center justify-evenly px-2 py-3 rounded-2xl shadow-sm border border-gray-50"
        >
          <div className="w-16 h-16 shrink-0 flex items-center justify-center">
            <Image
              src={data.picture}
              width={80}
              height={80}
              alt={`${data.text} icon`}
              className="rounded-full"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <span className="font-medium text-sm">{data.text}</span>
            <span className="font-semibold text-md">{data.stat}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FarmerStat;
