import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import FormStepper from "@/components/farmer-portal/eco-points/progressBar/formStepper";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
      <header className="hidden md:flex sticky top-0 z-50 bg-white border-b border-gray-200 h-24 px-8">
        <div className="w-[280px] flex items-center gap-4">
          <Link
            href="/farmer-portal"
            className="w-10 h-10 rounded-full border bg-white shadow-sm flex items-center justify-center hover:bg-gray-50"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>

          <Image
            src="/logoHorizontal.jpg"
            width={170}
            height={50}
            alt="Coconeeds"
            priority
          />
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-[560px]">
            <FormStepper />
          </div>
        </div>

        <div className="w-[220px] flex justify-end items-center">
          <Image
            src="/ecoPointLogo.png"
            width={165}
            height={48}
            alt="EcoPoint"
            priority
          />
        </div>
      </header>

      <header className="md:hidden sticky top-0 z-50 bg-white border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-4">
          <Link
            href="/farmer-portal"
            className="w-10 h-10 rounded-full border bg-white shadow-sm flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>

          <Image
            src="/logoHorizontal.jpg"
            width={120}
            height={40}
            alt="Coconeeds"
          />

          <Image
            src="/ecoPointLogo.png"
            width={110}
            height={34}
            alt="EcoPoint"
          />
        </div>

        <div className="px-4 pb-4 pt-2 border-t border-gray-100">
          <FormStepper />
        </div>
      </header>

      <main className="flex-1 w-full">
        <div className="max-w-[1700px] mx-auto p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
