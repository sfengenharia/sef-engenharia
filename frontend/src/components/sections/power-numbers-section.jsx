import React from "react";
import { Award, Users, Network, Factory } from "lucide-react";
import { motion } from "motion/react";
import { PowerNumber } from "../ui/power-number";

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

const powerNumbersData = [
  {
    icon: Award,
    value: "14 anos",
    label: "de experiência no mercado",
  },
  {
    icon: Users,
    value: "9 especialidades",
    label: "em engenharia",
  },
  {
    icon: Network,
    value: "100% BIM",
    label: "projetos integrados",
  },
  {
    icon: Factory,
    value: "+1000 clientes",
    label: "atendidos no Brasil",
  },
];

export function PowerNumbersSection() {
  return (
    <section className="w-full bg-canvas py-12 md:py-14">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Bloco Desktop/Tablet (Grid com Stagger) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 items-start"
        >
          {powerNumbersData.map((item, index) => (
            <motion.div key={`desktop-${index}`} variants={itemVariants}>
              <PowerNumber
                icon={item.icon}
                value={item.value}
                label={item.label}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bloco Mobile (Carrossel Infinito) */}
        <div className="flex md:hidden overflow-hidden w-full relative -mx-6 px-6">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            className="flex flex-row gap-8 w-max"
          >
            {[...powerNumbersData, ...powerNumbersData].map((item, index) => (
              <PowerNumber
                key={`mobile-${index}`}
                icon={item.icon}
                value={item.value}
                label={item.label}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
