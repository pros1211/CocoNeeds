import { Card, CardContent } from "@/components/ui/card";
import { Handshake, PackageSearch, ShieldCheck, Users } from "lucide-react";
import React from "react";
const cardData = [
  {
    title: "Permintaan Besar",
    desc: "Industri membutuhkan pasokan kelapa dalam jumlah besar dan konsisten yang seringkali tidak bisa dipenuhi satu petani.",
    icon: PackageSearch,
  },
  {
    title: "Pasokan Terdistribusi",
    desc: "Tidak semua petani memiliki pasokan yang sama, sehingga koperasi menjadi tempat pengumpul pasokan dari berbagai petani",
    icon: Users,
  },
  {
    title: "Dikelola koperasi",
    desc: "Koperasi menggabungkan seluruh penawaran menjadi satu kontrak yang menguntungkan semua pihak.",
    icon: Handshake,
  },
  {
    title: "Transparan",
    desc: "Semua proses negosiasi, pengiriman, dan pembayaran tercatat dengan jelas melalui sistem memastikan keaslian produk.",
    icon: ShieldCheck,
  },
];
const Advantage = () => {
  return (
    <div className="relative flex flex-col items-center gap-4 w-full px-6 py-28">
      <h2 className="font-bold text-3xl text-[#2D6A4F]">
        Mengapa Crowd Supplying?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-6">
        {cardData.map((data) => {
          const Icon = data.icon;
          return (
            <Card
              key={data.title}
              className="hover:border hover:border-[#3BA275] transition-all"
            >
              <CardContent className="flex flex-col gap-6 items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#EAF7EF] flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#2D6A4F]" />
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
