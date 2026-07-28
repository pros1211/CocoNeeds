"use client";

import React from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
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
    <ChartContainer config={chartConfig} className="h-full w-full">
      <BarChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <YAxis hide domain={[0, (dataMax: number) => dataMax * 1.1]} />

        <Bar
          dataKey="margin"
          fill={isPositive ? "#F6673A" : "#3BA275"}
          radius={[4, 4, 0, 0]}
          maxBarSize={8}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default OutcomeBarChart;
