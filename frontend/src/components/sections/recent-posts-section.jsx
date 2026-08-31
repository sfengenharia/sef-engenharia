import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";
import { BlogCard } from "../ui/blog-card";
import { client, urlFor } from "../../lib/sanity";
import { formatPostDate } from "../../utils/date";

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

// Os 3 artigos mais recentes publicados no CMS.
const RECENT_POSTS_QUERY = `*[_type == "post" && defined(slug.current)]
  | order(publishedAt desc)[0...3]{
    title,
    "slug": slug.current,
    mainImage,
    publishedAt,
    excerpt
  }`;

export function RecentPostsSection() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ativo = true;

    async function fetchPosts() {
      try {
        const data = await client.fetch(RECENT_POSTS_QUERY);
        if (ativo) setPosts(data || []);
      } catch (error) {
        console.error("Error fetching recent posts from Sanity:", error);
        if (ativo) setPosts([]);
      } finally {
        if (ativo) setIsLoading(false);
      }
    }

    fetchPosts();

    return () => {
      ativo = false;
    };
  }, []);

  // Sem artigos publicados a seção não tem o que mostrar — some por inteiro em
  // vez de deixar um bloco vazio no meio da home.
  if (!isLoading && posts.length === 0) return null;

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
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="bg-canvas rounded-2xl border border-border/60 p-6 shadow-sm flex flex-col gap-4 animate-pulse"
              >
                <div className="aspect-video w-full rounded-xl bg-ink/10" />
                <div className="flex flex-col gap-2">
                  <div className="h-3 w-24 rounded bg-ink/10" />
                  <div className="h-5 w-full rounded bg-ink/10" />
                  <div className="h-4 w-5/6 rounded bg-ink/10" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          >
            {posts.map((post) => (
              <motion.div key={post.slug} variants={itemVariants}>
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <BlogCard
                    image={post.mainImage ? urlFor(post.mainImage).width(800).url() : ""}
                    date={formatPostDate(post.publishedAt)}
                    title={post.title}
                    excerpt={post.excerpt}
                    className="h-full cursor-pointer"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

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
