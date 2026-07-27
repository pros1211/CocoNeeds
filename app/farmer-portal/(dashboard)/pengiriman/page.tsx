import React from "react";
import StatCard from "@/components/farmer-portal/pengiriman/statCard";
import ActiveShipment from "@/components/farmer-portal/pengiriman/activeShipment";
import PickupSchedule from "@/components/farmer-portal/pengiriman/pickupSchedule";
import RiwayatPengiriman from "@/components/farmer-portal/pengiriman/riwayatPengiriman";
import ShipmentInsight from "@/components/farmer-portal/pengiriman/shipmentInsight";
import Link from "next/link";
const Pengiriman = () => {
  return (
    <div className="flex flex-col gap-4 p-6 w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[#269957] text-3xl tracking-wider">
            Logistik
          </h1>
          <span className="text-md font-medium text-gray-500">
            Pantau dan kelola pengiriman produk anda.
          </span>
        </div>
        <Link
          href="/farmer-portal/logistik/"
          className="bg-[#269957] text-white p-2 rounded-lg text-md font-semibold"
        >
          Kirim Produk
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-4 ">
        <div className="lg:col-span-6 w-full">
          <StatCard />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-4">
          <ActiveShipment />
          <div className="flex-1">
            <RiwayatPengiriman />
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-4 w-full">
          <PickupSchedule />
          <div className="flex-1">
            <ShipmentInsight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengiriman;
