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

export function ServiceBimDetailsSection() {
  return (
    <section className="w-full bg-canvas pb-16 md:pb-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main Grid: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Column 1: Included Scope (Yellow Theme) */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <div className="mb-6">
                <SpecHeader title="Entrega em BIM" variant="primary" />
              </div>
              <div className="flex flex-col gap-3">
                <ChecklistItem variant="primary">Modelo arquitetônico 3D integrado com todos os projetos complementares</ChecklistItem>
                <ChecklistItem variant="primary">Compatibilização automática (clash detection) entre todas as disciplinas</ChecklistItem>
                <ChecklistItem variant="primary">Extração de quantitativos e levantamento de materiais</ChecklistItem>
                <ChecklistItem variant="primary">Pranchas e documentação técnica exportadas diretamente do modelo</ChecklistItem>
                <ChecklistItem variant="primary">Modelo entregue em formato IFC — interoperável com qualquer plataforma</ChecklistItem>
              </div>
            </motion.div>

            {/* Column 2: Technical Norms */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <AlertListCard
                icon={TriangleAlert}
                items={[
                  "NBR ISO 19650 — Organização e digitalização de informações sobre edificações",
                  "Decreto 10.306/2020 — Estratégia BIM BR — Fase 1 e Fase 2 (obras públicas)",
                  "ISO 16739 — IFC — Industry Foundation Classes"
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
