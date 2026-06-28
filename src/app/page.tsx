"use client";

import dynamic from "next/dynamic";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Navbar from "@/components/navigation/Navbar";
import Chapter1Hero from "@/components/chapters/Chapter1Hero";
import Chapter2About from "@/components/chapters/Chapter2About";
import Chapter3Skills from "@/components/chapters/Chapter3Skills";
import Chapter4Projects from "@/components/chapters/Chapter4Projects";
import Chapter5Experience from "@/components/chapters/Chapter5Experience";
import Chapter6Contact from "@/components/chapters/Chapter6Contact";

// Lazy load Three.js to avoid SSR issues and reduce initial bundle
const CinematicCanvas = dynamic(
  () => import("@/components/three/CinematicCanvas"),
  { ssr: false }
);

export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* Three.js Particle Background */}
      <CinematicCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Chapters */}
      <main>
        <Chapter1Hero />
        <Chapter2About />
        <Chapter3Skills />
        <Chapter4Projects />
        <Chapter5Experience />
        <Chapter6Contact />
      </main>
    </SmoothScrollProvider>
  );
}
