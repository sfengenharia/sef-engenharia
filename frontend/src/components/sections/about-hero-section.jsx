import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";

import bgAboutHero from "../../assets/bg-herosection-quemsomos.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function AboutHeroSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[720px] flex items-center justify-start overflow-hidden bg-surface-dark pb-24 lg:pb-32">
      {/* Imagem de Fundo */}
      <img
        src={bgAboutHero}
        alt="Sobre a S&F Engenharia"
        className="absolute inset-0 w-full h-full object-cover object-center lg:object-right"
      />

      {/* Overlay de 15% apenas no Mobile para dar contraste no texto */}
      <div className="absolute inset-0 bg-surface-dark/15 md:hidden z-0" />

      {/* Container Global */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Aumentamos o margin-top (mt-32 lg:mt-44) para descolar bem do menu */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full lg:w-[65%] flex flex-col items-start mt-32 md:mt-40 lg:mt-44"
        >
          {/* Eyebrow forçando branco para o contraste */}
          <motion.div variants={itemVariants}>
            <Eyebrow text="Sobre nós" className="!text-white !border-white/30" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.15] mt-6"
          >
            Simples e funcional.<br />
            <span className="italic text-primary font-bold">14 anos entregando</span><br />
            projetos que sustentam<br className="hidden md:block" /> obras reais.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/80 text-base md:text-lg leading-relaxed mt-6 pr-4"
          >
            A S&F Engenharia foi fundada em 2012 em Araxá/MG com uma missão clara: entregar engenharia completa, com responsabilidade técnica e no prazo. Hoje atendemos indústrias, mineradoras e construtoras em todo o Brasil.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link to="/contato" className="block w-fit mt-8">
              <Button variant="primary">
                Solicitar orçamento <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}