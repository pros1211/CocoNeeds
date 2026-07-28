import { FinancialRow } from "./calculateSummary";

export function calculateCategoryBreakdown(data: FinancialRow[]) {
  const map: Record<string, number> = {};

  data.forEach((row) => {
    if (row.jenis !== "pengeluaran") return;

    const kategori = row.kategori ?? "Lainnya";

    map[kategori] = (map[kategori] || 0) + row.nominal;
  });

  return Object.entries(map).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
  }));
}
