import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";

import bgContactHero from "../../assets/herosection-contatobg.png";

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

export function ContactHeroSection() {
  return (
    <section className="w-full min-h-[800px] relative flex items-center bg-surface-dark">
      {/* Background Image */}
      <img
        src={bgContactHero}
        alt="Contato S&F Engenharia"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/90 to-transparent z-0" />

      {/* Grid Global & Content */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-4 w-full md:w-[60%] lg:w-[50%]"
        >
          <motion.div variants={itemVariants}>
            <Eyebrow text="Fale conosco" className="!text-white !border-white/30" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-[48px] font-semibold font-sans tracking-tight text-white leading-[1.1] mt-6"
          >
            Solicite seu orçamento — retornamos com <br />
            <span className="italic text-primary">proposta técnica em até 24 horas.</span> <br />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/80 text-lg md:text-xl leading-relaxed mt-6"
          >
            Preencha o formulário ou entre em contato diretamente. Nossa equipe analisa o seu projeto e retorna com uma proposta técnica personalizada.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
