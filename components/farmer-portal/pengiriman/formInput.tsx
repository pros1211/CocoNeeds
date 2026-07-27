"use client";
import React, { useEffect, useState } from "react";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldGroup,
} from "@/components/ui/field";
import { Box, Droplet } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Controller,
  Control,
  useWatch,
  UseFormSetValue,
} from "react-hook-form";
import { createClient } from "@/utils/supabase/client";
import { VscSparkle } from "react-icons/vsc";
type CategoryDB = {
  id: string;
  nama: string;
  poin: number;
};

type ProductDB = {
  id: string;
  category_id: string;
  name: string;
  default_unit: string;
};
import { ProductFormValues } from "./types";

interface FormInputProps {
  index: number;
  control: Control<ProductFormValues>;
  setValue: UseFormSetValue<ProductFormValues>;
}

const FormInput = ({ index, control, setValue }: FormInputProps) => {
  const [categories, setCategories] = useState<CategoryDB[]>([]);
  const [products, setProducts] = useState<ProductDB[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const { data: catData } = await supabase
        .from("kategori_produk")
        .select("*");

      const { data: prodData } = await supabase.from("products").select("*");

      if (catData) setCategories(catData);
      if (prodData) setProducts(prodData);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const selectedCategoryId = useWatch({
    control,
    name: `products.${index}.category_id`,
  });
  const currentSatuan =
    useWatch({
      control,
      name: `products.${index}.satuan`,
    }) || "Kg";
  const selectedCategoryName = categories
    .find((cat) => cat.id === selectedCategoryId)
    ?.nama?.toLowerCase();
  const filteredProducts = products.filter(
    (product) => product.category_id === selectedCategoryId,
  );
  if (isLoading) return <div>Memuat data...</div>;
  return (
    <Card className="flex flex-col shadow-sm border border-gray-100 rounded-2xl w-full">
      <CardHeader className="flex flex-row items-center justify-between border-b border-gray-100 pb-4 px-5">
        <div className="flex items-center gap-2">
          <div className="bg-[#FAF3EB] p-2 rounded-lg text-[#D97706]">
            <Box className="w-5 h-5" />
          </div>
          <CardTitle className="text-lg">Produk {index + 1}</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="p-3">
        <div className="flex flex-col gap-5">
          {/* KATEGORI & PRODUK */}
          <div className="grid grid-cols-2 gap-4">
            <FieldGroup>
              <Controller
                name={`products.${index}.category_id`}
                control={control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    className="flex flex-col gap-2"
                  >
                    <FieldLabel className="text-sm font-semibold text-gray-700">
                      Kategori Produk
                    </FieldLabel>
                    <Select
                      value={field.value || undefined}
                      onValueChange={(val) => {
                        field.onChange(val);
                      }}
                    >
                      <SelectTrigger
                        className={fieldState.error ? "border-red-500" : ""}
                      >
                        <SelectValue placeholder="Pilih kategori">
                          {categories.find((c) => c.id === field.value)?.nama ||
                            "Pilih kategori"}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.id} value={cat.id}>
                            {cat.nama}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.error && (
                      <p className="text-red-500 text-xs mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <FieldGroup>
              <Controller
                name={`products.${index}.product_id`}
                control={control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    className="flex flex-col gap-2"
                  >
                    <FieldLabel className="text-sm font-semibold text-gray-700">
                      Produk
                    </FieldLabel>
                    <Select
                      value={field.value || undefined}
                      disabled={!selectedCategoryId}
                      onValueChange={(val) => {
                        field.onChange(val);

                        const selectedProduct = products.find(
                          (p) => p.id === val,
                        );

                        if (selectedProduct) {
                          setValue(
                            `products.${index}.satuan`,
                            selectedProduct.default_unit,
                            {
                              shouldValidate: true,
                              shouldDirty: true,
                            },
                          );
                        }
                      }}
                    >
                      <SelectTrigger
                        className={fieldState.error ? "border-red-500" : ""}
                      >
                        <SelectValue placeholder="Pilih produk">
                          {products.find((p) => p.id === field.value)?.name ||
                            "Pilih produk"}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {filteredProducts.map((prod) => (
                          <SelectItem key={prod.id} value={prod.id}>
                            {prod.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.error && (
                      <p className="text-red-500 text-xs mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </div>

          {/* JUMLAH & SATUAN */}
          <div className="grid grid-cols-2 gap-4">
            <FieldGroup>
              <Controller
                name={`products.${index}.jumlah`}
                control={control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    className="flex flex-col gap-2"
                  >
                    <FieldLabel className="text-sm font-semibold text-gray-700">
                      Jumlah
                    </FieldLabel>
                    <Input
                      type="number"
                      {...field}
                      className={
                        fieldState.error?.message ? "border-red-500" : ""
                      }
                    />
                  </Field>
                )}
              />
            </FieldGroup>
            <FieldGroup>
              <Controller
                name={`products.${index}.satuan`}
                control={control}
                render={({ field }) => (
                  <Field className="flex flex-col gap-2">
                    <FieldLabel className="text-sm font-semibold text-gray-700">
                      Satuan
                    </FieldLabel>
                    <Input
                      type="text"
                      {...field}
                      readOnly
                      className="bg-gray-50 text-gray-500 font-medium"
                    />
                  </Field>
                )}
              />
            </FieldGroup>
          </div>
          <div className="space-y-2">
            <FieldGroup>
              <Controller
                name={`products.${index}.harga_harapan`}
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <Field
                      data-invalid={fieldState.invalid}
                      className="flex flex-col gap-2"
                    >
                      <FieldLabel className="text-sm font-semibold text-gray-700">
                        Harga yang Diharapkan
                      </FieldLabel>

                      <div className="flex w-full items-stretch shadow-sm rounded-lg border border-gray-200 focus-within:ring-1 focus-within:ring-[#269957] transition-all bg-white">
                        <div className="flex items-center justify-center px-4 bg-gray-50 border-r border-gray-200 text-gray-600 font-medium text-sm rounded-l-lg">
                          Rp
                        </div>

                        <Input
                          type="number"
                          {...field}
                          className="flex-1 border-0 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 px-3 h-10"
                          placeholder="6500"
                        />

                        <div className="border-l border-gray-200">
                          <Select value={currentSatuan} disabled>
                            <SelectTrigger className="w-[80px] h-full rounded-none rounded-r-lg border-0 bg-gray-50 shadow-none focus:ring-0 px-3 text-gray-600 font-medium disabled:opacity-100 disabled:cursor-default">
                              <SelectValue placeholder="/Kg" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value={currentSatuan}>
                                /{currentSatuan}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {fieldState.error && (
                        <span className="text-xs text-red-500">
                          {fieldState.error.message}
                        </span>
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </div>

          {/*  KONDISI PRODUK */}
          <div className="pt-2">
            <h3 className="text-sm font-bold text-gray-900">
              Kondisi Produk (Estimasi)
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* KEBERSIHAN */}
            <FieldGroup>
              <Controller
                name={`products.${index}.condition.kebersihan`}
                control={control}
                render={({ field }) => (
                  <Field className="flex flex-col gap-2">
                    <FieldLabel className="text-xs text-gray-500">
                      Kebersihan
                    </FieldLabel>
                    <div className="flex w-full border border-gray-200 shadow-sm rounded-lg overflow-hidden">
                      {["Bersih", "Sedikit Kotor", "Kotor"].map((opt) => (
                        <label
                          key={opt}
                          className="flex-1 relative cursor-pointer border-r border-gray-200 last:border-r-0"
                        >
                          <input
                            type="radio"
                            className="peer sr-only"
                            value={opt}
                            checked={field.value === opt}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                          <div className="py-2.5 text-center text-[10px] md:text-xs text-gray-500 font-medium transition-colors peer-checked:bg-[#E8F5EE] peer-checked:text-[#1A6B3B] hover:bg-gray-50">
                            {opt}
                          </div>
                        </label>
                      ))}
                    </div>
                  </Field>
                )}
              />
            </FieldGroup>

            {/* KONDISI */}
            <FieldGroup>
              <Controller
                name={`products.${index}.condition.kondisi`}
                control={control}
                render={({ field }) => (
                  <Field className="flex flex-col gap-2">
                    <FieldLabel className="text-xs text-gray-500">
                      Kondisi
                    </FieldLabel>
                    <div className="flex w-full border border-gray-200 shadow-sm rounded-lg overflow-hidden">
                      {["Baik", "Cukup", "Rusak"].map((opt) => (
                        <label
                          key={opt}
                          className="flex-1 relative cursor-pointer border-r border-gray-200 last:border-r-0"
                        >
                          <input
                            type="radio"
                            className="peer sr-only"
                            value={opt}
                            checked={field.value === opt}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                          <div className="py-2.5 text-center text-[10px] md:text-xs text-gray-500 font-medium transition-colors peer-checked:bg-[#E8F5EE] peer-checked:text-[#1A6B3B] hover:bg-gray-50">
                            {opt}
                          </div>
                        </label>
                      ))}
                    </div>
                  </Field>
                )}
              />
            </FieldGroup>
          </div>

          {/* BENTUK ATAU KEMASAN */}
          {selectedCategoryName === "produk primer" && (
            <FieldGroup>
              <Controller
                name={`products.${index}.condition.bentuk`}
                control={control}
                render={({ field }) => (
                  <Field className="flex flex-col gap-2">
                    <FieldLabel className="text-xs text-gray-500">
                      Bentuk Kelapa
                    </FieldLabel>
                    <div className="flex w-full border border-gray-200 shadow-sm rounded-lg overflow-hidden">
                      {["Utuh", "Pecah Sebagian", "Campuran"].map((opt) => (
                        <label
                          key={opt}
                          className="flex-1 relative cursor-pointer border-r border-gray-200 last:border-r-0"
                        >
                          <input
                            type="radio"
                            className="peer sr-only"
                            value={opt}
                            checked={field.value === opt}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                          <div className="py-2.5 text-center text-xs text-gray-500 font-medium transition-colors peer-checked:bg-[#E8F5EE] peer-checked:text-[#1A6B3B] hover:bg-gray-50">
                            {opt}
                          </div>
                        </label>
                      ))}
                    </div>
                  </Field>
                )}
              />
            </FieldGroup>
          )}

          {selectedCategoryName === "produk olahan" && (
            <FieldGroup>
              <Controller
                name={`products.${index}.condition.kemasan`}
                control={control}
                render={({ field }) => (
                  <Field className="flex flex-col gap-2">
                    <FieldLabel className="text-xs text-gray-500">
                      Kemasan
                    </FieldLabel>
                    <div className="flex w-full border border-gray-200 shadow-sm rounded-lg overflow-hidden">
                      {["Karung", "Sak", "Drum", "Jerigen"].map((opt) => (
                        <label
                          key={opt}
                          className="flex-1 relative cursor-pointer border-r border-gray-200 last:border-r-0"
                        >
                          <input
                            type="radio"
                            className="peer sr-only"
                            value={opt}
                            checked={field.value === opt}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                          <div className="py-2.5 text-center text-xs text-gray-500 font-medium transition-colors peer-checked:bg-[#E8F5EE] peer-checked:text-[#1A6B3B] hover:bg-gray-50">
                            {opt}
                          </div>
                        </label>
                      ))}
                    </div>
                  </Field>
                )}
              />
            </FieldGroup>
          )}

          {/*  CATATAN */}
          <FieldGroup>
            <Controller
              name={`products.${index}.note`}
              control={control}
              render={({ field }) => (
                <Field className="flex flex-col gap-2 pt-1">
                  <FieldLabel className="text-xs text-gray-500">
                    Catatan (Opsional)
                  </FieldLabel>
                  <textarea
                    {...field}
                    placeholder="Tambahkan informasi tambahan apabila diperlukan..."
                    className="w-full min-h-[80px] p-3 border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#269957] resize-none"
                    maxLength={200}
                  />
                  <div className="text-right text-[10px] text-gray-400 mt-1">
                    {field.value?.length || 0} / 200
                  </div>
                </Field>
              )}
            />
          </FieldGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default FormInput;
