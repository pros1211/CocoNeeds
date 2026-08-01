import React from "react";
const statCard = [
  {
    title: "Total Pohon",
    value: "420",
    unit: "pohon",
    status: "Produktif: 398 pohon",
    icon: "/landCond.png",
  },
  {
    title: "Total luas",
    value: "17.4",
    unit: "Ha",
    status: "Luas Produktif: 16.2 Ha",
    icon: "/mapPin.png",
  },
  {
    title: "Skor kesehatan",
    value: "92",
    unit: "sangat baik",
    status: "Perawatan mencukupi",
    icon: "/healthGauge.png",
  },
  {
    title: "Panen berikutnya",
    value: "12",
    unit: "Hari lagi",
    status: "estimasi: 20 Agustus 2026",
    icon: "/dataPanen.png",
  },
];
import Image from "next/image";
const StatLahan = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {statCard.map((data, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center gap-3 bg-white rounded-xl shadow-sm p-2"
        >
          <Image src={data.icon} width={80} height={80} alt="icon" />
          <div className="flex flex-col gap-2 items-center">
            <span className="font-bold text-md lg:text-lg">{data.title}</span>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-semibold text-[#269957]">
                {data.value}
              </span>
              <span className="text-sm lg:text-md font-semibold">
                {data.unit}
              </span>
            </div>
            <span className="text-xs text-[#4E9874] font-semibold lg:text-sm">
              {data.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatLahan;
