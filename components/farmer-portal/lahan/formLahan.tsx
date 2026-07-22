"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { tambahLahan } from "@/app/action";
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
const formSchema = z.object({
  nama: z.string().min(3, "nama lahan minimal 3 karakter"),
  luas: z.coerce
    .number({ error: "luas lahan harus berupa angka" })
    .min(1, "luas minimal 1 meter persegi"),
  jumlah_pohon: z.coerce
    .number({ error: "jumlah pohon berupa angka" })
    .min(1, "minimal 1 pohon"),
});
const FormLahan = () => {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      nama: "",
      luas: 0,
      jumlah_pohon: 0,
    },
  });
  const { isSubmitting, errors } = form.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await tambahLahan({
        nama: values.nama,
        luas: values.luas,
        jumlah_pohon: values.jumlah_pohon,
      });
      if (response.success) {
        setOpen(false);
        form.reset();
      } else {
        console.error("Database Error:", response.error);
        alert("Gagal menyimpan log harian. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("gagal menambahkan lahan:", error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="p-2 bg-[#3BA275] flex items-center gap-2 text-white rounded-2xl text-sm font-semibold">
        <PlusCircle className="w-4 h-4" /> Tambah Lahan
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Data Lahan</DialogTitle>
          <DialogDescription>Tambahkan data lahan anda</DialogDescription>
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
