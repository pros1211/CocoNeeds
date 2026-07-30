export interface produkOption {
  value: string;
  label: string;
  icon: string;
}
export interface periodOption {
  value: string;
  label: string;
}
export interface ForecastSummaryData {
  title: string;
  value: string;
  unit?: string;
  description: string;
  trend: string;
  trendColor: "green" | "orange" | "red" | "blue";
}

export interface estimasiPanen {
  title: string;

  startDate: string;

  endDate: string;

  description?: string;
}
export interface ForecastFiltersProps {
  selectedProduct: string;

  selectedPeriod: string;

  products: produkOption[];

  periods: periodOption[];

  summary: ForecastSummaryData;

  harvestSchedule: estimasiPanen;

  onProductChange: (value: string) => void;

  onPeriodChange: (value: string) => void;
}
