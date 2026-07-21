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
    <div className="grid grid-cols-6 gap-4 p-4 bg-[#F8F9FA] min-h-screen">
      <div className="col-span-6 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold tracking-widers">Lahan</span>
          <span className="text-md font-medium">
            Kelola dan pantau kondisi lahan milikmu
          </span>
        </div>
        <LaporanLahan lahanList={lahanOptions} />
      </div>
      <div className="col-span-4 flex flex-col gap-4 h-[760px]">
        <div className="w-full ">
          <StatLahan />
        </div>
        <div className="min-h-0 flex-1 flex flex-col gap-4 p-6 bg-white shadow-sm rounded-xl">
          <ListLahan />
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-4 h-[760px]">
        <div>
          <KondisiLahan />
        </div>
        <div className="flex-1 min-h-0">{taskComponent}</div>
      </div>
    </div>
  );
};

export default ClientLahan;
