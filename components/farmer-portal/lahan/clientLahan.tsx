import React from "react";
import ListLahan from "./listLahan";
import KondisiLahan from "@/components/farmer-portal/lahan/kondisiLahan";
import StatLahan from "@/components/farmer-portal/lahan/statLahan";
import LaporanLahan from "./laporanLahan";
import { createClient } from "@/utils/supabase/server";
interface LahanProps {
  taskComponent: React.ReactNode;
}

const ClientLahan = async ({ taskComponent }: LahanProps) => {
  const supabase = await createClient();

  const { data: lahanData } = await supabase
    .from("lahan")
    .select("id, nama")
    .order("created_at", { ascending: false });

  const lahanOptions = lahanData || [];
  return (
    <div className="bg-[#F8F9FA] min-h-screen p-4 lg:p-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <div>
          <h1 className="text-3xl font-bold">Lahan</h1>
          <p className="text-gray-500 mt-1">
            Kelola dan pantau kondisi lahan milikmu
          </p>
        </div>

        <LaporanLahan lahanList={lahanOptions} />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:grid lg:grid-cols-6 gap-5 h-[760px]">
        {/* LEFT */}
        <div className="col-span-4 flex flex-col gap-5 min-h-0">
          <StatLahan />

          <div className="flex-1 min-h-0 rounded-2xl bg-white shadow-sm overflow-hidden">
            <ListLahan />
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-2 flex flex-col gap-5 min-h-0">
          <KondisiLahan />

          <div className="flex-1 min-h-0 overflow-hidden">{taskComponent}</div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex flex-col gap-5 lg:hidden">
        <StatLahan />

        <KondisiLahan />

        <ListLahan />

        {taskComponent}
      </div>
    </div>
  );
};

export default ClientLahan;
