import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./button";

const CONSENT_KEY = "sf_cookie_consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setIsVisible(true);
    }
  }, []);

  const persistConsent = (value) => {
    localStorage.setItem(CONSENT_KEY, value);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full z-50 bg-surface-dark border-t border-white/10"
          role="dialog"
          aria-label="Aviso de privacidade e cookies"
        >
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <p className="flex-1 text-sm leading-relaxed text-white/80">
              Utilizamos cookies para melhorar a sua experiência de navegação, analisar o
              tráfego do site e personalizar conteúdo. Ao continuar navegando, você concorda
              com a nossa{" "}
              <a
                href="/politica-de-privacidade#cookies"
                className="font-medium text-primary hover:underline"
              >
                Política de Privacidade
              </a>
              .
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <Button
                variant="secondary"
                className="bg-transparent border border-white/40 text-white hover:bg-white/10 hover:text-white"
                onClick={() => persistConsent("essential")}
              >
                Configurar
              </Button>
              <Button variant="primary" onClick={() => persistConsent("true")}>
                Aceitar Todos
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
