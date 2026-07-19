import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Hero from "@/components/landingPage/hero";
import Core from "@/components/landingPage/core";
import Features from "@/components/landingPage/features";
import Faq from "@/components/landingPage/faq";
import Footer from "@/components/landingPage/footer";
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
