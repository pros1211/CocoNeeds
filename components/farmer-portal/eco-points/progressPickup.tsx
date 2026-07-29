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
    title: "Pengajuan Penukaran",
    description: "Permintaan penukaran diterima.",
    icon: Calendar,
    status: "active",
  },
  {
    id: 2,
    title: "Koperasi Memproses",
    description: "Koperasi menerima permintaan.",
    icon: Warehouse,
    status: "pending",
  },
  {
    id: 3,
    title: "Penjadwalan",
    description: "Penjemputan limbah dijadwalkan.",
    icon: CalendarClock,
    status: "pending",
  },
  {
    id: 4,
    title: "Verifikasi",
    description: "Petugas memverifikasi limbah.",
    icon: ShieldCheck,
    status: "pending",
  },
  {
    id: 5,
    title: "EcoPoint Dikirim",
    description: "EcoPoint akan masuk ke akun.",
    icon: TbCoin,
    status: "pending",
  },
];

const ProgressPickup = () => {
  return (
    <div className="rounded-2xl bg-white shadow-sm p-5 space-y-8">
      <div>
        <h2 className="text-xl font-bold">Proses Penukaran Limbah</h2>

        <p className="text-sm text-gray-500 mt-1">
          Lihat proses penukaran limbah anda disini.
        </p>
      </div>

      <div className="hidden lg:flex relative justify-between">
        <div className="absolute top-6 left-16 right-16 border-t-2 border-dashed border-gray-300" />

        {steps.map((step) => {
          const Active =
            step.status === "active" || step.status === "completed";

          return (
            <div
              key={step.id}
              className="relative z-10 flex-1 flex flex-col items-center"
            >
              <div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center
                ${
                  Active
                    ? "bg-[#006C48] border-[#006C48] text-white"
                    : "bg-white border-gray-300 text-gray-500"
                }
                `}
              >
                <step.icon className="w-5 h-5" />
              </div>

              <h4 className="mt-4 font-semibold text-center text-xs">
                {step.title}
              </h4>

              <p className="mt-1 text-xs text-center text-gray-500">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex lg:hidden flex-col">
        {steps.map((step, index) => {
          const Active =
            step.status === "active" || step.status === "completed";

          return (
            <div key={step.id} className="flex gap-4">
              {/* Left */}

              <div className="flex flex-col items-center">
                <div
                  className={`

                  w-10
                  h-10
                  rounded-full
                  border-2
                  flex
                  items-center
                  justify-center

                  ${
                    Active
                      ? "bg-[#006C48] border-[#006C48] text-white"
                      : "bg-white border-gray-300 text-gray-500"
                  }

                  `}
                >
                  <step.icon className="w-5 h-5" />
                </div>

                {index !== steps.length - 1 && (
                  <div className="w-[2px] flex-1 bg-gray-300 my-2" />
                )}
              </div>

              <div className="pb-8">
                <h4 className="font-semibold">{step.title}</h4>

                <p className="text-sm text-gray-500 mt-1">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl bg-[#E8F5E9] px-3 py-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#269957] flex items-center justify-center shrink-0">
            <Info className="w-5 h-5 text-white" />
          </div>

          <div>
            <h3 className="font-semibold">Informasi Tambahan</h3>

            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Penjemputan akan dijadwalkan maksimal 1×24 jam setelah koperasi
              menerima permintaan.
            </p>

            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Anda akan menerima notifikasi ketika jadwal penjemputan telah
              tersedia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPickup;
