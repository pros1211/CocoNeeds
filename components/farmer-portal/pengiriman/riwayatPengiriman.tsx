import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
const shipments = [
  {
    id: "CG-250722-001",
    date: "22 Jul 2026",
    product: "Kelapa Bulat",
    weight: "500 kg",
    method: "Pickup",
    status: "Dalam Proses",
  },
  {
    id: "CG-250718-003",
    date: "18 Jul 2026",
    product: "Kelapa Kopra",
    weight: "300 kg",
    method: "Self Delivery",
    status: "Selesai",
  },
  {
    id: "CG-250715-002",
    date: "15 Jul 2026",
    product: "Kelapa Bulat",
    weight: "700 kg",
    method: "Pickup",
    status: "Selesai",
  },
  {
    id: "CG-250710-001",
    date: "10 Jul 2026",
    product: "Kelapa Kopra",
    weight: "400 kg",
    method: "Self Delivery",
    status: "Selesai",
  },
];
const RiwayatPengiriman = () => {
  return (
    <div className="w-full h-full bg-white p-2 rounded-xl shadow-md overflow-hidden">
      {/* Header Section */}
      <div className="p-6 border-b border-[#F0EAE1]">
        <h2 className="text-xl font-bold text-[#269957]">Daftar Pengiriman</h2>
      </div>

      {/* Table Section */}
      <div className="w-full overflow-x-auto">
        <Table className="w-full min-w-[800px]">
          <TableHeader>
            <TableRow className="border-[#F0EAE1] hover:bg-transparent">
              <TableHead className="text-gray-500 font-medium h-12 px-6">
                ID Pengiriman
              </TableHead>
              <TableHead className="text-gray-500 font-medium h-12">
                Tanggal
              </TableHead>
              <TableHead className="text-gray-500 font-medium h-12">
                Produk
              </TableHead>
              <TableHead className="text-gray-500 font-medium h-12">
                Berat
              </TableHead>
              <TableHead className="text-gray-500 font-medium h-12">
                Metode
              </TableHead>
              <TableHead className="text-gray-500 font-medium h-12">
                Status
              </TableHead>
              <TableHead className="text-gray-500 font-medium h-12 text-center">
                Aksi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shipments.map((shipment) => {
              const isProcessing = shipment.status === "Dalam Proses";

              return (
                <TableRow
                  key={shipment.id}
                  className="border-[#F0EAE1] hover:bg-gray-50/50 transition-colors"
                >
                  <TableCell className="font-bold text-md px-6 py-4">
                    {shipment.id}
                  </TableCell>
                  <TableCell className="text-gray-800 py-4">
                    {shipment.date}
                  </TableCell>
                  <TableCell className="text-gray-800 py-4">
                    {shipment.product}
                  </TableCell>
                  <TableCell className="text-gray-800 py-4">
                    {shipment.weight}
                  </TableCell>
                  <TableCell className="text-gray-800 py-4">
                    {shipment.method}
                  </TableCell>
                  <TableCell className="py-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                        isProcessing
                          ? "bg-[#FFF4E5] text-[#F59E0B]"
                          : "bg-[#E8F5EE] text-[#1A6B3B]"
                      }`}
                    >
                      {shipment.status}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 text-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-200 text-[#1F4D36] font-semibold rounded-lg px-6 hover:bg-gray-50 hover:text-[#1A6B3B]"
                    >
                      {isProcessing ? "Lacak" : "Detail"}
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RiwayatPengiriman;
