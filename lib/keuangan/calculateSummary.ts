export interface FinancialRow {
  jenis: string;
  nominal: number;
  kategori: string | null;
  tanggal: string | null;
}
export function calculateSummary(data: FinancialRow[]) {
  let pemasukan = 0;
  let pengeluaran = 0;

  data.forEach((row) => {
    if (row.jenis === "pemasukan") {
      pemasukan += row.nominal;
    }

    if (row.jenis === "pengeluaran") {
      pengeluaran += row.nominal;
    }
  });

  return {
    pemasukan,
    pengeluaran,
  };
}
