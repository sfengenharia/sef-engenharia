import React from "react";
import { ServiceArchHeroSection } from "../components/sections/service-arch-hero-section";
import { PowerNumbersSection } from "../components/sections/power-numbers-section";
import { ServiceArchDetailsSection } from "../components/sections/service-arch-details-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";

export function ProjetoArquitetonico() {
  return (
    <main className="w-full flex flex-col bg-canvas">
      <ServiceArchHeroSection />
      <PowerNumbersSection />
      <ServiceArchDetailsSection />
      <FinalCtaSection />
    </main>
  );
}
