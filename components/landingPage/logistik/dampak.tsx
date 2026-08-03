import { Card, CardContent } from "@/components/ui/card";
import React from "react";
const cardData = [
  {
    badge: "Instant",
    title: "Pickup Terjadwal",
    description:
      "Petani dapat mengajukan permintaan pickup hasil panen langsung dari aplikasi sehingga pengiriman lebih cepat.",
  },
  {
    badge: "50%",
    title: "Lebih efisien",
    description:
      "Fitur Split Bill dan Konsolidasi kargo membuat biaya logistik menjadi lebih hemat.",
  },
  {
    badge: "24/7",
    title: "Monitoring",
    description:
      "Lihat dan pantau status pengiriman kapan saja didukung sistem berbasis PWA.",
  },
  {
    badge: "100%",
    title: "Terintegrasi",
    description:
      "Terhubung dengan petani, koperasi dan perusahaan serta fitur Traceability produk.",
  },
];
const Dampak = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <h2 className="text-3xl font-semibold tracking-widers leading-[1.05]">
        Efisien, Mudah dan Terintegrasi
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {cardData.map((data, index) => (
          <Card key={index}>
            <CardContent className="flex flex-col items-center gap-4 text-center h-full">
              <div className="flex flex-col gap-2">
                <div className="inline-flex justify-center rounded-full px-4 py-2 bg-[#EAF8EF]">
                  <span className=" text-3xl font-bold tracking-wide text-[#3BA275]">
                    {data.badge}
                  </span>
                </div>
                <span className="text-xl font-semibold text-[#2D6A4F]">
                  {data.title}
                </span>
              </div>
              <span className="font-medium text-gray-600 ">
                {data.description}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dampak;
