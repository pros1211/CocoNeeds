import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
const cardData = [
  {
    title: "Pickup Scheduling",
    desc: "Petani dapat melakukan penjadwalan pickup sebelum diambil oleh koperasi agar proses pengiriman lebih efisien.",
    icon: "/scheduling.png",
  },
  {
    title: "Cargo consolidation",
    desc: "Menggabungkan hasil panen dari banyak petani menjadi satu pengiriman untuk memperkecil biaya.",
    icon: "/consolidation.png",
  },
  {
    title: "Live Status",
    desc: "Pantau status pengiriman dari pickup sampai barang diterima oleh perusahaan.",
    icon: "/mapPin.png",
  },
  {
    title: "Split Bill",
    desc: "Biaya kargo hasil konsolidasi terbagi secara otomatis ke setiap petani sehingga biaya logistik lebih murah.",
    icon: "/SplitBill.png",
  },
  {
    title: "AI Assisted",
    desc: "AI membantu memberikan konsolidasi barang dalam satu batch pengiriman untuk memaksimalkan volume.",
    icon: "/gemini.png",
  },
];
const Advantage = () => {
  return (
    <div className="flex flex-col gap-6 text-center items-center mt-6 py-8 bg-[#FFFF]">
      <h2 className="text-3xl text-[#3BA275] font-semibold">
        Logistik yang lebih efisien dari pickup hingga pengiriman
      </h2>
      <p className="font-medium text-gray-600">
        Semua proses logistik bekerja bersama untuk memastikan pengiriman hasil
        panen lebih efisien, mudah dipantau, dan transparan.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 px-8">
        {cardData.map((data) => {
          return (
            <Card
              key={data.title}
              className="hover:border hover:border-[#3BA275] transition-all"
            >
              <CardContent className="flex flex-col gap-4 items-center">
                <div className="w-24 h-24 rounded-2xl  flex items-center justify-center">
                  <Image
                    src={data.icon}
                    width={100}
                    height={100}
                    alt={data.title}
                    className="aspect-square"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-lg text-[#3BA275] font-semibold">
                    {data.title}
                  </span>
                  <span className="text-center font-gray-600 text-md font-medium">
                    {data.desc}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Advantage;
