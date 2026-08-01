import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  CalendarDays,
  CirclePile,
  Grid2X2,
  Palmtree,
  TreePine,
} from "lucide-react";
interface DetailLahanProps {
  lahan: {
    id: string;
    nama: string;
    lokasi: string;
    luas: number;
    jumlah_pohon: number;
    umur_pohon: string;
    pohon_produktif: number;
  };
}

const Ringkasan = ({ lahan }: DetailLahanProps) => {
  const summary = [
    {
      title: "Luas Lahan",
      value: `${lahan.luas} Ha`,
      icon: Grid2X2,
    },
    {
      title: "Jumlah Pohon",
      value: lahan.jumlah_pohon,
      icon: Palmtree,
    },
    {
      title: "Pohon Produktif",
      value: lahan.pohon_produktif,
      icon: TreePine,
    },
    {
      title: "Umur Pohon",
      value: lahan.umur_pohon,
      icon: Calendar,
    },
    {
      title: "Siap Panen",
      value: "42 Pohon",
      icon: CirclePile,
    },
    {
      title: "Panen Berikutnya",
      value: "12 Hari Lagi",
      icon: CalendarDays,
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
      {summary.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title}>
            <CardContent className="flex gap-4 items-center px-3">
              <div className="w-12 h-12 rounded-xl bg-[#EEF8F2] flex items-center justify-center">
                <Icon className="text-[#269957]" />
              </div>

              <div>
                <p className="text-sm text-[#269957] font-semibold">
                  {item.title}
                </p>

                <p className="font-bold text-md ">{item.value}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Ringkasan;
