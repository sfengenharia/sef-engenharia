import React from "react";
import { ServiceMetalicaHeroSection } from "../components/sections/service-metalica-hero-section";
import { PowerNumbersSection } from "../components/sections/power-numbers-section";
import { ServiceMetalicaDetailsSection } from "../components/sections/service-metalica-details-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";

export function ProjetoEstruturaMetalica() {
  return (
    <main className="w-full flex flex-col bg-canvas">
      <ServiceMetalicaHeroSection />
      <PowerNumbersSection />
      <ServiceMetalicaDetailsSection />
      <FinalCtaSection />
    </main>
  );
}
