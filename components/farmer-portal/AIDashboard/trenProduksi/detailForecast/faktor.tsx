import Image from "next/image";
import React from "react";
const dataFaktor = [
  {
    icon: "/irigasi.png",
    title: "Irigasi",
    value: "80%",
    description: "pemberian air cukup dan merata",
  },
  {
    icon: "/irigasi.png",
    title: "Cuaca",
    value: "Ideal",
    description: "Curah hujan ideal untuk pertumbuhan",
  },
  {
    icon: "/pH.png",
    title: "pH tanah",
    value: "6.5",
    description: "Jaga pH tanah di rentang 6.5 hingga 7.0",
  },
  {
    icon: "/hama.png",
    title: "Hama",
    value: "Kumbang badak",
    description: "perlu penanganan untuk mengurangi hama",
  },
  {
    icon: "/coco.png",
    title: "Gugur Buah",
    value: "20%",
    description: "potensi gugur buah cukup rendah",
  },
];
const Faktor = () => {
  return (
    <div className="flex flex-col gap-3 p-3 bg-white rounded-2xl shadow-md">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">Faktor yang perlu dipantau</h2>
        <p className="text-gray-600 text-sm font-medium">
          pantau beberapa faktor berikut untuk optimalisasi hasil panen
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {dataFaktor.map((data, index) => (
          <div
            key={index}
            className="rounded-lg  bg-white border border-gray-300 flex items-center px-2 gap-2"
          >
            <Image src={data.icon} width={70} height={70} alt="icon" />
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-md">{data.title}</span>
              <span className="font-semibold text-lg text-[#269957]">
                {data.value}
              </span>
              <span className="text-sm font-medium">{data.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faktor;
