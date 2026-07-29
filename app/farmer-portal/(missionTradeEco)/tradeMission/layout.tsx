import Image from "next/image";
import React from "react";
import FormStepper from "@/components/farmer-portal/eco-points/progressBar/formStepper";
export default function MissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <div className="flex items-center w-full justify-between bg-white p-2">
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
