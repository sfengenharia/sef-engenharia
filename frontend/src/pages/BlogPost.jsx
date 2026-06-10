import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Eyebrow } from "../components/ui/eyebrow";
import { Button } from "../components/ui/button";

import imgBim from "../assets/solucao-bim.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function BlogPost() {
  const { slug } = useParams();

  return (
    <main className="w-full flex flex-col bg-canvas">
      <section className="w-full max-w-4xl mx-auto px-6 md:px-10 pt-32 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          <motion.div variants={itemVariants}>
            <a href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Eyebrow text="BIM" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-ink mt-6 leading-tight tracking-tight"
          >
            BIM na Estrutura: compatibilização que evita retrabalho
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-ink/60 text-sm mt-4 flex items-center gap-4"
          >
            <span>12 MAI 2026</span>
            <span className="w-1 h-1 bg-ink/30 rounded-full" />
            <span>5 min de leitura</span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <img
              src={imgBim}
              alt="BIM na Estrutura"
              className="w-full aspect-video object-cover rounded-2xl shadow-md mt-10"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-ink/80 text-lg leading-relaxed flex flex-col gap-6"
          >
            <p>
              A compatibilização de projetos é um dos maiores desafios da construção civil moderna. Com a adoção do BIM (Building Information Modeling), esse processo deixa de ser reativo — identificando conflitos na obra — e passa a ser proativo, antecipando problemas ainda na fase de projeto.
            </p>

            <p>
              Na S&F Engenharia, utilizamos o Revit e o Navisworks como ferramentas centrais de modelagem e clash detection. Cada disciplina — arquitetura, estrutura, hidrossanitário, elétrico e combate a incêndio — é modelada de forma independente e depois unificada num modelo federado.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-8">O impacto na obra</h2>

            <p>
              Quando a compatibilização é feita corretamente, os resultados são imediatos e mensuráveis:
            </p>

            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Redução de até 40% no retrabalho durante a execução</li>
              <li>Diminuição de 25% nos pedidos de informação (RFIs) em canteiro</li>
              <li>Extração automática de quantitativos para orçamento preciso</li>
              <li>Documentação completa para licitações públicas e auditorias</li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-6 italic text-ink font-medium py-2">
              "O BIM não é apenas uma ferramenta de desenho — é uma mudança de mentalidade. Quem projeta em 3D pensa em construção desde o primeiro traço."
            </blockquote>

            <h2 className="text-2xl font-bold text-ink mt-8">O processo na prática</h2>

            <p>
              O fluxo de trabalho começa com a definição do LOD (Level of Development) adequado para cada fase do projeto. Na fase conceitual, trabalhamos com LOD 200; no executivo, chegamos ao LOD 400, com detalhamento suficiente para fabricação de peças metálicas e corte de armaduras.
            </p>

            <p>
              Após a modelagem individual de cada disciplina, rodamos o clash detection automatizado. Cada interferência é classificada por severidade — crítica, moderada ou informativa — e distribuída aos responsáveis técnicos através de relatórios BCF (BIM Collaboration Format).
            </p>

            <p>
              O resultado é um projeto onde tubulações não atravessam vigas, eletrocalhas não conflitam com dutos de ar-condicionado e as rotas de fuga estão desobstruídas antes mesmo da primeira concretagem.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-border">
            <a href="/blog">
              <Button variant="secondary">
                <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Blog
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
