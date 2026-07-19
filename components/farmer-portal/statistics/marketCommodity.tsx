"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, LineChart } from "lucide-react";

const commodityData = [
  {
    id: 1,
    name: "Kopra (Kering)",
    price: 12500,
    unit: "kg",
    trend: "+2.4%",
    isUp: true,
  },
  {
    id: 2,
    name: "Minyak Kelapa (CNO)",
    price: 24500,
    unit: "liter",
    trend: "+1.2%",
    isUp: true,
  },
  {
    id: 3,
    name: "Briket Batok",
    price: 18000,
    unit: "kg",
    trend: "-0.5%",
    isUp: false,
  },
  {
    id: 4,
    name: "Sabut Kelapa",
    price: 3200,
    unit: "kg",
    trend: "+5.0%",
    isUp: true,
  },
];

const MarketCommodity = () => {
  return (
    <Card className="p-6 bg-white rounded-2xl shadow-sm w-full h-full flex flex-col gap-2">
      <CardHeader className="flex flex-row items-center justify-between p-0 mb-2 space-y-0">
        <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <LineChart className="w-5 h-5 text-gray-500" />
          Harga Pasar
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 flex-1">
        <div className="flex flex-col gap-4 mt-2 ">
          {commodityData.map((item) => (
            <div
              key={item.id}
              className=" flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
            >
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-gray-900 text-sm">
                  {item.name}
                </span>
                <span className="text-xs text-gray-500">per {item.unit}</span>
              </div>

              <div className="flex flex-col items-end gap-1">
                <span className="font-bold text-gray-900">
                  Rp {item.price.toLocaleString("id-ID")}
                </span>
                <div
                  className={`flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                    item.isUp
                      ? "bg-[#269957]/10 text-[#269957]"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.isUp ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {item.trend}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketCommodity;
