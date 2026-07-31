import React from "react";
import {
  AlertTriangle,
  CircleAlert,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const aiRecommendations = [
  {
    title: "Tingkatkan irigasi di Blok A",
    description:
      "Kelembapan tanah mulai menurun. Penambahan irigasi diperkirakan dapat meningkatkan hasil panen sekitar 8–10%.",
    priority: "Tinggi",
    icon: AlertTriangle,
  },
  {
    title: "Lakukan penyesuaian pH tanah",
    description:
      "Nilai pH berada di bawah kisaran ideal. Pengapuran ringan dapat membantu meningkatkan penyerapan nutrisi tanaman.",
    priority: "Sedang",
    icon: CircleAlert,
  },
  {
    title: "Monitoring hama secara berkala",
    description:
      "Kondisi kebun masih stabil. Lakukan pemeriksaan setiap 7 hari untuk menjaga risiko serangan tetap rendah.",
    priority: "Rendah",
    icon: ShieldCheck,
  },
];

const RekomendasiAI = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Rekomendasi AI</h2>

        <p className="mt-1 text-sm text-gray-500">
          Saran tindakan berdasarkan analisis AI terhadap kondisi kebun saat
          ini.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {aiRecommendations.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-[#269957] hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`rounded-full px-3 py-1 text-xs font-semibold `}
                >
                  Prioritas {item.priority}
                </div>

                <div className="rounded-xl bg-[#EEF8F2] p-2">
                  <Icon className="text-[#269957]" size={18} />
                </div>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                {item.description}
              </p>

              <button className="mt-6 flex items-center justify-between rounded-xl border border-[#269957]/20 bg-[#EEF8F2] px-4 py-3 font-medium text-[#269957] transition hover:bg-[#269957] hover:text-white">
                Lihat Detail
                <ArrowRight size={18} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RekomendasiAI;
