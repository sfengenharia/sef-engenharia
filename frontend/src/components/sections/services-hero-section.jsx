import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";

import bgHeroServicos from "../../assets/bgherosection-servicos.png";

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

export function ServicesHeroSection() {
  return (
    <section className="min-h-[680px] lg:min-h-[720px] relative flex items-center bg-surface-dark overflow-hidden w-full">
      {/* Background & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgHeroServicos}
          alt="Serviços Globais S&F Engenharia"
          className="w-full h-full object-cover object-right"
        />

        {/* OVERLAY MOBILE: Cor sólida escura apenas no celular para dar leitura total */}
        <div className="absolute inset-0 bg-surface-dark/75 md:hidden z-[1]" />

        {/* OVERLAY DESKTOP: Apenas o gradiente, sem borrar o restante da imagem na direita */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-surface-dark via-surface-dark/90 to-transparent z-[2]" />
      </div>

      {/* Grid Global & Content */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full md:w-[70%] lg:w-[50%] flex flex-col items-start"
        >
          <motion.div variants={itemVariants}>
            <Eyebrow text="Serviços" className="!text-white !border-white/30" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-[48px] font-semibold text-white tracking-tight leading-[1.15] mt-6"
          >
            9 especialidades. Um <br className="hidden md:block" />
            único contrato.{" "}
            <span className="italic text-primary font-bold">
              Tudo <br className="hidden md:block" /> integrado em BIM.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/80 text-base md:text-lg leading-relaxed mt-6 pr-4"
          >
            Para indústrias e construtoras que precisam de projetos completos sem gerenciar múltiplos fornecedores. A S & F entrega arquitetura, estrutura, instalações e ensaios — com compatibilização automática entre todas as disciplinas.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link to="/contato" className="block w-fit mt-10">
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