import React from "react";
import { motion } from "motion/react";

import imgPillar1 from "../../assets/atuacao-prazo.png";
import imgPillar2 from "../../assets/atuacao-qualidade.png";
import imgPillar3 from "../../assets/atuacao-acesso.png";
import imgPillar4 from "../../assets/atuacao-solucao.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const pillarsData = [
  {
    image: imgPillar1,
    title: "Prazo",
    description: "Cada entrega tem data definida. Nosso time é incentivado a cumpri-la.",
  },
  {
    image: imgPillar2,
    title: "Qualidade",
    description: "Projetos compatibilizados em BIM. O que chega na obra já está revisado.",
  },
  {
    image: imgPillar3,
    title: "Acesso",
    description: "Você fala direto com o projetista. Sem fila, sem gestor intermediário.",
  },
  {
    image: imgPillar4,
    title: "Solução",
    description: "Não fornecemos horas. Entregamos o projeto completo, com responsabilidade.",
  },
];

export function AboutPillarsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-16 bg-canvas">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col"
      >
        <motion.h2
          variants={itemVariants}
          className="text-center text-3xl md:text-4xl lg:text-[40px] font-semibold font-sans tracking-tight text-ink leading-[1.1] mb-12 md:mb-16"
        >
          Pilares de atuação
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillarsData.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[3/4] bg-surface-dark shadow-md flex flex-col justify-end p-6 md:p-8 group border border-border/10"
            >
              <img
                src={pillar.image}
                alt={pillar.title}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
              <div className="relative z-20 flex flex-col gap-2">
                <h3 className="text-primary text-xl font-bold">{pillar.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
