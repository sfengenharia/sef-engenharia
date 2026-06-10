import React from "react";
import { ServicesHeroSection } from "../components/sections/services-hero-section";
import { PowerNumbersSection } from "../components/sections/power-numbers-section";
import { ServicesListSection } from "../components/sections/services-list-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";

export function Servicos() {
  return (
    <main className="w-full flex flex-col bg-canvas">
      <ServicesHeroSection />
      <PowerNumbersSection />
      <ServicesListSection />
      <FinalCtaSection />
    </main>
  );
}
