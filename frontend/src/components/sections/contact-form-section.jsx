import React from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import { MultiStepForm } from "../ui/multi-step-form";

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

export function ContactFormSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24 bg-canvas">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Coluna Esquerda (Informações de Contato) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-10"
        >
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="bg-primary/10 rounded-full p-3 shrink-0">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="font-bold text-ink text-lg">WhatsApp</h3>
              <p className="text-body text-base mt-1">(34) 99137-0001</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="bg-primary/10 rounded-full p-3 shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="font-bold text-ink text-lg">E-mail</h3>
              <p className="text-body text-base mt-1">sef.engenharia@simplesefuncional.com</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="bg-primary/10 rounded-full p-3 shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="font-bold text-ink text-lg">Endereço</h3>
              <p className="text-body text-base mt-1">Rua dos Alecrins, 55 — Araxá/MG</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Coluna Direita (Formulário Card) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full flex justify-center lg:justify-end"
        >
          <MultiStepForm className="bg-white rounded-2xl border-border/40 m-0 max-w-full lg:max-w-[480px] p-6 md:p-8" />
        </motion.div>

      </div>
    </section>
  );
}
