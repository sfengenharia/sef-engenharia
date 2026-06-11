import React from "react";
import { ServiceHeroLayout } from "./service-hero-layout";
import bgEnsaios from "../../assets/Herosection-projetos-nao-destrutivos.png";

export function ServiceEnsaiosHeroSection() {
  return (
    <ServiceHeroLayout
      bgImage={bgEnsaios}
      eyebrow="Ensaios não destrutivos"
      title={
        <>
          <span className="text-primary italic">Ensaios não destrutivos com laudo técnico</span> — inspecione sem paralisar sua operação.
        </>
      }
      description="Pacometria, esclerometria, ensaio PIT, ultrassom e análise de vibrações em estruturas de concreto, aço e fundações. Laudo técnico emitido por engenheiro responsável, conforme normas ABNT."
    />
  );
}
