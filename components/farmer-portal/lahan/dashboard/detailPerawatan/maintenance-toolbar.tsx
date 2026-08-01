"use client";

import React from "react";
import { Search, Download, CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import type { DateRange } from "react-day-picker";

interface MaintenanceToolbarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  filterJenis: string;
  onFilterJenisChange: (value: string) => void;
  filterStatus: string;
  onFilterStatusChange: (value: string) => void;
  dateRange: DateRange | undefined;
  onDateRangeChange: (range: DateRange | undefined) => void;
}

const JENIS_OPTIONS = [
  { value: "all", label: "Semua Jenis" },
  { value: "Pemupukan", label: "Pemupukan" },
  { value: "Penyiraman", label: "Penyiraman" },
  { value: "Pengendalian Hama", label: "Pengendalian Hama" },
  { value: "Bibit ditambah", label: "Bibit Ditambah" },
];

const STATUS_OPTIONS = [
  { value: "all", label: "Semua Status" },
  { value: "Optimal", label: "Optimal" },
  { value: "Perhatian", label: "Perhatian" },
  { value: "Perlu Perawatan", label: "Perlu Perawatan" },
];

export default function MaintenanceToolbar({
  searchQuery,
  onSearchChange,
  filterJenis,
  onFilterJenisChange,
  filterStatus,
  onFilterStatusChange,
  dateRange,
  onDateRangeChange,
}: MaintenanceToolbarProps) {
  const formatDateRange = (): string => {
    if (!dateRange?.from) return "Pilih tanggal";
    if (!dateRange.to)
      return format(dateRange.from, "dd MMM yyyy", { locale: id });
    return `${format(dateRange.from, "dd MMM", { locale: id })} - ${format(dateRange.to, "dd MMM yyyy", { locale: id })}`;
  };

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
      {/* Search */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Cari jenis perawatan, pupuk, catatan..."
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onSearchChange(e.target.value)
          }
          className="h-10 rounded-xl border-[#ECECEC] bg-white pl-10 text-sm shadow-sm focus-visible:border-[#269957] focus-visible:ring-[#269957]/20"
        />
      </div>

      {/* Filter Jenis */}
      <Select
        value={filterJenis}
        onValueChange={(val) => onFilterJenisChange(val ?? "all")}
      >
        <SelectTrigger className="h-10 w-full min-w-[160px] rounded-xl border-[#ECECEC] bg-white shadow-sm lg:w-auto">
          <SelectValue placeholder="Semua Jenis" />
        </SelectTrigger>
        <SelectContent>
          {JENIS_OPTIONS.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Filter Status */}
      <Select
        value={filterStatus}
        onValueChange={(val) => onFilterStatusChange(val ?? "all")}
      >
        <SelectTrigger className="h-10 w-full min-w-[160px] rounded-xl border-[#ECECEC] bg-white shadow-sm lg:w-auto">
          <SelectValue placeholder="Semua Status" />
        </SelectTrigger>
        <SelectContent>
          {STATUS_OPTIONS.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Date Range Picker */}
      <Popover>
        <PopoverTrigger className="flex h-10 w-full items-center gap-2 rounded-xl border border-[#ECECEC] bg-white px-3 text-sm shadow-sm transition-colors hover:bg-gray-50 lg:w-auto lg:min-w-[220px]">
          <CalendarIcon className="h-4 w-4 text-gray-400" />
          <span className="text-gray-700">{formatDateRange()}</span>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={onDateRangeChange}
            numberOfMonths={2}
            locale={id}
          />
        </PopoverContent>
      </Popover>

      {/* Export Button */}
      <Button
        variant="outline"
        className="h-10 gap-2 rounded-xl border-[#269957] text-[#269957] shadow-sm hover:bg-[#269957]/5"
      >
        <Download className="h-4 w-4" />
        Export
      </Button>
    </div>
  );
}
