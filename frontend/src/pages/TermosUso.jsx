import React from "react";
import { Eyebrow } from "../components/ui/eyebrow";
import { companyData } from "../data/legal-texts";

export function TermosUso() {
  return (
    <main className="w-full bg-canvas">
      <div className="w-full max-w-3xl mx-auto px-6 md:px-8 pt-32 pb-24">
        <Eyebrow text="Termos" className="mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-ink tracking-tight leading-tight">
          Termos de Uso
        </h1>
        <p className="text-sm text-muted mt-3 mb-10">
          Última atualização: Junho de 2026
        </p>

        <p className="text-ink/70 leading-relaxed mb-4">
          Estes Termos de Uso regulam o acesso e a utilização do site da {companyData.razaoSocial},
          inscrita no CNPJ {companyData.cnpj}. Ao navegar neste site, você declara estar ciente e
          de acordo com as condições descritas abaixo.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-ink mt-10 mb-3">
          1. Objeto
        </h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Este site tem caráter institucional e informativo, destinado a apresentar os serviços de
          engenharia da S&F Engenharia, seu portfólio e conteúdos técnicos. As informações aqui
          publicadas não constituem proposta comercial vinculante; propostas formais são emitidas
          individualmente mediante solicitação.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-ink mt-10 mb-3">
          2. Propriedade intelectual
        </h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Todo o conteúdo deste site — incluindo textos, marcas, logotipos, imagens, layout e
          código — é de titularidade da S&F Engenharia ou de seus licenciadores, sendo protegido
          pela legislação aplicável. É vedada a reprodução, distribuição ou modificação sem
          autorização prévia e por escrito.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-ink mt-10 mb-3">
          3. Uso adequado
        </h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          O usuário compromete-se a utilizar o site de forma lícita, abstendo-se de práticas que
          possam comprometer a segurança, a disponibilidade ou a integridade da plataforma, bem
          como de inserir dados falsos nos formulários de contato.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-ink mt-10 mb-3">
          4. Limitação de responsabilidade
        </h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          A S&F Engenharia empenha-se em manter as informações atualizadas e precisas, mas não se
          responsabiliza por eventuais imprecisões, indisponibilidades temporárias ou por decisões
          tomadas exclusivamente com base no conteúdo institucional do site.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-ink mt-10 mb-3">
          5. Privacidade
        </h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          O tratamento de dados pessoais coletados neste site é regido pela nossa{" "}
          <a href="/politica-de-privacidade" className="text-primary hover:underline">
            Política de Privacidade
          </a>
          , parte integrante destes Termos.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-ink mt-10 mb-3">
          6. Contato
        </h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Em caso de dúvidas sobre estes Termos, entre em contato pelo e-mail{" "}
          <a href={`mailto:${companyData.emailContato}`} className="text-primary hover:underline">
            {companyData.emailContato}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
