import React from "react";
import { VscSparkleCompact } from "react-icons/vsc";
import { TrendingDown, TrendingUp } from "lucide-react";
const Insight = () => {
  return (
    <div className="flex flex-col p-4 gap-4 bg-white shadow-md rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <VscSparkleCompact className="w-4 h-4" />
          <span className="text-md font-semibold text-[#468366]">
            AI Insight
          </span>
        </div>
        <button className="text-sm font-semibold">Lihat semua</button>
      </div>
      <div className="bg-[#F9DFB1]/30 border border-[#F9DFB1]/50 flex flex-col p-4 rounded-xl">
        <div className="flex justify-between items-end px-1 pb-3  border-b border-[#D6C4A0]">
          <div className="flex flex-col items-start gap-2">
            <span className="text-md font-medium text-gray-800">
              Produksi bulan depan
            </span>
            <div className="flex items-center gap-3 bg-[#3BA275] px-2 py-1 text-white rounded-lg">
              <TrendingUp className="w-5 h-5" />
              <span className="text-lg font-bold">+14%</span>
            </div>
            <span className="text-xs font-medium text-gray-500 capitalize tracking-wider">
              dibanding bulan ini
            </span>
          </div>
          <div className="flex flex-col items-end text-xs gap-2 text-gray-700">
            <span className="font-semibold bg-white/50 px-2 py-1 rounded-md">
              Kopra: 300 Kg
            </span>
            <span className="font-semibold bg-white/50 px-2 py-1 rounded-md">
              Tempurung: 450 Kg
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-3">
          <span className="text-md font-semibold text-gray-800">
            Rekomendasi alokasi produksi
          </span>
          <div className="flex items-center justify-between shadow-sm rounded-lg p-2.5 bg-[#75DAA8]/40 border border-[#75DAA8]/50 text-[#1a4d27]">
            <span className="text-xs font-bold">Cocopeat</span>
            <span className="font-bold text-sm">30%</span>
          </div>
          <div className="flex items-center justify-between shadow-sm rounded-lg p-2.5 bg-[#793C14]/10 border border-[#793C14]/20 text-[#793C14]">
            <span className="text-xs font-bold">Briket Arang</span>
            <span className="font-bold text-sm">20%</span>
          </div>

          <div className="flex items-center justify-between shadow-sm rounded-lg p-2.5 bg-[#3BA275] text-white">
            <span className="text-xs font-medium">Minyak Kelapa</span>
            <span className="font-bold text-sm">50%</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5 shadow-sm p-3 rounded-xl bg-white border border-gray-100">
          <span className="font-bold text-sm text-gray-700">
            Estimasi profit
          </span>
          <span className="font-bold text-lg text-[#3BA275]">+10%</span>
        </div>
      </div>
    </div>
  );
};

export default Insight;
