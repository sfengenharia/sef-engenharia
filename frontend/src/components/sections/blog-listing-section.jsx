import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eyebrow } from "../ui/eyebrow";
import { BlogCard } from "../ui/blog-card";
import { Button } from "../ui/button";

import imgBim from "../../assets/solucao-bim.png";
import imgNormas from "../../assets/projeto-arquitetonico.png";
import imgVentilacao from "../../assets/services-img-home.png";
import imgConcreto from "../../assets/projetos-concretos.png";
import imgMetalica from "../../assets/projetos-estrutura-metalica.png";
import imgIncendio from "../../assets/projetos-combate-incendios.png";
import imgInfra from "../../assets/projetos-infraestrutura.png";
import imgEletricos from "../../assets/projetos-eletricos.png";

const blogPosts = [
  {
    id: 1,
    slug: "bim-na-estrutura",
    title: "BIM na Estrutura: compatibilização que evita retrabalho",
    excerpt:
      "Como a modelagem 3D integrada antecipa interferências entre estrutura, hidráulica e elétrica ainda na fase de projeto.",
    category: "BIM",
    date: "12 Mai 2026",
    readTime: "5 min",
    image: imgBim,
  },
  {
    id: 2,
    slug: "normas-de-incendio",
    title: "Normas de Incêndio: o que a NBR exige no seu projeto",
    excerpt:
      "Um guia direto sobre rotas de fuga, compartimentação e dimensionamento de saídas conforme as exigências do corpo de bombeiros.",
    category: "Estruturas",
    date: "28 Abr 2026",
    readTime: "7 min",
    image: imgNormas,
  },
  {
    id: 3,
    slug: "ventilacao-industrial",
    title: "Ventilação Industrial: eficiência e conforto térmico",
    excerpt:
      "Estratégias de exaustão e renovação de ar para galpões e plantas industriais de alta complexidade.",
    category: "Infraestrutura",
    date: "03 Abr 2026",
    readTime: "6 min",
    image: imgVentilacao,
  },
  {
    id: 4,
    slug: "concreto-protendido-vs-armado",
    title: "Concreto protendido vs armado: quando usar cada solução",
    excerpt:
      "Análise comparativa de custo, vão livre e prazo entre as duas principais tecnologias estruturais para edificações industriais.",
    category: "Estruturas",
    date: "18 Mar 2026",
    readTime: "8 min",
    image: imgConcreto,
  },
  {
    id: 5,
    slug: "estrutura-metalica-detalhamento",
    title: "Estrutura metálica: do projeto ao detalhamento de ligações",
    excerpt:
      "Fluxo completo de cálculo, modelagem BIM e documentação para fabricação de galpões e mezaninos industriais.",
    category: "Estruturas",
    date: "02 Mar 2026",
    readTime: "6 min",
    image: imgMetalica,
  },
  {
    id: 6,
    slug: "spda-e-aterramento",
    title: "SPDA e aterramento: proteção que não se vê, mas salva vidas",
    excerpt:
      "Como dimensionar corretamente o sistema de proteção contra descargas atmosféricas conforme NBR 5419.",
    category: "Infraestrutura",
    date: "15 Fev 2026",
    readTime: "5 min",
    image: imgEletricos,
  },
  {
    id: 7,
    slug: "gestao-lean-na-obra",
    title: "Gestão Lean na obra: reduzindo desperdício com planejamento",
    excerpt:
      "Princípios de Lean Construction aplicados ao gerenciamento de obras industriais com cronograma apertado.",
    category: "Gestão de Obras",
    date: "01 Fev 2026",
    readTime: "7 min",
    image: imgInfra,
  },
  {
    id: 8,
    slug: "selo-verde-certificacoes",
    title: "Selo verde e certificações: engenharia para o futuro",
    excerpt:
      "Como integrar estratégias sustentáveis desde a concepção do projeto — eficiência energética, materiais reciclados e gestão de resíduos.",
    category: "Sustentabilidade",
    date: "20 Jan 2026",
    readTime: "6 min",
    image: imgIncendio,
  },
];

const categories = [
  "Todos",
  "BIM",
  "Estruturas",
  "Infraestrutura",
  "Gestão de Obras",
  "Sustentabilidade",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function BlogListingSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredPosts =
    activeCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  return (
    <section className="w-full bg-canvas pt-32 pb-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-start gap-4 mb-12">
          <Eyebrow text="Blog & Novidades" />
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-ink tracking-tight leading-tight">
            Artigos, tecnologias e insights de engenharia.
          </h1>
          <p className="text-ink/70 text-base md:text-lg leading-relaxed">
            Conteúdo técnico produzido pela equipe S&F para profissionais que buscam referência em projetos industriais e obras civis.
          </p>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-1 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`rounded-full px-6 py-2 border text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${activeCategory === cat
                  ? "bg-primary border-primary text-ink font-semibold"
                  : "bg-transparent border-border text-ink/70 hover:border-primary/50 hover:text-ink"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          <AnimatePresence mode="popLayout">
            {visiblePosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -10 }}
              >
                <a href={`/blog/${post.slug}`} className="block h-full">
                  <BlogCard
                    image={post.image}
                    date={post.date}
                    title={post.title}
                    excerpt={post.excerpt}
                    className="h-full cursor-pointer"
                  />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div className="flex justify-center mt-16">
            <Button
              variant="secondary"
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              Carregar mais artigos
            </Button>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-ink/50 text-lg">Nenhum artigo encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
