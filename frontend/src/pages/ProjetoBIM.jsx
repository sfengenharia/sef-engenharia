import React from "react";
import { ServiceBimHeroSection } from "../components/sections/service-bim-hero-section";
import { PowerNumbersSection } from "../components/sections/power-numbers-section";
import { ServiceBimAboutSection } from "../components/sections/service-bim-about-section";
import { ServiceBimDetailsSection } from "../components/sections/service-bim-details-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";

export function ProjetoBIM() {
  return (
    <main className="w-full flex flex-col bg-canvas">
      <ServiceBimHeroSection />
      <PowerNumbersSection />
      <ServiceBimAboutSection />
      <ServiceBimDetailsSection />
      <FinalCtaSection />
    </main>
  );
}
