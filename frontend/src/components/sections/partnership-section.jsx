import React from "react";
import { motion } from "motion/react";
import { Eyebrow } from "../ui/eyebrow";
import { FeatureCheckCard } from "../ui/feature-check-card";

import imgPartnerBg from "../../assets/cbmm-home.png";

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

export function PartnershipSection() {
  return (
    <section className="w-full bg-canvas py-20 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Coluna Esquerda (Conteúdo) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col"
          >
            <motion.div variants={itemVariants}>
              <Eyebrow text="Rigor Técnico Validado" className="mb-6" />
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-semibold text-ink mb-6 leading-[1.15] tracking-tight"
            >
              Somos parceiros <br className="hidden md:block" />
              <span className="italic font-semibold text-primary">CBMM há 14 anos</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-ink/80 text-lg mb-8 leading-relaxed"
            >
              Atuamos como um braço estratégico de engenharia para a maior produtora mundial de nióbio, entregando soluções que exigem alto nível de compatibilização e segurança estrutural.
            </motion.p>

            {/* Cards de Destaque */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <FeatureCheckCard 
                title="Garantia de Conformidade" 
                description="Projetos rigorosamente alinhados às normas técnicas industriais e corporativas." 
              />
              <FeatureCheckCard 
                title="Nível Executivo de Projetos" 
                description="Detalhamento minucioso que elimina dúvidas na execução da obra." 
              />
            </motion.div>
          </motion.div>

          {/* Coluna Direita (Imagem com Overlay) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative w-full h-[400px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
          >
            {/* Background Image (A logo já está embutida na imagem) */}
            <img 
              src={imgPartnerBg} 
              alt="Parceiros CBMM - Operário nos trilhos" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
