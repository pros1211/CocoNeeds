import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MessageCircle, Wallet } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
import { VscSparkle } from "react-icons/vsc";
const produkPotensial = [
  {
    icon: "/vco.png",
    product: "virgin coconut oil",
    value: "900 Liter",
    allocation: 30,
    estimation: "900 Liter",
  },
  {
    icon: "/kopraPutih.png",
    product: "Kopra Putih",
    description: "Kualitas premium",
    allocation: 25,
    estimation: "3 Ton",
  },
  {
    icon: "/minyakKelapa.png",
    product: "Minyak Kelapa",
    description: "Produk konsumsi",
    allocation: 20,
    estimation: "1.100 Liter",
  },
  {
    icon: "/cocopeat.png",
    product: "Cocopeat",
    description: "Media tanam organik",
    allocation: 25,
    estimation: "1.3 Ton",
  },
];
const DetailAllo = () => {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            className="w-full text-white bg-[#269957] p-2 rounded-lg text-md font-semibold"
            variant="outline"
          >
            Lihat Analisis
          </Button>
        }
      />
      <DialogContent className="min-w-[45vw]">
        <DialogHeader>
          <DialogTitle className="font-semibold text-lg">
            Rekomendasi Alokasi Produksi
          </DialogTitle>
          <DialogDescription className="text-xs font-medium">
            Rekomendasi pengolahan hasil panen berdasarkan data panen, harga
            produk dan kapasitas produksimu.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          {produkPotensial.map((item, index) => (
            <div
              key={index}
              className="pb-5 border-b border-gray-100 last:border-none"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <Image
                    src={item.icon}
                    alt={item.product}
                    width={52}
                    height={52}
                    className="object-contain"
                  />

                  <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-900">
                      {item.product}
                    </h3>

                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>

                <div className="w-[230px]">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Alokasi</span>

                    <span className="font-semibold text-[#269957]">
                      {item.allocation}%
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-[#269957]"
                      style={{
                        width: `${item.allocation}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="min-w-[120px] text-right">
                  <p className="text-sm text-gray-500">Estimasi Hasil</p>

                  <p className="text-lg font-bold text-gray-900">
                    {item.estimation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-2  bg-[#EEF8F2] rounded-lg">
            <Wallet className="w-8 h-8 text-[#269957]" />
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-md text-black">
                Estimasi total pendapatan
              </span>
              <span className="text-lg text-[#269957] font-semibold">
                {formatRupiah(28000000)}
              </span>
              <span className="font-medium text-xs">
                Jika sesuai rekomendasi{" "}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-2 bg-[#EEF8F2] rounded-lg">
            <Wallet className="w-8 h-8 text-[#269957]" />
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-md text-black">
                Estimasi total pendapatan
              </span>
              <span className="text-lg text-[#269957] font-semibold">
                {formatRupiah(24000000)}
              </span>
              <span className="font-medium text-xs ">
                Jika hanya memproduksi Kopra{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-r from-white via-[#FBFEFC] to-[#F5FCF8] p-5 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF8F2]">
                <VscSparkle className="h-10 w-10 text-[#269957]" />
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-[#1E293B]">
                  Tanyakan ke CocoAI
                </h3>

                <p className="text-sm text-gray-600">
                  Punya pertanyaan mengenai rekomendasi ini?
                  <span className="font-semibold  text-[#269957]">
                    {" "}
                    CocoAI
                  </span>{" "}
                  siap membantu menjelaskan hasil analisis dan memberikan saran.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <Button
              variant="outline"
              className="h-12 rounded-xl border-[#269957] px-6 text-[#269957] hover:bg-[#269957] hover:text-white lg:w-auto w-full"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Tanyakan CocoAI
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailAllo;
