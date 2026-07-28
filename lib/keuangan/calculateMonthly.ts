import { FinancialRow } from "./calculateSummary";

export function calculateMonthlyComparison(data: FinancialRow[]) {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  let incomeThisMonth = 0;
  let incomeLastMonth = 0;

  let outcomeThisMonth = 0;
  let outcomeLastMonth = 0;

  for (const row of data) {
    if (!row.tanggal) continue;

    const date = new Date(row.tanggal);

    const month = date.getMonth();
    const year = date.getFullYear();

    const isCurrent = year === currentYear && month === currentMonth;

    const isPrevious =
      (year === currentYear && month === currentMonth - 1) ||
      (currentMonth === 0 && year === currentYear - 1 && month === 11);

    if (row.jenis === "pemasukan") {
      if (isCurrent) incomeThisMonth += row.nominal;
      if (isPrevious) incomeLastMonth += row.nominal;
    }

    if (row.jenis === "pengeluaran") {
      if (isCurrent) outcomeThisMonth += row.nominal;
      if (isPrevious) outcomeLastMonth += row.nominal;
    }
  }

  let percentageIncome = 0;

  if (incomeLastMonth > 0) {
    percentageIncome =
      ((incomeThisMonth - incomeLastMonth) / incomeLastMonth) * 100;
  } else if (incomeThisMonth > 0) {
    percentageIncome = 100;
  }

  return {
    income: {
      current: incomeThisMonth,
      previous: incomeLastMonth,
      difference: incomeThisMonth - incomeLastMonth,
      percentage: percentageIncome,
    },

    outcome: {
      current: outcomeThisMonth,
      previous: outcomeLastMonth,
      difference: outcomeThisMonth - outcomeLastMonth,
      percentage:
        outcomeLastMonth > 0
          ? ((outcomeThisMonth - outcomeLastMonth) / outcomeLastMonth) * 100
          : outcomeThisMonth > 0
            ? 100
            : 0,
    },
  };
}
