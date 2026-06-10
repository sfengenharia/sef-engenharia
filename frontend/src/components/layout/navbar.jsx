import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../utils/cn";
import { Button } from "../ui/button";

const navLinks = [
  { label: "Início", href: "#", active: true },
  { label: "Sobre nós", href: "#" },
];

const serviceItems = [
  { label: "Projetos de Engenharia", href: "#" },
  { label: "Consultoria e Laudos", href: "#" },
  { label: "Gerenciamento de Obras", href: "#" },
];

export function Navbar({ inline = false, className }) {
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
        scrolled
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
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={cn(
              "px-3 py-2 font-sans text-[14px] text-white/90 hover:text-white transition-colors duration-300 border-b-2",
              link.active
                ? "border-primary"
                : "border-transparent hover:border-primary/50"
            )}
          >
            {link.label}
          </a>
        ))}

        {/* Services Dropdown */}
        <div
          className="group relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button className="flex items-center gap-1 px-3 py-2 font-sans text-[14px] text-white/90 hover:text-white transition-colors duration-300 border-b-2 border-transparent hover:border-primary/50 cursor-default">
            Serviços
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform duration-300",
                servicesOpen && "rotate-180"
              )}
            />
          </button>

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
        <Button variant="primary" className="text-[14px] px-6 py-2.5">
          Contato <ArrowUpRight className="w-4 h-4" />
        </Button>
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
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 font-sans text-[15px] rounded-lg transition-colors duration-200",
                    link.active
                      ? "text-primary font-semibold bg-primary/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Services Accordion */}
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between px-4 py-3 font-sans text-[15px] text-white/80 hover:text-white rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                Serviços
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>

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
                <Button
                  variant="primary"
                  className="w-full text-[14px]"
                  onClick={() => setMobileOpen(false)}
                >
                  Contato <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
