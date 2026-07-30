import { produkOption } from "./forecastTypes";
import { periodOption } from "./forecastTypes";
import { ForecastSummaryData } from "./forecastTypes";
export const productType: produkOption[] = [
  {
    value: "Kelapa Bulat",
    label: "Kelapa bulat",
    icon: "/coconut.png",
  },
  {
    value: "kopra",
    label: "kopra asap",
    icon: "/sprout.png",
  },
  {
    value: "kopra putih",
    label: "kopra putih",
    icon: "/sprout.png",
  },
];
export const periodOptions: periodOption[] = [
  {
    value: "1 Bulan",
    label: "1 Bulan",
  },
  {
    value: "3 Bulan",
    label: "3 Bulan",
  },
  {
    value: "6 Bulan",
    label: "6 Bulan",
  },
  {
    value: "12 Bulan",
    label: "12 Bulan",
  },
];
export const forecastSummary: ForecastSummaryData = {
  title: "Estimasi Hasil Panen",

  value: "7.2",

  unit: "Ton",

  description: "Estimasi panen bulan Juli 2026",

  trend: "+10% dari periode lalu",

  trendColor: "green",
};

export const harvestSchedule = {
  title: "Waktu Panen Optimal",

  startDate: "20 Agu",

  endDate: "5 Sep 2026",
};
