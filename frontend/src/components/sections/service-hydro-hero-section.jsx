import React from "react";
import { ServiceHeroLayout } from "./service-hero-layout";
import bgHydro from "../../assets/Herosection-projeto-hidrossanitaria.png";

export function ServiceHydroHeroSection() {
  return (
    <ServiceHeroLayout
      bgImage={bgHydro}
      eyebrow="Projetos Hidrossanitários"
      title={
        <>
          <span className="text-primary italic">Projeto hidrossanitário completo —</span> água fria, água quente, esgoto e drenagem pluvial.
        </>
      }
      description="Projetamos instalações hidrossanitárias para edificações residenciais, comerciais e industriais. Memória de cálculo, isométrico e detalhamento executivo — tudo compatibilizado com os demais projetos em BIM."
    />
  );
}
