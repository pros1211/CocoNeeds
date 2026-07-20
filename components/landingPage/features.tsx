"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import "../../app/globals.css";
const Features = () => {
  const coreFeatures = [
    {
      category: "AI Driven Forecasting",
      image: "/AIForecasting.png",
      title: "Prediksi Panen dan Analisis Kualitas Berbasis AI",
      description:
        "AI Forecasting membantu petani mengoptimalkan hasil panen dengan prediksi waktu panen akan datang berdasarkan jumlah pohon, luas lahan, serta data panen. AI juga menganalisis foto buah kelapa untuk mendeteksi tingkat kematangan dan kualitas dari kelapa.",
    },
    {
      category: "Supply Chain Traceability",
      image: "/logistics.png",
      title: "Pelacakan Produk dari Kebun hingga Perusahaan",
      description:
        "Pengiriman hasil panen menjadi lebih mudah melalui kemitraan CocoNeeds dengan koperasi desa. Dengan dukungan layanan pick-up dan QR Code di setiap pengiriman, petani maupun perusahaan dapat memantau perjalanan produk serta keaslian produk tercatat dalam sertifikat digital untuk memastikan transparansi.",
    },
    {
      category: "Marketplace",
      image: "/marketplace.jpg",
      title: "Menghubungkan Banyak Petani dengan perusahaan",
      description:
        'Dengan konsep "Crowd Supplying", CocoNeeds menggabungkan hasil panen dari banyak petani melalui koperasi untuk mengoptimalkan permintaan dalam skala besar sehingga dapat dipenuhi secara efisien, adil, dan transparan.',
    },
    {
      category: "Eco Points",
      image: "/EcoPoints.png",
      title: "Limbah Kelapa Menjadi Sumber Nilai Baru",
      description:
        "Eco Points mendorong pemanfaatan limbah sabut dan tempurung kelapa menjadi sumber nilai ekonomi. Limbah yang terkumpul dapat ditukarkan dengan berbagai insentif operasional, seperti token listrik dan saldo e-wallet, sementara sistem menghitung estimasi emisi karbon yang berhasil dikurangi sebagai bagian dari praktik agroindustri berkelanjutan.",
    },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <>
      <div className="flex flex-col text-center items-center gap-8 py-12 px-4 w-full bg-[#F8F9FA] shadow-md rounded-xl">
        <div className="flex flex-col items-center max-w-[650px] gap-4 justify-center">
          <p className="capitalize text-xl font-semibold text-[#8C7851]">
            Layanan Kami
          </p>
          <h2 className="text-2xl font-semibold">
            Satu Platform untuk Petani, Koperasi, Logistik, dan Perusahaan
          </h2>
        </div>
        <div className="overflow-hidden w-full max-w-7xl" ref={emblaRef}>
          <div className="flex gap-6">
            {coreFeatures.map((features, index) => (
              <div
                key={index}
                className="shrink-0 w-[85vw] md:w-[500px] group relative flex flex-col justify-end h-[450px] rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing border border-transparent hover:border-tertiary/50 transition-all duration-500 shadow-lg bg-cover bg-center bg-no-repeat"
              >
                <Image
                  sizes="(max-width: 768px)"
                  fill
                  src={features.image}
                  alt={features.title}
                  className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col justify-between h-full p-8">
                  <span className="px-4 py-1 text-xs font-bold bg-tertiary/70 text-white border border-tertiary/30 rounded-full w-fit">
                    {features.category}
                  </span>

                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:-translate-y-2 transition-transform duration-500">
                      {features.title}
                    </h3>

                    <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <p className="text-white text-sm leading-relaxed pb-4 font-medium">
                          {features.description}
                        </p>

                        <button className="flex items-center gap-2 text-white font-semibold text-sm hover:translate-x-1 hover:text-[#F9DFB1] transition-transform duration-300">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6 mt-12">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-foreground hover:bg-[#609D7F]/90 hover:text-white hover:border-[#609D7F] transition-all active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full bg-[#3BA275] flex items-center justify-center text-white hover:bg-#609D7F/90 transition-all active:scale-95"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Features;
