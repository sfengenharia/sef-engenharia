import React from "react";
import { HeroSection } from "../components/sections/hero-section";
import { PowerNumbersSection } from "../components/sections/power-numbers-section";

export function Home() {
  return (
    <main className="w-full flex flex-col bg-surface-dark">
      <HeroSection />
      <PowerNumbersSection />
      
      {/* Aqui entrarão as próximas seções futuramente */}
    </main>
  );
}
