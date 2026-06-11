import React from "react";
import { ServiceHeroLayout } from "./service-hero-layout";
import bgElec from "../../assets/Herosection-projetos-eletricos.png";

export function ServiceElecHeroSection() {
  return (
    <ServiceHeroLayout
      bgImage={bgElec}
      eyebrow="Projetos elétricos"
      title={
        <>
          <span className="text-primary italic">Projetos elétricos</span> em baixa e média tensão — do residencial ao industrial.
        </>
      }
      description="Instalações elétricas com memória de cálculo, diagrama unifilar e especificação de materiais. Conformidade com NBR 5410 e NBR 14039. Desenvolvidos em BIM e compatibilizados com todas as demais disciplinas."
    />
  );
}
