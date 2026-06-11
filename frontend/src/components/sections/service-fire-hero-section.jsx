import React from "react";
import { ServiceHeroLayout } from "./service-hero-layout";
import bgFire from "../../assets/Herosectio-projeto-incendio.png";

export function ServiceFireHeroSection() {
  return (
    <ServiceHeroLayout
      bgImage={bgFire}
      eyebrow="Projetos de Combate a Incêndio"
      title={
        <>
          <span className="text-primary italic">Projeto de combate a incêndio</span> aprovado no Corpo de Bombeiros — residencial, comercial e industrial.
        </>
      }
      description="Elaboramos projetos de prevenção e combate a incêndio e pânico conforme as normas ABNT e as Instruções Técnicas do Corpo de Bombeiros de cada estado. Atendemos todo o território nacional, com experiência consolidada nas normativas do CBMMG."
    />
  );
}
