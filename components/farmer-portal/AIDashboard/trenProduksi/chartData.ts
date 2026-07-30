export interface ProductionTrend {
  month: string;

  actual: number | null;

  forecast: number | null;
}

export const productionTrend: ProductionTrend[] = [
  {
    month: "Apr",
    actual: 4.2,
    forecast: null,
  },
  {
    month: "Mei",
    actual: 4.8,
    forecast: null,
  },
  {
    month: "Jun",
    actual: 5.4,
    forecast: 5.3,
  },
  {
    month: "Jul",
    actual: null,
    forecast: 6.2,
  },
  {
    month: "Agu",
    actual: null,
    forecast: 7.1,
  },
  {
    month: "Sep",
    actual: null,
    forecast: 8.2,
  },
];
