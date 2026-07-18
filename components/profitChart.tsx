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
const ProfitChart = () => {
  return (
    <div className="flex-1 w-full h-full min-h-[300px] animate-in fade-in duration-500 mt-6">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <ResponsiveContainer>
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

            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={{ fill: "transparent" }}
            />
            <ChartLegend content={<ChartLegendContent />} className="mt-4" />

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
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default ProfitChart;
