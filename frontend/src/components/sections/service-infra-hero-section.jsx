import React from "react";
import { ServiceHeroLayout } from "./service-hero-layout";
import bgInfra from "../../assets/Herosection-projeto-infraestrutura.png";

export function ServiceInfraHeroSection() {
  return (
    <ServiceHeroLayout
      bgImage={bgInfra}
      eyebrow="Projetos de Infraestrutura"
      title={
        <>
          <span className="text-primary italic">Projetos de infraestrutura</span> — pavimentação, drenagem e cabeamento para loteamentos e indústrias.
        </>
      }
      description="Projetos executivos completos para loteamentos, condomínios industriais e obras públicas. Pavimentação asfáltica e em bloquete, drenagem de águas pluviais, terraplanagem e cabeamento estruturado."
    />
  );
}
