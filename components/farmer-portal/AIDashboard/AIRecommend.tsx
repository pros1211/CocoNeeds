import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
const AIRecommendation = [
  {
    title: "Optimalkan Pemupukan",
    description:
      "Berdasarkan kondisi tanah, penggunaan pupuk organik dapat membantu meningkatkan pertumbuhan pohon kelapa",
    icon: "/pemula.png",
  },
  {
    title: "Waktu Panen ideal",
    description:
      "Berdasarkan data historis dan siklus panen, panen pada 20 Agustus - 5 September 2026 untuk hasil maksimal",
    icon: "/forecast.png",
  },
  {
    title: "Kelola Irigasi",
    description:
      "Berdasarkan kondisi tanah, kurangi frekuensi penyiraman minggu depan cukup 3 kali.",
    icon: "/water-drop.png",
  },
  {
    title: "Potensi Hama",
    description:
      "Berdasarkan observasi hama, atasi hama kumbang badak untuk meningkatkan kualitas panen",
    icon: "/pemula.png",
  },
];
const AIRecommend = () => {
  return (
    <div className="flex flex-col gap-3 bg-white p-5 rounded-2xl">
      <h2 className="text-[#269957] font-semibold text-lg">
        Rekomendasi untuk anda
      </h2>
      <div className="flex flex-col p-2">
        {AIRecommendation.map((data, index) => (
          <div
            key={index}
            className="flex flex-row items-center rounded-xl gap-2  border hover:shadow-sm p-3 border"
          >
            <div className="w-14 h-14 shrink-0 ">
              <Image src={data.icon} width={50} height={50} alt={data.title} />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-md font-semibold">{data.title}</h3>
              <p className="text-sm font-medium font-gray-600 ">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommend;
