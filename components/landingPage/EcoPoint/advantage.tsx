import React from "react";
const advantageDesc = [
  {
    stat: "Pemanfaatan Limbah",
    title: "Meningkatkan nilai ekonomi limbah kelapa",
    description:
      "Ubah sabut, tempurung, dan air kelapa sisa produksi menjadi EcoPoints yang dapat ditukarkan dengan berbagai hadiah sehingga tidak lagi menjadi limbah yang terbuang.",
  },
  {
    stat: "Dampak Lingkungan",
    title: "Praktik produksi yang ramah lingkungan",
    description:
      "Setiap limbah kelapa yang ditukarkan membantu mengurangi pembakaran terbuka serta menekan potensi pencemaran lingkungan akibat limbah yang tidak dikelola dengan baik.",
  },
  {
    stat: "Sistem Pencapaian",
    title: "Mendorong partisipasi berkelanjutan",
    description:
      "Setiap aktivitas memberikan EcoPoints yang berkontribusi pada peningkatan level sebagai bentuk apresiasi terhadap kontribusi petani melalui benefit tertentu dari setiap level.",
  },
  {
    stat: "Manfaat Ekonomi",
    title: "Memberikan manfaat ekonomi secara langsung",
    description:
      "EcoPoint yang dikumpulkan dapat ditukarkan menjadi berbagai hadiah seperti token listrik, pulsa yang menunjang operasional petani.",
  },
];
const Advantage = () => {
  return (
    <div className="flex flex-col items-center gap-12 py-12 px-4 w-full">
      <h2 className="capitalize font-semibold gap-6 text-4xl max-w-[800px] text-center">
        Mengubah Limbah Menjadi Nilai Tambah
      </h2>

      <div className="grid grid-cols-1 gap-4 lg:gap-0 md:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
        {advantageDesc.map((card, index) => (
          <div
            key={index}
            className="group flex flex-col rounded-2xl lg:gap-0 p-8 border border-gray-200 justify-center items-center cursor-pointer shadow-sm hover:shadow-lg hover:border-[#3BA275]/50 transition-all duration-500"
          >
            <span className="text-xl xl:text-2xl font-bold text-[#3BA275]/80 mb-3 lg:group-hover:-translate-y-1 transition-transform duration-500">
              {card.stat}
            </span>
            <p className="font-regular text-xl text-center text-slate-800 lg:group-hover:-translate-y-1 transition-transform duration-500">
              {card.title}
            </p>
            <div className="grid grid-rows-[1fr] xl:grid-rows-[0fr] opacity-100 xl:opacity-0 xl:group-hover:grid-rows-[1fr] xl:group-hover:opacity-100 transition-all duration-500 ease-in-out w-full">
              <div className="overflow-hidden">
                <p className="pt-4 text-xs lg:text-sm text-center xl:text-justify text-slate-500 font-normal leading-relaxed border-t border-gray-100 mt-4">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantage;
