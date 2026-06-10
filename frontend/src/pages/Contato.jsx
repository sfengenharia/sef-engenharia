import React from "react";
import { ContactHeroSection } from "../components/sections/contact-hero-section";
import { ContactFormSection } from "../components/sections/contact-form-section";

export function Contato() {
  return (
    <main className="w-full flex flex-col bg-canvas">
      <ContactHeroSection />
      <ContactFormSection />
    </main>
  );
}
