import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "../../utils/cn";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";

export function MultiStepForm({ className }) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className={cn("w-full max-w-[480px] bg-canvas rounded-xl border border-border shadow-sm p-6 sm:p-8 mx-auto", className)}>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step Toggle Header */}
            <div className="flex w-full items-center justify-between bg-surface-muted rounded-lg p-1 mb-8">
              <button
                type="button"
                onClick={prevStep}
                className={cn(
                  "flex-1 text-center py-2 text-[14px] font-semibold rounded-md transition-all duration-200",
                  step === 1 ? "bg-canvas text-primary shadow-sm" : "text-muted hover:text-ink"
                )}
              >
                Etapa 1
              </button>
              <button
                type="button"
                onClick={nextStep}
                className={cn(
                  "flex-1 text-center py-2 text-[14px] font-semibold rounded-md transition-all duration-200",
                  step === 2 ? "bg-canvas text-primary shadow-sm" : "text-muted hover:text-ink"
                )}
              >
                Etapa 2
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="relative overflow-hidden min-h-[360px]">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex flex-col gap-5"
                  >
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input id="name" placeholder="Ex: João Silva" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="company">Nome da empresa</Label>
                      <Input id="company" placeholder="Sua empresa" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Telefone / WhatsApp</Label>
                      <Input id="phone" type="tel" placeholder="(00) 00000-0000" />
                    </div>
                    
                    <div className="pt-4">
                      <Button type="button" variant="primary" className="w-full" onClick={nextStep}>
                        Próximo &rarr;
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex flex-col gap-5"
                  >
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">E-mail corporativo</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="service">Tipo de serviço</Label>
                      <div className="relative">
                        <select 
                          id="service"
                          defaultValue=""
                          className="flex h-12 w-full appearance-none rounded-md border border-border bg-canvas px-3 py-2 text-sm font-sans text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors cursor-pointer"
                        >
                          <option value="" disabled className="text-muted">Selecione uma opção</option>
                          <option value="projeto">Projeto de Engenharia</option>
                          <option value="laudo">Laudos Técnicos</option>
                          <option value="gerenciamento">Gerenciamento de Obras</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="message">Descreva brevemente seu projeto</Label>
                      <Textarea id="message" placeholder="Conte-nos um pouco sobre a sua necessidade..." />
                    </div>
                    
                    <div className="pt-4 flex gap-3">
                      <Button type="button" variant="secondary" className="w-full" onClick={prevStep}>
                        Voltar
                      </Button>
                      <Button type="submit" variant="primary" className="w-full">
                        Enviar &rarr;
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center min-h-[400px] py-8"
          >
            <CheckCircle2 className="w-16 h-16 text-success mb-6" />
            <h4 className="font-sans font-semibold text-[24px] text-ink mb-2">Formulário enviado com sucesso!</h4>
            <p className="font-sans text-[16px] text-body mb-8">Entraremos em contato em breve com mais informações sobre o seu projeto.</p>
            <Button variant="secondary" onClick={() => { setIsSubmitted(false); setStep(1); }}>
              Enviar nova mensagem
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
