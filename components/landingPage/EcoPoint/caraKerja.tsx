import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
const dataCard = [
  {
    step: "1",
    title: "Serahkan limbah",
    desc: "Kumpulkan sabut, tempurung dan limbah kelapa lainnya untuk dikirimkan ke mitra",
    icon: "/keranjang.png",
    warna: "#FFF9F1",
  },
  {
    step: "2",
    title: "Verifikasi",
    desc: "Limbah anda akan ditimbang dan diverifikasi oleh mitra yang telah diverifikasi.",
    icon: "/verifikasi.png",
  },
  {
    step: "3",
    title: "EcoPoint",
    desc: "Setiap kilogram limbah akan diubah menjadi  Ecopoint yang langsung tercatat di sistem.",
    icon: "/coin.png",
  },
  {
    step: "4",
    title: "Tukar hadiah",
    desc: "Tukarkan EcoPoint dengan berbagai hadiah seperti token listrik, saldo e-wallet hingga pupuk.",
    icon: "/gift.png",
  },
];
import { ShieldCheck, Leaf, Clock3, Gift } from "lucide-react";

const CaraKerja = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col text-center items-center gap-4">
        <h2 className="text-3xl text-white font-bold tracking-wide">
          Dari Limbah Menjadi Manfaat
        </h2>
        <p className="text-md font-medium text-white ">
          Mulai dari penyerahan limbah hingga penukaran hadiah dalam empat
          langkah sederhana.
        </p>
        <div className="relative pt-14">
          <div className="grid grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 p-6 w-full -z-10">
            {dataCard.map((data, index) => (
              <div key={data.step} className="relative group">
                {index !== dataCard.length - 1 && (
                  <>
                    {/* Desktop */}
                    <div className="hidden lg:block absolute top-30 left-full w-12 border-t-2 border-dashed border-white" />

                    {/* Mobile */}
                    <div className="lg:hidden absolute left-1/2 top-full h-12 -translate-x-1/2 border-l-2 border-dashed border-white" />
                  </>
                )}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 z-20">
                  <div className="w-28 h-28 rounded-full bg-white shadow-xl border border-[#EDF3EE] overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                    <Image src={data.icon} width={160} height={50} alt="icon" />
                  </div>
                </div>
                <Card className="h-full rounded-3xl border-[#E8EFEA] shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#72C58F]">
                  <CardContent className="pt-20 pb-3 px-8">
                    <div className="mb-5 flex justify-center">
                      <span className="w-8 h-8 rounded-full bg-[#EAF8EF] text-[#2D6A4F] text-sm font-bold flex items-center justify-center">
                        {data.step}
                      </span>
                    </div>
                    <CardTitle className="text-center text-[#2D6A4F] text-lg font-semibold">
                      {data.title}
                    </CardTitle>
                    <CardDescription className="text-center text-sm font-medium">
                      {data.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaraKerja;
