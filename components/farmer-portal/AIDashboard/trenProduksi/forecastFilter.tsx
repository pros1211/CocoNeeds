import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldLabel } from "@/components/ui/field";
import { Card, CardContent } from "@/components/ui/card";
import { periodOptions, productType } from "./forecastData";
import { forecastSummary } from "./forecastData";
import { harvestSchedule } from "./forecastData";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import {
  produkOption,
  periodOption,
  ForecastSummaryData,
  estimasiPanen,
} from "./forecastTypes";
interface ForecastFilterProps {
  products: produkOption[];
  periods: periodOption[];

  selectedProduct: string;
  selectedPeriod: string;

  summary: ForecastSummaryData;

  harvestSchedule: estimasiPanen;

  onProductChange: (value: string) => void;
  onPeriodChange: (value: string) => void;
}
const trendColor = {
  green: "text-green-600",
  blue: "text-blue-600",
  orange: "text-orange-600",
  red: "text-red-600",
};
const ForecastFilter = ({
  products,
  periods,

  selectedProduct,
  selectedPeriod,

  summary,
  harvestSchedule,

  onProductChange,
  onPeriodChange,
}: ForecastFilterProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <Field>
        <FieldLabel>Produk</FieldLabel>
        <Select
          value={selectedProduct}
          onValueChange={(value) => {
            if (value) onProductChange(value);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih produk" />
          </SelectTrigger>
          <SelectContent>
            {products.map((produk) => (
              <SelectItem key={produk.value} value={produk.value}>
                <div className="flex items-center gap-2">
                  <Image
                    src={produk.icon}
                    width={20}
                    height={20}
                    alt={produk.label}
                  />

                  {produk.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field>
        <FieldLabel>Periode prediksi</FieldLabel>
        <Select
          value={selectedPeriod}
          onValueChange={(value) => {
            if (value) onPeriodChange(value);
          }}
        >
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Pilih Periode" />
          </SelectTrigger>
          <SelectContent>
            <SelectContent>
              {periods.map((period) => (
                <SelectItem key={period.value} value={period.value}>
                  {period.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectContent>
        </Select>
      </Field>
      <Card className="rounded-lg p-2">
        <CardContent className="flex flex-col gap-2">
          <span className="text-md font-semibold">{forecastSummary.title}</span>
          <span className="flex items-center gap-2 text-xl font-semibold text-[#269975]">
            {forecastSummary.value} <span>{forecastSummary.unit}</span>
          </span>
          <span>{forecastSummary.description}</span>
          <span
            className={`text-xs font-semibold ${
              trendColor[summary.trendColor]
            }`}
          >
            ↑ {summary.trend}
          </span>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center gap-4 px-2 py-1">
          <div className="rounded-xl bg-green-100 p-2">
            <CalendarDays className="w-6 h-6 text-green-700" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-gray-500">
              {harvestSchedule.title}
            </span>

            <span className="font-semibold text-gray-900">
              {harvestSchedule.startDate}
              {" - "}
              {harvestSchedule.endDate}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForecastFilter;
