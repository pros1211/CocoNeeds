"use client";
import React, { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";
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
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
const chartData = [
  { category: "Pupuk", pengeluaran: 5000000, fill: "#DDA15E" },
  { category: "Bibit", pengeluaran: 400000, fill: "#1fd224" },
  { category: "Pajak", pengeluaran: 350000, fill: "#ff5714" },
  { category: "Listrik", pengeluaran: 3500000, fill: "#fbc739" },
  { category: "Air", pengeluaran: 300000, fill: "#00b4d8" },
  { category: "Lainnya", pengeluaran: 700000, fill: "#b1a7a6" },
];
const chartConfig = {
  Pupuk: {
    label: "Pupuk",
    color: "#606C38",
  },
  Bibit: {
    label: "Bibit",
    color: "#1fd224",
  },
  Listrik: {
    label: "Listrik",
    color: "#fbc739",
  },
  Air: {
    label: "Air",
    color: "#00b4d8",
  },
  Pajak: {
    label: "Pajak",
    color: "#bb3e03",
  },
  Lainnya: {
    label: "Lainnya",
    color: "#b1a7a6",
  },
} satisfies ChartConfig;
const SpendingBreak = () => {
  const totalPengeluaran = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.pengeluaran, 0);
  }, []);
  return (
    <Card className="p-5 bg-white rounded-2xl shadow-sm w-full max-w-md border-0">
      <CardContent className="p-0">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Kategori Pengeluaran
        </h2>

        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-2.5">
            {chartData.map((item) => (
              <div key={item.category} className="flex items-center gap-3">
                <span
                  className="w-4 h-4 rounded-full shadow-sm"
                  style={{
                    backgroundColor:
                      chartConfig[item.category as keyof typeof chartConfig]
                        .color,
                  }}
                />
                <span className="text-sm font-medium text-gray-600">
                  {chartConfig[item.category as keyof typeof chartConfig].label}
                </span>
              </div>
            ))}
          </div>

          <div className="w-[400px] h-[250px] shrink-0">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="pengeluaran"
                  nameKey="category"
                  innerRadius={75}
                  outerRadius={100}
                  paddingAngle={3}
                  cornerRadius={6}
                  stroke="none"
                >
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
                              y={viewBox.cy - 12}
                              className="fill-gray-500 text-xs font-medium"
                            >
                              Total Spending
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy + 12}
                              className="fill-gray-900 text-lg font-bold"
                            >
                              Rp {totalPengeluaran.toLocaleString("id-ID")}
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </div>
        </div>

        <div className="mt-4">
          <button className="bg-[#3BA275] hover:bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors flex items-center gap-2">
            Lihat Laporan <span className="text-lg leading-none">›</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingBreak;
