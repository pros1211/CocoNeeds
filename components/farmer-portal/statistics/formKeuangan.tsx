"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  PlusCircle,
  Loader2,
  Form,
} from "lucide-react";
import { addFinancialRecord } from "@/app/action";
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
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
// validasi input dengan zod resolver
const formSchema = z.object({
  jenis: z.enum(["pemasukan", "pengeluaran"]),
  nominal: z.coerce.number().min(1, "Nominal tidak boleh kosong"),
  kategori: z.string().min(1, "Pilih kategori"),
  tanggal: z.date({ error: "Pilih tanggal transaksi" }),
  catatan: z.string().optional(),
});
const FormKeuangan = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("pengeluaran");
  const form = useForm<z.infer<typeof formSchema>>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      jenis: "pengeluaran",
      nominal: 0,
      kategori: "",
      catatan: "",
    },
  });
  const { isSubmitting } = form.formState;
  const handleTabChange = (val: string) => {
    setActiveTab(val);
    form.setValue("jenis", val as "pemasukan" | "pengeluaran");
    form.setValue("kategori", "");
  };
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await addFinancialRecord({
        jenis_input: values.jenis,
        nominal: values.nominal,
        kategori: values.kategori,
        tanggal: values.tanggal,
        catatan: values.catatan,
      });

      if (response.success) {
        setOpen(false);
        form.reset();
      } else {
        console.error("Database Error:", response.error);
        alert("Gagal menyimpan transaksi. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="p-2 bg-[#3BA275] flex items-center gap-2 text-white rounded-2xl text-sm font-semibold">
        <PlusCircle className="w-4 h-4" />
        Catat Keuangan
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] bg-white rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Catat Keuangan
          </DialogTitle>
        </DialogHeader>
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full mt-2"
        >
          <TabsList className="grid w-full grid-cols-2 mb-4 bg-gray-100 rounded-xl">
            <TabsTrigger
              value="pemasukan"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Pemasukan
            </TabsTrigger>
            <TabsTrigger
              value="pengeluaran"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Pengeluaran
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <form id="form-keuangan" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="space-y-4">
            <Controller
              name="nominal"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="nominal">Nominal (Rp)</FieldLabel>
                  <Input
                    {...field}
                    id="nominal"
                    type="number"
                    placeholder="Contoh: 150000"
                    aria-invalid={fieldState.invalid}
                    className="rounded-xl"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="kategori"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="kategori">Kategori</FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="kategori"
                      className="rounded-xl"
                      aria-invalid={fieldState.invalid}
                    >
                      <SelectValue placeholder="Pilih Kategori" />
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded-xl">
                      {activeTab === "pengeluaran" ? (
                        <>
                          <SelectItem value="pupuk">Pupuk</SelectItem>
                          <SelectItem value="bibit">Bibit</SelectItem>
                          <SelectItem value="pajak">Pajak</SelectItem>
                          <SelectItem value="listrik">Listrik</SelectItem>
                          <SelectItem value="air">Air</SelectItem>
                          <SelectItem value="lainnya">Lainnya</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="hasil_panen">
                            Hasil Panen (Kopra/Kelapa)
                          </SelectItem>
                          <SelectItem value="produk_turunan">
                            Produk Turunan (Minyak/Briket)
                          </SelectItem>
                          <SelectItem value="lainnya">
                            Pemasukan Lainnya
                          </SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
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
                        className={`flex h-10 w-full items-center justify-between rounded-xl border border-input bg-white px-3 py-2 text-sm shadow-sm hover:bg-gray-50 transition-colors cursor-pointer ${
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
                  </Popover>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Catatan Field */}
            <Controller
              name="catatan"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="catatan">
                    Catatan Tambahan (Opsional)
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="catatan"
                    placeholder="Tulis keterangan singkat..."
                    className="resize-none rounded-xl"
                    aria-invalid={fieldState.invalid}
                  />
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
              className="w-full bg-[#269957] hover:bg-[#1e7a45] text-white rounded-xl disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                "Simpan Transaksi"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormKeuangan;
