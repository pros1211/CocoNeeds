import { createClient } from "@/utils/supabase/server";

export async function fetchFinancialData() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("data_keuangan")
    .select("jenis, nominal, kategori, tanggal, catatan");

  if (error) throw error;

  return data ?? [];
}
