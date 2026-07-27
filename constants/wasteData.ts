export type WasteOption = {
  id: string;
  title: string;
  desc: string;
  point: string;
  icon: string;
  defaultSatuan: string;
};

export const cardOption: WasteOption[] = [
  {
    id: "9de79fd4-506d-43d5-a57f-ec624ab53fdd",
    title: "Tempurung Kelapa",
    desc: "Sisa tempurung kelapa atau arang (briket) kelapa",
    point: "20 points/Kg",
    icon: "🌴",
    defaultSatuan: "Kg",
  },
  {
    id: "9ff0549e-6352-41d7-b8ec-75fd54f48e0f",
    title: "Sabut Kelapa",
    desc: "Sisa sabut kelapa atau Cocopeat",
    point: "15 points/Kg",
    icon: "🪵",
    defaultSatuan: "Kg",
  },
  {
    id: "cf15e95c-c704-47b0-8d06-65ec68667afa",
    title: "Air Kelapa",
    desc: "Sisa Air kelapa",
    point: "20 points/Kg",
    icon: "💧",
    defaultSatuan: "liter",
  },
];
export type Koperasi = {
  id: string;
  nama: string;
  alamat: string;
  kabupaten: string;
  kecamatan: string;
  desa: string;
  latitude: number;
  longitude: number;
  no_telepon: string;
  status: string;
  jam_operasional: string;
};
export type ProductCategory = {
  id: string;
  title: string;
  desc: string;
  icon: string;
  defaultSatuan: string;
};

export const shipmentItems: ProductCategory[] = [
  {
    id: "primer",
    title: "Produk Primer",
    desc: "Hasil panen utama seperti kelapa utuh, kopra dan kelapa kupas.",
    icon: "🥥",
    defaultSatuan: "Kg",
  },
  {
    id: "olahan",
    title: "Produk Olahan",
    desc: "Produk yang telah diproses seperti minyak kelapa, briket, VCO.",
    icon: "🏭",
    defaultSatuan: "Kg",
  },
  {
    id: "sampingan",
    title: "Produk Sampingan",
    desc: "Hasil dari proses pengolahan kelapa seperti sabut, cocofiber.",
    icon: "♻️",
    defaultSatuan: "Kg",
  },
];
