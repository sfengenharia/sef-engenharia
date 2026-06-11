import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";

import bgCta from "../../assets/cta-banner-home.png";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
    },
  },
};

export function CtaSection() {
  return (
    <section className="relative w-full min-h-[500px] lg:min-h-[640px] py-20 md:py-32 overflow-hidden flex items-center bg-surface-dark">
      {/* Background Image */}
      <div className="hidden md:block absolute inset-0 z-0">
        <img
          src={bgCta}
          alt="CTA Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Container Global (SEM FLEXBOX AGORA) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Card Flutuante com Largura Travada e ml-auto para ir para a direita */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full md:w-[480px] lg:w-[576px] ml-auto bg-canvas rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col gap-6"
        >
          <motion.div variants={itemVariants}>
            <Eyebrow text="Fale conosco" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-[40px] font-bold font-sans tracking-tight text-ink leading-[1.1]"
          >
            Precisa de um projeto técnico{" "}
            <span className="font-bold italic text-primary">
              com prazo garantido?
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-ink/80 text-lg leading-relaxed"
          >
            Fale com nossa equipe. Retornamos com uma proposta técnica em até 24 horas úteis.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link to="/contato" className="block w-fit">
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