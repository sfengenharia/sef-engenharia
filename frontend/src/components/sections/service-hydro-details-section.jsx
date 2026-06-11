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

export function ServiceHydroDetailsSection() {
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
                <ChecklistItem variant="primary">Rede de distribuição de água fria — reservatório inferior, elevatória e superior</ChecklistItem>
                <ChecklistItem variant="primary">Rede de distribuição de água quente — solar, elétrica ou a gás</ChecklistItem>
                <ChecklistItem variant="primary">Coleta e disposição de esgoto sanitário</ChecklistItem>
                <ChecklistItem variant="primary">Coleta de águas pluviais e drenagem de cobertura</ChecklistItem>
                <ChecklistItem variant="primary">Dimensionamento de reservatórios e caixas d'água</ChecklistItem>
                <ChecklistItem variant="primary">Sistemas hidráulicos especiais — piscinas, lavanderias industriais, cozinhas coletivas</ChecklistItem>
                <ChecklistItem variant="primary">Compatibilização com projeto de combate a incêndio hidráulico</ChecklistItem>
              </div>
            </motion.div>

            {/* Column 2: Technical Norms */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <AlertListCard
                icon={TriangleAlert}
                items={[
                  "ABNT NBR 5626 — Instalação predial de água fria",
                  "ABNT NBR 7198 — Instalações prediais de água quente",
                  "ABNT NBR 8160 — Sistemas prediais de esgoto sanitário",
                  "ABNT NBR 10844 — Instalações prediais de águas pluviais"
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
