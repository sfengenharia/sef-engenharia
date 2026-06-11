import React from "react";
import { ServiceEnsaiosHeroSection } from "../components/sections/service-ensaios-hero-section";
import { PowerNumbersSection } from "../components/sections/power-numbers-section";
import { ServiceEnsaiosCardsSection } from "../components/sections/service-ensaios-cards-section";
import { ServiceEnsaiosDetailsSection } from "../components/sections/service-ensaios-details-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";

export function ProjetoEnsaios() {
  return (
    <main className="w-full flex flex-col bg-canvas">
      <ServiceEnsaiosHeroSection />
      <PowerNumbersSection />
      <ServiceEnsaiosCardsSection />
      <ServiceEnsaiosDetailsSection />
      <FinalCtaSection />
    </main>
  );
}
