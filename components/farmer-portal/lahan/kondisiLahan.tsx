"use client";
import React from "react";
import Link from "next/link";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  PolarAngleAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  type ChartConfig,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
const chartData = [
  { name: "Sangat Baik", value: 90, fill: "var(--color-sangatBaik)" },
];
const chartConfig = {
  sangatBaik: {
    label: "Sangat Baik",
    color: "#1e5b32",
  },
} satisfies ChartConfig;
const legendStats = [
  { label: "Sangat Baik", value: "90%", color: "bg-[#1e5b32]" },
  { label: "Baik", value: "10%", color: "bg-[#9cd0a4]" },
  { label: "Cukup", value: "0%", color: "bg-[#f59e0b]" },
  { label: "Buruk", value: "0%", color: "bg-[#ef4444]" },
];
const KondisiLahan = () => {
  return (
    <Card className="shadow-md rounded-xl bg-white px-4">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Kondisi Lahan</CardTitle>
        <Link
          href="/farmer-portal/"
          className="font-semibold text-md text-[#609D7F]"
        >
          Lihat Semua
        </Link>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-4 p-6 bg-[#F8F9FA] rounded-lg">
        <div className="flex-1 ">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[140px]"
          >
            <RadialBarChart
              data={chartData}
              startAngle={90}
              endAngle={-270}
              innerRadius="75%"
              outerRadius="100%"
              barSize={18}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                dataKey="value"
                background={{ fill: "#9cd0a4" }}
                cornerRadius={0}
              />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy - 4}
                            className="fill-gray-900 text-2xl font-bold"
                          >
                            {chartData[0].value}%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 20}
                            className="fill-gray-500 text-xs font-medium tracking-wide"
                          >
                            Sangat Baik
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          {legendStats.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-sm font-semibold text-gray-700">
                  {item.label}
                </span>
              </div>
              <span className="text-sm font-bold text-gray-900">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default KondisiLahan;
