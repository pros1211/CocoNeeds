"use client";

import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { ClipboardList } from "lucide-react";
import type { DateRange } from "react-day-picker";
import {
  maintenanceColumns,
  getStatusFromPH,
  type MaintenanceActivity,
} from "./maintenance-columns";
import MaintenanceStats, {
  type MaintenanceStatsData,
} from "./maintenance-stats";
import MaintenanceToolbar from "./maintenance-toolbar";
import MaintenanceTable from "./maintenance-table";
import MaintenancePagination from "./maintenance-pagination";

interface MaintenancePageProps {
  data: MaintenanceActivity[];
  stats: MaintenanceStatsData;
}

export default function MaintenancePage({ data, stats }: MaintenancePageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterJenis, setFilterJenis] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [dateRange, setDateRange] = useState<DateRange | undefined>(() => {
    const now = new Date();
    return {
      from: new Date(now.getFullYear(), now.getMonth(), 1),
      to: new Date(now.getFullYear(), now.getMonth() + 1, 0),
    };
  });

  // ── Filtered Data ────────────────────────────────────────────
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchActivity = item.activity?.toLowerCase().includes(query);
        const matchDetail = item.detail?.toLowerCase().includes(query);
        const matchLahan = item.lahan?.nama?.toLowerCase().includes(query);
        if (!matchActivity && !matchDetail && !matchLahan) return false;
      }

      // Jenis filter
      if (filterJenis !== "all") {
        if (item.activity !== filterJenis) return false;
      }

      // Status filter
      if (filterStatus !== "all") {
        const status = getStatusFromPH(item.pH_tanah);
        if (status !== filterStatus) return false;
      }

      // Date range filter
      if (dateRange?.from) {
        const itemDate = new Date(item.tanggal);
        if (itemDate < dateRange.from) return false;
        if (dateRange.to) {
          const endOfDay = new Date(dateRange.to);
          endOfDay.setHours(23, 59, 59, 999);
          if (itemDate > endOfDay) return false;
        }
      }

      return true;
    });
  }, [data, searchQuery, filterJenis, filterStatus, dateRange]);

  // ── TanStack Table ───────────────────────────────────────────
  const table = useReactTable({
    data: filteredData,
    columns: maintenanceColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Section 1: Header */}
      <div className="flex items-center gap-4 rounded-[20px] border border-[#ECECEC] bg-white p-6 shadow-sm">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100">
          <ClipboardList className="h-7 w-7 text-emerald-600" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-wide text-gray-800">
            Riwayat Perawatan Lahan
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Pantau semua aktivitas perawatan pada lahan ini.
          </p>
        </div>
      </div>

      {/* Section 2: Stats */}
      <MaintenanceStats stats={stats} />

      {/* Section 3 + 4 + 5: Toolbar, Table, Pagination */}
      <div className="flex flex-col gap-5 rounded-[20px] border border-[#ECECEC] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
        {/* Section 3: Toolbar */}
        <MaintenanceToolbar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterJenis={filterJenis}
          onFilterJenisChange={setFilterJenis}
          filterStatus={filterStatus}
          onFilterStatusChange={setFilterStatus}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
        />

        {/* Section 4: Table */}
        <MaintenanceTable table={table} />

        {/* Section 5: Pagination */}
        <MaintenancePagination table={table} />
      </div>
    </div>
  );
}
