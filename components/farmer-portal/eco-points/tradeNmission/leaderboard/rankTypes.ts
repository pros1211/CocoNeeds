export type RankCategory = "pemula" | "hijau" | "organik" | "master";
export interface Rank {
  id: string;
  nama: string;
  level: RankCategory;
  ecoPoint: number;
}
export const LEVEL_CONFIG = {
  pemula: {
    label: "Pemula",
    color: "#94A3B8",
    icon: "/pemula.png",
  },

  hijau: {
    label: "Hijau",
    color: "#269957",
    icon: "/hijau.png",
  },

  organik: {
    label: "Organik",
    color: "#4D7C0F",
    icon: "/organik.png",
  },

  master: {
    label: "Master",
    color: "#F59E0B",
    icon: "/master.png",
  },
} as const;
