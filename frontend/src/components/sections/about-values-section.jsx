import React from "react";
import { ShieldCheck, Lightbulb, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { FeatureCard } from "../ui/feature-card";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const valoresData = [
  {
    title: "Excelência:",
    body: "Buscar a mais alta qualidade em tudo que fazemos, do planejamento à execução.",
  },
  {
    title: "Inovação:",
    body: "Promover a criatividade e a busca contínua por novas tecnologias e métodos.",
  },
  {
    title: "Integridade:",
    body: "Atuar com ética, transparência e responsabilidade em todas as relações.",
  },
  {
    title: "Comprometimento:",
    body: "Dedicar-nos aos objetivos de nossos clientes e ao sucesso de cada projeto.",
  },
  {
    title: "Sustentabilidade:",
    body: "Integrar práticas que respeitem o meio ambiente e contribuam para o bem-estar social.",
  },
];

export function AboutValuesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 my-16 md:my-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-[40px] font-semibold font-sans tracking-tight text-ink leading-[1.1] mb-12"
        >
          Missão, Visão e Valores
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={ShieldCheck}
              title="Missão"
              description="Oferecer soluções de engenharia inovadoras e eficientes que superem as expectativas de nossos clientes, garantindo qualidade, segurança e sustentabilidade em cada projeto de forma Simples e Funcional."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={Lightbulb}
              title="Visão"
              description="Ser reconhecida como referência em soluções de engenharia, impulsionando o desenvolvimento e a inovação com excelência e compromisso em todas as áreas de atuação."
            />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex flex-col items-start gap-4 rounded-xl border-l-4 border-primary bg-surface-muted p-8 sm:p-10 w-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                <ShieldCheck className="h-6 w-6" strokeWidth={2} />
              </div>
              <h4 className="font-sans text-xl font-bold text-ink mb-4">Valores</h4>
              <div className="flex flex-col gap-4 w-full">
                {valoresData.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="font-sans text-[16px] text-body leading-relaxed">
                      <strong className="text-ink font-semibold">{item.title}</strong>{" "}
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
