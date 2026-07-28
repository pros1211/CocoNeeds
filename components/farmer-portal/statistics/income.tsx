import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatRupiah } from "@/lib/utils";
import { getFinancialData } from "@/app/action";
import IncomeChart from "./incomeChart";
import { BanknoteArrowUp, TrendingUp, TrendingDown } from "lucide-react";
const Income = async () => {
  const { pemasukan, income, incomeChartData } = await getFinancialData();
  const safePercentage = income.percentage || 0;

  const isPositive = safePercentage >= 0;
  const formattedPercentage = Math.abs(safePercentage).toFixed(1);
  return (
    <Card className="relative h-[220px] overflow-hidden rounded-2xl border border-gray-100 shadow-sm flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <BanknoteArrowUp className="w-6 h-6 text-[#269957]" />
          </div>

          <CardTitle className="text-base font-medium leading-tight">
            Pemasukan
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between pt-0">
        <div className="flex flex-col gap-4">
          <span className="text-xl leading-none font-bold tracking-tight">
            {formatRupiah(pemasukan)}
          </span>

          <div className="flex items-center gap-3">
            <div
              className={`inline-flex items-center gap-1 rounded-full bg-green-100 text-green-700 px-2.5 py-1 text-xs font-semibold ${
                isPositive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {isPositive ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {isPositive ? "+" : "-"}
              {formattedPercentage}%
            </div>

            <span className="text-xs text-gray-500">dari bulan lalu</span>
          </div>
        </div>
      </CardContent>
      {/* <div className="absolute translate-y-35 mt-auto h-16 w-full ">
        <IncomeChart data={incomeChartData ?? []} isPositive={isPositive} />
      </div> */}
    </Card>
  );
};

export default Income;
