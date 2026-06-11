import React from "react";
import { ServiceHeroLayout } from "./service-hero-layout";
import bgBim from "../../assets/Herosection-projeto-bim.png";

export function ServiceBimHeroSection() {
  return (
    <ServiceHeroLayout
      bgImage={bgBim}
      eyebrow="BIM (Building Information Modeling)"
      title={
        <>
          <span className="text-primary italic">Projetos em BIM</span> — todas as disciplinas integradas, conflitos resolvidos antes da obra.
        </>
      }
      description="Modelagem 3D integrada de arquitetura, estrutura, elétrica, hidrossanitário e combate a incêndio. Clash detection automático, extração de quantitativos e documentação padrão para licitações públicas."
    />
  );
}
