import React from "react";
import { BanknoteArrowDown, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFinancialData } from "@/app/action";
import { cn, formatRupiah } from "@/lib/utils";
import OutcomeBarChart from "./outcomeBarChart";
const Outcome = async () => {
  const { pengeluaran, outcome, outcomeChartData } = await getFinancialData();
  const isSaving = outcome.difference < 0;
  return (
    <Card className="relative h-[220px] overflow-hidden rounded-2xl border border-gray-100 shadow-sm flex flex-col shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50">
            <BanknoteArrowDown className="h-5 w-5 text-[#F6673A]" />
          </div>

          <CardTitle className="text-base font-medium leading-tight">
            Pengeluaran Operasional
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0 flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold leading-none">
            {formatRupiah(Math.abs(pengeluaran))}
          </span>

          <div className="flex items-center gap-3">
            <div
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
                isSaving
                  ? "bg-green-100 text-green-700"
                  : "bg-orange-100 text-orange-700",
              )}
            >
              {isSaving ? (
                <TrendingDown className="h-4 w-4" />
              ) : (
                <TrendingUp className="h-4 w-4" />
              )}
              {Math.abs(outcome.percentage).toFixed(1)}%
            </div>
            <span className="text-xs text-gray-500">
              {formatRupiah(Math.abs(outcome.difference))} lebih hemat
            </span>
          </div>
        </div>
      </CardContent>
      {/* <div className="absolute translate-y-35 h-16 w-full ">
        <OutcomeBarChart data={outcomeChartData ?? []} isPositive={!isSaving} />
      </div> */}
    </Card>
  );
};

export default Outcome;
