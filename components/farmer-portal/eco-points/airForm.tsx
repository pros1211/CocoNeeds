import React from "react";
import {
  Field,
  FieldGroup,
  FieldDescription,
  FieldLabel,
  FieldSeparator,
  FieldTitle,
} from "@/components/ui/field";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Sun, Droplet, Puzzle, Circle, Stone } from "lucide-react";
import { GiMushroom } from "react-icons/gi";
import { VscSparkle } from "react-icons/vsc";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useShipmentStore } from "@/store/shipmentStore";
import { Camera, Sparkles, X } from "lucide-react";
import { WasteOption } from "@/constants/wasteData";

interface Props {
  data: WasteOption;
  isLastStep: boolean;
  onSuccess: () => void;
}
const formSchema = z.object({
  id_kategori: z.uuid(),
  jumlah: z.coerce
    .number({ error: "harus berupa angka" })
    .min(1, "minimal 1 kilogram"),
  satuan: z.string(),
  bentuk_limbah: z
    .string()
    .min(1, "Silahkan pilih bentuk tempurung sesuai kondisi"),
  kebersihan: z
    .string()
    .min(1, "Silahkan pilih kondisi kebersihan dari tempurung"),
  kondisi: z.string().min(1, "Silahkan pilih kondisi dari tempurung kelapa"),
  foto_url: z.array(z.string()).optional(),
});
const AirForm = ({ data, isLastStep, onSuccess }: Props) => {
  const setWasteItem = useShipmentStore((state) => state.setWasteItem);
  const existingItem = useShipmentStore((state) =>
    state.wasteItems.find((item) => item.id_kategori === data.id),
  );
  const form = useForm<z.infer<typeof formSchema>>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      id_kategori: data.id,
      satuan: data.defaultSatuan,
      jumlah: existingItem?.jumlah || 0,
      bentuk_limbah: existingItem?.bentuk_limbah || "",
      kebersihan: existingItem?.kebersihan || "",
      kondisi: existingItem?.kondisi || "",
      foto_url: existingItem?.foto_url || [],
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setWasteItem({
      id_kategori: values.id_kategori,
      jumlah: values.jumlah,
      satuan: values.satuan,
      bentuk_limbah: values.bentuk_limbah,
      kebersihan: values.kebersihan,
      kondisi: values.kondisi,
      foto_url: values.foto_url || [],
    });
    onSuccess();
  };
  return (
    <div className="p-5 bg-white flex flex-col">
      <Card className="px-3 py-5">
        <CardHeader className="border-b border-gray-300 flex items-center gap-2">
          <span className="text-2xl">{data.icon}</span>
          <CardTitle className="text-xl font-semibold">
            Data Air kelapa
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            id="waste-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-2"
          >
            <FieldGroup>
              <Controller
                name="jumlah"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    className="flex flex-col gap-2"
                  >
                    <FieldLabel className="font-medium text-gray-700">
                      Berat Total ({data.defaultSatuan})
                    </FieldLabel>
                    <input
                      type="number"
                      {...field}
                      value={field.value || ""}
                      className={`border rounded-lg px-4 py-2 outline-none transition-all ${
                        fieldState.invalid
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:border-[#558B71] focus:ring-2 focus:ring-[#558B71]/20"
                      }`}
                      placeholder="Masukkan angka..."
                    />
                    {fieldState.error && (
                      <span className="text-red-500 text-sm">
                        {fieldState.error.message}
                      </span>
                    )}
                    <FieldDescription className="text-sm text-gray-500">
                      Minimal berat yang dapat dikirim adalah 1{" "}
                      {data.defaultSatuan}.
                    </FieldDescription>
                  </Field>
                )}
              />
              <Controller
                name="bentuk_limbah"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    className="flex flex-col gap-2"
                  >
                    <FieldLabel className="font-medium text-gray-700">
                      Kebersihan Air kelapa
                    </FieldLabel>
                    <div className="flex w-full border border-gray-200 rounded-xl bg-white shadow-sm relative">
                      <label
                        className="flex-1 relative cursor-pointer group border-r border-gray-200 last:border-r-0 "
                        title="air kelapa tanpa tercampur apapun"
                      >
                        <input
                          type="radio"
                          className="peer sr-only"
                          value="Utuh"
                          checked={field.value === "Utuh"}
                          onChange={(e) => field.onChange(e.target.value)}
                        />
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 py-4 transition-all peer-checked:bg-[#F4FBF7] peer-checked:text-[#1A6B3B] group-hover:bg-gray-50 rounded-xl">
                          <Circle
                            className={`w-5 h-5 ${field.value === "Utuh" ? "text-[#269957] fill-[#269957]/20" : "text-gray-500"}`}
                          />
                          <span
                            className={`text-sm ${field.value === "Utuh" ? "font-bold" : "font-medium text-gray-600"}`}
                          >
                            Murni
                          </span>
                        </div>
                        <div className="absolute inset-[-1px] border-2 border-transparent peer-checked:border-[#269957] rounded-xl pointer-events-none transition-all z-10"></div>
                      </label>

                      {/* Option 2: tercampur */}
                      <label
                        className="flex-1 relative cursor-pointer group border-r border-gray-200 last:border-r-0"
                        title="air kelapa yang belum disaring"
                      >
                        <input
                          type="radio"
                          className="peer sr-only"
                          value="Pecahan"
                          checked={field.value === "Pecahan"}
                          onChange={(e) => field.onChange(e.target.value)}
                        />
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 py-4 transition-all peer-checked:bg-[#F4FBF7] peer-checked:text-[#1A6B3B] group-hover:bg-gray-50 rounded-xl">
                          <Puzzle
                            className={`w-5 h-5 ${field.value === "Pecahan" ? "text-[#269957] fill-[#269957]/20" : "text-gray-500"}`}
                          />
                          <span
                            className={`text-sm ${field.value === "Pecahan" ? "font-bold" : "font-medium text-gray-600"}`}
                          >
                            Tercampur kotoran
                          </span>
                        </div>
                        <div className="absolute inset-[-1px] border-2 border-transparent peer-checked:border-[#269957] rounded-xl pointer-events-none transition-all z-10"></div>
                      </label>
                    </div>
                    {fieldState.error && (
                      <span className="text-red-500 text-sm">
                        {fieldState.error.message}
                      </span>
                    )}
                  </Field>
                )}
              />

              {/* --- FIELD: KONDISI --- */}
              <Controller
                name="kondisi"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    className="flex flex-col gap-2"
                  >
                    <FieldLabel className="font-medium text-gray-700">
                      Kondisi Air Kelapa
                    </FieldLabel>
                    <div className="flex w-full border border-gray-200 rounded-xl shadow-sm relative">
                      <label
                        className="flex-1 relative cursor-pointer group border-r border-gray-200 last:border-r-0"
                        title="Batok kelapa kering (Tidak mengandung air)"
                      >
                        <input
                          type="radio"
                          className="peer sr-only"
                          value="segar"
                          checked={field.value === "segar"}
                          onChange={(e) => field.onChange(e.target.value)}
                        />
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 py-4 transition-all peer-checked:bg-[#F4FBF7] peer-checked:text-[#1A6B3B] group-hover:bg-gray-50 rounded-xl">
                          <Sun
                            className={`w-5 h-5 ${field.value === "segar" ? "text-[#269957] fill-[#269957]/20" : "text-gray-500"}`}
                          />
                          <span
                            className={`text-sm ${field.value === "segar" ? "font-bold" : "font-medium text-gray-600"}`}
                          >
                            Baru dipanen
                          </span>
                        </div>
                        <div className="absolute inset-[-1px] border-2 border-transparent peer-checked:border-[#269957] rounded-xl pointer-events-none transition-all z-10"></div>
                      </label>
                      <label
                        className="flex-1 relative cursor-pointer group border-r border-gray-200 last:border-r-0"
                        title="Batok kelapa basah (mengandung air)"
                      >
                        <input
                          type="radio"
                          className="peer sr-only"
                          value="satuHari"
                          checked={field.value === "satuHari"}
                          onChange={(e) => field.onChange(e.target.value)}
                        />
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 py-4 transition-all peer-checked:bg-[#F4FBF7] peer-checked:text-[#1A6B3B] group-hover:bg-gray-50 rounded-xl">
                          <Droplet
                            className={`w-5 h-5 ${field.value === "satuHari" ? "text-[#269957] fill-[#269957]/20" : "text-gray-500"}`}
                          />
                          <span
                            className={`text-sm ${field.value === "satuHari" ? "font-bold" : "font-medium text-gray-600"}`}
                          >
                            12-24 jam
                          </span>
                        </div>
                        <div className="absolute inset-[-1px] border-2 border-transparent peer-checked:border-[#269957] rounded-xl pointer-events-none transition-all z-10"></div>
                      </label>
                      <label
                        className="flex-1 relative cursor-pointer group border-r border-gray-200 last:border-r-0"
                        title="Batok kelapa berjamur"
                      >
                        <input
                          type="radio"
                          className="peer sr-only"
                          value="basi"
                          checked={field.value === "basi"}
                          onChange={(e) => field.onChange(e.target.value)}
                        />
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 py-4 transition-all peer-checked:bg-[#F4FBF7] peer-checked:text-[#1A6B3B] group-hover:bg-gray-50 rounded-xl">
                          <GiMushroom
                            className={`w-5 h-5 ${field.value === "basi" ? "text-[#269957] fill-[#269957]/80" : "text-gray-500"}`}
                          />
                          <span
                            className={`text-sm ${field.value === "basi" ? "font-bold" : "font-medium text-gray-600"}`}
                          >
                            lebih dari 24 jam
                          </span>
                        </div>
                        <div className="absolute inset-[-1px] border-2 border-transparent peer-checked:border-[#269957] rounded-xl pointer-events-none transition-all z-10"></div>
                      </label>
                    </div>
                    {fieldState.error && (
                      <span className="text-red-500 text-sm">
                        {fieldState.error.message}
                      </span>
                    )}
                  </Field>
                )}
              />

              {/* FIELD: FOTO */}
              <Controller
                name="foto_url"
                control={form.control}
                render={({ field, fieldState }) => {
                  const handleImageUpload = (
                    e: React.ChangeEvent<HTMLInputElement>,
                  ) => {
                    const files = Array.from(e.target.files || []);
                    if (files.length === 0) return;

                    // Convert each file to a temporary URL
                    const newImages = files.map((file) =>
                      URL.createObjectURL(file),
                    );

                    const currentPhotos = field.value || [];
                    const updatedPhotos = [
                      ...currentPhotos,
                      ...newImages,
                    ].slice(0, 5);

                    field.onChange(updatedPhotos);
                  };

                  // Helper to remove an image
                  const removeImage = (indexToRemove: number) => {
                    const currentPhotos = field.value || [];
                    const updatedPhotos = currentPhotos.filter(
                      (_, idx) => idx !== indexToRemove,
                    );
                    field.onChange(updatedPhotos);
                  };

                  return (
                    <Field className="flex flex-col gap-2">
                      <FieldLabel className="font-medium text-gray-700">
                        Foto Tempurung kelapa (Maksimal 5)
                      </FieldLabel>

                      {/* Upload foto field  */}
                      <label className="relative flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-[#F4FBF7]/50 rounded-2xl p-6 gap-3 cursor-pointer hover:bg-[#F4FBF7] transition-colors min-h-[160px] overflow-hidden group">
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          onChange={handleImageUpload}
                        />

                        <Camera className="w-10 h-10 text-gray-400 group-hover:text-[#269957] transition-colors" />
                        <div className="text-center pointer-events-none">
                          <p className="text-base font-bold text-gray-800">
                            Ambil Foto atau Pilih Galeri
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Format JPG, PNG, atau HEIC
                          </p>
                        </div>
                      </label>
                      {fieldState.error && (
                        <span className="text-red-500 text-sm">
                          {fieldState.error.message}
                        </span>
                      )}

                      <div className="mt-1 bg-[#E8F5EE] border border-[#BDE4CE] rounded-xl p-3 flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-[#269957] mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-[#1A6B3B] font-semibold leading-tight">
                          AI akan membantu memperkirakan kualitas limbah dari
                          foto Anda.
                        </span>
                      </div>

                      {field.value && field.value.length > 0 && (
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-4">
                          {field.value.map((url, idx) => (
                            <div
                              key={idx}
                              className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 shadow-sm group"
                            >
                              <img
                                src={url}
                                alt={`Preview ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />

                              {/* Remove Button */}
                              <button
                                type="button"
                                onClick={() => removeImage(idx)}
                                className="absolute top-1 right-1 bg-white/90 text-red-500 p-1 rounded-full shadow-sm hover:bg-red-500 hover:text-white transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AirForm;
