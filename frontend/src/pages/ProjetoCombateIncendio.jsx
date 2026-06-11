import React from "react";
import { ServiceFireHeroSection } from "../components/sections/service-fire-hero-section";
import { PowerNumbersSection } from "../components/sections/power-numbers-section";
import { ServiceFireDetailsSection } from "../components/sections/service-fire-details-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";

export function ProjetoCombateIncendio() {
  return (
    <main className="w-full flex flex-col bg-canvas">
      <ServiceFireHeroSection />
      <PowerNumbersSection />
      <ServiceFireDetailsSection />
      <FinalCtaSection />
    </main>
  );
}
