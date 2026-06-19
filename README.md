# S&F Engenharia — Site Institucional

Site Jamstack do escritório **S&F Engenharia** — engenharia multidisciplinar em BIM.
"Simples e Funcional": uma linguagem técnica e direta, canvas branco respirável
pontuado por blocos quase-pretos (`#211F1F`) e o amarelo `#FAB50F` como voltagem única.

---

## 🤖 REGRAS OBRIGATÓRIAS PARA IA (AI RULES)

**ATENÇÃO AGENTES DE IA (Claude, Cursor, Windsurf, Antigravity):**

Antes de criar, sugerir ou editar **qualquer** componente visual (React, Tailwind CSS v4)
ou estrutural neste repositório, você **DEVE OBRIGATORIAMENTE** ler o arquivo
[`DESIGN.md`](./DESIGN.md) na raiz do projeto. Ele é a fonte da verdade do Design System.

**DIRETRIZ DE REUTILIZAÇÃO:** Antes de criar qualquer seção ou página, o agente **DEVE**
ler a pasta [`frontend/src/components/ui/`](./frontend/src/components/ui/) (e o helper
[`frontend/src/utils/cn.js`](./frontend/src/utils/cn.js)) para mapear os componentes
primitivos já existentes (Buttons, Links, Checklist, Eyebrows, Cards, Inputs). É
terminantemente **PROIBIDO** recriar estilos utilitários "na unha" para elementos já
componentizados. Caso um primitivo necessário não exista na biblioteca, o agente deve
criá-lo em `ui/`, registrá-lo na biblioteca de componentes (página de showcase, quando
existir) e só então utilizá-lo na seção.

**TOKENS — use EXCLUSIVAMENTE o que está no `DESIGN.md`:**

- **Cores:** apenas a paleta do sistema — `primary` (amarelo `#FAB50F`) e seus estados,
  `surface-dark` (`#211F1F`), `canvas`, `ink`, `body`, `muted`, hairlines (`border`) e a
  camada semântica. **NUNCA** invente valores arbitrários nem use cores padrão do Tailwind
  (ex.: `blue-500`, `gray-700`).
- **O amarelo é AÇÃO, não decoração:** botões, ícones, acentos e bordas — **nunca** fundo de
  bloco de leitura. Para peso visual, use `surface-dark`. Texto sobre o botão amarelo é
  **escuro** (`on-primary` `#211F1F`), nunca branco.
- **Tipografia:** **apenas Montserrat** em toda a hierarquia, via os tokens `text-display`,
  `text-h1`…`text-label` (peso + tamanho, não troca de família). `inline-code` é a única
  exceção (stack monospace).
- **Elevação:** o design separa por **hairlines**, não por sombra. Use `shadow-sm` ou nenhuma
  sombra; **não** adicione sombras pesadas. O `shadow-focus-ring` (anel de foco) é de
  acessibilidade e **não deve ser removido**.
- **Espaçamento / radius:** use a escala nomeada dos tokens (`spacing-section`, `rounded-2xl`,
  etc.), não valores soltos.

> ℹ️ **Kit de agentes:** a pasta `.agents/` (Antigravity Kit / `@vudovn/ag-kit`) é mantida
> **local** e fora do versionamento via `.git/info/exclude` — **nunca** a adicione ao
> `.gitignore`, ou as IDEs com IA deixam de indexar os workflows e os comandos de barra
> (`/plan`, `/debug`, etc.) somem do chat.

---

## 📄 Sobre o Projeto

Plataforma institucional para a **S&F Engenharia** (B2B), escritório de engenharia
multidisciplinar em BIM que "parou de vender horas e passou a assinar resultado". A
arquitetura visual recusa o azul corporativo comum do setor e adota o amarelo de capacete de
obra (`#FAB50F`) sobre blocos quase-pretos (`#211F1F`), projetando proximidade de canteiro e
autoridade técnica. Concebido em arquitetura monorepo Jamstack para integrar futuramente com
Headless CMS (Sanity.io).

## 🛠 Tecnologias

- **Framework:** React 19 + Vite
- **Estilização:** Tailwind CSS v4 (config CSS-first via `@tailwindcss/vite`, tokens no
  bloco `@theme` de [`frontend/src/styles/index.css`](./frontend/src/styles/index.css))
- **Ícones:** Lucide React
- **Roteamento:** React Router DOM
- **SEO / `<head>`:** react-helmet-async
- **Composição de classes:** clsx + tailwind-merge (helper `cn()`)
- **CMS (Futuro — Fase 6):** Sanity.io (pasta `studio/`)

## 📁 Estrutura

```
/
├── DESIGN.md                 # Design System (fonte da verdade dos tokens)
├── frontend/                 # Aplicação React + Vite
│   └── src/
│       ├── assets/           # Imagens, ícones, SVGs
│       ├── components/
│       │   ├── layout/       # Header, Footer, Wrappers
│       │   ├── sections/     # Blocos completos de conteúdo
│       │   └── ui/           # Botões, inputs, cards genéricos
│       ├── data/             # Textos legais, mocks e arrays
│       ├── lib/              # Configurações de terceiros (ex.: Sanity)
│       ├── pages/            # Componentes de página (Views)
│       ├── styles/           # CSS global + tokens (@theme)
│       └── utils/            # Funções utilitárias (ex.: cn())
└── studio/                   # Sanity CMS (Fase 6 — vazio por enquanto)
```

## 🚀 Como Executar Localmente

O aplicativo React principal vive dentro do diretório `frontend/`.

```bash
cd frontend
npm install
npm run dev      # servidor de desenvolvimento (Vite)
npm run build    # build de produção
npm run preview  # pré-visualiza o build
```

## Como rodar o CMS (Sanity)
```bash
cd studio
npm run dev
```

---
*Documentação mantida com rigor arquitetônico e design system unificado para interação
segura com IA e Agentes Autônomos.*
