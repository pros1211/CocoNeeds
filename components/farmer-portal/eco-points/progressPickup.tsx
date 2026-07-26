import React from "react";
import {
  Calendar,
  Warehouse,
  CalendarClock,
  ShieldCheck,
  Info,
} from "lucide-react";
import { TbCoin } from "react-icons/tb";
const steps = [
  {
    id: 1,
    title: "Pengajuan penukaran",
    description: "Permintaan penukaran diterima",
    icon: Calendar,
    status: "active",
  },
  {
    id: 2,
    title: "Koperasi memproses",
    description: "Koperasi menerima permintaan.",
    icon: Warehouse,
    status: "pending",
  },
  {
    id: 3,
    title: "Penjadwalan penjemputan",
    description: "Penjemputan limbah dijadwalkan",
    icon: CalendarClock,
    status: "pending",
  },
  {
    id: 4,
    title: "Verifikasi data limbah",
    description: "tunjukkan gambar QR ke penjemput.",
    icon: ShieldCheck,
    status: "pending",
  },
  {
    id: 5,
    title: "Ecopoint dikirimkan",
    description: "Ecopoint akan dikirim ke akunmu.",
    icon: TbCoin,
    status: "pending",
  },
];
const ProgressPickup = () => {
  return (
    <div className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-5">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-lg">Proses Penukaran limbah</h2>
        <span className="font-medium text-sm text-gray-600">
          Lihat proses penukaran anda disini
        </span>
      </div>
      <div className="flex justify-between items-start relative w-full px-2">
        <div className="absolute top-6 left-[10%] right-[10%] border-t-[2px] border-dashed border-gray-200 z-0"></div>
        {steps.map((step) => {
          const isActive =
            step.status === "active" || step.status === "completed";

          return (
            <div
              key={step.id}
              className="flex flex-col items-center gap-4 z-10 w-[90px] md:w-[120px]"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                  isActive
                    ? "bg-[#006C48] border-[#006C48] text-white"
                    : "bg-white border-gray-200 text-gray-500"
                }`}
              >
                <step.icon className="w-5 h-5" />
              </div>

              <div className="text-center flex flex-col gap-1.5">
                <h4 className="font-bold text-sm text-gray-900 leading-tight">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-500 leading-snug hidden md:block">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 p-2 bg-[#E8F5E9] rounded-lg ">
        <div className="flex items-center gap-2">
          <Info className="w-10 h-10 text-[#E8F5E9]" fill="#269957" />
          <span className="text-md font-semibold">Informasi Tambahan</span>
        </div>
        <div className="flex flex-col gap-1 ml-5 text-sm">
          <p className="text-sm text-gray-500 font-medium">
            Penjemputan akan dijadwalkan paling lambat 1x24 jam setelah
            dikonfirmasi oleh koperasi tujuan.
          </p>
          <p>
            Anda akan menerima notifikasi ketika penjemputan sudah dijadwalkan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressPickup;
