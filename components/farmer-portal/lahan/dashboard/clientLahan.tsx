import React from "react";
import ListLahan from "./listLahan";
import KondisiLahan from "@/components/farmer-portal/lahan/dashboard/kondisiLahan";
import StatLahan from "./statLahan";
import LaporanLahan from "../laporanLahan";
import { createClient } from "@/utils/supabase/server";
import RiwayatPerawatan from "./riwayatPerawatan";
import AIRecommend from "../../AIDashboard/AIRecommend";
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
    <div className="bg-[#F8F9FA] px-4 lg:px-6 h-[calc(100vh-180px)]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <div>
          <h1 className="text-3xl font-bold text-[#269957]">Lahan</h1>
          <p className="text-gray-600 mt-1 text-sm">
            Kelola dan pantau kondisi lahan milikmu
          </p>
        </div>

        <LaporanLahan lahanList={lahanOptions} />
      </div>

      <div className="shrink-0">
        <StatLahan />
      </div>
      <div className="flex-1 min-h-0"></div>
      <div className="grid lg:grid-cols-12 gap-4 flex-1 min-h-0 mt-4">
        <div className="lg:col-span-7 min-h-0">
          <ListLahan />
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4 min-h-0">
          <div className="shrink-0">
            <KondisiLahan />
          </div>

          <div className="flex-1 min-h-0">
            <RiwayatPerawatan />
          </div>

          <div className="shrink-0">
            <AIRecommend />
          </div>
        </div>
      </div>
      {/* <div className="flex-1 min-h-0 overflow-hidden">
              {taskComponent}
            </div> */}
    </div>
  );
};

export default ClientLahan;
