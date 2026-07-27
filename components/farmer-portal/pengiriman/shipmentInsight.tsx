import React from "react";
import { VscSparkleCompact } from "react-icons/vsc";
import { Star, MapPin, TrendingUp, Banknote } from "lucide-react";
const ShipmentInsight = () => {
  return (
    <div className="w-full h-full max-w-md bg-white border border-[#F0EAE1] rounded-xl p-5 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
      {/* HEADER: AI Badge */}
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-[#1F4D36] p-1.5 rounded-lg">
          <VscSparkleCompact className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-lg font-bold text-[#1F4D36] tracking-tight">
          Rekomendasi AI
        </h2>
      </div>

      {/* SUBTITLE */}
      <div className="mb-3">
        <h3 className="font-bold text-[#269957] text-md">
          Koperasi Paling Menguntungkan
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">
          Berdasarkan jarak, harga, dan kebutuhan kelapa hari ini.
        </p>
      </div>

      {/* INNER HIGHLIGHT CARD */}
      <div className="bg-[#FCFBF8] border border-[#F0EAE1] rounded-xl p-4 flex flex-col gap-4">
        {/* Cooperative Name & Rating */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-gray-900 text-base">
              Koperasi Desa Sukamaju
            </h4>
            <div className="flex items-center gap-3 text-[11px] font-semibold text-gray-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#269957]" />
                3.2 km dari Anda
              </span>
              <span className="flex items-center gap-1 text-[#F59E0B]">
                <Star className="w-3.5 h-3.5 fill-current" />
                4.9
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar Section */}
        <div>
          <p className="text-[11px] font-semibold text-gray-500 mb-1">
            Kebutuhan Kelapa Terkumpul
          </p>
          <div className="flex justify-between items-end mb-2">
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-gray-900">1.850 kg</span>
              <span className="text-xs font-bold text-[#269957]">
                / 2.500 kg
              </span>
            </div>
            <span className="text-[11px] font-bold text-gray-500">74%</span>
          </div>
          {/* Custom Progress Bar */}
          <div className="w-full bg-[#E5E7EB] rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-[#539B3F] h-2.5 rounded-full transition-all duration-500"
              style={{ width: "74%" }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F0EAE1]">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
              Estimasi Pendapatan
            </p>
            <div className="flex items-center gap-1.5 text-gray-900">
              <TrendingUp className="w-4 h-4 text-[#269957]" />
              <span className="font-bold text-sm">+ Rp 145.000</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
              Hemat Pickup
            </p>
            <div className="flex items-center gap-1.5 text-gray-900">
              <Banknote className="w-4 h-4 text-[#269957]" />
              <span className="font-bold text-sm">Rp 82.000</span>
            </div>
          </div>
        </div>

        <button className="w-full mt-2 bg-[#1F4D36] hover:bg-[#153626] text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-sm text-sm">
          Kirim ke Koperasi Ini
        </button>
      </div>
    </div>
  );
};

export default ShipmentInsight;
