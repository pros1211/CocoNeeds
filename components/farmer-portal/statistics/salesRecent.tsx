"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const transactions = [
  {
    id: "TRX-001",
    date: "May 15, 2026",
    time: "14:30",
    amount: 2500000,
    status: "selesai",
  },
  {
    id: "TRX-002",
    date: "May 14, 2026",
    time: "09:15",
    amount: 1800000,
    status: "pengiriman",
  },
  {
    id: "TRX-003",
    date: "May 14, 2026",
    time: "08:00",
    amount: 500000,
    status: "selesai",
  },
  {
    id: "TRX-004",
    date: "May 13, 2026",
    time: "16:45",
    amount: 3200000,
    status: "menunggu",
  },
  {
    id: "TRX-005",
    date: "May 12, 2026",
    time: "11:20",
    amount: 1100000,
    status: "selesai",
  },
  {
    id: "TRX-006",
    date: "May 10, 2026",
    time: "10:00",
    amount: 4500000,
    status: "selesai",
  },
  {
    id: "TRX-007",
    date: "May 09, 2026",
    time: "13:10",
    amount: 800000,
    status: "pengiriman",
  },
];
const StatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case "selesai":
      return (
        <span className="px-3 py-1 rounded-full bg-[#269957]/10 text-[#269957] text-xs font-semibold tracking-wide">
          Selesai
        </span>
      );
    case "pengiriman":
      return (
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide">
          Pengiriman
        </span>
      );
    case "menunggu":
      return (
        <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold tracking-wide">
          Menunggu
        </span>
      );
    default:
      return null;
  }
};
const SalesRecent = () => {
  return (
    <Card className="p-3 h-full flex flex-col gap-4">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold">
          Riwayat Penjualan
        </CardTitle>
        <Link
          href="/farmer-portal/transactions"
          className="text-sm font-medium text-gray-500 hover:text-[#269957] transition-colors"
        >
          Lihat Semua
        </Link>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[230px] w-full pr-4">
          <Table>
            <TableHeader className="bg-gray-50/50 sticky top-0 z-10">
              <TableRow className="border-none hover:bg-transparent">
                <TableHead className="text-gray-500 font-medium h-10 rounded-l-lg">
                  Tanggal & Waktu
                </TableHead>
                <TableHead className="text-gray-500 font-medium h-10">
                  Nominal
                </TableHead>
                <TableHead className="text-gray-500 font-medium h-10 rounded-r-lg text-right">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((trx) => (
                <TableRow
                  key={trx.id}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <TableCell className="py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900 font-medium">
                        {trx.date}
                      </span>
                      <span className="text-gray-400 text-sm">{trx.time}</span>
                    </div>
                  </TableCell>

                  <TableCell className="py-4 font-semibold text-gray-900">
                    Rp {trx.amount.toLocaleString("id-ID")}
                  </TableCell>

                  <TableCell className="py-4 text-right">
                    <StatusBadge status={trx.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default SalesRecent;
