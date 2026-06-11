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

export function ServiceFireDetailsSection() {
  return (
    <section className="w-full bg-canvas py-16 md:py-24">
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
                <SpecHeader title="Sistemas projetados" variant="primary" />
              </div>
              <div className="flex flex-col gap-3">
                <ChecklistItem variant="primary">Detecção e alarme — detectores, acionadores manuais e central de alarme</ChecklistItem>
                <ChecklistItem variant="primary">Sistema de hidrantes e mangotinhos</ChecklistItem>
                <ChecklistItem variant="primary">Chuveiros automáticos (sprinklers)</ChecklistItem>
                <ChecklistItem variant="primary">Iluminação de emergência e sinalização de rotas de fuga</ChecklistItem>
                <ChecklistItem variant="primary">Extintores portáteis e sobre rodas — dimensionamento e localização</ChecklistItem>
                <ChecklistItem variant="primary">Controle de fumaça — sistemas pressurizados e exaustores</ChecklistItem>
                <ChecklistItem variant="primary">Saídas de emergência conforme NBR 9077</ChecklistItem>
                <ChecklistItem variant="primary">Elaboração de PPCI</ChecklistItem>
              </div>
            </motion.div>

            {/* Column 2: Technical Norms */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <AlertListCard
                icon={TriangleAlert}
                items={[
                  "ABNT NBR 13714 — Sistemas de hidrantes e mangotinhos",
                  "ABNT NBR 17240 — Sistemas de detecção e alarme de incêndio",
                  "ABNT NBR 10897 — Sistemas de chuveiros automáticos (sprinklers)",
                  "ABNT NBR 9077 — Saídas de emergência em edifícios",
                  "ABNT NBR 12693 — Proteção por extintores de incêndio",
                  "IT-CBMMG — Instruções Técnicas do Corpo de Bombeiros de Minas Gerais"
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
