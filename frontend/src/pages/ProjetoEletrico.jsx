import React from "react";
import { ServiceElecHeroSection } from "../components/sections/service-elec-hero-section";
import { PowerNumbersSection } from "../components/sections/power-numbers-section";
import { ServiceElecDetailsSection } from "../components/sections/service-elec-details-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";

export function ProjetoEletrico() {
  return (
    <main className="w-full flex flex-col bg-canvas">
      <ServiceElecHeroSection />
      <PowerNumbersSection />
      <ServiceElecDetailsSection />
      <FinalCtaSection />
    </main>
  );
}
