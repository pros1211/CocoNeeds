import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Ringkasan from "./ringkasan";
import Kondisi from "./kondisi";
import AIInsight from "./AIInsight";
import DeleteButton from "./deleteButton";
import FormLahan from "../../formLahan";
interface DetailLahanProps {
  lahan: {
    id: string;
    nama: string;
    lokasi: string;
    luas: number;
    jenis_kelapa: string;
    jumlah_pohon: number;
    umur_pohon: string;
    pohon_produktif: number;
  };
}
const DetailLahan = async ({ lahan }: DetailLahanProps) => {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            className="text-white bg-[#269957] p-2 rounded-lg text-md font-semibold"
            variant="outline"
          ></Button>
        }
      >
        <ChevronRight className="w-5 h-5" />
      </DialogTrigger>
      <DialogContent className="min-w-[65vw] ">
        <DialogHeader className="flex flex-row justify-between items-center px-4 py-2">
          <div className="flex items-center gap-4">
            <Image src="/landCond.png" width={60} height={60} alt="" />

            <div>
              <DialogTitle className="text-2xl">{lahan.nama}</DialogTitle>

              <p className="text-gray-500">{lahan.lokasi}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <FormLahan
              mode="edit"
              lahan={lahan}
              trigger={<Button className="bg-[#3BA275]">Edit</Button>}
            />

            <DeleteButton lahanId={lahan.id} />
          </div>
        </DialogHeader>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-5">
            <Ringkasan lahan={lahan} />
            <AIInsight />
          </div>
          <Kondisi lahan={lahan} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailLahan;
