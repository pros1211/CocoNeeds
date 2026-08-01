import React from "react";
import {
  ArrowRight,
  Badge,
  CalendarDays,
  ChevronRight,
  Grid2X2,
  MapPin,
  Palmtree,
} from "lucide-react";
import { FormLand } from "@/components/formLand";
import { Card, CardContent } from "@/components/ui/card";
import FormLahan from "../formLahan";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { formatRupiah } from "@/lib/utils";
import DetailLahan from "./detailLahan/detailLahan";

const ListLahan = async () => {
  const supabase = await createClient();

  const { data: lahanData, error } = await supabase
    .from("lahan")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch lahan:", error);
  }

  const lahan = lahanData || [];
  return (
    <div className=" h-full flex flex-col bg-white rounded-xl p-5">
      <div className="flex justify-between items-center mb-2 shrink-0">
        <h2 className="text-xl font-bold text-gray-800">Manajemen Lahan</h2>
        <FormLahan />
      </div>
      {lahan.length === 0 ? (
        <Card className="flex-1 border-2 border-dashed border-gray-200 rounded-2xl shadow-none">
          <CardContent className="min-h-[480px] flex flex-col justify-center items-center text-center px-8">
            <Image
              src="/placeholderLahan.png"
              width={300}
              height={300}
              alt="Belum ada lahan"
            />

            <h3 className="mt-2 text-2xl font-bold text-gray-800">
              Belum ada lahan
            </h3>

            <p className="mt-2 text-gray-500 max-w-md leading-relaxed">
              Tambahkan lahan pertamamu agar AI dapat menganalisis kesehatan
              kebun, memprediksi panen, dan memberikan rekomendasi terbaik.
            </p>

            <div className="mt-8">
              <FormLahan />
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="flex-1 overflow-y-auto flex flex-col gap-4 custom-scrollbar  px-4 pb-4">
          {lahan.map((data, index) => (
            <Card
              key={index}
              className="group flex flex-col  bg-white border border-gray-300 rounded-xl p-4 transition-all hover:border-[#269957] hover:shadow-sm"
            >
              <CardContent>
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <Image src="/landCond.png" width={60} height={60} alt="" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{data.nama}</h3>
                      </div>
                      <p className="text-sm text-neutral-500 mt-1">
                        {data.lokasi}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center font-medium text-gray-700">
                    <span className="text-[#269957] text-sm font-semibold px-2 py-1 rounded-lg bg-[#B1F0CE]/30">
                      Sehat
                    </span>
                    <DetailLahan
                      lahan={{
                        id: data.id,
                        nama: data.nama,
                        lokasi: data.lokasi,
                        jenis_kelapa: data.jenis_kelapa,
                        luas: data.luas,
                        jumlah_pohon: data.jumlah_pohon,
                        umur_pohon: data.umur_pohon,
                        pohon_produktif: data.pohon_produktif,
                      }}
                    />
                  </div>
                </div>
                <Separator className="my-3" />
                <div className="grid grid-cols-3">
                  <div className="flex items-center border-x gap-4 justify-center">
                    <Grid2X2 className="w-7 h-7 text-[#2D6A4F]" />
                    <div className="flex flex-col items-center">
                      <div className="flex items-end gap-1">
                        <p className="text-xl font-semibold">{data.luas}</p>

                        <p className="text-sm font-medium text-gray-500">Ha</p>
                      </div>
                      <p className="font-semibold text-md">Luas</p>
                    </div>
                  </div>
                  <div className="flex items-center border-x gap-2 justify-center ">
                    <Palmtree className="w-7 h-7 text-[#2D6A4F]" />
                    <div className="flex flex-col items-center">
                      <div className="flex flex-col gap-1">
                        <p className="text-lg font-semibold">
                          {data.jumlah_pohon}
                        </p>

                        <p className="text-xs text-neutral-500">Pohon</p>
                      </div>
                    </div>
                    <div className="text-center border-x"></div>
                  </div>

                  <div className="flex items-center border-x gap-4 justify-center ">
                    <div className="flex flex-col items-center">
                      <div className="mx-auto mb-2 w-10 h-10 rounded-full border-[5px] border-[#2D6A4F] flex items-center justify-center">
                        <span className="text-[10px] font-bold">95</span>
                      </div>

                      <p className="text-xs text-neutral-500">Kondisi lahan</p>
                    </div>
                  </div>
                </div>
                <Separator className="my-3" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex items-center gap-2">
                    <Image src="/coco.png" width={36} height={36} alt="" />

                    <div>
                      <p className="text-xs text-neutral-500">Siap Panen</p>

                      <p className="font-semibold">42 Pohon</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays className="text-[#2D6A4F]" />

                    <div>
                      <p className="text-xs text-neutral-500">
                        Panen Berikutnya
                      </p>

                      <p className="font-semibold">12 Hari Lagi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/income.png"
                      width={50}
                      height={50}
                      alt="icon"
                    />

                    <div>
                      <p className="text-xs text-neutral-500">
                        Estimasi pendapatan
                      </p>

                      <p className="font-semibold">{formatRupiah(10000000)}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
export default ListLahan;
