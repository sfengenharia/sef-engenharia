import React from "react";
import { ServiceHeroLayout } from "./service-hero-layout";
import bgArch from "../../assets/Herosection-arquitetonicobg.png";

export function ServiceArchHeroSection() {
  return (
    <ServiceHeroLayout
      bgImage={bgArch}
      eyebrow="Projetos Arquitetônicos"
      title={
        <>
          Um <span className="text-primary italic">projeto arquitetônico</span> inteligente valoriza cada m² e zera o desperdício de material na sua obra.
        </>
      }
      description="Elaboramos projetos que equilibram estética, funcionalidade e custo-benefício. Da aprovação na prefeitura ao detalhamento executivo — tudo 100% integrado em BIM para garantir que o projeto no papel seja viável na vida real."
    />
  );
}
