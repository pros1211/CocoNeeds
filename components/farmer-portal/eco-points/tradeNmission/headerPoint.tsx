import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderPoint = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-green-100  shadow-sm">
      <Image
        src="/backgroundEco.png"
        alt=""
        fill
        priority
        className="object-cover inset-0 opacity-70 z-0 select-none pointer-events-none"
      />

      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] -z-10" />
      <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-4 w-full rounded-x p-5">
        <div className="lg:col-span-3 flex justify-center">
          <Image
            src="/ecoMascot.png"
            width={220}
            height={220}
            alt="ecoPoint Mascot"
            className="shrink-0 w-40 md:w-52 lg:w-60 h-auto"
          />
        </div>
        <div className="lg:col-span-5 flex flex-col gap-2">
          <span className="font-semibold text-sm">
            Level:
            <span className="text-[#269957] font-semibold"> Petani Hijau</span>
          </span>
          <div className="flex items-end gap-2 flex-wrap">
            <h2 className="font-extrabold text-4xl text-[#269957]">1,250</h2>
            <span className="text-[#269957] font-semibold text-md">
              EcoPoints
            </span>
          </div>
          <div className="h-2 bg-[#E8F3E8] rounded-full overflow-hidden">
            <div className="h-full bg-[#269957] rounded-full w-[83%]"></div>
          </div>
          <span className="text-xs font-gray-900 font-medium">
            300 poin lagi menuju organik
          </span>
        </div>
        <div className="lg:col-span-4">
          <div className="rounded-2xl min-h-[220px]  flex flex-col gap-2 items-center justify-center text-center h-full">
            <Image
              src="/hijau.png"
              width={150}
              height={150}
              alt="petani Hijau"
              className="mx-auto"
            />
            <div className="flex items-center gap-2 mb-5">
              <Sparkles className="w-5 h-5 text-[#269957]" />

              <h3 className="font-bold text-md">Benefit Saat Ini</h3>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-gray-600">Bonus EcoPoint</span>

                <span className="font-semibold text-sm text-[#269957]">
                  +0.5%
                </span>
              </div>

              <div className="flex justify-between gap-3">
                <span className="text-gray-600">Bonus Penjemputan</span>

                <span className="font-semibold text-[#269957]">2x</span>
              </div>

              <div className="flex justify-between gap-3">
                <span className="text-gray-600">Hadiah Bulanan</span>

                <span className="font-semibold text-[#269957]">Pupuk 3 Kg</span>
              </div>
            </div>
            <Link
              href="/farmer-portal"
              className="font-semibold text-[#269957] text-sm flex items-center gap-2"
            >
              Lihat Detail <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderPoint;
