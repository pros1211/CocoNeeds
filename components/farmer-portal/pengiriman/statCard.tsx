import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
const StatCard = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="flex items-center gap-3 bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] rounded-xl p-4 transition-all hover:shadow-md">
        <Image
          src="/truck.png"
          width={80}
          height={80}
          alt="truck illust"
          className="shrink-0 object-contain"
        />
        <div className="flex flex-col items-start text-left gap-1">
          <span className="text-xs font-semibold text-gray-500 mb-0.5">
            Pengiriman berikutnya
          </span>
          <span className="text-lg font-bold text-[#1F4D36]">24 Agustus</span>
          <button className="text-xs font-medium flex items-center gap-2 text-[#269957]">
            Ajukan pengiriman <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-[#F0EAE1] rounded-xl p-4 transition-all hover:shadow-md">
        <Image
          src="/crate.png"
          width={80}
          height={80}
          alt="crate"
          className="shrink-0 object-contain"
        />
        <div className="flex flex-col items-start text-left">
          <span className="text-xs font-semibold text-gray-500 mb-0.5">
            Total Pengiriman
          </span>
          <span className="text-lg font-bold text-[#1F4D36]">12 kali</span>
          <button className="text-xs flex items-center gap-2 font-medium text-[#269957] hover:text-[#1F4D36] mt-0.5 transition-colors">
            Lihat riwayat <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-[#F0EAE1] rounded-xl p-4 transition-all hover:shadow-md">
        <Image
          src="/OnProcess.png"
          width={80}
          height={80}
          alt="process illust"
          className="shrink-0 object-contain"
        />
        <div className="flex flex-col items-start text-left">
          <span className="text-xs font-semibold text-gray-500 mb-0.5">
            pengiriman diproses
          </span>
          <span className="text-lg font-bold text-[#1F4D36]">1 diproses</span>
          <button className="text-xs font-medium flex items-center gap-2 text-[#269957]">
            Lihat riwayat <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3 shadow-[0_2px_10px_rgb(0,0,0,0.02)] bg-white rounded-xl p-4 transition-all hover:shadow-md">
        <Image
          src="/shipmentConfirm.png"
          width={80}
          height={80}
          alt="truck illust"
          className="shrink-0 object-contain"
        />
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-gray-500 mb-0.5">
            pengiriman selesai
          </span>
          <span className="text-lg font-bold text-[#1F4D36]">5 pengiriman</span>
          <button className="text-xs font-medium flex items-center gap-2 text-[#269957]">
            Lihat riwayat <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] rounded-xl p-4 transition-all hover:shadow-md">
        <Image
          src="/saving.png"
          width={80}
          height={80}
          alt="saving illust"
          className="object-contain shrink-0"
        />
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-gray-500 mb-0.5">
            Biaya dihemat
          </span>
          <span className="text-lg font-bold text-[#1F4D36]">Rp 382.000</span>
          <button className="text-xs font-medium flex items-center gap-2 text-[#269957]">
            Lihat riwayat <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
