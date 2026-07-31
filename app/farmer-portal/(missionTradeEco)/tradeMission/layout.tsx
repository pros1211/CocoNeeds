import Image from "next/image";
import React from "react";
import FormStepper from "@/components/farmer-portal/eco-points/progressBar/formStepper";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function MissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <div className="flex items-center w-full bg-white p-2">
        <Link
          href="/farmer-portal/eco-points"
          className="bg-white border border-gray-600 rounded-full p-2"
        >
          <ArrowLeft className="w-5 h-5 text-gray-500" />
        </Link>
        <Image
          src="/ecoPointLogo.png"
          width={220}
          height={60}
          alt="logo ecoPoint"
        />
      </div>
      <main className="">{children}</main>;
    </div>
  );
}
