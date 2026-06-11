import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";
import { BlogCard } from "../ui/blog-card";

// Placeholders de imagem (reutilizando assets de engenharia já existentes no
// repositório). Serão substituídos pelas imagens vindas do CMS futuramente.
import imgBim from "../../assets/solucao-bim.png";
import imgNormas from "../../assets/projeto-arquitetonico.png";
import imgVentilacao from "../../assets/services-img-home.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const posts = [
  {
    image: imgBim,
    date: "12 Mai 2026",
    title: "BIM na Estrutura: compatibilização que evita retrabalho",
    excerpt:
      "Como a modelagem 3D integrada antecipa interferências entre estrutura, hidráulica e elétrica ainda na fase de projeto.",
  },
  {
    image: imgNormas,
    date: "28 Abr 2026",
    title: "Normas de Incêndio: o que a NBR exige no seu projeto",
    excerpt:
      "Um guia direto sobre rotas de fuga, compartimentação e dimensionamento de saídas conforme as exigências do corpo de bombeiros.",
  },
  {
    image: imgVentilacao,
    date: "03 Abr 2026",
    title: "Ventilação Industrial: eficiência e conforto térmico",
    excerpt:
      "Estratégias de exaustão e renovação de ar para galpões e plantas industriais de alta complexidade.",
  },
];

export function RecentPostsSection() {
  return (
    <section className="w-full bg-surface-muted py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Cabeçalho */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <Eyebrow text="Conteúdo Técnico" className="mx-auto mb-6" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold font-sans tracking-tight leading-[1.15] text-ink"
          >
            Atualizações da Engenharia &{" "}
            <span className="font-semibold italic text-primary">Inovação na S&F.</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 w-full mx-auto text-ink/80 text-lg leading-relaxed"
          >
            Explore artigos técnicos, tendências de mercado e as melhores práticas para
            projetos de alta complexidade.
          </motion.p>
        </motion.div>

        {/* Grid de 3 colunas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {posts.map((post) => (
            <motion.div key={post.title} variants={itemVariants}>
              <BlogCard
                image={post.image}
                date={post.date}
                title={post.title}
                excerpt={post.excerpt}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Botão final */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Link to="/blog">
            <Button variant="primary">
              Ver todos os artigos <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
