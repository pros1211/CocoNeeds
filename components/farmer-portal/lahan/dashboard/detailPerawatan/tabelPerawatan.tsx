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
const TabelPerawatan = async () => {
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
    <div className="w-full overflow-y-auto bg-white p-5 rounded-xl">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="border-[#F0EAE1] hover:bg-transparent">
            <TableHead>Tanggal</TableHead>
            <TableHead>Lahan</TableHead>
            <TableHead>Aktivitas</TableHead>
            <TableHead>Detail perawatan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-[#F0EAE1] hover:bg-gray-50/50 transition-colors">
          {perawatan.map((item) => (
            <TableRow key={item.id} className="font-semibold">
              <TableCell>{item.tanggal}</TableCell>
              <TableCell>{item.lahan?.nama}</TableCell>
              <TableCell>{item.activity}</TableCell>
              <TableCell>{item.detail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TabelPerawatan;
