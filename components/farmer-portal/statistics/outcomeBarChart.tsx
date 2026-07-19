"use client";

import React from "react";
import { Bar, BarChart } from "recharts";
import { ChartContainer, ChartConfig } from "../../ui/chart";
const chartConfig = {
  margin: {
    label: "Pengeluaran",
    color: "#A38E65",
  },
} satisfies ChartConfig;
type ChartDataPoint = {
  month: string;
  margin: number;
};

type OutcomeChartProps = {
  data: ChartDataPoint[];
  isPositive: boolean;
};

const OutcomeBarChart = ({ data, isPositive }: OutcomeChartProps) => {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={data}>
        <Bar
          dataKey="margin"
          fill={`${isPositive ? "#F6673A" : "#3BA275"}`}
          radius={[4, 4, 4, 4]}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default OutcomeBarChart;
