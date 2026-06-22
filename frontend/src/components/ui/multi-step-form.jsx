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
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    website_url: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | "success" | "error"
  const [errors, setErrors] = useState({});

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Nome completo é obrigatório";
    }
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!phoneDigits || phoneDigits.length < 10) {
      newErrors.phone = "Telefone inválido (mínimo 10 dígitos numéricos)";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }
    if (!formData.service) {
      newErrors.service = "Selecione um tipo de serviço";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Descreva brevemente seu projeto";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check: Abort silently if honeypot field is filled
    if (formData.website_url) {
      return;
    }

    if (!validate()) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 4000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
      
      if (!webhookUrl) {
        // Fallback for development if not configured yet
        console.warn("VITE_N8N_WEBHOOK_URL is not defined in the environment.");
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitStatus("success");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          service: "",
          message: "",
          website_url: ""
        });
        setErrors({});
        setTimeout(() => {
          setIsSubmitted(true);
          setSubmitStatus(null);
        }, 1000);
        return;
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.name,
          empresa: formData.company,
          telefone: formData.phone,
          email: formData.email,
          servico: formData.service,
          mensagem: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          service: "",
          message: "",
          website_url: ""
        });
        setErrors({});
        
        setTimeout(() => {
          setIsSubmitted(true);
          setSubmitStatus(null);
        }, 1500);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 4000);
      }
    } catch (err) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 4000);
    } finally {
      setIsSubmitting(false);
    }
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
              {/* Honeypot anti-spam field */}
              <div className="sr-only absolute w-0 h-0 overflow-hidden" aria-hidden="true">
                <Label htmlFor="website_url">Website URL</Label>
                <input
                  id="website_url"
                  type="text"
                  name="website_url"
                  tabIndex="-1"
                  value={formData.website_url}
                  onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                  autoComplete="off"
                />
              </div>

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
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: João Silva"
                      />
                      {errors.name && <span className="text-red-500 text-xs font-sans mt-0.5">{errors.name}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="company">Nome da empresa</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Sua empresa"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Telefone / WhatsApp</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(00) 00000-0000"
                      />
                      {errors.phone && <span className="text-red-500 text-xs font-sans mt-0.5">{errors.phone}</span>}
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
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                      />
                      {errors.email && <span className="text-red-500 text-xs font-sans mt-0.5">{errors.email}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="service">Tipo de serviço</Label>
                      <div className="relative">
                        <select 
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="flex h-12 w-full appearance-none rounded-md border border-border bg-canvas px-3 py-2 text-sm font-sans text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors cursor-pointer"
                        >
                          <option value="" disabled className="text-muted">Selecione um serviço...</option>
                          <option value="Projetos Arquitetônicos">Projetos Arquitetônicos</option>
                          <option value="Projetos Hidrossanitários">Projetos Hidrossanitários</option>
                          <option value="Projetos Elétricos">Projetos Elétricos</option>
                          <option value="Combate a Incêndio">Combate a Incêndio</option>
                          <option value="Infraestrutura">Infraestrutura</option>
                          <option value="Estrutura Metálica">Estrutura Metálica</option>
                          <option value="Estruturais de Concreto">Estruturais de Concreto</option>
                          <option value="BIM">BIM</option>
                          <option value="Ensaios Não Destrutivos">Ensaios Não Destrutivos</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                      {errors.service && <span className="text-red-500 text-xs font-sans mt-0.5">{errors.service}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="message">Descreva brevemente seu projeto</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Conte-nos um pouco sobre a sua necessidade..."
                      />
                      {errors.message && <span className="text-red-500 text-xs font-sans mt-0.5">{errors.message}</span>}
                    </div>
                    
                    <div className="pt-4 flex gap-3">
                      <Button type="button" variant="secondary" className="w-full" onClick={prevStep} disabled={isSubmitting}>
                        Voltar
                      </Button>
                      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                        {isSubmitting
                          ? "Enviando..."
                          : submitStatus === "success"
                          ? "Mensagem Enviada!"
                          : submitStatus === "error"
                          ? "Erro ao enviar"
                          : "Enviar \u2192"}
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
