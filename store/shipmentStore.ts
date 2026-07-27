import { create } from "zustand";
export interface ShipmentInput {
  asal: string;
  tujuan: string;

  delivery_method: "pickup" | "dropoff";

  status: string;

  jenis: "limbah" | "produk";

  cooperative_id?: string;

  pickup_date?: Date;

  pickup_time?: string;

  notes?: string;
}
export interface WasteItemInput {
  id_kategori: string;

  bentuk_limbah: string;

  jumlah: number;

  satuan: string;

  kebersihan: string;

  kondisi: string;

  foto_url: string[];
}
interface ShipmentStore {
  shipment: ShipmentInput;

  wasteItems: WasteItemInput[];
  updateShipment: (data: Partial<ShipmentInput>) => void;
  setWasteItem: (item: WasteItemInput) => void;
  removeWasteItem: (kategori_id: string) => void;
  clearAll: () => void;
}
const initialShipment: ShipmentInput = {
  asal: "",
  tujuan: "",
  delivery_method: "pickup",
  status: "pending",
  jenis: "limbah",
};
export const useShipmentStore = create<ShipmentStore>((set) => ({
  shipment: initialShipment,
  wasteItems: [],
  updateShipment: (data) =>
    set((state) => ({ shipment: { ...state.shipment, ...data } })),
  setWasteItem: (newItem) =>
    set((state) => {
      const existingIndex = state.wasteItems.findIndex(
        (item) => item.id_kategori === newItem.id_kategori,
      );

      if (existingIndex !== -1) {
        const updatedItems = [...state.wasteItems];
        updatedItems[existingIndex] = newItem;
        return { wasteItems: updatedItems };
      } else {
        return { wasteItems: [...state.wasteItems, newItem] };
      }
    }),

  removeWasteItem: (kategori_id) =>
    set((state) => ({
      wasteItems: state.wasteItems.filter(
        (item) => item.id_kategori !== kategori_id,
      ),
    })),

  clearAll: () =>
    set({
      shipment: initialShipment,
      wasteItems: [],
    }),
}));

// pengiriman produk
export interface ProductCondition {
  bentuk: string;
  kemasan: string;
  kualitas: string;
  kebersihan: string;
}
export interface ShipmentItem {
  category_id: string;
  product_id: string;
  quantity: number;
  unit: string;
  expected_price: number;
  condition: ProductCondition;
  note?: string;
  foto: string[];
}
interface ShipmentState {
  shipmentHeader: ShipmentInput;

  shipmentItems: ShipmentItem[];

  setShipmentItems: (items: ShipmentItem[]) => void;

  removeShipmentItem: (productId: string) => void;

  updateShipmentHeader: (data: Partial<ShipmentInput>) => void;

  resetShipment: () => void;
}

const initialHeaderProduk: ShipmentInput = {
  asal: "",
  tujuan: "",
  delivery_method: "pickup",
  status: "Draft",
  jenis: "produk",
};

export const productShipment = create<ShipmentState>((set) => ({
  shipmentHeader: initialHeaderProduk,

  shipmentItems: [],

  setShipmentItems: (items) =>
    set({
      shipmentItems: items,
    }),

  removeShipmentItem: (productId) =>
    set((state) => ({
      shipmentItems: state.shipmentItems.filter(
        (item) => item.product_id !== productId,
      ),
    })),

  updateShipmentHeader: (data) =>
    set((state) => ({
      shipmentHeader: {
        ...state.shipmentHeader,
        ...data,
      },
    })),

  resetShipment: () =>
    set({
      shipmentHeader: initialHeaderProduk,
      shipmentItems: [],
    }),
}));
