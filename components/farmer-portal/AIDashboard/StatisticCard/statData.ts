import { formatRupiah } from "@/lib/utils";
interface Insight {
  title: string;
  value: string;
  description: string;
  trend: string;
  icon: string;
  trendColor: "green" | "blue" | "orange" | "red";
  actionLabel: string;
}
export const dataCards: Insight[] = [
  {
    title: "Kesehatan kebun",
    value: "92/100",
    description: "kebutuhan dasar dari kebun mencukupi",
    trend: "sangat baik",
    trendColor: "green",
    icon: "/landCond.png",
    actionLabel: "Lihat detail",
  },
  {
    title: "Prediksi panen",
    value: "500 Kg",
    description: "Estimasi panen bulan Agustus 2026",
    trend: "+8.4% dari bulan lalu",
    trendColor: "green",
    icon: "/Forecast.png",
    actionLabel: "Lihat detail",
  },
  {
    title: "Prediksi pendapatan",
    value: `${formatRupiah(24000000)}`,
    description: "Estimasi pendapatan bulan Agustus 2026",
    trend: "+10% dari bulan lalu",
    trendColor: "green",
    icon: "/income.png",
    actionLabel: "Lihat detail",
  },
  {
    title: "Risiko lahan",
    value: "Sedang",
    description: "risiko penurunan kualitas kelapa akibat hama",
    trend: "Perlu perawatan",
    icon: "/risk.png",
    trendColor: "green",
    actionLabel: "Lihat analisis",
  },
  // {
  //   title: "Potensi EcoPoint",
  //   value: `+300 EcoPoints`,
  //   description: "potensi ecopoint bulan Agustus 2026",
  //   trend: "+3% dari bulan lalu",
  //   icon: "/ecoMascot.png",
  //   trendColor: "green",
  //   actionLabel: "Lihat potensi",
  // },
];
