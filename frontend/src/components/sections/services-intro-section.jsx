import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Eyebrow } from "../ui/eyebrow";
import { HighlightBlock } from "../ui/highlight-block";
import { Button } from "../ui/button";

import imgServicos from "../../assets/services-img-home.png";

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

export function ServicesIntroSection() {
  return (
    <section className="w-full bg-canvas py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          {/* Coluna Esquerda (Imagem) */}
          <motion.div variants={itemVariants} className="w-full order-1 lg:order-1">
            <img
              src={imgServicos}
              alt="Serviços de Engenharia"
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Coluna Direita (Conteúdo) */}
          <motion.div variants={itemVariants} className="w-full flex flex-col items-start order-2 lg:order-2">
            <Eyebrow text="Serviços" />

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-sans tracking-tight leading-[1.15] text-ink mt-6 mb-6">
              Todas as disciplinas do seu projeto,{" "}
              <span className="font-semibold italic text-primary">em uma só empresa.</span>
            </h2>

            <HighlightBlock className="mb-8">
              Da fundação ao combate a incêndio, nós dominamos todas as etapas do seu projeto garantindo uma integração nativa e minimizando problemas na obra.
            </HighlightBlock>

            <Link to="/servicos" className="block w-fit">
              <Button variant="primary">
                Ver todos os serviços <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
