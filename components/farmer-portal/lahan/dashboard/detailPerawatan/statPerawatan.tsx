import { icon } from "leaflet";
import Image from "next/image";
import React from "react";
const statData = [
  {
    title: "Total perawatan",
    value: 50,
    unit: "kegiatan",
    icon: "/dataPerawatan.png",
  },
  {
    title: "Pemupukan",
    value: 15,
    unit: "kali",
    icon: "/pupuk.png",
  },
  {
    title: "Penyiraman",
    value: 28,
    unit: "kali",
    icon: "/irigasi.png",
  },
  {
    title: "Bibit ditambah",
    value: 10,
    unit: "kali",
    icon: "/sprout.png",
  },
];
const StatPerawatan = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full">
      {statData.map((data, index) => (
        <div
          key={index}
          className="flex items-center gap-3 rounded-2xl border bg-white p-5 shadow-sm"
        >
          <Image src={data.icon} width={60} height={60} alt="icon" />
          <div className="flex flex-col">
            <span className="text-gray-600 font-semibold text-lg">
              {data.title}
            </span>
            <div className="flex items-end gap-1">
              <span className="text-lg text-[#269957] font-semibold">
                {data.value}
              </span>
              <span className="text-sm text-gray-500 font-medium">
                {data.unit}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatPerawatan;
