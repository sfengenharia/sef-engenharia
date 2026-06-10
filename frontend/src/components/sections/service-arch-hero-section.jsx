import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";

import bgArch from "../../assets/Herosection-arquitetonicobg.png";

export function ServiceArchHeroSection() {
  return (
    <section className="min-h-[680px] lg:min-h-[720px] relative flex items-center bg-surface-dark overflow-hidden w-full">
      {/* Background and Overlays (Z-0) */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgArch}
          alt="Projeto Arquitetônico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-surface-dark/75 md:hidden z-[1]" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-surface-dark via-surface-dark/90 to-transparent z-[2]" />
      </div>

      {/* Content Container (Z-10) */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[70%] lg:w-[65%] flex flex-col items-start pt-24 md:pt-24"
        >
          <Eyebrow
            text="Projetos Arquitetônicos"
            className="!text-white !border-white/30"
          />

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.15] mt-6">
            <span className="text-primary italic">Projeto arquitetônico completo —</span> do estudo preliminar ao executivo, integrado em BIM.
          </h1>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mt-6 pr-4">
            Desenvolvemos projetos para edificações residenciais, comerciais e industriais. Toda a documentação técnica compatibilizada com estrutura, instalações elétricas e hidrossanitárias em plataforma BIM.
          </p>

          <Button variant="primary" className="mt-10">
            Solicitar orçamento <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
