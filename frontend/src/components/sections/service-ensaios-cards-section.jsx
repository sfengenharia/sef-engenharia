import React from "react";
import { motion } from "motion/react";
import { InfoCard } from "../ui/info-card";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ensaiosList = [
  {
    title: "Pacometria",
    description: "Detecta e caracteriza armaduras de aço embutidas em estruturas de concreto armado. O pacômetro identifica posição, profundidade e diâmetro das barras sem necessidade de corte ou demolição. Indicado para verificação de cobrimento, conformidade com projeto e diagnóstico de patologias."
  },
  {
    title: "Esclerometria",
    description: "Estima a resistência superficial do concreto endurecido por meio do esclerômetro de reflexão (martelo de Schmidt), sem danificar a estrutura. Norma de referência: ABNT NBR 7584:2012. Indicado para controle tecnológico e diagnóstico de patologias em campo."
  },
  {
    title: "Ensaio PIT — Pile Integrity Test",
    description: "Realizado durante a execução da obra, logo após a cravação ou concretagem das estacas. Verifica a integridade estrutural de cada estaca antes do avanço para a execução dos blocos de fundação — evitando problemas estruturais nas etapas seguintes. É um ensaio rápido, não destrutivo e obrigatório em projetos que exigem controle de qualidade de fundações."
  },
  {
    title: "Ultrassom em Estruturas",
    description: "Avalia a homogeneidade do concreto, detecta fissuras internas, vazios e patologias em elementos estruturais. Também aplicado para inspeção de soldas em estruturas metálicas e vasos de pressão industriais."
  },
  {
    title: "Análise de Vibrações",
    description: "Avalia o comportamento dinâmico de estruturas sob carregamento real. Identifica frequências naturais, modos de vibração e riscos de ressonância em pontes, passarelas, galpões e estruturas industriais. Indicado para manutenção preditiva de plantas industriais."
  },
  {
    title: "Inspeção Visual",
    description: "Método inicial obrigatório em qualquer diagnóstico estrutural. Identifica fissuras, eflorescências, corrosão de armaduras, deformações e outros danos superficiais visíveis."
  }
];

export function ServiceEnsaiosCardsSection() {
  return (
    <section className="w-full bg-canvas pt-0 pb-16 md:pt-0 md:pb-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-[40px] font-bold text-ink mb-10 text-center md:text-left leading-tight">
            Ensaios realizados
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ensaiosList.map((ensaio, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <InfoCard
                  title={ensaio.title}
                  description={ensaio.description}
                  className="h-full bg-surface"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
