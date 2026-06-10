import React from "react";
import { motion } from "motion/react";
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

export function ServiceArchDetailsSection() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Column 1: Scope (Yellow Theme) */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <div className="mb-6">
                <SpecHeader title="Escopo do projeto" variant="primary" />
              </div>
              <div className="flex flex-col gap-3">
                <ChecklistItem variant="primary">Estudo preliminar e análise de viabilidade arquitetônica</ChecklistItem>
                <ChecklistItem variant="primary">Planta baixa, cortes, fachadas e implantação</ChecklistItem>
                <ChecklistItem variant="primary">Planta de cobertura e detalhamentos construtivos</ChecklistItem>
                <ChecklistItem variant="primary">Memorial descritivo e especificação de materiais</ChecklistItem>
                <ChecklistItem variant="primary">Estudo volumétrico 3D e renderização (quando aplicável)</ChecklistItem>
                <ChecklistItem variant="primary">Levantamento cadastral as built (quando necessário)</ChecklistItem>
                <ChecklistItem variant="primary">Projeto compatibilizado com estrutural, elétrico e hidrossanitário via BIM</ChecklistItem>
              </div>
            </motion.div>

            {/* Column 2: Edifications (Gray Theme) */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <div className="mb-6">
                <SpecHeader title="Edificações Atendidas" variant="neutral" />
              </div>
              <div className="flex flex-col gap-3">
                <ChecklistItem variant="ink">Residências, apartamentos e condomínios</ChecklistItem>
                <ChecklistItem variant="ink">Galpões industriais, plantas fabris e depósitos</ChecklistItem>
                <ChecklistItem variant="ink">Escritórios, comércios e edificações corporativas</ChecklistItem>
                <ChecklistItem variant="ink">Escolas, clínicas, farmácias e ginásios</ChecklistItem>
                <ChecklistItem variant="ink">Reformas e adequações de edificações existentes</ChecklistItem>
                <ChecklistItem variant="ink">Projetos para acessibilidade — NBR 9050</ChecklistItem>
              </div>
            </motion.div>

          </div>

          {/* Bottom Block: Technical Norms */}
          <motion.div variants={itemVariants} className="mt-16">
            <AlertListCard
              icon={TriangleAlert}
              items={[
                "ABNT NBR 6492 — Representação de projetos de arquitetura",
                "ABNT NBR 9050 — Acessibilidade em edificações",
                "ABNT NBR 15575 — Desempenho de edificações habitacionais",
                "ABNT NBR 16636 — Elaboração de serviços técnicos de arquitetura"
              ]}
            />
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-16 flex justify-center">
            <Button variant="primary">
              Solicitar orçamento <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
