import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const cardData = [
  {
    text: "Luas Lahan",
    stat: "3 Ha",
    picture: "/cocoSeed.jpg",
    link: "/farmer-portal/AI-insight",
    color: "#95D4B3",
  },
  {
    text: "Pohon Kelapa",
    stat: "560 pohon",
    picture: "/cocoPlant.jpg",
    link: "/farmer-portal/AI-insight",
    color: "#E3EDD4",
  },
  {
    text: "Akan Panen",
    stat: "1.2 Ha",
    picture: "/cocoPlant.jpg",
    link: "/farmer-portal/AI-insight",
    color: "#FEFCF7",
  },
  {
    text: "Kondisi Irigasi",
    stat: "100%",
    picture: "/water-drop.png",
    link: "/farmer-portal/AI-insight",
    color: "#EBF3F5",
  },
];
const StatLahan = () => {
  return (
    <div className="flex items-center gap-6">
      {cardData.map((data, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 p-3 rounded-lg"
          style={{ backgroundColor: data.color }}
        >
          <div className="flex items-center gap-3">
            <Image
              src={data.picture}
              width={55}
              height={55}
              alt="stat logo"
              className="rounded-full"
            />
            <div className="flex flex-col items-start gap-1">
              <span className="font-medium text-md">{data.text}</span>
              <span className="font-semibold text-lg">{data.stat}</span>
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

export default StatLahan;
