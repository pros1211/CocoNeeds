import React from "react";
import { MapPin } from "lucide-react";
import { FormLand } from "@/components/formLand";
import FormLahan from "./formLahan";
import { createClient } from "@/utils/supabase/server";

const ListLahan = async () => {
  const supabase = await createClient();

  const { data: lahanData, error } = await supabase
    .from("lahan")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch lahan:", error);
  }

  const lahan = lahanData || [];
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-gray-800">Manajemen Lahan</h2>
        <FormLahan />
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-4 custom-scrollbar pr-2">
        {lahan.map((data, index) => (
          <div
            key={index}
            className="flex flex-col bg-white border border-gray-300 rounded-xl p-4 transition-all hover:border-[#269957] hover:shadow-sm"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                {data.nama}
              </h3>
              <div className="flex gap-4 text-sm font-medium text-gray-700">
                <span>Luas : {data.luas} Meter persegi</span>
                <span>pohon : {data.jumlah_pohon}</span>
              </div>
            </div>
            <hr className="border-gray-200 mb-3" />
            <div className="flex justify-between items-center text-sm">
              <div className="flex gap-1">
                <span className="text-gray-500">Irigasi :</span>
                <span className="font-semibold text-gray-800">
                  {data.irigasi}
                </span>
              </div>

              <div className="flex gap-1">
                <span className="text-gray-500">Pupuk :</span>
                <span className="font-semibold text-gray-800">
                  {data.pupuk}
                </span>
              </div>

              <div className="flex gap-1">
                <span className="text-gray-500">total panen :</span>
                <span className="font-semibold text-gray-800">
                  {data.totalPanen}
                </span>
              </div>

              <div className="flex gap-1">
                <span className="text-gray-500">waktu panen :</span>
                <span className="font-semibold text-[#269957]">
                  {data.waktuPanen}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListLahan;
