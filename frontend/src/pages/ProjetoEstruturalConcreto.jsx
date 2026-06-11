import React from "react";
import { ServiceConcretoHeroSection } from "../components/sections/service-concreto-hero-section";
import { PowerNumbersSection } from "../components/sections/power-numbers-section";
import { ServiceConcretoDetailsSection } from "../components/sections/service-concreto-details-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";

export function ProjetoEstruturalConcreto() {
  return (
    <main className="w-full flex flex-col bg-canvas">
      <ServiceConcretoHeroSection />
      <PowerNumbersSection />
      <ServiceConcretoDetailsSection />
      <FinalCtaSection />
    </main>
  );
}
