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

export function ServiceEnsaiosDetailsSection() {
  return (
    <section className="w-full bg-canvas pt-0 pb-16 md:pt-0 md:pb-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main Grid: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Column 1: Scope (Yellow Theme) */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <div className="mb-6">
                <SpecHeader title="Quando contratar" variant="primary" />
              </div>
              <div className="flex flex-col gap-3">
                <ChecklistItem variant="primary">Programa de manutenção preditiva de plantas industriais — identifica problemas antes da parada não programada.</ChecklistItem>
                <ChecklistItem variant="primary">Verificação da integridade de fundações antes de ampliar instalações existentes.</ChecklistItem>
                <ChecklistItem variant="primary">Laudos para seguradoras, regularização de edificações ou processos de venda.</ChecklistItem>
                <ChecklistItem variant="primary">Após eventos como incêndios, enchentes ou impactos em estruturas.</ChecklistItem>
                <ChecklistItem variant="primary">Inspeção de pontes, viadutos e obras de arte especiais em obras públicas.</ChecklistItem>
              </div>
            </motion.div>

            {/* Column 2: Technical Norms */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <AlertListCard
                icon={TriangleAlert}
                items={[
                  "ABNT NBR 7584:2012 — Resistência superficial pelo esclerômetro de reflexão",
                  "ABNT NBR 8802:2019 — Velocidade de propagação de onda ultrassônica",
                  "ABNT NBR 6122 — Controle de execução de fundações (ensaio PIT)",
                  "ABNT NBR ISO 9712 — Qualificação e certificação de pessoal em END",
                  "ABNT NBR 16490 — Inspeção visual em estruturas de concreto"
                ]}
              />
            </motion.div>

          </div>

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
