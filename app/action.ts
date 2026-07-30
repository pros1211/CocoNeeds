"use server";
import { cache } from "react";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { fetchFinancialData } from "@/lib/keuangan/fetchKeuangan";
import { calculateSummary } from "@/lib/keuangan/calculateSummary";
import { calculateMonthlyComparison } from "@/lib/keuangan/calculateMonthly";
import { buildMonthlyChart } from "@/lib/keuangan/chartData";
import { calculateCategoryBreakdown } from "@/lib/keuangan/calculateCategory";
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
  const rows = await fetchFinancialData();

  const summary = calculateSummary(rows);

  const comparison = calculateMonthlyComparison(rows);

  const charts = buildMonthlyChart(rows);

  const categories = calculateCategoryBreakdown(rows);

  return {
    ...summary,
    ...comparison,
    ...charts,
    dataKategori: categories,
  };
});
export type dailyInput = {
  lahan_id: string;
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
        lahan_id: inputData.lahan_id,
        tanggal: inputData.tanggal.toISOString(),
        fruit_drop: inputData.fruit_drop,
        is_watered: inputData.is_watered,
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
  const { error } = await supabase.from("maintenance_log").insert([
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
      jumlah_pupuk: data.jumlah_pupuk ? Number(data.jumlah_pupuk) : null,
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
  const { error } = await supabase.from("data_produksi").insert([
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
export type pengirimanInput = {
  asal: string;
  tujuan: string;
  status: string;
  jenis: string;
  delivery_method: string;
  notes: string;
  pickup_date?: Date;
  pickup_time?: Date;
  total_weight?: number;
  cooperative_id?: string;
};
export type limbahInput = {
  id_kategori: string;
  id_pengiriman: string;
  jumlah: number;
  satuan: string;
  bentuk_limbah: string;
  kebersihan: string;
  kondisi: string;
  foto_url: string[];
};
export async function addShipment(
  pengirimanData: pengirimanInput,
  wasteItems: limbahInput[],
) {
  const supabase = await createClient();
  const { data: newShipment, error: shipmentError } = await supabase
    .from("pengiriman")
    .insert([
      {
        asal: pengirimanData.asal,
        tujuan: pengirimanData.tujuan,
        status: pengirimanData.status,
        jenis: pengirimanData.jenis,
        delivery_method: pengirimanData.delivery_method,
        notes: pengirimanData.notes,
        pickup_date: pengirimanData.pickup_date,
        pickup_time: pengirimanData.pickup_time,
        total_weight: pengirimanData.total_weight,
        cooperative_id: pengirimanData.cooperative_id,
      },
    ])
    .select("id")
    .single();
  if (shipmentError) {
    return {
      success: false,
      error: "Gagal membuat pengiriman: " + shipmentError.message,
    };
  }
  const itemsToInsert = wasteItems.map((limbah) => ({
    ...limbah,
    id_pengiriman: newShipment.id,
    id_kategori: limbah.id_kategori,
    jumlah: limbah.jumlah,
    satuan: limbah.satuan,
    bentuk_limbah: limbah.bentuk_limbah,
    kebersihan: limbah.kebersihan,
    kondisi: limbah.kondisi,
    foto_url: limbah.foto_url,
  }));

  const { error: wasteError } = await supabase
    .from("limbah")
    .insert(itemsToInsert);

  if (wasteError) {
    return {
      success: false,
      error: "Gagal menyimpan detail limbah: " + wasteError.message,
    };
  }

  return { success: true, shipmentId: newShipment.id };
}

// ambil leaderboard
export async function getLeaderboard() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("leaderboard")
    .select("*")
    .order("ecoPoint", {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
