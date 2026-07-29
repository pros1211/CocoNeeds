import React from "react";
import { Recycle, Weight } from "lucide-react";
import { TbCoin } from "react-icons/tb";
const PickupSummary = () => {
  return (
    <div className="flex flex-col gap-6 bg-white p-3 shadow-sm rounded-2xl">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-lg">Rangkuman</h2>
        <p className="text-sm font-medium">
          Ringkasan limbah yang kamu tukarkan
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-4">
        <div className="flex flex-row sm:flex-col items-center gap-4 rounded-xl p-5 gap-3 rounded-xl  bg-[#E8F5E9] text-[#269957]">
          <Recycle className="w-8 h-8" />
          <span className="text-sm font-semibold">
            Jumlah jenis limbah ditukarkan
          </span>
          <span className="whitespace-nowrap text-sm font-medium">3 Jenis</span>
        </div>
        <div className="flex flex-row sm:flex-col items-center gap-4 rounded-xl p-5 gap-3 rounded-xl  bg-[#E8F5E9] text-[#269957]">
          <Weight className="w-8 h-8" />
          <span className="text-sm font-semibold">
            Total berat limbah ditukarkan
          </span>
          <span className="whitespace-nowrap text-sm font-medium">3 Jenis</span>
        </div>
        <div className="flex flex-row sm:flex-col items-center gap-4 rounded-xl p-5 gap-3 rounded-xl  bg-[#E8F5E9] text-[#269957]">
          <TbCoin className="w-8 h-8" />
          <span className="text-sm font-semibold">
            Total poin didapat dari penukaran
          </span>
          <span className="whitespace-nowrap text-sm font-medium">
            300 Poin
          </span>
        </div>
      </div>
    </div>
  );
};

export default PickupSummary;
