"use client";
import React from "react";
import { Pencil, UserRound } from "lucide-react";
import DataInformation from "@/components/farmer-portal/eco-points/dataInformation";
import DataKoperasi from "@/components/farmer-portal/eco-points/dataKoperasi";
import WasteSummary from "@/components/farmer-portal/eco-points/wasteSummary";
import PickupSummary from "@/components/farmer-portal/eco-points/pickupSummary";
import ProgressPickup from "@/components/farmer-portal/eco-points/progressPickup";
interface summaryProps {
  onNextStep?: () => void;
  onPrevStep?: () => void;
}
const SummaryPage = ({ onPrevStep, onNextStep }: summaryProps) => {
  return (
    <div className="flex flex-col gap-4 p-5 bg-white rounded-xl">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl tracking-wider">
          Ringkasan Penukaran
        </h1>
        <p className="text-sm font-medium text-gray-600">
          Silahkan periksa kembali semua informasi penukaran limbah sebelum
          konfirmasi penjemputan
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <DataInformation />
            <DataKoperasi />
          </div>

          <div className="w-full mt-2">
            <WasteSummary />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          <div className="w-full">
            <PickupSummary />
          </div>
          <div className="w-full">
            <ProgressPickup />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full mt-6">
        <button
          onClick={() => {
            if (onPrevStep) {
              onPrevStep();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm"
        >
          Kembali
        </button>

        <button
          onClick={() => {
            if (onNextStep) {
              onNextStep();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="bg-[#006C48] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#153626] transition-colors shadow-sm"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default SummaryPage;
