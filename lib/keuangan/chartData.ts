import { FinancialRow } from "./calculateSummary";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function buildMonthlyChart(data: FinancialRow[]) {
  const year = new Date().getFullYear();

  const incomeMap = Array(12).fill(0);

  const outcomeMap = Array(12).fill(0);

  data.forEach((row) => {
    if (!row.tanggal) return;

    const date = new Date(row.tanggal);

    if (date.getFullYear() !== year) return;

    const month = date.getMonth();

    if (row.jenis === "pemasukan") {
      incomeMap[month] += row.nominal;
    }

    if (row.jenis === "pengeluaran") {
      outcomeMap[month] += row.nominal;
    }
  });

  return {
    incomeChartData: MONTHS.map((month, index) => ({
      month,
      margin: incomeMap[index],
    })),

    outcomeChartData: MONTHS.map((month, index) => ({
      month,
      margin: outcomeMap[index],
    })),
  };
}
