"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Leaf, Droplets, Bug, Sprout, Eye, ClipboardList } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ─── Types ───────────────────────────────────────────────────────
export interface MaintenanceActivity {
  id: string;
  lahan_id: string;
  source_table: string;
  source_id: string;
  tanggal: string;
  activity: string;
  detail: string;
  pH_tanah: number | null;
  created_at: string;
  lahan: { nama: string } | null;
}

export type MaintenanceStatus = "Optimal" | "Perhatian" | "Perlu Perawatan";

// ─── Status Helper ───────────────────────────────────────────────
export function getStatusFromPH(pH: number | null): MaintenanceStatus {
  if (pH === null || pH === undefined) return "Optimal";
  if (pH >= 6.0 && pH <= 7.0) return "Optimal";
  if ((pH >= 5.0 && pH < 6.0) || (pH > 7.0 && pH <= 8.0)) return "Perhatian";
  return "Perlu Perawatan";
}

const STATUS_STYLES: Record<MaintenanceStatus, string> = {
  Optimal: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Perhatian: "bg-amber-100 text-amber-700 border-amber-200",
  "Perlu Perawatan": "bg-red-100 text-red-700 border-red-200",
};

// ─── Activity Icon Map ───────────────────────────────────────────
interface ActivityIconConfig {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  bg: string;
}

const ACTIVITY_ICONS: Record<string, ActivityIconConfig> = {
  Pemupukan: {
    icon: Leaf,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  Penyiraman: {
    icon: Droplets,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  "Pengendalian Hama": {
    icon: Bug,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
  "Pengamatan Hama": {
    icon: Bug,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
  "Bibit ditambah": {
    icon: Sprout,
    color: "text-lime-600",
    bg: "bg-lime-100",
  },
};

function getActivityIcon(activity: string): ActivityIconConfig {
  return (
    ACTIVITY_ICONS[activity] ?? {
      icon: ClipboardList,
      color: "text-gray-600",
      bg: "bg-gray-100",
    }
  );
}

// ─── Date Formatter ──────────────────────────────────────────────
function formatTanggal(dateStr: string): { date: string; time: string } {
  try {
    const d = new Date(dateStr);
    return {
      date: format(d, "dd MMMM yyyy", { locale: id }),
      time: format(d, "HH.mm", { locale: id }) + " WIB",
    };
  } catch {
    return { date: dateStr, time: "" };
  }
}

// ─── Column Definitions ─────────────────────────────────────────
export const maintenanceColumns: ColumnDef<MaintenanceActivity>[] = [
  {
    accessorKey: "tanggal",
    header: "Tanggal",
    cell: ({ row }) => {
      const { date, time } = formatTanggal(row.original.tanggal);
      return (
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">{date}</span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "activity",
    header: "Jenis Perawatan",
    cell: ({ row }) => {
      const activity = row.original.activity;
      const { icon: Icon, color, bg } = getActivityIcon(activity);
      return (
        <div className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-full ${bg}`}
          >
            <Icon className={`h-4 w-4 ${color}`} />
          </div>
          <span className="font-medium text-gray-800">{activity}</span>
        </div>
      );
    },
  },
  {
    id: "lahan",
    header: "Lahan",
    accessorFn: (row) => row.lahan?.nama ?? "-",
    cell: ({ getValue }) => (
      <span className="font-medium text-gray-700">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "pH_tanah",
    header: "pH Tanah",
    cell: ({ row }) => {
      const ph = row.original.pH_tanah;
      return (
        <span className="font-semibold text-gray-800">
          {ph !== null && ph !== undefined ? ph.toFixed(1) : "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "detail",
    header: "Detail",
    cell: ({ row }) => (
      <span className="text-gray-600">{row.original.detail || "-"}</span>
    ),
  },
  {
    id: "status",
    header: "Status",
    accessorFn: (row) => getStatusFromPH(row.pH_tanah),
    cell: ({ row }) => {
      const status = getStatusFromPH(row.original.pH_tanah);
      return (
        <Badge
          className={`${STATUS_STYLES[status]} border px-3 py-1 text-xs font-semibold`}
        >
          {status}
        </Badge>
      );
    },
  },
];
