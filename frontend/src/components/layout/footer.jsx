import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { Button } from "../ui/button";
import { TextLink } from "../ui/text-link";

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
            <TextLink href="/" className="text-white/80 hover:text-white">Início</TextLink>
            <TextLink href="/sobre-nos" className="text-white/80 hover:text-white">Sobre nós</TextLink>
            <TextLink href="/servicos" className="text-white/80 hover:text-white">Serviços</TextLink>
            <TextLink href="/blog" className="text-white/80 hover:text-white">Blog</TextLink>
          </div>
          <a href="/contato">
            <Button variant="primary" className="mt-8 text-sm">
              Contato <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>

        {/* Coluna 3: Serviços */}
        <div className="flex flex-col items-start">
          <h4 className="text-primary font-semibold text-lg mb-6">Serviços</h4>
          <div className="flex flex-col gap-3">
            <TextLink href="/servicos/projeto-arquitetonico" className="text-white/80 hover:text-white">Projetos Arquitetônicos</TextLink>
            <TextLink href="/servicos/projeto-hidrossanitario" className="text-white/80 hover:text-white">Projetos Hidrossanitários</TextLink>
            <TextLink href="/servicos/projeto-eletrico" className="text-white/80 hover:text-white">Projetos Elétricos</TextLink>
            <TextLink href="/servicos/projeto-combate-incendio" className="text-white/80 hover:text-white">Combate a Incêndio</TextLink>
            <TextLink href="/servicos/projeto-infraestrutura" className="text-white/80 hover:text-white">Infraestrutura</TextLink>
            <TextLink href="/servicos/projeto-estrutura-metalica" className="text-white/80 hover:text-white">Estrutura Metálica</TextLink>
            <TextLink href="/servicos/projeto-estrutural-concreto" className="text-white/80 hover:text-white">Estruturais de Concreto</TextLink>
            <TextLink href="/servicos/bim" className="text-white/80 hover:text-white">BIM</TextLink>
            <TextLink href="/servicos/ensaios-nao-destrutivos" className="text-white/80 hover:text-white">Ensaios Não Destrutivos</TextLink>
          </div>
        </div>

        {/* Coluna 4: Legal */}
        <div className="flex flex-col items-start">
          <h4 className="text-primary font-semibold text-lg mb-6">Legal</h4>
          <div className="flex flex-col gap-3">
            <TextLink href="/politica-de-privacidade" className="text-white/80 hover:text-white">Políticas de Privacidade</TextLink>
            <TextLink href="/termos-de-uso" className="text-white/80 hover:text-white">Termos de Serviço</TextLink>
            <TextLink href="/politica-de-privacidade#cookies" className="text-white/80 hover:text-white">Uso de Cookies</TextLink>
          </div>
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
