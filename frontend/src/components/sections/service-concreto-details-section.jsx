import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, TriangleAlert } from "lucide-react";
import { Button } from "../ui/button";
import { SpecHeader } from "../ui/spec-header";
import { ChecklistItem } from "../ui/checklist-item";
import { AlertListCard } from "../ui/alert-list-card";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ServiceConcretoDetailsSection() {
  return (
    <section className="w-full bg-canvas py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Top Block: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Column 1: Scope (Yellow Theme) */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <div className="mb-6">
                <SpecHeader title="Escopo do projeto estrutural" variant="primary" />
              </div>
              <div className="flex flex-col gap-3">
                <ChecklistItem variant="primary">Análise de cargas e combinações — conforme NBR 6118</ChecklistItem>
                <ChecklistItem variant="primary">Cálculo de fundações — sapatas, blocos, estacas e radier</ChecklistItem>
                <ChecklistItem variant="primary">Dimensionamento de lajes — maciças, nervuradas, protendidas e pré-moldadas</ChecklistItem>
                <ChecklistItem variant="primary">Dimensionamento de vigas, pilares e escadas</ChecklistItem>
                <ChecklistItem variant="primary">Muros de arrimo e estruturas de contenção</ChecklistItem>
                <ChecklistItem variant="primary">Elementos especiais — reservatórios, piscinas, arquibancadas, caixas d'água</ChecklistItem>
                <ChecklistItem variant="primary">Memória de cálculo completa e detalhamento executivo com armação</ChecklistItem>
              </div>
            </motion.div>

            {/* Column 2: Types of Structure (Gray Theme) */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <div className="mb-6">
                <SpecHeader title="Tipos de estrutura" variant="neutral" />
              </div>
              <div className="flex flex-col gap-3">
                <ChecklistItem variant="neutral">Concreto armado — padrão para edificações residenciais e comerciais</ChecklistItem>
                <ChecklistItem variant="neutral">Concreto protendido — lajes e vigas de grandes vãos</ChecklistItem>
                <ChecklistItem variant="neutral">Concreto pré-moldado — galpões e estruturas industriais</ChecklistItem>
                <ChecklistItem variant="neutral">Alvenaria estrutural — projetos em bloco de concreto</ChecklistItem>
              </div>
            </motion.div>

          </div>

          {/* Bottom Block: Technical Norms (Full Width underneath) */}
          <motion.div variants={itemVariants} className="mt-12 lg:mt-16 w-full">
            <AlertListCard
              icon={TriangleAlert}
              items={[
                "ABNT NBR 6118 — Projeto de estruturas de concreto armado e protendido",
                "ABNT NBR 6122 — Projeto e execução de fundações",
                "ABNT NBR 14861 — Lajes pré-fabricadas",
                "ABNT NBR 9062 — Estruturas de concreto pré-moldado"
              ]}
            />
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-16 flex justify-center">
            <Link to="/contato">
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
