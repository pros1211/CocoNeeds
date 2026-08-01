"use client";

import React, { useEffect, useState } from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { tambahLahan, updateLahan } from "@/app/action";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PlusCircle, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
const umurPohonOptions = [
  "kurang dari 3 Tahun",
  "3–5 Tahun",
  "6–10 Tahun",
  "11–15 Tahun",
  "16–20 Tahun",
  "lebih dari 20 Tahun",
];
const formSchema = z.object({
  nama: z.string().min(3, "nama lahan minimal 3 karakter"),
  lokasi: z.string().min(1, "masukkan lokasi lahan"),
  luas: z.coerce
    .number({ error: "luas lahan harus berupa angka" })
    .min(1, "luas minimal 1 meter persegi"),
  jumlah_pohon: z.coerce
    .number({ error: "jumlah pohon berupa angka" })
    .min(1, "minimal 1 pohon"),
  jenis_kelapa: z.string().min(1, "silahkan pilih jenis kelapa"),
  umur_pohon: z.string().min(1, "silahkan pilih rata rata umur pohon"),
  pohon_produktif: z.coerce
    .number({ error: "jumlah pohon produktif berupa angka" })
    .min(1, "minimal 1 pohon"),
});
interface FormLahanProps {
  mode?: "create" | "edit";
  trigger?: React.ReactNode;
  lahan?: {
    id: string;
    nama: string;
    lokasi: string;
    luas: number;
    jumlah_pohon: number;
    jenis_kelapa: string;
    umur_pohon: string;
    pohon_produktif: number;
  };
}
const FormLahan = ({ mode = "create", trigger, lahan }: FormLahanProps) => {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      nama: lahan?.nama ?? "",

      lokasi: lahan?.lokasi ?? "",

      luas: lahan?.luas ?? 0,

      jumlah_pohon: lahan?.jumlah_pohon ?? 0,

      jenis_kelapa: lahan?.jenis_kelapa ?? "Kelapa genjah",

      umur_pohon: lahan?.umur_pohon ?? umurPohonOptions[0],

      pohon_produktif: lahan?.pohon_produktif ?? 0,
    },
  });
  useEffect(() => {
    if (mode === "edit" && lahan) {
      form.reset({
        nama: lahan.nama,
        lokasi: lahan.lokasi,
        luas: lahan.luas,
        jumlah_pohon: lahan.jumlah_pohon,
        jenis_kelapa: lahan.jenis_kelapa,
        umur_pohon: lahan.umur_pohon,
        pohon_produktif: lahan.pohon_produktif,
      });
    }
  }, [lahan, mode, form]);
  const { isSubmitting, errors } = form.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const payload = {
        nama: values.nama,
        lokasi: values.lokasi,
        luas: values.luas,
        jumlah_pohon: values.jumlah_pohon,
        jenis_kelapa: values.jenis_kelapa,
        umur_pohon: values.umur_pohon,
        pohon_produktif: values.pohon_produktif,
      };

      const response =
        mode === "create"
          ? await tambahLahan(payload)
          : await updateLahan(lahan!.id, payload);

      if (response.success) {
        toast.success(
          mode === "create"
            ? "Lahan berhasil ditambahkan"
            : "Data lahan berhasil diperbarui",
        );

        form.reset();

        setOpen(false);
      } else {
        toast.error(response.error);
      }
    } catch (err) {
      console.error(err);

      toast.error("Terjadi kesalahan.");
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="px-2 bg-[#3BA275] flex items-center gap-2 text-white rounded-2xl text-sm font-semibold">
        {trigger ?? (
          <Button className="bg-[#3BA275] text-white rounded-xl">
            <PlusCircle className="w-4 h-4" />
            Tambah Lahan
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Data Lahan</DialogTitle>
          <DialogDescription>
            {mode === "create"
              ? "Tambahkan data lahan baru"
              : "Perbarui informasi lahan"}
          </DialogDescription>
        </DialogHeader>
        <form
          id="form_lahan"
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="font-semibold text-gray-700">
              Nama Lahan
            </Label>
            <Input
              id="name"
              placeholder="Contoh: Lahan Utara"
              className={`rounded-xl bg-gray-50/50 ${errors.nama ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              {...form.register("nama")}
            />
            {errors.nama && (
              <span className="text-xs text-red-500 font-medium">
                {errors.nama.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="lokasi" className="font-semibold text-gray-700">
              Lokasi lahan
            </Label>
            <Input
              id="Lokasi"
              type="string"
              placeholder="Contoh: Desa SukaMakmur jaya, Maluku Utara"
              className={`rounded-xl bg-gray-50/50 ${errors.luas ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              {...form.register("lokasi")}
            />
            {errors.lokasi && (
              <span className="text-xs text-red-500 font-medium">
                {errors.lokasi.message}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="luas" className="font-semibold text-gray-700">
                Luas (m^2)
              </Label>
              <Input
                id="luas"
                type="number"
                step="0.1"
                placeholder="Contoh: 1.2"
                className={`rounded-xl bg-gray-50/50 ${errors.luas ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                {...form.register("luas")}
              />
              {errors.luas && (
                <span className="text-xs text-red-500 font-medium">
                  {errors.luas.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="jumlah_pohon"
                className="font-semibold text-gray-700"
              >
                Jumlah Pohon
              </Label>
              <Input
                id="jumlah_pohon"
                type="number"
                placeholder="Cth: 120"
                className={`rounded-xl bg-gray-50/50 ${errors.jumlah_pohon ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                {...form.register("jumlah_pohon")}
              />
              {errors.jumlah_pohon && (
                <span className="text-xs text-red-500 font-medium">
                  {errors.jumlah_pohon.message}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 w-full">
              <Label className="font-semibold">Umur Pohon</Label>
              <Controller
                control={form.control}
                name="umur_pohon"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      className={`w-full ${errors.umur_pohon ? "border-red-500" : ""}`}
                    >
                      <SelectValue placeholder="Pilih umur pohon" />
                    </SelectTrigger>

                    <SelectContent>
                      {umurPohonOptions.map((umur) => (
                        <SelectItem key={umur} value={umur}>
                          {umur}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.umur_pohon && (
                <span className="text-xs text-red-500">
                  {errors.umur_pohon.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="pohon_produktif"
                className="font-semibold text-gray-700"
              >
                jumlah pohon produktif
              </Label>
              <Input
                id="pohon_produktif"
                type="number"
                step="1"
                placeholder="Contoh: 100"
                className={`rounded-xl bg-gray-50/50 ${errors.luas ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                {...form.register("pohon_produktif")}
              />
              {errors.pohon_produktif && (
                <span className="text-xs text-red-500 font-medium">
                  {errors.pohon_produktif.message}
                </span>
              )}
            </div>
          </div>
          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#269957] hover:bg-[#1e7a45] text-white rounded-xl h-11 font-semibold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                "Simpan Lahan"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormLahan;
