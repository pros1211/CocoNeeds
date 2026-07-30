"use client";
import React from "react";
import StatisticAI from "@/components/farmer-portal/AIDashboard/StatisticCard/statisticAI";
import ProductionCard from "@/components/farmer-portal/AIDashboard/trenProduksi/productionCard";
import AIRecommend from "@/components/farmer-portal/AIDashboard/AIRecommend";
import RadialChart from "@/components/farmer-portal/AIDashboard/kondisiLahan/radialChart";
import { VscSparkle } from "react-icons/vsc";
import ProductAllo from "@/components/farmer-portal/AIDashboard/productAllocation/productAllo";
import AISummary from "@/components/farmer-portal/AIDashboard/AISummary/AISummary";
const AIDashboard = () => {
  return (
    <div className="space-y-6 p-5 ">
      <div className="flex justify-between items-center">
        <header className="flex items-center gap-2 text-[#269957]">
          <VscSparkle className="w-8 h-8" />
          <h1 className="text-2xl  font-bold">AI Insight</h1>
        </header>
        <button className="text-white bg-[#269957] text-md font-semibold p-2 rounded-lg">
          Konsultasi CocoAI
        </button>
      </div>
      <StatisticAI />
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-7 flex flex-col gap-6">
          <ProductionCard />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <RadialChart />
            <ProductAllo />
          </div>
        </div>
        <div className="xl:col-span-5 flex flex-col gap-6">
          <AIRecommend />
          <AISummary />
        </div>
      </div>
    </div>
  );
};

export default AIDashboard;
