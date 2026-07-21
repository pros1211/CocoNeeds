"use server";
import { cache } from "react";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { SupabaseClient } from "@supabase/supabase-js";
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
export type dailyInput = {
  tanggal: Date;
  is_watered: boolean;
  fruit_drop: number;
  harvest_count: number;
  pest_type: string;
  weather: string;
};
export async function addDailyLog(inputData: dailyInput) {
  try {
    const supabase = await createClient();

    const { error } = await supabase.from("log_harian").insert([
      {
        tanggal: inputData.tanggal.toISOString(),
        fruit_drop: inputData.fruit_drop,
        pest_type: inputData.pest_type,
        harvest_count: inputData.harvest_count,
        weather: inputData.weather,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error.message);
      return { success: false, error: error.message };
    }

    revalidatePath("/farmer-portal");
    return { success: true };
  } catch (err) {
    console.error("Server Action Error:", err);
    return { success: false, error: "Internal Server Error" };
  }
}
export type inputLahan = {
  nama: string;
  luas: number;
  jumlah_pohon: number;
};
export async function tambahLahan(inputData: inputLahan) {
  try {
    const supabase = await createClient();
    const { error } = await supabase.from("lahan").insert([
      {
        nama: inputData.nama,
        luas: inputData.luas,
        jumlah_pohon: inputData.jumlah_pohon,
      },
    ]);
    if (error) {
      console.error("Supabase error:", error.message);
      return { success: false, error: error.message };
    }
    revalidatePath("/farmer-portal/lahan");
    return { success: true };
  } catch (err) {
    console.error("Server Action Error:", err);
    return { success: false, error: "Internal Server Error" };
  }
}
export type harvestInput = {
  lahan_id: string;
  tanggal_panen: string;
  jenis_kelapa: string;
  kategori_usia: string;
  jumlah: number;
  berat_total: number;
  jumlah_rusak?: number;
};
export async function addHarvestLog(data: harvestInput) {
  try {
    const supabase = await createClient();
    const { error } = await supabase.from("data_panen").insert([
      {
        lahan_id: data.lahan_id,
        tanggal_panen: data.tanggal_panen,
        jenis_kelapa: data.jenis_kelapa,
        kategori_usia: data.kategori_usia,
        jumlah_rusak: data.jumlah_rusak ? Number(data.jumlah_rusak) : null,
        berat_total: Number(data.berat_total),
      },
    ]);
    if (error) return { success: false, error: error.message };
    revalidatePath("/farmer-portal/lahan");
    return { success: true };
  } catch (err) {
    console.error("Server Action Error:", err);
    return { success: false, error: "Internal Server Error" };
  }
}
export type maintenanceInput = {
  lahan_id: string;
  tanggal_perawatan: string;
  ph_tanah?: number;
  kelembapan_tanah?: number;
  bibit_ditambah?: number;
  pohon_mati?: number;
  jenis_pupuk: string;
  jumlah_pupuk: number;
};
export async function addMaintenanceLog(data: maintenanceInput) {
  const supabase = await createClient();
  const { error } = await supabase.from("maintenance_logs").insert([
    {
      lahan_id: data.lahan_id,
      tanggal_perawatan: data.tanggal_perawatan,
      ph_tanah: data.ph_tanah ? Number(data.ph_tanah) : null,
      kelembapan_tanah: data.kelembapan_tanah
        ? Number(data.kelembapan_tanah)
        : null,
      bibit_ditambah: data.bibit_ditambah ? Number(data.bibit_ditambah) : null,
      pohon_mati: data.pohon_mati ? Number(data.pohon_mati) : null,
      jenis_pupuk: data.jenis_pupuk || null,
      jumlah_pupuk_kg: data.jumlah_pupuk ? Number(data.jumlah_pupuk) : null,
    },
  ]);

  if (error) return { success: false, error: error.message };
  revalidatePath("/farmer-portal/lahan");
  return { success: true };
}
export type produksiInput = {
  lahan_id: string;
  tanggal_produksi: string;
  jenis_produk: string;
  jumlah_kg: number;
};
export async function addProductionLog(data: produksiInput) {
  const supabase = await createClient();
  const { error } = await supabase.from("production_logs").insert([
    {
      lahan_id: data.lahan_id,
      tanggal_produksi: data.tanggal_produksi,
      jenis_produk: data.jenis_produk,
      jumlah_kg: Number(data.jumlah_kg),
    },
  ]);

  if (error) return { success: false, error: error.message };
  revalidatePath("/farmer-portal/lahan");
  return { success: true };
}
