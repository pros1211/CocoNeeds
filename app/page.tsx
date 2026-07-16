import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Hero from "@/components/hero";
import Core from "@/components/core";
import Features from "@/components/features";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <main className=" w-full flex flex-col gap-10  ">
        <Hero />
        <Core />
        <Features />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
