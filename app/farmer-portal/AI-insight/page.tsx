"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MapPin, Plus } from "lucide-react";
import { Plot } from "@/components/plotMap";
import { FormLand } from "@/components/formLand";
const DynamicPlotMap = dynamic(() => import("@/components/plotMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-100 animate-pulse rounded-2xl flex items-center justify-center">
      Loading Satellite...
    </div>
  ),
});

const MOCK_PLOTS: Plot[] = [
  {
    id: "plot-1",
    name: "Lahan Utara (Coconut)",
    area: "1.2 Ha",
    trees: 210,
    coordinates: [
      [-6.914, 107.608],
      [-6.914, 107.6095],
      [-6.915, 107.6095],
      [-6.915, 107.608],
    ],
  },
  {
    id: "plot-2",
    name: "Lahan Selatan (Seedlings)",
    area: "0.8 Ha",
    trees: 150,
    coordinates: [
      [-6.9155, 107.6085],
      [-6.9155, 107.61],
      [-6.9165, 107.61],
      [-6.9165, 107.6085],
    ],
  },
];
const AIInsight = () => {
  const [activePlotId, setActivePlotId] = useState<string | null>(null);

  return (
    <div className="w-full h-[600px] flex gap-6 p-6">
      {/* LEFT SIDE: The Interactive ArcGIS Map */}
      <div className="w-1/2 h-full relative shadow-sm rounded-2xl border border-gray-200 overflow-hidden">
        <DynamicPlotMap
          plots={MOCK_PLOTS}
          activePlot={activePlotId}
          onPlotClick={(id: string) => setActivePlotId(id)}
        />
      </div>
      {/* RIGHT SIDE: The Data List */}
      <div className="w-1/2 h-full flex flex-col gap-4 overflow-y-auto pr-2">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800">Manajemen Lahan</h2>
          <FormLand />
        </div>

        {MOCK_PLOTS.map((plot) => {
          const isActive = activePlotId === plot.id;
          return (
            <div
              key={plot.id}
              onClick={() => setActivePlotId(plot.id)}
              className={`p-4 rounded-xl cursor-pointer transition-all border-2 ${
                isActive
                  ? "border-[#269957] bg-[#269957]/5 shadow-md"
                  : "border-transparent bg-white shadow-sm hover:border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin
                  className={`w-5 h-5 ${isActive ? "text-[#269957]" : "text-gray-400"}`}
                />
                <h3 className="font-bold text-gray-800">{plot.name}</h3>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-3 border-t pt-3">
                <span>
                  Luas: <strong className="text-gray-700">{plot.area}</strong>
                </span>
                <span>
                  Pohon: <strong className="text-gray-700">{plot.trees}</strong>
                </span>
              </div>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
};

export default AIInsight;
