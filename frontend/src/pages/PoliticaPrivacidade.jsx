import React from "react";
import { Eyebrow } from "../components/ui/eyebrow";
import { companyData } from "../data/legal-texts";

export function PoliticaPrivacidade() {
  return (
    <main className="w-full bg-canvas">
      <div className="w-full max-w-3xl mx-auto px-6 md:px-8 pt-32 pb-24">
        <Eyebrow text="Privacidade" className="mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-ink tracking-tight leading-tight">
          Política de Privacidade
        </h1>
        <p className="text-sm text-muted mt-3 mb-10">
          Última atualização: Junho de 2026
        </p>

        <p className="text-ink/70 leading-relaxed mb-4">
          A {companyData.razaoSocial}, inscrita no CNPJ {companyData.cnpj}, com sede em{" "}
          {companyData.endereco} ("S&F Engenharia", "nós"), respeita a sua privacidade e está
          comprometida com a proteção dos dados pessoais tratados por meio deste site, em
          conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD).
        </p>
        <p className="text-ink/70 leading-relaxed mb-4">
          Esta política explica quais dados coletamos, como os utilizamos e quais são os seus
          direitos como titular.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-ink mt-10 mb-3">
          1. Dados que coletamos
        </h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Coletamos apenas os dados estritamente necessários para responder às suas solicitações.
          Quando você preenche um de nossos formulários de contato ou de solicitação de orçamento,
          podemos coletar:
        </p>
        <ul className="list-disc pl-5 text-ink/70 leading-relaxed space-y-2 mb-4">
          <li>Nome completo;</li>
          <li>Endereço de e-mail e telefone;</li>
          <li>Empresa e cargo (quando informados);</li>
          <li>O conteúdo da mensagem ou descrição do projeto que você nos envia.</li>
        </ul>
        <p className="text-ink/70 leading-relaxed mb-4">
          Também coletamos automaticamente dados de navegação por meio de cookies, conforme
          descrito na seção específica abaixo.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-ink mt-10 mb-3">
          2. Como utilizamos os seus dados
        </h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Os dados fornecidos por meio dos formulários são utilizados exclusivamente para:
          (i) responder à sua solicitação e elaborar propostas técnicas; (ii) manter o
          relacionamento comercial; e (iii) enviar comunicações que você tenha autorizado, como
          a nossa newsletter. Não vendemos nem compartilhamos seus dados com terceiros para fins
          de marketing.
        </p>

        <h2 id="cookies" className="text-xl md:text-2xl font-semibold text-ink mt-10 mb-3 scroll-mt-32">
          3. Uso de cookies
        </h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Utilizamos cookies para garantir o funcionamento do site, lembrar suas preferências,
          medir audiência e melhorar a sua experiência de navegação. Cookies são pequenos arquivos
          armazenados no seu navegador. Você pode, a qualquer momento, gerenciar ou bloquear os
          cookies nas configurações do seu navegador — note que a desativação de alguns cookies
          pode afetar funcionalidades do site.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-ink mt-10 mb-3">
          4. Seus direitos como titular (LGPD)
        </h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Nos termos da LGPD, você pode, a qualquer momento, solicitar: a confirmação da existência
          de tratamento; o acesso aos seus dados; a correção de dados incompletos ou desatualizados;
          a anonimização ou eliminação de dados desnecessários; e a revogação do consentimento.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-ink mt-10 mb-3">
          5. Contato do encarregado
        </h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato
          pelo e-mail{" "}
          <a href={`mailto:${companyData.emailContato}`} className="text-primary hover:underline">
            {companyData.emailContato}
          </a>
          {companyData.telefone && companyData.telefone.indexOf("PENDENTE") === -1
            ? ` ou pelo telefone ${companyData.telefone}`
            : ""}
          .
        </p>
      </div>
    </main>
  );
}
