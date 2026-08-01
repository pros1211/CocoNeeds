import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";
import {
  Droplets,
  FlaskConical,
  Package,
  Sprout,
  TreePine,
} from "lucide-react";
import React from "react";
interface DetailLahanProps {
  lahan: {
    id: string;
  };
}
const Kondisi = async ({ lahan }: DetailLahanProps) => {
  const supabase = await createClient();

  const { data: maintenance } = await supabase
    .from("maintenance_log")
    .select("*")
    .eq("lahan_id", lahan.id)
    .order("tanggal_perawatan", {
      ascending: false,
    })
    .limit(1)
    .single();
  const { data: daily } = await supabase
    .from("log_harian")
    .select("*")
    .eq("lahan_id", lahan.id)
    .order("tanggal", {
      ascending: false,
    })
    .limit(1)
    .single();
  const latest = [
    {
      label: "pH Tanah",
      value: maintenance?.ph_tanah ? maintenance.ph_tanah : "Belum diukur",
      badge: maintenance?.ph_tanah ? "Optimal" : null,
      icon: FlaskConical,
    },
    {
      label: "Kelembapan",
      value:
        maintenance?.kelembapan_tanah != null
          ? `${maintenance.kelembapan_tanah}%`
          : "Belum diukur",
      badge: maintenance?.kelembapan_tanah ? "Ideal" : null,
      icon: Droplets,
    },
    {
      label: "Pupuk Terakhir",
      value: maintenance?.jenis_pupuk || "Belum pernah",
      sub: maintenance?.jumlah_pupuk
        ? `${maintenance.jumlah_pupuk} Kg`
        : "undefined",
      icon: Package,
    },
    {
      label: "Penyiraman",
      value: daily?.is_watered ? "Sudah" : "Belum",
      icon: Droplets,
    },
    {
      label: "Bibit ditambah",
      value: `${maintenance?.bibit_ditambah ?? 0} Pohon`,
      icon: Sprout,
    },
    {
      label: "Pohon mati",
      value: `${maintenance?.pohon_mati ?? 0} Pohon`,
      icon: TreePine,
    },
  ];
  return (
    <Card className="flex flex-col gap-3">
      <CardHeader>
        <CardTitle>Kondisi Terakhir</CardTitle>
      </CardHeader>
      <CardContent>
        {latest.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center justify-between border-b last:border-b-0 p-1"
            >
              {/* kiri */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#269957]" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>

                  {item.sub && (
                    <p className="text-xs text-gray-400">{item.sub}</p>
                  )}
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold">{item.value}</p>

                {item.badge && (
                  <span className="inline-block mt-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Kondisi;
