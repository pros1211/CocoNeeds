"use client";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import React from "react";
import {
  Line,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
} from "recharts";

type ChartDataPoint = {
  month: string;
  margin: number;
};

type IncomeChartProps = {
  data: ChartDataPoint[];
  isPositive: boolean;
};
const chartConfig = {
  margin: {
    label: "Income",
    color: "#269957",
  },
} satisfies ChartConfig;
const IncomeChart = ({ data, isPositive }: IncomeChartProps) => {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <LineChart
        accessibilityLayer
        data={data}
        margin={{
          top: 0,
          right: 8,
          left: 8,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={false} horizontal={false} />

        <XAxis hide dataKey="month" tickLine={false} axisLine={false} />

        <Line
          type="monotone"
          dataKey="margin"
          stroke={isPositive ? "#269957" : "#EF4444"}
          strokeWidth={2.5}
          dot={false}
          connectNulls
          strokeLinecap="round"
          strokeLinejoin="round"
          isAnimationActive
        />
      </LineChart>
    </ChartContainer>
  );
};

export default IncomeChart;
