import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";

export function ServiceHeroLayout({ 
  bgImage, 
  eyebrow, 
  title, 
  description, 
  buttonText = "Solicitar orçamento",
  onButtonClick 
}) {
  return (
    <section className="min-h-[680px] lg:min-h-[850px] relative flex items-center bg-surface-dark overflow-hidden w-full">
      {/* Background and Overlays (Z-0) */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={eyebrow}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-surface-dark/75 md:hidden z-[1]" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-surface-dark via-surface-dark/90 to-transparent z-[2]" />
      </div>

      {/* Content Container (Z-10) */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[70%] lg:w-[65%] flex flex-col items-start pt-28 pb-16 md:pt-40 md:pb-24"
        >
          <Eyebrow
            text={eyebrow}
            className="!text-white !border-white/30"
          />

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.15] mt-6">
            {title}
          </h1>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mt-6 pr-4">
            {description}
          </p>

          <Link to="/contato" className="block w-fit mt-10">
            <Button variant="primary" onClick={onButtonClick}>
              {buttonText} <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
