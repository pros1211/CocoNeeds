"use client";
import React, { useState } from "react";
import CompGauge from "./compGauge";
import ProfitChart from "./profitChart";
export default function StackedChart() {
  const [activeTab, setActiveTab] = useState<"Profit" | "Composition">(
    "Profit",
  );
  return (
    <div className="flex flex-col w-full min-h-[380px] md:min-h-[450px] bg-white gap-5 p-4   md:p-6 rounded-3xl shadow-sm border border-gray-50 h-full ">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h3 className="text-sm md:text-xl font-medium text-gray-800">
          {activeTab === "Profit"
            ? "Yield & Profit Analytics"
            : "Component Sales"}
        </h3>
        <div className="flex w-full md:w-fit items-center bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("Profit")}
            className={`flex-1 md:flex-none px-2 md:px-4 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
              activeTab === "Profit"
                ? "bg-[#A38E65] text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Profit
          </button>
          <button
            onClick={() => setActiveTab("Composition")}
            className={`flex-1 md:flex-none px-4 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
              activeTab === "Composition"
                ? "bg-[#A38E65] text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Composition
          </button>
        </div>
      </div>
      <div className="flex-1 w-full flex flex-col justify-center">
        {activeTab === "Profit" ? <ProfitChart /> : <CompGauge />}
      </div>
    </div>
  );
}
