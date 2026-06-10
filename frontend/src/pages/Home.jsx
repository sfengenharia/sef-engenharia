import React from "react";
import { HeroSection } from "../components/sections/hero-section";
import { PowerNumbersSection } from "../components/sections/power-numbers-section";
import { ServicesIntroSection } from "../components/sections/services-intro-section";
import { WhyChooseUsSection } from "../components/sections/why-choose-us-section";
import { CtaSection } from "../components/sections/cta-section";
import { PartnershipSection } from "../components/sections/partnership-section";
import { RecentPostsSection } from "../components/sections/recent-posts-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";

export function Home() {
  return (
    <main className="w-full flex flex-col bg-surface-dark">
      <HeroSection />
      <PowerNumbersSection />
      <ServicesIntroSection />
      <WhyChooseUsSection />
      <CtaSection />
      <PartnershipSection />
      <RecentPostsSection />
      <FinalCtaSection />
    </main>
  );
}
