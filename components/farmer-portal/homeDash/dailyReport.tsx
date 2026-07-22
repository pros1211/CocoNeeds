"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, PlusCircle, Loader2 } from "lucide-react";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { addDailyLog } from "@/app/action";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { id } from "date-fns/locale";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface LahanOption {
  id: string;
  nama: string;
}

interface DailyReportProps {
  lahanList: LahanOption[];
}
const pestLabel = {
  tidak_ada: "Tidak Ada",
  kumbang_badak: "Kumbang Badak",
  kumbang_moncong: "Kumbang Moncong",
  ulat: "Ulat",
  jamur: "Jamur",
  lainnya: "Lainnya",
} as const;
type PestType = keyof typeof pestLabel;
const formSchema = z.object({
  lahan_id: z.string().min(1, "Silakan pilih lahan terlebih dahulu"),
  tanggal: z.date({ error: "pilih tanggal" }),
  is_watered: z.boolean({ error: "Status penyiraman tidak boelh kosong" }),
  fruit_drop: z.coerce
    .number({ error: "Harus berupa angka" })
    .min(0, "jumlah buah tidak boleh negatif"),
  harvest_count: z.coerce
    .number({ error: "Harus berupa angka" })
    .min(0, "Jumlah panen tidak boleh negatif"),
  pest_type: z.string().min(1, "jenis hama tidak boleh kosong"),
  weather: z.string().min(1, "cuaca tidak boleh kosong"),
});
const DailyReport = ({ lahanList }: DailyReportProps) => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      lahan_id: "",
      tanggal: undefined,
      is_watered: false,
      fruit_drop: 0,
      harvest_count: 0,
      pest_type: "tidak_ada",
      weather: "cerah",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await addDailyLog({
        lahan_id: values.lahan_id,
        tanggal: values.tanggal,
        is_watered: values.is_watered,
        fruit_drop: values.fruit_drop,
        harvest_count: values.harvest_count,
        pest_type: values.pest_type,
        weather: values.weather,
      });
      if (response.success) {
        setOpen(false);
        form.reset();
      } else {
        console.error("Database Error:", response.error);
        alert("Gagal menyimpan log harian. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };
  const { errors, isSubmitting } = form.formState;
  return (
    <Dialog>
      <DialogTrigger className="p-2 bg-[#3BA275] flex items-center gap-2 text-white rounded-2xl text-sm font-semibold">
        <PlusCircle className="w-4 h-4" /> Laporan Harian
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Laporan Harian
          </DialogTitle>
        </DialogHeader>
        <form
          id="form_harian"
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-2"
        >
          <Controller
            name="tanggal"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Tanggal</FieldLabel>
                <Popover>
                  <PopoverTrigger
                    className={cn(
                      "flex h-10 w-full items-center gap-4 rounded-xl border border-input bg-background px-4 py-2 text-sm font-normal shadow-sm ring-offset-background hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    )}
                    aria-invalid={fieldState.invalid}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value
                      ? format(field.value, "dd MMMM yyyy", { locale: id })
                      : "Pilih tanggal"}
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  </PopoverContent>
                </Popover>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="lahan_id"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Lahan</FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    aria-invalid={fieldState.invalid}
                    className="w-full rounded-xl h-10 bg-gray-100/50"
                  >
                    <SelectValue placeholder="Pilih lahanmu">
                      {field.value
                        ? lahanList.find((lahan) => lahan.id === field.value)
                            ?.nama
                        : "Pilih lahan"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {lahanList.map((lahan) => (
                      <SelectItem key={lahan.id} value={lahan.id}>
                        {lahan.nama}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="is_watered"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Status penyiraman</FieldLabel>
                <Select
                  value={field.value ? "true" : "false"}
                  onValueChange={(val) => field.onChange(val === "true")}
                >
                  <SelectTrigger
                    aria-invalid={fieldState.invalid}
                    className="rounded-xl h-10 bg-gray-100/50"
                  >
                    <SelectValue>
                      {field.value ? "Sudah Disiram" : "Belum Disiram"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="true">Sudah Disiram</SelectItem>
                    <SelectItem value="false">Belum Disiram</SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2">
              <Label>Jumlah Panen Hari Ini</Label>
              <Input
                type="number"
                className="rounded-xl h-10 bg-gray-100/50"
                {...form.register("harvest_count", {
                  valueAsNumber: true,
                })}
              />
              {errors.harvest_count && (
                <p className="text-sm text-red-500">
                  {errors.harvest_count.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label>Jumlah Buah Jatuh (Gugur)</Label>
              <Input
                type="number"
                className="rounded-xl h-10 bg-gray-100/50"
                {...form.register("fruit_drop", {
                  valueAsNumber: true,
                })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Hama</Label>
            <Controller
              name="pest_type"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState}>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      aria-invalid={fieldState.invalid}
                      className="w-full rounded-xl h-10 bg-gray-100/50"
                    >
                      <SelectValue>
                        {pestLabel[field.value as PestType]}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tidak_ada">Tidak Ada</SelectItem>
                      <SelectItem value="kumbang_badak">
                        Kumbang Badak
                      </SelectItem>
                      <SelectItem value="kumbang_moncong">
                        Kumbang Moncong
                      </SelectItem>
                      <SelectItem value="ulat">Ulat</SelectItem>
                      <SelectItem value="jamur">Jamur</SelectItem>
                      <SelectItem value="lainnya">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Cuaca</Label>
            <Controller
              name="weather"
              control={form.control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full rounded-xl h-10 bg-gray-100/50">
                    <SelectValue placeholder="Pilih Kondisi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cerah">Cerah</SelectItem>
                    <SelectItem value="cerah_berawan">Cerah Berawan</SelectItem>
                    <SelectItem value="mendung">Mendung</SelectItem>
                    <SelectItem value="gerimis">Gerimis</SelectItem>
                    <SelectItem value="hujan">Hujan</SelectItem>
                    <SelectItem value="hujan_lebat">Hujan Lebat</SelectItem>
                    <SelectItem value="badai_petir">Badai Petir</SelectItem>
                    <SelectItem value="berangin">Berangin</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#269957] hover:bg-[#1e7a45] text-white rounded-xl disabled:opacity-70 h-11"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Menyimpan Data...
                </>
              ) : (
                "Simpan Log Harian"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DailyReport;
