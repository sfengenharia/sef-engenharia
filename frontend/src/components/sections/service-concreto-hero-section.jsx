import React from "react";
import { ServiceHeroLayout } from "./service-hero-layout";
import bgConcreto from "../../assets/Herosection-projeto-concreto.png";

export function ServiceConcretoHeroSection() {
  return (
    <ServiceHeroLayout
      bgImage={bgConcreto}
      eyebrow="Projetos Estruturais"
      title={
        <>
          <span className="text-primary italic">Cálculo estrutural</span> de concreto armado e protendido — do residencial ao industrial.
        </>
      }
      description="Cálculo de fundações, pilares, vigas e lajes em concreto armado e protendido. Projeto executivo com armação especificada, detalhamento construtivo e memória de cálculo completa — conforme NBR 6118 e NBR 6122."
    />
  );
}
