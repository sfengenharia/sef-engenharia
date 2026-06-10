import { useState } from "react";
import {
  Check,
  Copy,
  Layers,
  Component,
  Search,
  ExternalLink,
  FileCode,
  Eye,
  Info,
  ArrowUpRight,
  Award,
  Smartphone,
  Mail,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Eyebrow } from "../components/ui/eyebrow";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { PowerNumber } from "../components/ui/power-number";
import { FeatureCheckCard } from "../components/ui/feature-check-card";
import { SpecHeader } from "../components/ui/spec-header";
import { TextLink } from "../components/ui/text-link";
import { DropdownLink } from "../components/ui/dropdown-link";
import { ContactLink } from "../components/ui/contact-link";
import { ChecklistItem } from "../components/ui/checklist-item";
import { AlertListCard } from "../components/ui/alert-list-card";
import { HighlightBlock } from "../components/ui/highlight-block";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { MultiStepForm } from "../components/ui/multi-step-form";
import { NewsletterInput } from "../components/ui/newsletter-input";
import { CtaCard } from "../components/ui/cta-card";
import { InfoCard } from "../components/ui/info-card";
import { FeatureCard } from "../components/ui/feature-card";
import { AppCard } from "../components/ui/app-card";

import acessoDiretoImg from "../assets/acesso-direto.png";
import projetoArquitetonicoImg from "../assets/projeto-arquitetonico.png";

