"use server";
import { cache } from "react";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
export async function addTask(formData: FormData) {
  const supabase = await createClient();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const start_time = formData.get("start_time") as string;
  const end_time = formData.get("end_time") as string;
  const { error } = await supabase
    .from("task")
    .insert([{ title, description, start_time, end_time }]);

  if (error) {
    console.error("Error inserting task:", error);
    return { success: false, error: "Gagal menambahkan tugas." };
  }

  revalidatePath("/farmer-portal");
}
export type TransactionInput = {
  jenis_input: "pemasukan" | "pengeluaran";
  nominal: number;
  kategori: string;
  tanggal: Date;
  catatan?: string;
};
export async function addFinancialRecord(data: TransactionInput) {
  const supabase = await createClient();
  try {
    const { error } = await supabase.from("data_keuangan").insert([
      {
        jenis: data.jenis_input,
        nominal: data.nominal,
        kategori: data.kategori,
        tanggal: data.tanggal.toISOString().split("T")[0],
        catatan: data.catatan || null,
      },
    ]);
    if (error) {
      console.error("Supabase error:", error.message);
      return { success: false, error: error.message };
    }
    revalidatePath("/farmer-portal/statistics");

    return { success: true };
  } catch (err) {
    console.error("Server Action Error:", err);
    return { success: false, error: "Terjadi kesalahan pada server." };
  }
}
export const getFinancialData = cache(async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("data_keuangan")
    .select("jenis, nominal, kategori, tanggal");
  if (error) {
    console.error("error fetching data:", error);
    return {
      pemasukan: 0,
      pengeluaran: 0,
      dataKategori: [],
      incomeChartData: [],
      percentageIncome: 0,
    };
  }
  let pemasukan = 0;
  let pengeluaran = 0;
  const kategoriMap: Record<string, number> = {};
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  let pemasukanBulanIni = 0;
  let pemasukanBulanLalu = 0;

  // Placeholder for all 12 months for the chart
  const monthlyIncomeMap: Record<number, number> = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
  };
  let pengeluaranBulanIni = 0;
  let pengeluaranBulanLalu = 0;
  const monthlyOutcomeMap: Record<number, number> = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
  };
  data?.forEach((row) => {
    if (row.jenis === "pemasukan") {
      pemasukan += row.nominal;
      if (row.tanggal) {
        const rowDate = new Date(row.tanggal);
        const rowMonth = rowDate.getMonth();
        const rowYear = rowDate.getFullYear();

        if (rowYear === currentYear) {
          monthlyIncomeMap[rowMonth] += row.nominal;
        }

        if (rowYear === currentYear && rowMonth === currentMonth) {
          pemasukanBulanIni += row.nominal;
        } else if (
          (rowYear === currentYear && rowMonth === currentMonth - 1) ||
          (currentMonth === 0 && rowYear === currentYear - 1 && rowMonth === 11)
        ) {
          pemasukanBulanLalu += row.nominal;
        }
      }
    } else if (row.jenis === "pengeluaran") {
      pengeluaran += row.nominal;
      if (row.tanggal) {
        const rowDate = new Date(row.tanggal);
        const rowMonth = rowDate.getMonth();
        const rowYear = rowDate.getFullYear();

        if (rowYear === currentYear) {
          monthlyOutcomeMap[rowMonth] += row.nominal;
        }

        if (rowYear === currentYear && rowMonth === currentMonth) {
          pengeluaranBulanIni += row.nominal;
        } else if (
          (rowYear === currentYear && rowMonth === currentMonth - 1) ||
          (currentMonth === 0 && rowYear === currentYear - 1 && rowMonth === 11)
        ) {
          pengeluaranBulanLalu += row.nominal;
        }
      }
      const cat = row.kategori || "lainnya";
      kategoriMap[cat] = (kategoriMap[cat] || 0) + row.nominal;
    }
  });
  const monthNames = [
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
  const incomeChartData = Object.keys(monthlyIncomeMap).map((key) => ({
    month: monthNames[parseInt(key)],
    margin: monthlyIncomeMap[parseInt(key)],
  }));

  let percentageIncome = 0;
  if (pemasukanBulanLalu > 0) {
    percentageIncome =
      ((pemasukanBulanIni - pemasukanBulanLalu) / pemasukanBulanLalu) * 100;
  } else if (pemasukanBulanIni > 0) {
    percentageIncome = 100;
  }

  const outcomeChartData = Object.keys(monthlyOutcomeMap).map((key) => ({
    month: monthNames[parseInt(key)],
    margin: monthlyOutcomeMap[parseInt(key)],
  }));
  const dataKategori = Object.keys(kategoriMap).map((key) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value: kategoriMap[key],
  }));
  const selisihPengeluaran = pengeluaranBulanIni - pengeluaranBulanLalu;
  return {
    pemasukan,
    pengeluaran,
    dataKategori,
    percentageIncome,
    incomeChartData,
    outcomeChartData,
    selisihPengeluaran,
  };
});
