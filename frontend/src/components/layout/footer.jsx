import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { Button } from "../ui/button";
import { TextLink } from "../ui/text-link";
import { NewsletterInput } from "../ui/newsletter-input";

export function Footer({ className }) {
  return (
    <footer
      className={cn(
        "bg-surface-dark text-white/80 py-16 font-sans w-full",
        className
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Coluna 1: Logo */}
        <div className="flex flex-col items-start gap-4">
          <a href="/" className="flex items-center shrink-0">
            <img src="/logosef.svg" alt="S&F Engenharia" className="h-[60px] w-auto brightness-0 invert" />
          </a>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="flex flex-col items-start">
          <h4 className="text-primary font-semibold text-lg mb-6">Links Rápidos</h4>
          <div className="flex flex-col gap-3">
            <TextLink href="#" className="text-white/80 hover:text-white">Início</TextLink>
            <TextLink href="#" className="text-white/80 hover:text-white">Sobre nós</TextLink>
            <TextLink href="#" className="text-white/80 hover:text-white">Serviços</TextLink>
          </div>
          <Button variant="primary" className="mt-8 text-sm">
            Contato <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Coluna 3: Legal */}
        <div className="flex flex-col items-start">
          <h4 className="text-primary font-semibold text-lg mb-6">Legal</h4>
          <div className="flex flex-col gap-3">
            <TextLink href="#" className="text-white/80 hover:text-white">Políticas de Privacidade</TextLink>
            <TextLink href="#" className="text-white/80 hover:text-white">Termos de Serviço</TextLink>
            <TextLink href="#" className="text-white/80 hover:text-white">Uso de Cookies</TextLink>
          </div>
        </div>

        {/* Coluna 4: Newsletter */}
        <div className="flex flex-col items-start">
          <h4 className="text-primary font-semibold text-lg mb-6">Fique por dentro</h4>
          <p className="text-sm text-white/60 mb-4">
            Receba insights e novidades sobre projetos de engenharia industrial.
          </p>
          <NewsletterInput />
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} S&F Engenharia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
