import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";
import { HighlightBlock } from "../ui/highlight-block";

import heroBanner from "../../assets/banner-herosection-inicio.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden py-24 bg-surface-dark">

      {/* Background (Oculto no mobile, visível a partir de tablet) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src={heroBanner}
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/95 to-transparent" />
      </div>

      {/* Container Principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-8 w-full max-w-3xl"
        >
          {/* Eyebrow - AJUSTE: Forçando texto claro para dar contraste via props */}
          <motion.div variants={itemVariants}>
            <Eyebrow text="S&F Engenharia LTDA." className="text-white/90" />
          </motion.div>

          {/* Título H1 */}
          <motion.h1
            variants={itemVariants}
            className="w-full font-sans font-semibold text-4xl md:text-5xl lg:text-[60px] leading-[1.1] text-white tracking-tight"
          >
            Engenharia multidisciplinar que resolve.{" "}
            <span className="font-sans font-semibold italic text-primary">Do projeto à entrega, no prazo.</span>
          </motion.h1>

          {/* Textos */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full">
            <HighlightBlock className="w-full text-white/90 text-lg md:text-xl border-primary pl-4 md:pl-5 leading-snug">
              Projetos arquitetônicos, estruturais, elétricos, hidrossanitários, combate a incêndio e BIM
            </HighlightBlock>
            <p className="w-full font-sans text-lg text-white/80 leading-snug">
              integrados em uma única empresa, com equipe técnica própria e compromisso real com prazo.
            </p>
          </motion.div>

          {/* Botões */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full pt-2">
            <Button variant="primary" className="w-full sm:w-auto px-8 py-3 text-[15px]">
              Solicitar orçamento <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto px-8 py-3 text-[15px]">
              Conheça nossos serviços
            </Button>
          </motion.div>

          {/* Logos - AJUSTE: Reduzido o 'h-' (altura) para ficarem mais proporcionais e sutis */}
          <motion.div variants={itemVariants} className="flex flex-row flex-wrap items-center gap-8 md:gap-10 w-full pt-4">
            <img src={logo1} alt="CBMM" className="h-4 md:h-5 lg:h-6 opacity-50 w-auto object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src={logo2} alt="Mosaic" className="h-4 md:h-5 lg:h-6 opacity-50 w-auto object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src={logo3} alt="Viridis" className="h-4 md:h-5 lg:h-6 opacity-50 w-auto object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src={logo4} alt="Boston Metal" className="h-4 md:h-5 lg:h-6 opacity-50 w-auto object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}