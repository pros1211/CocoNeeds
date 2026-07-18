import React from "react";
import { TrendingUp } from "lucide-react";
import { GiCoconuts } from "react-icons/gi";
import { MdOilBarrel } from "react-icons/md";
const MarketTrend = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-5 whitespace-nowrap bg-white shadow-sm rounded-lg">
      <div className="flex items-center gap-4">
        <TrendingUp />
        <span className="font-semibold text-lg">Market Price</span>
      </div>
      <div className="flex flex-col gap-4 flex-1 justify-center">
        <div className="flex items-center justify-between p-2 shadow-sm rounded-xl border border-gray-100 bg-white w-full">
          <div className="flex items-center gap-4">
            <GiCoconuts
              color="#A38E65"
              className="w-12 h-12 bg-[#FFEFD5]/80 rounded-lg p-2 shrink-0"
            />
            <div className="flex flex-col gap-0.5 text-left">
              <span className="font-semibold text-sm text-gray-800">Copra</span>
              <span className="font-medium text-xs text-gray-400">IDR/Kg</span>
            </div>
          </div>
          <div className="flex flex-col items-end text-right gap-0.5">
            <span className="font-bold text-md text-gray-800">12,500</span>
            <span className="text-[#70E000] text-xs font-bold">+2.4%</span>
          </div>
        </div>

        <div className="flex items-center gap-8 p-2 shadow-sm rounded-xl border border-gray-100 bg-white w-full">
          <div className="flex items-center gap-4">
            <MdOilBarrel
              color="#FFFF"
              className="w-12 h-12 bg-[#006C48]/80 rounded-lg p-2 shrink-0"
            />
            <div className="flex flex-col gap-0.5 text-left">
              <span className="font-semibold text-sm text-gray-600 leading-tight max-w-[90px]">
                Coconut Oil
              </span>
              <span className="font-medium text-xs text-gray-400">IDR/Kg</span>
            </div>
          </div>
          <div className="flex flex-col items-end text-right gap-1">
            <span className="font-bold text-sm text-gray-800">45,000</span>
            <span className="text-[#70E000] text-xs font-bold">+1.1%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTrend;
