import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { Eyebrow } from "../components/ui/eyebrow";
import { Button } from "../components/ui/button";
import { client, urlFor } from "../lib/sanity";
import { formatPostDate } from "../utils/date";

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

// Mapeia os estilos do editor do Sanity para a tipografia do site.
const portableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-ink mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-ink mt-6">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 italic text-ink font-medium py-2">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 flex flex-col gap-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 flex flex-col gap-2">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <img
          src={urlFor(value).width(1200).url()}
          alt={value.alt || ""}
          className="w-full rounded-2xl shadow-md my-4"
        />
      ) : null,
  },
};

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  readingTime,
  excerpt,
  body,
  categories[]->{ title, "slug": slug.current }
}`;

export function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ativo = true;

    async function fetchPost() {
      setIsLoading(true);
      try {
        const data = await client.fetch(POST_QUERY, { slug });
        if (ativo) setPost(data || null);
      } catch (error) {
        console.error("Error fetching post from Sanity:", error);
        if (ativo) setPost(null);
      } finally {
        if (ativo) setIsLoading(false);
      }
    }

    fetchPost();
    window.scrollTo(0, 0);

    return () => {
      ativo = false;
    };
  }, [slug]);

  if (isLoading) {
    return (
      <main className="w-full flex flex-col bg-canvas">
        <section className="w-full max-w-4xl mx-auto px-6 md:px-10 pt-32 pb-24 flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-ink/50 text-lg">Carregando artigo...</p>
        </section>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="w-full flex flex-col bg-canvas">
        <section className="w-full max-w-4xl mx-auto px-6 md:px-10 pt-32 pb-24 flex flex-col items-center justify-center text-center min-h-[400px]">
          <h1 className="text-3xl md:text-4xl font-bold text-ink">
            Artigo não encontrado
          </h1>
          <p className="text-ink/60 text-lg mt-4">
            O artigo que você procura não existe ou foi removido.
          </p>
          <Link to="/blog" className="mt-8">
            <Button variant="secondary">
              <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Blog
            </Button>
          </Link>
        </section>
      </main>
    );
  }

  const categoriaPrincipal = post.categories?.[0]?.title;

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
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>
          </motion.div>

          {categoriaPrincipal && (
            <motion.div variants={itemVariants}>
              <Eyebrow text={categoriaPrincipal} />
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-ink mt-6 leading-tight tracking-tight"
          >
            {post.title}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-ink/60 text-sm mt-4 flex items-center gap-4"
          >
            {post.publishedAt && <span>{formatPostDate(post.publishedAt)}</span>}
            {post.publishedAt && post.readingTime && (
              <span className="w-1 h-1 bg-ink/30 rounded-full" />
            )}
            {post.readingTime && <span>{post.readingTime} min de leitura</span>}
          </motion.div>

          {post.mainImage && (
            <motion.div variants={itemVariants}>
              <img
                src={urlFor(post.mainImage).width(1600).url()}
                alt={post.mainImage.alt || post.title}
                className="w-full aspect-video object-cover rounded-2xl shadow-md mt-10"
              />
            </motion.div>
          )}

          <motion.div
            variants={itemVariants}
            className="mt-12 text-ink/80 text-lg leading-relaxed flex flex-col gap-6"
          >
            <PortableText
              value={post.body || []}
              components={portableTextComponents}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-border"
          >
            <Link to="/blog">
              <Button variant="secondary">
                <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Blog
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
