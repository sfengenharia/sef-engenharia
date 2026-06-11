import React from "react";
import { motion } from "motion/react";
import imgBimAbout from "../../assets/services-img-home.png";

export function ServiceBimAboutSection() {
  return (
    <section className="w-full bg-canvas pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Column 1: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={imgBimAbout}
              alt="O que é BIM"
              className="rounded-2xl shadow-lg object-cover w-full h-full aspect-[4/3]"
            />
          </motion.div>

          {/* Column 2: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
              O que é o BIM e por que importa?
            </h2>
            
            <blockquote className="border-l-4 border-primary pl-4 text-lg font-medium text-ink/90 mb-6">
              BIM é a integração de todas as disciplinas de engenharia em um único modelo digital tridimensional.
            </blockquote>
            
            <p className="text-ink/80 mb-4 leading-relaxed">
              Em vez de projetos separados que só se encontram na obra, o BIM identifica automaticamente os conflitos — entre tubulações, vigas e instalações — antes que qualquer parede seja levantada.
            </p>
            
            <p className="text-ink/80 leading-relaxed">
              Para o gestor de obra, isso significa menos surpresas, menos aditivos de contrato e menor custo final. Para o setor de compras de uma indústria, significa projetos com quantitativos precisos e documentação padronizada.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
