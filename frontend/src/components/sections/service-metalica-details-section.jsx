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

export function ServiceMetalicaDetailsSection() {
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
            
            {/* Column 1: Included Scope (Yellow Theme) */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <div className="mb-6">
                <SpecHeader title="O que está incluso" variant="primary" />
              </div>
              <div className="flex flex-col gap-3">
                <ChecklistItem variant="primary">Análise estrutural e cálculo de esforços — cargas permanentes, variáveis, vento e sismo</ChecklistItem>
                <ChecklistItem variant="primary">Dimensionamento de vigas, pilares, treliças e contraventamentos</ChecklistItem>
                <ChecklistItem variant="primary">Detalhamento de ligações soldadas e parafusadas conforme norma</ChecklistItem>
                <ChecklistItem variant="primary">Lista de materiais — perfis, chumbadores e elementos de fixação</ChecklistItem>
                <ChecklistItem variant="primary">Memória de cálculo completa</ChecklistItem>
                <ChecklistItem variant="primary">Compatibilização com fundações e instalações via BIM</ChecklistItem>
              </div>
            </motion.div>

            {/* Column 2: Applications (Gray Theme) */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <div className="mb-6">
                <SpecHeader title="Aplicações" variant="neutral" />
              </div>
              <div className="flex flex-col gap-3">
                <ChecklistItem variant="neutral">Galpões para armazenagem, logística e produção industrial</ChecklistItem>
                <ChecklistItem variant="neutral">Coberturas de quadras e ginásios</ChecklistItem>
                <ChecklistItem variant="neutral">Mezaninos industriais e comerciais</ChecklistItem>
                <ChecklistItem variant="neutral">Passarelas e pontes rolantes</ChecklistItem>
                <ChecklistItem variant="neutral">Estruturas especiais e coberturas de grandes vãos</ChecklistItem>
              </div>
            </motion.div>

          </div>

          {/* Bottom Block: Technical Norms (Full Width underneath) */}
          <motion.div variants={itemVariants} className="mt-12 lg:mt-16 w-full">
            <AlertListCard
              icon={TriangleAlert}
              items={[
                "ABNT NBR 8681 — Ações e segurança nas estruturas",
                "ABNT NBR 14762 — Estruturas de aço com perfis formados a frio",
                "ABNT NBR 16239 — Estruturas de aço com perfis tubulares"
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
