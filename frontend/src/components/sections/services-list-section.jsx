import React from "react";
import { motion } from "motion/react";
import { Eyebrow } from "../ui/eyebrow";
import { AppCard } from "../ui/app-card";

import imgArquitetonico from "../../assets/projetos-arquitetonico.png";
import imgHidrossanitarios from "../../assets/projetos-hidrossanitarios.png";
import imgEletricos from "../../assets/projetos-eletricos.png";
import imgIncendio from "../../assets/projetos-combate-incendios.png";
import imgInfraestrutura from "../../assets/projetos-infraestrutura.png";
import imgMetalica from "../../assets/projetos-estrutura-metalica.png";
import imgConcreto from "../../assets/projetos-concretos.png";
import imgBim from "../../assets/bim.png";
import imgEnsaios from "../../assets/nao-destrutivos.png";

const servicesData = [
  {
    id: 1,
    image: imgArquitetonico,
    title: "Projetos Arquitetônicos",
    description:
      "Planta baixa, cortes, fachadas e estudo 3D — do residencial ao industrial. Compatibilizado com estrutura e instalações via BIM.",
  },
  {
    id: 2,
    image: imgHidrossanitarios,
    title: "Projetos Hidrossanitários",
    description:
      "Abastecimento, distribuição de água, esgoto e drenagem pluvial. Projetos conforme NBR 5626 NBR 8160, com memória de cálculo completa.",
  },
  {
    id: 3,
    image: imgEletricos,
    title: "Projetos Elétricos",
    description:
      "Instalações em baixa e média tensão, subestações e SPDA. Conformidade com NBR 5410 e NBR 14039, com diagrama unifilar e memorial.",
  },
  {
    id: 4,
    image: imgIncendio,
    title: "Projetos de Combate a Incêndio",
    description:
      "Detecção, alarme, sprinklers e hidrantes. Aprovação junto ao Corpo de Bombeiros, conforme NBR 13714, NBR 17240 e IT-CBMMG.",
  },
  {
    id: 5,
    image: imgInfraestrutura,
    title: "Projetos de Infraestrutura",
    description:
      "Pavimentação, drenagem pluvial, cabeamento estruturado e redes urbanas. Para loteamentos, condomínios industriais e obras públicas.",
  },
  {
    id: 6,
    image: imgMetalica,
    title: "Projetos de Estrutura Metálica",
    description:
      "Galpões, coberturas e mezaninos industriais. Cálculo, detalhamento de ligações e lista de materiais conforme NBR 8681.",
  },
  {
    id: 7,
    image: imgConcreto,
    title: "Projetos Estruturais de Concreto",
    description:
      "Cálculo de fundações, pilares vigas e lajes em concreto. Conforme NBR 6118 e NBR 6122 — do residencial ao industrial.",
  },
  {
    id: 8,
    image: imgBim,
    title: "BIM — Building Information Modeling",
    description:
      "Modelagem integrada de todos os projetos com clash detection automático. Menos conflito na obra, extração de quantitativos e documentação para licitações públicas.",
  },
  {
    id: 9,
    image: imgEnsaios,
    title: "Ensaios Não Destrutivos",
    description:
      "Pacometria, esclerometria, ensaio PIT, ultrassom e análise de vibrações. Laudo técnico com responsabilidade assinada conforme normas ABNT.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ServicesListSection() {
  return (
    <section className="w-full bg-zinc-100 py-20 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center text-center mb-14 md:mb-20">
          <Eyebrow text="Nossas Soluções" className="mx-auto" />
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-ink tracking-tight leading-tight mt-6">
            Conheça todos os nossos serviços
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <AppCard
                variant="image"
                imageSrc={service.image}
                title={service.title}
                description={service.description}
                buttonText="Ver mais"
                buttonVariant="secondary"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