// ==========================================
// Subcomponente de Bloco de Código
// ==========================================
function CodeBlock({ code, language = "jsx" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex flex-col bg-surface-dark border border-border/30 rounded-none overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-surface-dark border-b border-white/10">
        <div className="flex items-center gap-2">
          <FileCode className="w-3.5 h-3.5 text-on-dark-muted" />
          <span className="text-[11px] font-mono text-on-dark-muted uppercase tracking-wider">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[12px] text-on-dark-muted hover:text-on-dark transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-success" />
              <span className="text-success font-medium">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-[13px] font-mono text-on-dark-muted whitespace-pre-wrap leading-[1.6]">
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
}

// ==========================================
// Componente Wrapper de Item da Biblioteca
// ==========================================
function LibraryComponentItem({ title, description, code, noPadding, children }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border border-border bg-canvas rounded-none overflow-hidden flex flex-col">
      {/* Header Info */}
      <div className="p-6 border-b border-border bg-canvas flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-[18px] font-bold text-ink tracking-tight font-sans">{title}</h3>
          {description && <p className="text-[14px] text-body mt-1">{description}</p>}
        </div>
        <button
          onClick={() => setShowCode(!showCode)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium border border-border hover:bg-surface-muted transition-colors cursor-pointer self-start md:self-auto rounded-none text-ink"
        >
          {showCode ? (
            <>
              <Eye className="w-4 h-4" />
              <span>Ver Preview</span>
            </>
          ) : (
            <>
              <FileCode className="w-4 h-4" />
              <span>Ver Código</span>
            </>
          )}
        </button>
      </div>

      {/* Preview Canvas */}
      <div className={`bg-surface-muted/60 w-full flex items-center justify-center min-h-[160px] border-b border-border ${noPadding ? 'p-0' : 'p-8'} ${showCode ? 'hidden' : 'block'}`}>
        <div className="w-full max-w-full flex justify-center">{children}</div>
      </div>

      {/* Code Area */}
      <div className={showCode ? 'block' : 'hidden'}>
        <CodeBlock code={code} />
      </div>
    </div>
  );
}

// ==========================================
// Página Principal da Biblioteca
// ==========================================
export function ComponentLibrary() {
  const [activeComponent, setActiveComponent] = useState("buttons");
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { id: "buttons", label: "Buttons" },
    { id: "navigation", label: "Navigation" },
    { id: "eyebrow", label: "Eyebrow & Lists" },
    { id: "cards", label: "Cards" },
    { id: "forms", label: "Forms" }
  ];

  const filteredNavItems = navItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen w-full font-sans overflow-hidden bg-surface-muted text-ink">

      {/* Sidebar */}
      <div className="w-72 bg-canvas flex flex-col border-r border-border shrink-0 sticky top-0 h-full">
        {/* Sidebar Header */}
        <div className="flex items-center gap-3 px-6 py-8 border-b border-border">
          <div className="bg-primary/10 p-2 rounded-none flex items-center justify-center">
            <Layers className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-[18px] text-ink leading-tight tracking-tight uppercase">S&amp;F Engenharia</h1>
            <span className="text-[10px] font-bold text-muted uppercase tracking-widest mt-0.5">
              Design System Library
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filtrar componentes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-muted border border-border text-[13px] py-2 pl-9 pr-4 rounded-none outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 px-3 py-4 gap-1 overflow-y-auto flex flex-col">
          {filteredNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveComponent(item.id)}
              className={`text-left px-4 py-3 text-[14px] font-semibold rounded-none transition-colors flex items-center justify-between cursor-pointer ${activeComponent === item.id
                  ? "bg-surface-muted text-ink border-l-4 border-primary"
                  : "text-muted hover:text-ink hover:bg-surface-muted/50 border-l-4 border-transparent"
                }`}
            >
              <span className="font-sans tracking-tight">{item.label}</span>
              <Component className="w-4 h-4 opacity-40" />
            </button>
          ))}
          {filteredNavItems.length === 0 && (
            <span className="text-xs text-muted p-4 text-center">Nenhum componente encontrado.</span>
          )}
        </nav>

        {/* Sidebar Footer Info */}
        <div className="p-4 border-t border-border bg-surface-muted/40 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Info className="w-3.5 h-3.5" />
            <span>Versão 1.0.0 (Alpha)</span>
          </div>
          <a
            href="/"
            className="text-xs text-primary hover:text-primary-hover font-semibold flex items-center gap-0.5 transition-colors"
          >
            <span>Voltar ao site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="p-10 md:p-16 max-w-5xl w-full mx-auto flex flex-col gap-12 pb-24">

          {/* Page Title */}
          <div>
            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="inline-block w-6 h-[1px] bg-primary"></span>
              Especificação Técnica UI
            </div>
            <h2 className="text-[40px] font-extrabold text-ink capitalize tracking-tight font-sans leading-none mb-4">
              {activeComponent}
            </h2>
            <p className="text-[16px] text-body leading-[1.6] max-w-[600px]">
              Confira os estados interativos, comportamentos e código-fonte oficial da categoria{" "}
              <strong className="text-primary font-bold uppercase">{activeComponent}</strong>.
            </p>
          </div>

          <hr className="border-t border-border" />

          {/* Render Active Component Group */}
          <div className="flex flex-col gap-10">
            {activeComponent === "buttons" ? (
              <>
                <LibraryComponentItem
                  title="Primary Button"
                  description="Ação principal. Fundo amarelo, texto escuro. No hover, escurece e o texto fica branco."
                  code={`<Button variant="primary">\n  Solicitar orçamento <ArrowUpRight className="ml-2 w-4 h-4" />\n</Button>`}
                >
                  <Button variant="primary">
                    Solicitar orçamento <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Secondary Button"
                  description="Ação secundária. Fundo claro com texto amarelo. No hover, o fundo fica sólido escurecendo o texto."
                  code={`<Button variant="secondary">\n  Conheça nossos serviços\n</Button>`}
                >
                  <Button variant="secondary">Conheça nossos serviços</Button>
                </LibraryComponentItem>
              </>
            ) : activeComponent === "eyebrow" ? (
              <>
                <LibraryComponentItem
                  title="Eyebrow"
                  description="Rótulo de abertura de seção. Traço amarelo seguido de texto. No hover, o texto acompanha a cor do traço."
                  code={`<Eyebrow>S&F Engenharia LTDA.</Eyebrow>`}
                >
                  <Eyebrow>S&F Engenharia LTDA.</Eyebrow>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Spec Header"
                  description="Cabeçalho técnico estruturado para listas e especificações. Suporta variantes primary (amarela) e neutral (preta) com interações de hover."
                  code={`<SpecHeader title="Escopo do projeto" variant="primary" />\n<SpecHeader title="Edificações Atendidas" variant="neutral" />`}
                >
                  <div className="flex flex-col gap-4 w-[384px] max-w-full mx-auto">
                    <SpecHeader title="Escopo do projeto" variant="primary" />
                    <SpecHeader title="Edificações Atendidas" variant="neutral" />
                  </div>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Checklist Item"
                  description="Item de lista estático com ícone de check. Possui variantes primary (amarela) e ink (preta) para estruturar blocos de informação."
                  code={`<ChecklistItem variant="primary">Estudo preliminar e análise de viabilidade arquitetônica</ChecklistItem>\n<ChecklistItem variant="ink">Residências, apartamentos e condomínios</ChecklistItem>`}
                >
                  <div className="flex flex-col gap-3">
                    <ChecklistItem variant="primary">Estudo preliminar e análise de viabilidade arquitetônica</ChecklistItem>
                    <ChecklistItem variant="ink">Residências, apartamentos e condomínios</ChecklistItem>
                  </div>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Alert List Card"
                  description="Bloco de informações ou normas técnicas rigorosas. Delimitado por traços amarelos nos extremos para quebrar a previsibilidade do design clear e chamar a atenção, mantendo o fundo transparente."
                  code={`<AlertListCard \n  icon={TriangleAlert}\n  items={[\n    "ABNT NBR 5626 — Instalação predial de água fria",\n    "ABNT NBR 7198 — Instalações prediais de água quente"\n  ]}\n/>`}
                >
                  <div className="w-full max-w-4xl mx-auto flex justify-center">
                    <AlertListCard
                      icon={TriangleAlert}
                      items={[
                        "ABNT NBR 5626 — Instalação predial de água fria",
                        "ABNT NBR 7198 — Instalações prediais de água quente",
                        "ABNT NBR 8160 — Sistemas prediais de esgoto sanitário",
                        "ABNT NBR 10844 — Instalações prediais de águas pluviais"
                      ]}
                    />
                  </div>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Highlight Block"
                  description="Bloco de citação ou destaque de texto com borda amarela. Funciona sem fundo, ideal para narrativas de posicionamento."
                  code={`<HighlightBlock className="text-muted text-lg">\n  A S & F Engenharia <strong className="italic text-ink">nasceu em 2012</strong> em Araxá/MG.\n</HighlightBlock>`}
                >
                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-3xl">
                      <HighlightBlock className="text-muted text-[18px]">
                        A S & F Engenharia <strong className="italic text-ink">nasceu em 2012</strong> em Araxá/MG. Por anos, como a maioria das empresas do setor, fornecíamos horas técnicas. A virada aconteceu quando entendemos que o cliente não compra engenharia — ele compra o resultado que a engenharia traz.
                      </HighlightBlock>
                    </div>
                  </div>
                </LibraryComponentItem>
              </>
            ) : activeComponent === "cards" ? (
              <>
                <LibraryComponentItem
                  title="Power Number"
                  description="Métrica de destaque. Ícone com fundo claro que transita para sólido no hover, acompanhado de valor e label."
                  code={`<PowerNumber icon={Award} value="+14 anos" label="de projetos entregues" />`}
                >
                  <PowerNumber icon={Award} value="+14 anos" label="de projetos entregues" />
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Feature Check Card"
                  description="Cartão de listagem de garantias com ícone de check. Possui hover dinâmico no ícone verde."
                  code={`<FeatureCheckCard \n  title="Garantia de Conformidade" \n  description="Cumprimento rigoroso das normas técnicas (NRs) e padrões internos de grandes operações industriais." \n/>`}
                >
                  <FeatureCheckCard
                    title="Garantia de Conformidade"
                    description="Cumprimento rigoroso das normas técnicas (NRs) e padrões internos de grandes operações industriais."
                  />
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="CTA Card"
                  description="Card de composição focado em conversão. Agrupa Eyebrow, um título forte com destaque, descrição e botão."
                  code={`<CtaCard \n  eyebrowText="Fale conosco" \n  titleMain="Precisa de um projeto técnico" \n  titleHighlight="com prazo garantido?" \n  description="Fale com nossa equipe. Retornamos com uma proposta técnica em até 24 horas úteis." \n  buttonText="Solicitar orçamento" \n/>`}
                >
                  <div className="w-full max-w-4xl mx-auto flex justify-center">
                    <CtaCard
                      eyebrowText="Fale conosco"
                      titleMain="Precisa de um projeto técnico"
                      titleHighlight="com prazo garantido?"
                      description="Fale com nossa equipe. Retornamos com uma proposta técnica em até 24 horas úteis."
                      buttonText="Solicitar orçamento"
                    />
                  </div>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Info Card"
                  description="Cartão focado em detalhamento técnico. Compartilha a mesma base visual do CtaCard, porém mais enxuto."
                  code={`<InfoCard \n  title="Análise de Vibrações" \n  description="Avalia o comportamento dinâmico de estruturas sob carregamento real. Identifica frequências naturais, modos de vibração e riscos de ressonância em pontes, passarelas, galpões e estruturas industriais. Indicado para manutenção preditiva de plantas industriais." \n/>`}
                >
                  <div className="w-full max-w-4xl mx-auto flex justify-center">
                    <InfoCard
                      title="Análise de Vibrações"
                      description="Avalia o comportamento dinâmico de estruturas sob carregamento real. Identifica frequências naturais, modos de vibração e riscos de ressonância em pontes, passarelas, galpões e estruturas industriais. Indicado para manutenção preditiva de plantas industriais."
                    />
                  </div>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Feature Card"
                  description="Cartão para apresentar diferenciais e características. Baseia-se no card padrão adicionando um ícone com fundo de destaque da cor primária."
                  code={`<FeatureCard \n  icon={ShieldCheck}\n  title="Segurança e Normas" \n  description="Implementação de protocolos rigorosos que garantem a integridade física e o cumprimento das normas regulamentadoras em todas as frentes de trabalho." \n/>`}
                >
                  <div className="w-full max-w-4xl mx-auto flex justify-center">
                    <FeatureCard
                      icon={ShieldCheck}
                      title="Segurança e Normas"
                      description="Implementação de protocolos rigorosos que garantem a integridade física e o cumprimento das normas regulamentadoras em todas as frentes de trabalho."
                    />
                  </div>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="App Card"
                  description="Cartão versátil para exibição de cases e serviços. Aceita variações com imagem de fundo ou cor sólida com ícone, além de injeção opcional de botões."
                  code={`<AppCard \n  variant="image" \n  imageSrc="..." \n  title="Projetos Arquitetônicos" \n  buttonText="Ver mais" \n  buttonVariant="secondary" \n/>`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
                    {/* Card 1: Imagem sem botão */}
                    <AppCard
                      variant="image"
                      imageSrc={acessoDiretoImg}
                      title="Acesso direto ao projetista"
                      description="Tenha linha direta com quem realmente pensa o seu projeto."
                    />

                    {/* Card 2: Ícone com botão primário */}
                    <AppCard
                      variant="icon"
                      icon={Award}
                      title="Mais de 14 anos"
                      description="De projetos entregues com sucesso e segurança atestada."
                      buttonText="Saiba mais"
                      buttonVariant="primary"
                    />

                    {/* Card 3: Imagem com botão secundário */}
                    <AppCard
                      variant="image"
                      imageSrc={projetoArquitetonicoImg}
                      title="Projetos Arquitetônicos"
                      description="Planta baixa, cortes, fachadas e estudo 3D integrado."
                      buttonText="Ver mais"
                      buttonVariant="secondary"
                    />
                  </div>
                </LibraryComponentItem>
              </>
            ) : activeComponent === "navigation" ? (
              <>
                <LibraryComponentItem
                  title="Text Link"
                  description="Link de navegação textual com estado hover/active que adiciona uma borda inferior amarela."
                  code={`<TextLink href="#">Home</TextLink>\n<TextLink href="#" active>Serviços</TextLink>`}
                >
                  <div className="flex items-center gap-6">
                    <TextLink href="#">Home</TextLink>
                    <TextLink href="#" active>Serviços</TextLink>
                  </div>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Dropdown Link"
                  description="Menu suspenso para links com sub-itens."
                  code={`const items = [\n  { label: "Serviço 1", href: "#" },\n  { label: "Serviço 2", href: "#" }\n];\n<DropdownLink title="Serviços" items={items} />`}
                >
                  <div className="flex items-start justify-center w-full min-h-[200px]">
                    <DropdownLink
                      title="Serviços"
                      items={[
                        { label: "Projetos de Engenharia", href: "#" },
                        { label: "Consultoria e Laudos", href: "#" },
                        { label: "Gerenciamento de Obras", href: "#" }
                      ]}
                    />
                  </div>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Contact Link"
                  description="Link de contato com ícone dinâmico usado primariamente no header e footer."
                  code={`<ContactLink icon={Smartphone} text="(34) 99137-0001" href="tel:+5534991370001" />\n<ContactLink icon={Mail} text="contato@sfengenharia.com.br" href="mailto:contato@sfengenharia.com.br" />`}
                >
                  <div className="flex flex-col gap-4">
                    <ContactLink icon={Smartphone} text="(34) 99137-0001" href="tel:+5534991370001" />
                    <ContactLink icon={Mail} text="contato@sfengenharia.com.br" href="mailto:contato@sfengenharia.com.br" />
                  </div>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Navbar"
                  description="Barra de navegação responsiva com glassmorphism, detecção de scroll e drawer mobile animado. Componente de composição que utiliza Button, TextLink e DropdownLink."
                  noPadding
                  code={`<Navbar inline />`}
                >
                  <div className="relative w-full overflow-hidden rounded-xl">
                    <div className="p-4 min-h-[80px] flex items-center">
                      <Navbar inline className="w-full" />
                    </div>
                  </div>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Footer"
                  description="Rodapé completo com grid responsivo, navegação, informações legais e captura de newsletter. Ajusta-se de 1 para 4 colunas dependendo do breakpoint."
                  noPadding
                  code={`<Footer />`}
                >
                  <div className="w-full relative overflow-hidden rounded-xl border border-border">
                    <Footer />
                  </div>
                </LibraryComponentItem>
              </>
            ) : activeComponent === "forms" ? (
              <>
                <LibraryComponentItem
                  title="Input Field"
                  description="Campo de entrada base seguindo o padrão shadcn/ui. Suporta os estados padrão, foco e erro."
                  code={`<Input placeholder="E-mail" />\n<Input placeholder="Com erro..." error />\n<Input placeholder="Desabilitado" disabled />`}
                >
                  {/* FIX APLICADO: A largura agora é rígida e não sofre flex collapse */}
                  <div className="w-[400px] max-w-full flex flex-col gap-4">
                    <Input placeholder="Input Normal" />
                    <Input placeholder="Input com erro" error />
                    <Input placeholder="Input desabilitado" disabled />
                  </div>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Textarea"
                  description="Campo de texto longo seguindo o mesmo estilo do Input."
                  code={`<Textarea placeholder="Descreva seu projeto..." />\n<Textarea placeholder="Com erro..." error />`}
                >
                  {/* FIX APLICADO */}
                  <div className="w-[400px] max-w-full flex flex-col gap-4">
                    <Textarea placeholder="Textarea Normal" />
                    <Textarea placeholder="Textarea com erro" error />
                  </div>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Multi Step Form"
                  description="Formulário animado de etapas utilizando Framer Motion. Agrupa Label, Input, Textarea e o seletor Step Toggle em um cartão interativo com estado de sucesso."
                  code={`<MultiStepForm />`}
                >
                  {/* FIX APLICADO: Container formatado como card e protegido contra colapso */}
                  <div className="w-[448px] max-w-full bg-canvas p-8 rounded-xl border border-border shadow-sm mx-auto">
                    <MultiStepForm />
                  </div>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Newsletter Input"
                  description="Input de captura de e-mail com botão acoplado. Segue o border-radius do design system."
                  code={`<NewsletterInput />`}
                >
                  <div className="w-[400px] max-w-full flex justify-center">
                    <NewsletterInput />
                  </div>
                </LibraryComponentItem>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 border border-dashed border-border rounded-none bg-canvas py-20 text-center">
                <Component className="w-8 h-8 text-muted/50" />
                <p className="text-[15px] text-body">Nenhum componente cadastrado nesta categoria ainda.</p>
                <p className="text-[13px] text-muted">Os primitivos serão injetados aqui conforme a Fase 2 avança.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}