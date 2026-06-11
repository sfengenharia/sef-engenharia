import React from "react";
import { ServiceInfraHeroSection } from "../components/sections/service-infra-hero-section";
import { PowerNumbersSection } from "../components/sections/power-numbers-section";
import { ServiceInfraDetailsSection } from "../components/sections/service-infra-details-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";

export function ProjetoInfraestrutura() {
  return (
    <main className="w-full flex flex-col bg-canvas">
      <ServiceInfraHeroSection />
      <PowerNumbersSection />
      <ServiceInfraDetailsSection />
      <FinalCtaSection />
    </main>
  );
}
