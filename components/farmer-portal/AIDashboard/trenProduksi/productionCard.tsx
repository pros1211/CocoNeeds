"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import ForecastFilter from "./forecastFilter";
import {
  productType,
  periodOptions,
  forecastSummary,
  harvestSchedule,
} from "./forecastData";
import ProductionChart from "./productionChart";
const ProductionCard = () => {
  const [selectedProduct, setSelectedProduct] = useState(productType[0].value);

  const [selectedPeriod, setSelectedPeriod] = useState(periodOptions[1].value);
  const selectedSummary = forecastSummary;
  return (
    <Card className="flex flex-col gap-3">
      <CardHeader className="flex items-center justify-between border-b border-gray-300">
        <div className="flex flex-col gap-1">
          <CardTitle className="text-lg font-semibold text-[#269957]">
            Prediksi panen
          </CardTitle>
          <CardDescription className="text-sm font-medium text-gray-600">
            Prediksi hasil panen berdasarkan data historismu
          </CardDescription>
        </div>
        <Link
          href="/farmer-portal/AI-insight/forecastReport"
          className="bg-[#269957] text-white p-2 rounded-lg"
        >
          Lihat Rincian
        </Link>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="lg:col-span-4">
          <ForecastFilter
            products={productType}
            periods={periodOptions}
            selectedProduct={selectedProduct}
            selectedPeriod={selectedPeriod}
            summary={selectedSummary}
            harvestSchedule={harvestSchedule}
            onProductChange={setSelectedProduct}
            onPeriodChange={setSelectedPeriod}
          />
        </div>
        <div className="lg:col-span-8">
          <ProductionChart />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductionCard;
