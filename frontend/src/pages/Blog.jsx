import React from "react";
import { BlogListingSection } from "../components/sections/blog-listing-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";

export function Blog() {
  return (
    <main className="w-full flex flex-col bg-canvas">
      <BlogListingSection />
      <FinalCtaSection />
    </main>
  );
}
