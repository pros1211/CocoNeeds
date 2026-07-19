"use client";
import React from "react";
import { Sprout, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart } from "recharts";
import { ChartContainer, type ChartConfig } from "../../ui/chart";
const costData = [
  { month: "Jan", cost: 16500 },
  { month: "Feb", cost: 16000 },
  { month: "Mar", cost: 17200 },
  { month: "Apr", cost: 15800 },
  { month: "May", cost: 15000 },
  { month: "Jun", cost: 14500 },
  { month: "Jul", cost: 14200 },
];
const chartConfig = {
  cost: {
    label: "Biaya per Pohon",
    color: "#269957",
  },
} satisfies ChartConfig;
const Cpm = () => {
  const recentData = costData.slice(-6);
  return (
    <Card className="p-3 flex flex-col gap-3 w-full flex-1 gap-4 bg-white rounded-2xl shadow-md h-full">
      <CardHeader className="flex items-center gap-2 p-0 space-y-0">
        <Sprout className="w-5 h-5" />
        <CardTitle className="text-md font-semibold">Biaya per Pohon</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-2 items-start">
            <span className="text-xl font-bold whitespace-nowrap">
              Rp. 14.200,00
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap text-xs font-regular bg-[#269957]/70 text-white p-1 rounded-md">
              <ArrowDown className="w-4 h-4" />
              Rp.500 lebih hemat
            </span>
          </div>
          <div className="h-14 w-20 shrink-0">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <AreaChart data={recentData}>
                <Area
                  type="monotone"
                  dataKey="cost"
                  stroke="var(--color-cost)"
                  fill="var(--color-cost)"
                  strokeWidth={2}
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cpm;
