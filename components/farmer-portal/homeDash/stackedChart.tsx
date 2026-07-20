"use client";
import React, { useState } from "react";
import CompGauge from "./compGauge";
import ProfitChart from "./profitChart";
export default function StackedChart() {
  const [activeTab, setActiveTab] = useState<"Profit" | "Composition">(
    "Profit",
  );
  return (
    <div className="flex flex-col w-full h-[200px] bg-white gap-5 p-6 rounded-3xl shadow-sm border border-gray-50 h-full ">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium text-gray-800">
          {activeTab === "Profit"
            ? "Yield & Profit Analytics"
            : "Component Sales"}
        </h3>
        <div className="flex items-center bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("Profit")}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === "Profit"
                ? "bg-[#A38E65] text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Profit
          </button>
          <button
            onClick={() => setActiveTab("Composition")}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
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
