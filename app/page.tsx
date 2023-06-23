"use client";
import CarouselSlider from "@/components/CarouselSlider";
import Header from "@/components/Header/page";
import Navbar from "@/components/Navbar/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <CarouselSlider />
    </div>
  );
}
