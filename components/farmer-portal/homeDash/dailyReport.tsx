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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { addDailyLog } from "@/app/action";
import { Calendar } from "@/components/ui/calendar";
const formSchema = z.object({
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
const DailyReport = () => {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      tanggal: new Date(),
      is_watered: false,
      fruit_drop: 0,
      harvest_count: 0,
      pest_type: "tidak_ada",
      weather: "cerah",
    },
  });
  const { isSubmitting } = form.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await addDailyLog({
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
        <form id="form_harian" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="space-y-4">
            <Controller
              name="tanggal"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className="flex flex-col"
                >
                  <FieldLabel>Tanggal</FieldLabel>
                  <Popover>
                    <PopoverTrigger>
                      <div
                        className={`flex h-10 w-full items-center justify-between rounded-xl border border-input bg-gray-100/50 focus:bg-white px-3 py-2 text-sm shadow-sm transition-colors cursor-pointer ${
                          !field.value
                            ? "text-muted-foreground"
                            : "text-gray-900"
                        }`}
                        aria-invalid={fieldState.invalid}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pilih Tanggal</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverContent
                        className="w-auto p-0 bg-white"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                        />
                      </PopoverContent>
                    </PopoverContent>
                  </Popover>
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
                  <FieldLabel>Status Penyiraman</FieldLabel>
                  <Select
                    onValueChange={(val) => field.onChange(val === "true")}
                    value={field.value ? "true" : "false"}
                  >
                    <SelectTrigger className="rounded-xl bg-gray-100/50 border-transparent focus:bg-white">
                      <SelectValue placeholder="Pilih status penyiraman" />
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded-xl">
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
            <Controller
              name="fruit_drop"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Jumlah Buah Jatuh (Gugur)</FieldLabel>
                  <Input
                    {...field}
                    type="number"
                    placeholder="0"
                    className="rounded-xl bg-gray-100/50 border-transparent focus:bg-white"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* 4. HARVEST COUNT (Number Input) */}
            <Controller
              name="harvest_count"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Jumlah Panen Hari Ini</FieldLabel>
                  <Input
                    {...field}
                    type="number"
                    placeholder="0"
                    className="rounded-xl bg-gray-100/50 border-transparent focus:bg-white"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* 5. PEST TYPE (Dropdown) */}
            <Controller
              name="pest_type"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Deteksi Hama</FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="rounded-xl bg-gray-100/50 border-transparent focus:bg-white">
                      <SelectValue placeholder="Pilih hama (jika ada)" />
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded-xl">
                      <SelectItem value="tidak_ada">Tidak Ada Hama</SelectItem>
                      <SelectItem value="kumbang_badak">
                        Kumbang Badak
                      </SelectItem>
                      <SelectItem value="kumbang_moncong">
                        Kumbang Moncong
                      </SelectItem>
                      <SelectItem value="ulat">Ulat</SelectItem>
                      <SelectItem value="jamur">
                        Jamur / Penyakit Busuk
                      </SelectItem>
                      <SelectItem value="lainnya">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="weather"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Kondisi Cuaca</FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="rounded-xl bg-gray-100/50 border-transparent focus:bg-white">
                      <SelectValue placeholder="Pilih cuaca hari ini" />
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded-xl">
                      <SelectItem value="cerah">Cerah</SelectItem>
                      <SelectItem value="cerah_berawan">
                        Cerah Berawan
                      </SelectItem>
                      <SelectItem value="mendung">Mendung</SelectItem>
                      <SelectItem value="gerimis">Gerimis</SelectItem>
                      <SelectItem value="hujan">Hujan</SelectItem>
                      <SelectItem value="hujan_lebat">Hujan Lebat</SelectItem>
                      <SelectItem value="badai_petir">Badai Petir</SelectItem>
                      <SelectItem value="berangin">
                        Berangin (Angin Kencang)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <div className="pt-6">
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
