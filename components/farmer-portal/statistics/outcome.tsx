import React from "react";
import { BanknoteArrowDown, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFinancialData } from "@/app/action";
import { formatRupiah } from "@/lib/utils";
import OutcomeBarChart from "./outcomeBarChart";
const Outcome = async () => {
  const { pengeluaran, selisihPengeluaran, outcomeChartData } =
    await getFinancialData();
  const pengeluaranSafe = selisihPengeluaran || 0;
  const isPositive = pengeluaranSafe > 0;
  return (
    <Card className="flex flex-col p-3 gap-4 bg-white rounded-2xl shadow-md">
      <CardHeader className="flex items-center gap-4">
        <BanknoteArrowDown className="w-7 h-7" />
        <CardTitle className="font-regular text-lg tracking-wider">
          Pengeluaran Operasional
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-2 items-start">
            <span className="text-xl font-semibold ">
              {formatRupiah(pengeluaran)}
            </span>
            <div
              className={`flex items-center gap-2 p-2 rounded-xl text-white ${isPositive ? "bg-[#F6673A]" : "bg-[#3BA275]"}`}
            >
              <span className="text-white font-medium text-xs">
                Rp. {Math.abs(pengeluaranSafe)}
                {isPositive ? " lebih banyak " : " lebih sedikit "}dari bulan
                lalu
              </span>
            </div>
          </div>
          <div className="h-22 w-32 shrink-0">
            <OutcomeBarChart
              data={outcomeChartData || []}
              isPositive={isPositive}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Outcome;
