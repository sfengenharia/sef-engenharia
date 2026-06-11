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

export function ServiceElecDetailsSection() {
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
                <SpecHeader title="Escopo do projeto" variant="primary" />
              </div>
              <div className="flex flex-col gap-3">
                <ChecklistItem variant="primary">Instalações elétricas em baixa tensão (até 1 kV) — residencial, comercial e industrial</ChecklistItem>
                <ChecklistItem variant="primary">Instalações em média tensão (1 kV a 36,2 kV) — subestações e alimentadores</ChecklistItem>
                <ChecklistItem variant="primary">SPDA — Sistema de Proteção contra Descargas Atmosféricas</ChecklistItem>
                <ChecklistItem variant="primary">Rede elétrica subterrânea e de loteamentos</ChecklistItem>
                <ChecklistItem variant="primary">Projeto elétrico predial para condomínios e alto padrão</ChecklistItem>
                <ChecklistItem variant="primary">Dimensionamento de quadros de distribuição e proteção</ChecklistItem>
                <ChecklistItem variant="primary">Iluminação de emergência — NBR 10898</ChecklistItem>
                <ChecklistItem variant="primary">Cabeamento estruturado — voz, dados e CFTV</ChecklistItem>
              </div>
            </motion.div>

            {/* Column 2: Technical Norms */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <AlertListCard
                icon={TriangleAlert}
                items={[
                  "ABNT NBR 5410 — Instalações elétricas de baixa tensão",
                  "ABNT NBR 14039 — Instalações elétricas de média tensão",
                  "ABNT NBR 5419 — Proteção contra descargas atmosféricas (SPDA)",
                  "ABNT NBR 10898 — Iluminação de emergência",
                  "NR 10 — Segurança em instalações elétricas"
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
