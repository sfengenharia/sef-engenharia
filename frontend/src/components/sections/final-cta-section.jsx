import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";

import bgFinalCta from "../../assets/bg-cta-home.png";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function FinalCtaSection() {
  return (
    <section className="w-full bg-canvas">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="relative w-full py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center rounded-2xl md:rounded-[32px]">
          {/* Imagem de Fundo (Background Absoluto) */}
          <div className="absolute inset-0 z-0">
            <img
              src={bgFinalCta}
              alt="Background CTA"
              className="w-full h-full object-cover object-center"
            />
          </div>

        {/* Container de Conteúdo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 flex flex-col items-center w-full px-6"
        >
          <motion.div variants={itemVariants}>
            <Eyebrow text="Fale conosco" className="mx-auto text-white" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold font-sans tracking-tight text-white leading-[1.1] text-center mt-6"
          >
            Precisa de um projeto técnico <br className="hidden md:block" />
            <span className="italic font-semibold text-primary">com prazo garantido?</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/80 text-lg md:text-xl text-center mt-6  mx-auto"
          >
            Fale com nossa equipe. Retornamos com uma proposta técnica em até 24 horas úteis.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button variant="primary" className="mx-auto mt-10">
              Solicitar orçamento <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
