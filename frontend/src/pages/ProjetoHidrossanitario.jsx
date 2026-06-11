import React from "react";
import { ServiceHydroHeroSection } from "../components/sections/service-hydro-hero-section";
import { PowerNumbersSection } from "../components/sections/power-numbers-section";
import { ServiceHydroDetailsSection } from "../components/sections/service-hydro-details-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";

export function ProjetoHidrossanitario() {
  return (
    <main className="w-full flex flex-col bg-canvas">
      <ServiceHydroHeroSection />
      <PowerNumbersSection />
      <ServiceHydroDetailsSection />
      <FinalCtaSection />
    </main>
  );
}
