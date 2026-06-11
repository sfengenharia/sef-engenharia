import React from "react";
import { ArrowUpRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";

import imgPrazo from "../../assets/prazo-cumprido.png";
import imgAcesso from "../../assets/acesso-direto-projetista.png";
import imgSolucao from "../../assets/solucao-bim.png";
import imgProposta from "../../assets/24h-proposta.png";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function WhyChooseUsSection() {
  return (
    <section className="w-full bg-zinc-100 py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Eyebrow text="Por que a S&F?" className="mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-sans tracking-tight leading-[1.15] text-ink">
            Por que indústrias e <br className="hidden md:block" />
            construtoras <span className="font-semibold italic text-primary">escolhem a S&F.</span>
          </h2>
        </div>

        {/* Grid Bento Box */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {/* Card 1: Prazo */}
          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-2xl aspect-square md:aspect-auto md:h-[400px] flex flex-col justify-end p-8 group col-span-1">
            <img src={imgPrazo} alt="Prazo cumprido" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/60 to-transparent z-10" />
            <div className="relative z-20 w-full">
              <h3 className="text-primary font-bold text-xl mb-2">Prazo Real</h3>
              <p className="text-white/80 text-sm">Respeito absoluto ao cronograma pactuado com o cliente.</p>
            </div>
          </motion.div>

          {/* Card 2: Acesso */}
          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-2xl aspect-square md:aspect-auto md:h-[400px] flex flex-col justify-end p-8 group col-span-1">
            <img src={imgAcesso} alt="Acesso direto ao projetista" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/60 to-transparent z-10" />
            <div className="relative z-20 w-full">
              <h3 className="text-primary font-bold text-xl mb-2">Acesso Direto</h3>
              <p className="text-white/80 text-sm">Comunicação sem intermediários, direto com o engenheiro responsável.</p>
            </div>
          </motion.div>

          {/* Card 3: Solução BIM */}
          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-2xl aspect-square md:aspect-auto md:h-[400px] flex flex-col justify-end p-8 group col-span-1">
            <img src={imgSolucao} alt="Solução BIM" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/60 to-transparent z-10" />
            <div className="relative z-20 w-full">
              <h3 className="text-primary font-bold text-xl mb-2">Compatibilização 100% BIM</h3>
              <p className="text-white/80 text-sm">Eliminamos interferências ainda na fase de projeto para uma obra mais eficiente.</p>
            </div>
          </motion.div>

          {/* Card 4: Proposta em 24h */}
          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-2xl aspect-square md:aspect-auto md:h-[400px] flex flex-col justify-end p-8 group col-span-1 md:col-span-2">
            <img src={imgProposta} alt="Proposta em 24h" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/60 to-transparent z-10" />
            <div className="relative z-20 w-full md:w-3/4 lg:w-2/3">
              <h3 className="text-primary font-bold text-xl mb-2">Proposta em 24h</h3>
              <p className="text-white/80 text-sm">Velocidade no orçamento para que o seu planejamento não atrase.</p>
            </div>
          </motion.div>

          {/* Card 5: Sólido (Mais de 14 anos) */}
          <motion.div variants={itemVariants} className="col-span-1 flex flex-col justify-between bg-primary/10 rounded-2xl p-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary mb-6">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-ink font-bold text-2xl mb-2">Mais de 14 anos</h3>
              <p className="text-ink/80 text-sm mb-6">Entregando para indústrias, mineradoras e construtoras no Brasil.</p>
              <Link to="/sobre-nos" className="block w-fit mt-6">
                <Button variant="primary">
                  Saiba mais <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
