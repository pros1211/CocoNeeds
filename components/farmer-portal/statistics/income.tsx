import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatRupiah } from "@/lib/utils";
import { getFinancialData } from "@/app/action";
import { Line, ResponsiveContainer, LineChart } from "recharts";
import IncomeChart from "./incomeChart";
import { BanknoteArrowUp, TrendingUp, TrendingDown } from "lucide-react";
const Income = async () => {
  const { pemasukan, incomeChartData, percentageIncome } =
    await getFinancialData();
  const safePercentage = percentageIncome || 0;

  const isPositive = safePercentage >= 0;
  const formattedPercentage = Math.abs(safePercentage).toFixed(1);
  return (
    <Card className="flex flex-col p-3 gap-4 bg-white rounded-2xl shadow-md">
      <CardHeader className="flex items-center gap-4">
        <BanknoteArrowUp className="w-7 h-7" />
        <CardTitle className="font-regular text-xl tracking-wider">
          Pemasukan
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between ">
          <div className="flex flex-col gap-2 bg-[] items-start">
            <span className="text-lg font-semibold ">
              {formatRupiah(pemasukan)}
            </span>
            <div
              className={`flex items-center gap-2 p-2 rounded-xl text-white ${isPositive ? "bg-[#269957]/70" : "bg-red-500/70"}`}
            >
              {isPositive ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span className=" text-xs font-regular">
                {isPositive ? "+" : "-"}
                {formattedPercentage}% dari bulan lalu
              </span>
            </div>
          </div>
          <div className="h-22 w-32">
            <IncomeChart data={incomeChartData || []} isPositive={isPositive} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Income;
