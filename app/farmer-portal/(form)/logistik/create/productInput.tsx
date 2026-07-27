"use client";
import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import FormInput from "@/components/farmer-portal/pengiriman/formInput";
import { productShipment } from "@/store/shipmentStore";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ProductInputSchema,
  ProductFormValues,
} from "@/components/farmer-portal/pengiriman/types";
interface ProductInputProps {
  onNextStep: () => void;
  onPrevStep?: () => void;
}
const ProductInput = ({ onNextStep }: ProductInputProps) => {
  const form = useForm<ProductFormValues>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(ProductInputSchema) as any,

    defaultValues: {
      products: [
        {
          category_id: "",
          product_id: "",
          jumlah: 0,
          satuan: "Kg",
          harga_harapan: 0,
          note: "",

          condition: {
            kebersihan: "",
            kondisi: "",
            bentuk: "",
            kemasan: "",
          },
        },
      ],
    },
  });

  const shipmentItems = productShipment((state) => state.shipmentItems);
  const setShipmentItems = productShipment((state) => state.setShipmentItems);

  const updateShipmentHeader = productShipment(
    (state) => state.updateShipmentHeader,
  );
  type FormType = typeof form;
  const { fields, append, remove } = useFieldArray({
    control: form.control,

    name: "products",
  });
  useEffect(() => {
    if (shipmentItems.length === 0) return;

    form.reset({
      products: shipmentItems.map((item) => ({
        category_id: item.category_id,

        product_id: item.product_id,

        jumlah: item.quantity,

        satuan: item.unit,

        harga_harapan: item.expected_price,

        note: item.note ?? "",

        condition: {
          kebersihan: item.condition.kebersihan,

          kondisi: item.condition.kualitas,

          bentuk: item.condition.bentuk === "NA" ? "" : item.condition.bentuk,

          kemasan:
            item.condition.kemasan === "NA" ? "" : item.condition.kemasan,
        },
      })),
    });
  }, [shipmentItems, form]);
  const handleAddProduct = () => {
    append({
      product_id: "",
      category_id: "",
      jumlah: 0,
      satuan: "Kg",
      harga_harapan: 0,
      note: "",
      condition: { kebersihan: "", kondisi: "", bentuk: "", kemasan: "" },
    });

    setTimeout(() => {
      const container = document.getElementById("form-scroll-container");
      if (container)
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
    }, 100);
  };
  const onSubmitAll = (data: ProductFormValues) => {
    const shipmentItems = data.products.map((product) => ({
      category_id: product.category_id,
      product_id: product.product_id,

      quantity: Number(product.jumlah),

      unit: product.satuan,

      expected_price: Number(product.harga_harapan),

      condition: {
        kebersihan: product.condition.kebersihan,
        kualitas: product.condition.kondisi,
        bentuk: product.condition.bentuk || "NA",
        kemasan: product.condition.kemasan || "NA",
      },

      note: product.note,

      foto: [],
    }));

    setShipmentItems(shipmentItems);

    updateShipmentHeader({
      jenis: "produk",
      status: "Draft",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    onNextStep();
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitAll)}
        className="w-full flex flex-col gap-4 bg-white px-6 py-4 rounded-xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">
              Langkah 1: Tambahkan produk yang ingin dijual.
            </h1>
            <p className="text-gray-500 mt-1">
              Isi data produk kelapa yang ingin anda kirim.
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddProduct}
            className="flex items-center gap-2 bg-white border border-[#269957] text-[#269957] px-4 py-2 rounded-xl font-semibold hover:bg-[#F4FBF7] transition-colors"
          >
            <Plus className="w-5 h-5" /> Tambah Produk
          </button>
        </div>

        <div
          id="form-scroll-container"
          className="flex flex-nowrap overflow-x-auto gap-6 pb-8 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scroll-smooth"
        >
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="shrink-0 w-[90vw] md:w-[420px] snap-center"
            >
              <FormInput
                index={index}
                control={form.control}
                setValue={form.setValue}
              />
            </div>
          ))}

          {/* Add Product Placeholder Card */}
          <div className="shrink-0 w-[90vw] md:w-[320px] snap-center">
            <div className="h-full min-h-[500px] border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center p-8 bg-white text-center hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🚚🥥</span>
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">
                Tambah produk lain
              </h3>
              <p className="text-sm text-gray-500 mb-8 px-4">
                Klik tombol untuk menambahkan produk lainnya.
              </p>
              <button
                className="flex items-center gap-2 bg-white border border-[#269957] text-[#269957] px-4 py-2 rounded-xl font-semibold hover:bg-[#F4FBF7] transition-colors"
                onClick={handleAddProduct}
              >
                <Plus className="w-5 h-5" />
                Tambah Produk
              </button>
            </div>
          </div>
        </div>

        {/* Footer Submit Button */}
        <div className="flex justify-end gap-10 mt-8 ml-6 border-t border-gray-100 pt-6 pr-4">
          <button
            type="submit"
            className="bg-[#1F4D36] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#153626] transition-colors shadow-sm"
          >
            Pilih Koperasi
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProductInput;
