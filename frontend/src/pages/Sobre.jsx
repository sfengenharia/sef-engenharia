import React from "react";
import { AboutHeroSection } from "../components/sections/about-hero-section";
import { PowerNumbersSection } from "../components/sections/power-numbers-section";
import { AboutHighlightsSection } from "../components/sections/about-highlights-section";
import { AboutValuesSection } from "../components/sections/about-values-section";
import { AboutPillarsSection } from "../components/sections/about-pillars-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";

export function Sobre() {
  return (
    <main className="w-full flex flex-col bg-canvas">
      <AboutHeroSection />
      <PowerNumbersSection />
      <AboutHighlightsSection />
      <AboutValuesSection />
      <AboutPillarsSection />
      <FinalCtaSection />
    </main>
  );
}
