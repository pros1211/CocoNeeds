import React from "react";
import { Truck, Box, Warehouse, Ship, CircleCheckBig } from "lucide-react";
const steps = [
  {
    id: 1,
    title: "Penjemputan",
    description: "dijadwalkan 20 Agustus 2026 09.00",
    icon: Truck,
    status: "active",
  },
  {
    id: 2,
    title: "Pemeriksaan kualitas",
    description: "Pemeriksaan kualitas barang oleh koperasi.",
    icon: Box,
    status: "pending",
  },
  {
    id: 3,
    title: "Koperasi memproses",
    description: "Koperasi melakukan pengemasan.",
    icon: Warehouse,
    status: "pending",
  },
  {
    id: 4,
    title: "Pengiriman barang",
    description: "Barang sedang dikirim oleh koperasi.",
    icon: Ship,
    status: "pending",
  },
  {
    id: 5,
    title: "Produk diterima",
    description: "Produk diterima perusahaan.",
    icon: CircleCheckBig,
    status: "pending",
  },
];
const ActiveShipment = () => {
  return (
    <div className=" flex flex-col gap-3 p-4 rounded-xl bg-white shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-[#269957]">
            Status pengiriman aktif
          </h2>
          <p className="text-sm text-gray-500 font-medium">
            pantau progres dari pengirimanmu
          </p>
        </div>
        <button className="font-medium text-sm p-2 text-white rounded-lg bg-[#269957]">
          Lacak
        </button>
      </div>
      <span className="text-sm text-gray-500">Order ID: SP-105AWX7AZ</span>
      <div className="relative flex items-center gap-4">
        <div className="absolute top-6 left-[10%] right-[10%] border-t-[2px] border-dashed border-gray-200 z-0"></div>
        {steps.map((step) => {
          const isActive =
            step.status === "active" || step.status === "completed";
          return (
            <div
              key={step.id}
              className="flex flex-col items-center gap-4 z-10 w-[90px] md:w-[180px]"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                  isActive
                    ? "bg-[#006C48] border-[#006C48] text-white"
                    : "bg-white border-gray-200 text-gray-500"
                }`}
              >
                <step.icon className="w-5 h-5" />
              </div>
              <div className="text-center flex flex-col gap-1.5">
                <h4 className="font-bold text-sm text-gray-900 leading-tight">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-500 leading-snug hidden md:block">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActiveShipment;
