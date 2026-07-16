"use client";
import React, { useState } from "react";
import {
  Bar,
  Line,
  CartesianGrid,
  YAxis,
  XAxis,
  ComposedChart,
  BarChart,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "./ui/chart";
const chartData = [
  { month: "Jan", copra: 300, shell: 450, water: 450, profit: 350 },
  { month: "Feb", copra: 350, shell: 400, water: 450, profit: 550 },
  { month: "Mar", copra: 400, shell: 500, water: 350, profit: 450 },
  { month: "Apr", copra: 450, shell: 350, water: 300, profit: 750 },
  { month: "May", copra: 350, shell: 450, water: 400, profit: 650 },
  { month: "Jun", copra: 400, shell: 400, water: 450, profit: 850 },
];
const chartConfig = {
  copra: {
    label: "Copra",
    color: "#325d48",
  },
  shell: {
    label: "Shell",
    color: "#d1a175",
  },
  water: {
    label: "Water",
    color: "#aeead0",
  },
  profit: {
    label: "Profit",
    color: "#7ad71a",
  },
} satisfies ChartConfig;
export default function StackedChart() {
  const [activeTab, setActiveTab] = useState<"Profit" | "Composition">(
    "Profit",
  );
  return (
    <div className="flex flex-col w-full bg-white p-6 rounded-3xl shadow-sm border border-gray-50 h-full min-h-[450px]">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium text-gray-800">
          Yield & Profit Analytics
        </h3>
        <div className="flex items-center bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("Profit")}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === "Profit"
                ? "bg-[#1b4332] text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Profit
          </button>
          <button
            onClick={() => setActiveTab("Composition")}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === "Composition"
                ? "bg-[#1b4332] text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Composition
          </button>
        </div>
      </div>
      <div className="flex-1 w-full min-h-[300px]">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <ComposedChart
            data={chartData}
            margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#f3f4f6" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              tickFormatter={(value) => `$${value / 100}k`}
            />

            {/* Tooltip & Legend */}
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={{ fill: "transparent" }}
            />
            <ChartLegend content={<ChartLegendContent />} className="mt-4" />

            {/* THE STACKED BARS */}
            {/* Giving them all the same stackId="a" forces them to sit on top of each other */}
            <Bar
              dataKey="copra"
              stackId="a"
              fill="var(--color-copra)"
              radius={[0, 0, 4, 4]}
              barSize={40}
            />
            <Bar
              dataKey="shell"
              stackId="a"
              fill="var(--color-shell)"
              barSize={40}
            />
            <Bar
              dataKey="water"
              stackId="a"
              fill="var(--color-water)"
              radius={[4, 4, 0, 0]}
              barSize={40}
            />

            {/* THE LINE OVERLAY */}
            <Line
              type="monotone"
              dataKey="profit"
              stroke="var(--color-profit)"
              strokeWidth={4}
              dot={false}
              activeDot={{
                r: 6,
                fill: "var(--color-profit)",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          </ComposedChart>
        </ChartContainer>
      </div>
    </div>
  );
}
