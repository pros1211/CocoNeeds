import React from "react";
import { breadcrumbConfig } from "@/components/navigation/breadcrumbTypes";
import Breadcrumbs from "@/components/navigation/breadcrumbs";
import { Download, FileText } from "lucide-react";
import EstimasiPanen from "@/components/farmer-portal/AIDashboard/trenProduksi/detailForecast/estimasiPanen";
import ProductionCard from "@/components/farmer-portal/AIDashboard/trenProduksi/productionCard";
import Faktor from "@/components/farmer-portal/AIDashboard/trenProduksi/detailForecast/faktor";
import RekomendasiAI from "@/components/farmer-portal/AIDashboard/trenProduksi/detailForecast/rekomendasiAI";
const ForecastDetail = () => {
  const items = breadcrumbConfig["/farmer-portal/AI-insight/forecastReport"];
  return (
    <div className="px-5 flex flex-col gap-6">
      <Breadcrumbs items={items} />
      <header className="flex items-center flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl tracking-wider">
            AI Harvest Forecast
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Prediksi hasil panen kelapa di lahanmu berdasarkan data cuaca,
            kondisi lahan dan produksi.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-3 p-2 bg-white text-[#269957] rounded-lg border border-[#269957]">
            <Download className="w-5 h-5" />
            <span className="text-sm font-semibold">Unduh laporan</span>
          </button>
          <button className="flex items-center gap-3 p-2 rounded-lg text-white border bg-[#269957]">
            <FileText className="w-5 h-5" />
            <span className="text-sm font-semibold">Unduh PDF</span>
          </button>
        </div>
      </header>
      <div className="flex flex-col gap-6">
        <EstimasiPanen />
        <ProductionCard />
        <Faktor />
        <RekomendasiAI />
      </div>
    </div>
  );
};

export default ForecastDetail;
