import React from "react";
import Breadcrumbs from "@/components/navigation/breadcrumbs";
import { breadcrumbConfig } from "@/components/navigation/breadcrumbTypes";
import { createClient } from "@/utils/supabase/server";
import MaintenancePage from "@/components/farmer-portal/lahan/dashboard/detailPerawatan/maintenance-page";
import type { MaintenanceActivity } from "@/components/farmer-portal/lahan/dashboard/detailPerawatan/maintenance-columns";
import type { MaintenanceStatsData } from "@/components/farmer-portal/lahan/dashboard/detailPerawatan/maintenance-stats";

export default async function RiwayatPerawatanPage() {
  const items = breadcrumbConfig["/farmer-portal/lahan/riwayatPerawatan"];

  const supabase = await createClient();
  const { data: logPerawatan, error } = await supabase
    .from("maintenance_activity")
    .select(`*, lahan (nama)`)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch log perawatan:", error);
  }

  const perawatan: MaintenanceActivity[] = (logPerawatan ??
    []) as MaintenanceActivity[];

  const stats: MaintenanceStatsData = {
    total: perawatan.length,
    pemupukan: perawatan.filter((item) => item.activity === "Pemupukan").length,
    penyiraman: perawatan.filter((item) => item.activity === "Penyiraman")
      .length,
    pengendalianHama: perawatan.filter(
      (item) => item.activity === "Pengamatan Hama",
    ).length,
    bibitDitambah: perawatan.filter(
      (item) => item.activity === "Bibit ditambah",
    ).length,
  };

  return (
    <div className="flex flex-col gap-6 px-5 py-4">
      <Breadcrumbs items={items} />
      <MaintenancePage data={perawatan} stats={stats} />
    </div>
  );
}
