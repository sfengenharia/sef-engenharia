import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../utils/cn";
import { Button } from "../ui/button";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre nós", href: "/sobre-nos" },
  { label: "Blog", href: "/blog" },
];

const serviceItems = [
  { label: "Projetos Arquitetônicos", href: "/servicos/projeto-arquitetonico" },
  { label: "Projetos Hidrossanitários", href: "/servicos/projeto-hidrossanitario" },
  { label: "Projetos Elétricos", href: "/servicos/projeto-eletrico" },
  { label: "Combate a Incêndio", href: "/servicos/projeto-combate-incendio" },
  { label: "Infraestrutura", href: "/servicos/projeto-infraestrutura" },
  { label: "Estrutura Metálica", href: "/servicos/projeto-estrutura-metalica" },
  { label: "Estruturais de Concreto", href: "/servicos/projeto-estrutural-concreto" },
  { label: "BIM", href: "/servicos/bim" },
  { label: "Ensaios Não Destrutivos", href: "/servicos/ensaios-nao-destrutivos" },
];

const solidRoutes = ["/blog", "/contato"];

export function Navbar({ inline = false, className }) {
  const location = useLocation();
  const forceSolid = solidRoutes.some((r) => location.pathname.startsWith(r));

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (inline) return;
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inline]);

  return (
    <nav
      className={cn(
        "w-full flex items-center justify-between px-6 py-4 rounded-[15px] border-[0.518px] border-solid border-black transition-all duration-500",
        scrolled || forceSolid
          ? "bg-[rgba(33,31,31,0.85)] backdrop-blur-[16px] shadow-lg"
          : "bg-[rgba(33,31,31,0.30)] backdrop-blur-[5.18px]",
        inline ? "relative" : "sticky top-4 z-50",
        className
      )}
    >
      {/* Logo */}
      <a href="/" className="flex items-center shrink-0">
        <img src="/logosef.svg" alt="S&F Engenharia" className="h-[50px] w-auto" />
      </a>

      {/* Desktop Navigation (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => {
          const isActive = window.location.pathname === link.href;
          return (
          <a
            key={link.label}
            href={link.href}
            className={cn(
              "px-3 py-2 font-sans text-[14px] text-white/90 hover:text-white transition-colors duration-300 border-b-2",
              isActive
                ? "border-primary"
                : "border-transparent hover:border-primary/50"
            )}
          >
            {link.label}
          </a>
          );
        })}

        {/* Services Dropdown */}
        <div
          className="group relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <a href="/servicos" className="flex items-center gap-1 px-3 py-2 font-sans text-[14px] text-white/90 hover:text-white transition-colors duration-300 border-b-2 border-transparent hover:border-primary/50 cursor-pointer">
            Serviços
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform duration-300",
                servicesOpen && "rotate-180"
              )}
            />
          </a>

          <AnimatePresence>
            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full pt-2 z-50"
              >
                <div className="flex flex-col min-w-[220px] bg-surface-dark/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden">
                  {serviceItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="px-4 py-3 font-sans text-[14px] text-white/80 hover:text-primary hover:bg-white/5 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:block">
        <a href="/contato">
          <Button variant="primary" className="text-[14px] px-6 py-2.5">
            Contato <ArrowUpRight className="w-4 h-4" />
          </Button>
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center justify-center text-white p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
      >
        {mobileOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 mt-2 bg-surface-dark/95 backdrop-blur-md border border-white/10 rounded-xl shadow-xl overflow-hidden md:hidden z-50"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => {
                const isActive = window.location.pathname === link.href;
                return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 font-sans text-[15px] rounded-lg transition-colors duration-200",
                    isActive
                      ? "text-primary font-semibold bg-primary/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </a>
                );
              })}

              {/* Mobile Services Accordion */}
              <div className="flex items-center justify-between pr-2 rounded-lg transition-colors duration-200 hover:bg-white/5">
                <a
                  href="/servicos"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 px-4 py-3 font-sans text-[15px] text-white/80 hover:text-white"
                >
                  Serviços
                </a>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="p-3 text-white/80 hover:text-white"
                  aria-label="Alternar subsetores de serviços"
                >
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>
              </div>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col pl-4 gap-0.5">
                      {serviceItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="px-4 py-2.5 font-sans text-[14px] text-white/60 hover:text-primary rounded-lg transition-colors duration-200"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile CTA */}
              <div className="pt-3 mt-2 border-t border-white/10">
                <a href="/contato" onClick={() => setMobileOpen(false)}>
                  <Button
                    variant="primary"
                    className="w-full text-[14px]"
                  >
                    Contato <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
