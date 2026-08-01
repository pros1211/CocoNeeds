"use client";

import React from "react";
import { ClipboardList, Leaf, Droplets, Sprout } from "lucide-react";

interface MaintenanceStatsData {
  total: number;
  pemupukan: number;
  penyiraman: number;
  pengendalianHama: number;
  bibitDitambah: number;
}

interface StatCardConfig {
  title: string;
  key: keyof MaintenanceStatsData;
  unit: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  iconBg: string;
}

const STAT_CARDS: StatCardConfig[] = [
  {
    title: "Total Perawatan",
    key: "total",
    unit: "kegiatan",
    icon: ClipboardList,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    title: "Pemupukan",
    key: "pemupukan",
    unit: "kali",
    icon: Leaf,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    title: "Penyiraman",
    key: "penyiraman",
    unit: "kali",
    icon: Droplets,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },

  {
    title: "Bibit Ditambah",
    key: "bibitDitambah",
    unit: "kali",
    icon: Sprout,
    iconColor: "text-lime-600",
    iconBg: "bg-lime-100",
  },
];

interface MaintenanceStatsProps {
  stats: MaintenanceStatsData;
}

export type { MaintenanceStatsData };

export default function MaintenanceStats({ stats }: MaintenanceStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {STAT_CARDS.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.key}
            className="flex items-center gap-4 rounded-xl border border-[#ECECEC] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${card.iconBg}`}
            >
              <Icon className={`h-6 w-6 ${card.iconColor}`} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-500">
                {card.title}
              </span>
              <div className="flex items-end gap-1">
                <span className="text-xl font-bold text-[#269957]">
                  {stats[card.key]}
                </span>
                <span className="pb-0.5 text-xs text-gray-500">
                  {card.unit}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
