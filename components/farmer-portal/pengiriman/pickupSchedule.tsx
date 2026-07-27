import React from "react";
import { Calendar } from "lucide-react";
const PickupSchedule = () => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-xl shadow-md p-4 h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#269957]">
          Pengiriman terjadwal
        </h2>
        <button className="font-medium text-sm p-2 text-white rounded-lg bg-[#269957]">
          Lihat semua
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#269957]" fill="#E8F5E9" />
          <span className="text-sm font-medium text-[#468366]/80">
            Jadwal Penjemputan berikutnya
          </span>
        </div>
        <div className="flex flex-col gap-1 text-left py-1 border-b border-gray-200">
          <span className="font-semibold text-md">Koperasi Desa Sukamaju</span>
          <span className="text-sm text-gray-500">25 Juli 2026 - 09.00</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-xs text-gray-500">
                Produk
              </span>
              <span className="font-semibold text-sm">Kopra Kelapa</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-xs text-gray-500">
                Berat total
              </span>
              <span className="font-semibold text-sm">700 Kg</span>
            </div>
          </div>
        </div>
        <button className="flex-end font-medium text-sm p-2 text-white rounded-lg bg-[#269957]">
          Ubah jadwal
        </button>
      </div>
    </div>
  );
};

export default PickupSchedule;
