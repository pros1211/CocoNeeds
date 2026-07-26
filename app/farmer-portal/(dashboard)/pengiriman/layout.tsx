import React from "react";

export default function PengirimanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
      <main className="flex-1 flex flex-col items-center p-6">
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
}
