import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const cardData = [
  {
    text: "Land Area",
    stat: "3 Ha",
    picture: "/cocoSeed.jpg",
    link: "/farmer-portal/AI-insight",
  },
  {
    text: "Coconut Plant",
    stat: "560 pohon",
    picture: "/cocoPlant.jpg",
    link: "/farmer-portal/AI-insight",
  },
  {
    text: "Coconut Harvested",
    stat: "7.8 Tn",
    picture: "/coconut.png",
    link: "/farmer-portal/AI-insight",
  },
  {
    text: "Total Profit",
    stat: "300 Mil",
    picture: "/money.jpg",
    link: "/farmer-portal/statistics",
  },
];
const FarmerStat = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 w-full">
      {cardData.map((data, index) => (
        <div
          key={index}
          className="bg-white w-full h-full flex items-center flex-col gap-4 px-2 py-3 rounded-2xl shadow-sm border border-gray-50"
        >
          <div className="flex items-center gap-4 justify-evenly w-full">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center">
              <Image
                src={data.picture}
                width={120}
                height={120}
                alt={`${data.text} icon`}
                className="rounded-full"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="flex flex-col gap-2 items-center text-center justify-center">
              <div className="flex flex-col items-center">
                <span className="font-regular text-md">{data.text}</span>
                <span className="font-semibold text-md">{data.stat}</span>
              </div>
              <Link
                href={data.link}
                className="flex items-center gap-2 text-sm font-semibold text-[#609D7F] hover:text-[#269957] transition-colors group w-fit"
              >
                Lihat detail
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FarmerStat;
