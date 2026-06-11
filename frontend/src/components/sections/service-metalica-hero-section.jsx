import React from "react";
import { ServiceHeroLayout } from "./service-hero-layout";
import bgMetalica from "../../assets/Herosection-projeto-metalico.png";

export function ServiceMetalicaHeroSection() {
  return (
    <ServiceHeroLayout
      bgImage={bgMetalica}
      eyebrow="Projetos de Estrutura Metálica"
      title={
        <>
          <span className="text-primary italic">Projeto de estrutura metálica</span> — galpões industriais, coberturas e mezaninos com cálculo preciso.
        </>
      }
      description="Dimensionamento completo com detalhamento de ligações, lista de materiais e memória de cálculo. Entregamos o projeto executivo pronto para execução — compatibilizado com fundações e instalações via BIM."
    />
  );
}
