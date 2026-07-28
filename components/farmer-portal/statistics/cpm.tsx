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
    <Card className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm h-[220px]">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
            <Sprout className="w-5 h-5 text-[#269957]" />
          </div>

          <CardTitle className="text-base font-medium">
            Biaya per Pohon
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0 flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-xl font-bold">Rp. 14.200,00</span>

          <div className="flex items-center gap-3">
            <div
              className="inline-flex items-center gap-2
                        rounded-full
                        bg-green-100
                        text-green-700
                        px-3
                        py-1
                        text-sm
                        font-medium"
            >
              <ArrowDown className="w-4 h-4" />
              <span className="text-xs">Rp 500</span>
              <span className="text-xs text-gray-500">lebih hemat</span>
            </div>
          </div>
        </div>
      </CardContent>
      <div className="h-16 w-full shrink-0">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <AreaChart
            data={recentData}
            margin={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <Area
              type="natural"
              dataKey="cost"
              stroke="var(--color-cost)"
              fill="var(--color-cost)"
              strokeWidth={2}
              fillOpacity={0.2}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </Card>
  );
};

export default Cpm;
