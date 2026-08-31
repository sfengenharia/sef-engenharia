import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Eyebrow } from "../ui/eyebrow";
import { BlogCard } from "../ui/blog-card";
import { Button } from "../ui/button";
import { client, urlFor } from "../../lib/sanity";
import { formatPostDate } from "../../utils/date";

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
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("todos");
  const [sortOrder, setSortOrder] = useState("recente");
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    async function fetchData() {
      try {
        const [postsData, categoriesData] = await Promise.all([
          client.fetch(`*[_type == "post"]{ title, "slug": slug.current, mainImage, publishedAt, readingTime, excerpt, categories[]->{ title, "slug": slug.current } }`),
          client.fetch(`*[_type == "category"]{ title, "slug": slug.current }`)
        ]);
        setPosts(postsData || []);
        setCategories(categoriesData || []);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  const filteredPosts =
    activeCategory === "todos"
      ? posts
      : posts.filter((post) =>
          post.categories?.some((cat) => cat.slug === activeCategory)
        );

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOrder === "recente") {
      return new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0);
    }
    if (sortOrder === "antigo") {
      return new Date(a.publishedAt || 0) - new Date(b.publishedAt || 0);
    }
    if (sortOrder === "alfabetico") {
      return (a.title || "").localeCompare(b.title || "");
    }
    return 0;
  });

  const visiblePosts = sortedPosts.slice(0, visibleCount);
  const hasMore = visibleCount < sortedPosts.length;

  if (isLoading) {
    return (
      <section className="w-full bg-canvas pt-32 pb-24">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-ink/50 text-lg">Carregando artigos...</p>
        </div>
      </section>
    );
  }

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

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 md:pb-0 scrollbar-hide -mx-1 px-1 flex-1">
            <button
              onClick={() => handleCategoryChange("todos")}
              className={`rounded-full px-6 py-2 border text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                activeCategory === "todos"
                  ? "bg-primary border-primary text-ink font-semibold"
                  : "bg-transparent border-border text-ink/70 hover:border-primary/50 hover:text-ink"
              }`}
            >
              Todas
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`rounded-full px-6 py-2 border text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.slug
                    ? "bg-primary border-primary text-ink font-semibold"
                    : "bg-transparent border-border text-ink/70 hover:border-primary/50 hover:text-ink"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <label htmlFor="sort-order" className="text-sm font-medium text-ink/70">
              Ordenar por:
            </label>
            <select
              id="sort-order"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="rounded-md border border-border bg-canvas px-3 py-1.5 text-sm font-sans text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors cursor-pointer"
            >
              <option value="recente">Mais Recentes</option>
              <option value="antigo">Mais Antigos</option>
              <option value="alfabetico">Ordem Alfabética</option>
            </select>
          </div>
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
                key={post.slug}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -10 }}
              >
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

        {sortedPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-ink/50 text-lg">Nenhum artigo encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
