import { Bandage } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { createClient } from "@/utils/supabase/server";
const RiwayatPerawatan = async () => {
  const supabase = await createClient();
  const { data: logPerawatan, error } = await supabase
    .from("maintenance_activity")
    .select(`*, lahan (nama)`)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch log perawatan:", error);
  }
  const perawatan = logPerawatan || [];
  return (
    <div className="flex flex-col items-center w-full gap-4 p-3 min-h-0 h-full bg-white rounded-xl">
      <div className="flex items-center w-full justify-between shrink-0">
        <div className="flex items-center gap-2">
          <Bandage className="w-6 h-6 text-[#52AB72]" />
          <h2 className="font-semibold text-lg">Riwayat perawatan</h2>
        </div>
        <Link
          href="/farmer-portal/lahan/riwayatPerawatan"
          className="text-[#269957] font-semibold"
        >
          Lihat semua
        </Link>
      </div>
      <div className="w-full flex-1 min-h-0 overflow-y-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="border-[#F0EAE1] hover:bg-transparent">
              <TableHead>Tanggal</TableHead>
              <TableHead>Lahan</TableHead>
              <TableHead>Aktivitas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-[#F0EAE1] hover:bg-gray-50/50 transition-colors">
            {perawatan.map((item) => (
              <TableRow key={item.id} className="font-semibold">
                <TableCell>{item.tanggal}</TableCell>
                <TableCell>{item.lahan?.nama}</TableCell>
                <TableCell>{item.activity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RiwayatPerawatan;
