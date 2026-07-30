import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Label,
  RadialBar,
  RadialBarChart,
  PolarRadiusAxis,
  PolarAngleAxis,
} from "recharts";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";

import { VscSparkle } from "react-icons/vsc";
import { Sprout, TrendingUp, Wallet, TriangleAlert } from "lucide-react";
import { icon } from "leaflet";
const chartData = [
  {
    title: "sangat baik",
    value: 80,
    fill: "#269957",
  },
];
const chartConfig = {
  sangatBaik: {
    label: "Sangat Baik",
    color: "#269957",
  },
  cukupBaik: {
    label: "Cukup baik",
    color: "#9cd0a4",
  },
  kurang: {
    label: "Kurang",
    color: "#269957",
  },
  buruk: {
    label: "Buruk",
    color: "#ef4444",
  },
} satisfies ChartConfig;
const cardSummary = [
  {
    title: "Hasil Panen",
    value: "+8%",
    description: "dibanding bulan lalu",
    icon: TrendingUp,
  },
  {
    title: "kondisi tanah",
    value: "Optimal",
    description: "nutrisi tercukupi",
    icon: Sprout,
  },
  {
    title: "Pendapatan",
    value: "+10%",
    description: "dibanding bulan lalu",
    icon: Wallet,
  },
  {
    title: "Hama",
    value: "1 jenis",
    description: "Butuh penanganan",
    icon: TriangleAlert,
  },
];
const AISummary = () => {
  return (
    <Card className="bg-white px-1 py-5 rounded-2xl flex flex-col gap-4">
      <CardHeader className="flex items-center gap-2">
        <VscSparkle className="w-6 h-6 bg-[#EEF8F2] text-[#269957]" />
        <div className="flex flex-col gap-1">
          <CardTitle className="font-semibold text-lg text-[#269957]">
            Ringkasan AI
          </CardTitle>
          <CardDescription className="text-xs text-gray-600 font-medium">
            Ringkasan kondisi dan masukan dari data kebunmu.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2 items-center justify-center shadow-sm rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900">Kondisi Lahan</h3>

          <p className="text-sm text-gray-500 mt-1">
            Skor kesehatan keseluruhan
          </p>
          <ChartContainer
            config={chartConfig}
            className="aspect-square mx-auto h-[200px] w-[120px]"
          >
            <RadialBarChart
              data={chartData}
              startAngle={90}
              endAngle={-270}
              innerRadius="100%"
              outerRadius="80%"
              barSize={20}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar dataKey="value" cornerRadius={0} />
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
                            y={viewBox.cy || 0}
                            className="fill-[#269957] text-3xl font-bold tracking-wide"
                          >
                            80
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 20}
                            className="fill-[#269957] text-sm font-medium tracking-wide"
                          >
                            /100
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
          <span className="rounded-full bg-[#EEF8F2] px-2 py-1 text-sm font-semibold text-[#269957]">
            Sangat Baik
          </span>

          <p className=" max-w-[220px] text-center text-xs leading-5 text-gray-500">
            AI menilai kondisi lahan sangat baik berdasarkan kesehatan tanah,
            kelembapan, nutrisi, serta riwayat produktivitas.
          </p>
        </div>
        <div className="grid grid-rows-auto gap-2">
          {cardSummary.map((data, index) => {
            const Icon = data.icon;
            return (
              <div
                key={index}
                className="flex flex-row px-3 items-center xl:flex-row gap-6 border border-[#269957]/80 rounded-lg p-2"
              >
                <Icon className="w-10 h-10 text-[#269957] bg-[#EEF8F2] rounded-md p-2" />
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium">{data.title}</span>
                  <span className="text-md text-[#269957] font-semibold">
                    {data.value}
                  </span>
                  <span className="text-xs text-gray-900">
                    {data.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default AISummary;
