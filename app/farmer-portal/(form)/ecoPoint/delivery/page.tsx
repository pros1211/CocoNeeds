"use client";
import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useShipmentStore } from "@/store/shipmentStore";
import {
  Phone,
  CheckCircle,
  Circle,
  Clock,
  ExternalLink,
  AlertCircle,
  MapPin,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import MapKopdes from "@/components/farmer-portal/eco-points/mapKopdes";
const MapComponent = dynamic(
  () => import("@/components/farmer-portal/eco-points/mapKopdes"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gray-100 animate-pulse rounded-xl flex items-center justify-center text-gray-400 font-medium">
        Memuat Peta...
      </div>
    ),
  },
);
interface ShipmentPageProps {
  onPrevStep?: () => void;
  onNextStep?: () => void;
}
import { Koperasi } from "@/constants/wasteData";
const ShipmentPage = ({ onPrevStep, onNextStep }: ShipmentPageProps) => {
  const router = useRouter();
  const updateShipment = useShipmentStore((state) => state.updateShipment);
  const currentCooperativeId = useShipmentStore(
    (state) => state.shipment.cooperative_id,
  );
  const [dataKoperasi, setAllKoperasi] = useState<Koperasi[]>([]);
  const [selectedKab, setSelectedKab] = useState<string>("");
  const [selectedKec, setSelectedKec] = useState<string>("");
  const [selectedDesa, setSelectedDesa] = useState<string>("");
  const [selectedKoperasi, setSelectedKoperasi] = useState<Koperasi | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = useState<string>("");
  useEffect(() => {
    const fetchKoperasi = async () => {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("koperasi")
        .select("*")
        .eq("status", "aktif");
      if (data) {
        setAllKoperasi(data);
        if (currentCooperativeId) {
          const preSelected = data.find((k) => k.id === currentCooperativeId);
          if (preSelected) setSelectedKoperasi(preSelected);
        }
      }
    };
    fetchKoperasi();
  }, [currentCooperativeId]);
  const filteredKoperasi = useMemo(() => {
    return dataKoperasi.filter((kop) => {
      if (selectedKab && kop.kabupaten !== selectedKab) return false;
      if (selectedKec && kop.kecamatan !== selectedKec) return false;
      if (selectedDesa && kop.desa !== selectedDesa) return false;
      return true;
    });
  }, [dataKoperasi, selectedKab, selectedKec, selectedDesa]);
  const uniqueKabupaten = Array.from(
    new Set(dataKoperasi.map((k) => k.kabupaten)),
  );

  const uniqueKecamatan = Array.from(
    new Set(
      dataKoperasi
        .filter((k) => k.kabupaten === selectedKab)
        .map((k) => k.kecamatan),
    ),
  );

  const uniqueDesa = Array.from(
    new Set(
      dataKoperasi
        .filter((k) => k.kecamatan === selectedKec)
        .map((k) => k.desa),
    ),
  );
  const handleKabChange = (value: string | null) => {
    const val = value || "";
    setSelectedKab(val === "all" ? "" : val);
    setSelectedKec("");
    setSelectedDesa("");
  };

  const handleKecChange = (value: string | null) => {
    const val = value || "";
    setSelectedKec(val === "all" ? "" : val);
    setSelectedDesa("");
  };
  const handleNext = () => {
    if (!selectedKoperasi) {
      setErrorMsg(
        "Silahkan pilih satu koperasi tujuan dari daftar di atas sebelum melanjutkan.",
      );
      return;
    }
    setErrorMsg("");
    updateShipment({ cooperative_id: selectedKoperasi.id });
    if (onNextStep) {
      onNextStep();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/farmer-portal/ecoPoint/summary");
    }
  };
  return (
    <div className="flex flex-col h-full gap-5 bg-[#F8F9FA] p-5 w-full bg-white rounded-xl ">
      <div className="flex justify-between items-end border-b border-gray-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Langkah 2: Cari Koperasi Terdekat
          </h1>
          <p className="text-gray-500 mt-1">
            Pilih lokasi koperasi terdekat untuk penjemputan.
          </p>
        </div>
      </div>
      <div className="xl:h-[500px] grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="lg:col-span-5 h-[280px] sm:h-[350px] lg:h-[450px] flex flex-col gap-4">
          <div className="relative h-full w-full rounded-xl bg-white p-2 shadow-sm border border-gray-200 relative z-0">
            <MapComponent
              koperasiData={filteredKoperasi}
              selectedKoperasi={selectedKoperasi}
            />
          </div>
        </div>
        {/* right column for select koperasi */}
        <div className="lg:col-span-7 max-h-[650px] lg:h-full flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 p-6 overflow-hidden">
          {/* Filters */}
          <div className="grid grid-cols-3 gap-3 pb-6 border-b border-gray-100">
            {/* Kabupaten */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500">
                Kabupaten
              </label>
              <Select value={selectedKab} onValueChange={handleKabChange}>
                <SelectTrigger className="w-full bg-gray-50/50">
                  <SelectValue placeholder="Semua Kabupaten" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kabupaten</SelectItem>
                  {uniqueKabupaten.map((kab) => (
                    <SelectItem key={kab} value={kab}>
                      {kab}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Kecamatan */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500">
                Kecamatan
              </label>
              <Select
                value={selectedKec}
                onValueChange={handleKecChange}
                disabled={!selectedKab}
              >
                <SelectTrigger className="w-full bg-gray-50/50">
                  <SelectValue placeholder="Semua Kecamatan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kecamatan</SelectItem>
                  {uniqueKecamatan.map((kec) => (
                    <SelectItem key={kec} value={kec}>
                      {kec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500">
                Desa
              </label>
              <Select
                value={selectedDesa}
                onValueChange={(val) =>
                  setSelectedDesa(val === "all" || !val ? "" : val)
                }
                disabled={!selectedKec}
              >
                <SelectTrigger className="w-full bg-gray-50/50">
                  <SelectValue placeholder="Semua Desa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Desa</SelectItem>
                  {uniqueDesa.map((desa) => (
                    <SelectItem key={desa} value={desa}>
                      {desa}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Scrollable List */}
          <div className="xl:flex-1 min-h-0 overflow-y-auto mt-4 pr-2 flex flex-col gap-3 custom-scrollbar">
            {filteredKoperasi.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">
                Tidak ada koperasi ditemukan di area ini.
              </p>
            ) : (
              filteredKoperasi.map((kop) => {
                const isSelected = selectedKoperasi?.id === kop.id;
                return (
                  <div
                    key={kop.id}
                    onClick={() => {
                      setSelectedKoperasi(kop);
                      setErrorMsg("");
                    }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? "border-[#269957] bg-[#F4FBF7] shadow-sm"
                        : "border-gray-200 hover:border-[#75DAA8] hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        {isSelected ? (
                          <div className="w-5 h-5 rounded-full border-[5px] border-[#269957]" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-300" />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <h3
                          className={`font-bold ${isSelected ? "text-[#1A6B3B]" : "text-gray-800"}`}
                        >
                          {kop.nama}
                        </h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                          Desa {kop.desa}, Kec. {kop.kecamatan}
                        </p>
                      </div>
                    </div>

                    {/* Right side status */}
                    <div className="flex items-center gap-3 shrink-0 lg:ml-auto">
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Buka
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      {selectedKoperasi && (
        <div className="w-full shrink-0 bg-white rounded-xl shadow-sm border border-[#269957] p-5 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">
            Detail Koperasi
          </h3>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-[24px_1fr] gap-3">
              <MapPin className="w-5 h-5 text-[#269957] mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-0.5">
                  Alamat
                </p>
                <p className="text-xs lg:text-sm text-gray-800 leading-snug">
                  {selectedKoperasi.alamat}, {selectedKoperasi.desa}, Kec.{" "}
                  {selectedKoperasi.kecamatan}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[24px_1fr] gap-3">
              <Phone className="w-5 h-5 text-[#269957]" />
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-0.5">
                  Nomor Telepon
                </p>
                <p className="text-sm text-gray-800">
                  {selectedKoperasi.no_telepon || "-"}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[24px_1fr] gap-3 items-center">
              <Clock className="w-5 h-5 text-[#269957]" />
              <div className="flex lg:flex-row justify-between items-center w-full">
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-0.5">
                    Operating Hours
                  </p>
                  <p className="text-sm text-gray-800">
                    {selectedKoperasi.jam_operasional || "08:00 - 16:00 WIB"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center w-full gap-3 mt-4">
        {errorMsg && (
          <div className="shrink-0 flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-lg border border-red-200 animate-in fade-in">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">{errorMsg}</span>
          </div>
        )}

        <div className="flex justify-between w-full">
          <button
            onClick={() => {
              if (onPrevStep) {
                onPrevStep();
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                router.back();
              }
            }}
            className="bg-white text-sm lg:text-lg border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm"
          >
            Kembali
          </button>
          <button
            onClick={handleNext}
            className={`text-sm lg:text-lg px-8 py-3 rounded-xl font-bold transition-colors shadow-sm ${
              selectedKoperasi
                ? "bg-[#006C48] text-white hover:bg-[#153626]"
                : "bg-gray-300 text-gray-500 hover:bg-gray-400"
            }`}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShipmentPage;
