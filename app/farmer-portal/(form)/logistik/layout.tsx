import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Bell, Clock, Hexagon } from "lucide-react";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
      <header className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <Link
            href="/farmer-portal"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 text-gray-600 shadow-sm"
            title="Kembali ke Dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>

          <div className="flex items-center gap-3">
            <Image
              src="/logoHorizontal.jpg"
              width={180}
              height={180}
              alt="Coconeeds Logo"
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-[#558B71] tracking-wide">
          Logistik
        </h1>
      </header>
      <main className="flex-1 w-full mx-auto p-6 md:p-8 flex flex-col">
        {children}
      </main>
    </div>
  );
}
