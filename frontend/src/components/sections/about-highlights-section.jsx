import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

import imgHighlights from "../../assets/sobrenos-img3.png";

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

export function AboutHighlightsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-0 pb-[102px] flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

      {/* Coluna Esquerda (Imagem) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full lg:w-[45%] flex flex-col items-center"
      >
        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-border/60">
          <img
            src={imgHighlights}
            alt="História da S&F Engenharia"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Coluna Direita (Conteúdo) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full lg:w-[55%] flex flex-col items-start"
      >

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-[48px] font-semibold font-sans tracking-tight text-ink leading-[1.1] mb-8"
        >
          De empresa de horas a empresa de soluções.
        </motion.h2>

        {/* Texto com borda lateral */}
        <motion.div variants={itemVariants} className="border-l-4 border-primary pl-6 py-1 mb-6">
          <p className="text-ink/90 text-lg md:text-[16px] leading-[1.55] font-regular">
            A S & F Engenharia nasceu em 2012 em Araxá/MG. Por anos, como a maioria das empresas do setor, fornecíamos horas técnicas. A virada aconteceu quando entendemos que o cliente não compra engenharia — ele compra o resultado que a engenharia traz.
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-ink/80 text-base md:text-[16px] leading-relaxed mb-6"
        >
          A partir de 2022, passamos a entregar soluções técnicas completas: projetos multidisciplinares compatibilizados em BIM, com prazo definido, memória de cálculo e responsabilidade assinada. Essa mudança foi o que nos permitiu crescer de forma consistente e atender projetos cada vez maiores.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-ink/80 text-base md:text-[16px] leading-relaxed mb-10"
        >
          Hoje somos referência regional em projetos industriais multidisciplinares, com equipe técnica própria nas 9 principais disciplinas da engenharia civil.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button variant="primary">
            Ver todos os serviços <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

      </motion.div>

    </section>
  );
}
