import { z } from "zod";

export const ProductSchema = z.object({
  product_id: z.string().min(1, "pilih kategori produk"),
  category_id: z.string().min(1, "pilih produk yang ingin dijual"),

  jumlah: z.coerce.number().min(1, "masukkan jumlah butir/kg dari produk"),

  satuan: z.string(),

  harga_harapan: z.coerce.number().min(1, "masukkan harga jual minimum anda"),

  note: z.string().optional(),

  condition: z.object({
    kebersihan: z.string(),
    kondisi: z.string(),
    bentuk: z.string().optional(),
    kemasan: z.string().optional(),
  }),
});

export const ProductInputSchema = z.object({
  products: z.array(ProductSchema),
});

export type ProductFormValues = z.infer<typeof ProductInputSchema>;
