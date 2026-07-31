import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUp, Podium } from "lucide-react";
const cardData = [];
const EcoStat = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex flex-col gap-2 bg-white border border-[#E5F0E8] shadow-sm px-5 py-3 rounded-2xl w-full min-h-[150px]">
        <div className="flex items-center gap-5">
          <Image
            src="/ecopoint.png"
            width={95}
            height={95}
            alt="ecopoint-logo"
            className="object-contain rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#1F4D36] uppercase tracking-wider">
              Total EcoPoint Saya
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-[#0F291E]">
                1.250
              </span>
              <span className="text-sm font-semibold text-gray-500">Poin</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-500">
            Level: <span className="text-[#269957]">Petani Hijau</span>
          </span>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2 bg-[#E8F3E8] rounded-full overflow-hidden">
              <div className="h-full bg-[#269957] rounded-full w-[83%]"></div>
            </div>
            <span className="text-xs font-bold text-gray-500">
              1.250 / 1.500
            </span>
          </div>
          <span className="text-xs font-medium text-gray-500 mt-1">
            250 poin lagi ke level berikutnya
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white border border-[#FEF3E2] shadow-sm px-5 py-3 rounded-2xl w-full min-h-[150px] ">
        <div className="flex items-center gap-5">
          <Image
            src="/recycle.png"
            width={95}
            height={95}
            alt="recycle-logo"
            className="object-contain rounded-full"
          />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-[#1F4D36] uppercase tracking-wider">
              Total limbah ditukarkan
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold">100</span>
              <span className="text-lg font-medium">Kg</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold flex items-center gap-1">
            <ArrowUp className="w-4 h-4 text-[#269957]" /> 20% dibanding bulan
            lalu
          </span>
          <span className="text-sm text-[#269957] flex items-center gap-2 font-medium">
            Lihat detail
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white border border-[#FEF3E2] shadow-sm px-5 py-3 rounded-2xl w-full min-h-[150px]">
        <div className="flex items-center gap-5">
          <Image
            src="/leaderboard.png"
            width={95}
            height={95}
            alt="leaderboard-logo"
            className="object-contain rounded-full"
          />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-[#1F4D36] uppercase  tracking-wider">
              Peringkat saya
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-semibold">#80</span>
              <span className="text-lg font-medium">/ 180</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold flex items-center gap-1">
            <Podium className="w-5 h-5 text-[#269957]" /> lebih baik dari 20%
            petani
          </span>
          <span className="text-sm font-medium text-gray-500">
            Periode: 1 - 24 Jul 2026
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white border border-[#FEF3E2] shadow-sm px-5 py-3 rounded-2xl w-full min-h-[150px]">
        <div className="flex items-center gap-4">
          <Image
            src="/emission.png"
            width={95}
            height={95}
            alt="emmision-logo"
            className="object-contain rounded-full"
          />
          <div className="flex flex-col items-start w-full gap-1">
            <span className="text-xs font-bold text-[#1F4D36] uppercase  tracking-wider">
              Total emisi karbon dicegah
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-semibold">200</span>
              <span className="text-lg font-medium">Kg CO₂</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-[#269957] flex items-center gap-1">
            <ArrowUp className="w-4 h-4" /> 20% dibanding bulan lalu
          </span>
          <span className="text-sm font-medium text-gray-500">
            Periode: 1 - 24 Jul 2026
          </span>
        </div>
      </div>
    </div>
  );
};

export default EcoStat;
