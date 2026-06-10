---
version: alpha
name: S&F Engenharia
description: >
  Design system técnico e direto para um escritório de engenharia multidisciplinar
  em BIM. Canvas branco respirável pontuado por blocos quase-pretos (#211F1F) que
  ancoram hero, CTAs e footer, com o amarelo #FAB50F como voltagem única — só ação,
  ícone e ênfase, nunca fundo de leitura. Montserrat em toda a hierarquia, do display
  de 60px ao label de 14px. Assinatura: headline com palavra-chave em itálico amarelo.

colors:
  # Marca — o amarelo é a única voltagem cromática
  primary: "#fab50f"
  primary-hover: "#db9206"
  primary-pressed: "#b76e08"
  primary-soft: "#fff3c4"
  primary-subtle: "#fffbea"
  # Superfície
  canvas: "#ffffff"
  surface-muted: "#f1f1f1"
  surface-dark: "#211f1f"
  surface-card: "#ffffff"
  # Texto
  ink: "#211f1f"
  body: "#475569"
  muted: "#64748b"
  on-dark-muted: "#cbd5e1"
  # Hairlines
  border: "#e2e8f0"
  border-strong: "#cbd5e1"
  # Semântica
  success: "#22c55e"
  destructive: "#dc2626"
  warning: "#f59e0b"
  # On-Surface
  on-primary: "#211f1f"
  on-dark: "#ffffff"

typography:
  display:
    fontFamily: "'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 60px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: -1.5px
  h1:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: -1.2px
  h2:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.11
    letterSpacing: -0.9px
  h3:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.75px
  h4:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: -0.6px
  lead:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: -0.6px
  blockquote:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: 0
  p:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0
  body-medium:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  nav-link:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  button-md:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0
  button-sm:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0
  small:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  eyebrow:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: 0.5px
  label:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0
  inline-code:
    fontFamily: "ui-monospace, 'SF Mono', 'Cascadia Code', Menlo, Consolas, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0

rounded:
  none: 0px
  sm: 2px
  base: 4px
  md: 6px
  lg: 8px
  xl: 12px
  2xl: 16px
  3xl: 24px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 12px
  base: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  section: 96px

elevation:
  shadow-sm: "0 1px 2px 0 #0000000d"
  shadow-md: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a"
  shadow-lg: "0 4px 6px -4px #0000001a, 0 10px 15px -3px #0000001a"
  shadow-xl: "0 8px 10px -6px #0000001a, 0 20px 25px -5px #0000001a"
  focus-ring: "0 0 0 2px {colors.canvas}, 0 0 0 4px {colors.primary}"

components:
  navbar:
    backgroundColor: "rgba(33, 31, 31, 0.30)"
    backdropFilter: "blur(5.18px)"
    border: "0.518px solid {colors.ink}"
    rounded: "15px"
    textColor: "{colors.on-dark}"
    linkTypography: "{typography.nav-link}"
    padding: 20px 40px
    position: "A Navbar utiliza posicionamento fixo (fixed top-0 w-full z-50) no RootLayout para se manter sempre visível e acompanhar o scroll da página do utilizador."
    scrolled:
      backgroundColor: "rgba(33, 31, 31, 0.85)"
      backdropFilter: "blur(16px)"
      boxShadow: "{elevation.shadow-lg}"
  navbar-link-active:
    textColor: "{colors.on-dark}"
    borderBottom: "2px solid {colors.primary}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    hover: "{colors.primary-hover}"
    rounded: "{rounded.md}"
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-muted}"
    padding: "py-16 px-6"
    layout: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    bottomBar:
      borderTop: "1px solid rgba(255, 255, 255, 0.1)"
      textColor: "{colors.muted}"
    typography: "{typography.button-sm}"
  button-secondary:
    backgroundColor: "rgba(250, 181, 15, 0.4)"
    textColor: "{colors.primary}"
    hover: "{colors.primary}"
    rounded: "{rounded.md}"
    typography: "{typography.button-sm}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-primary-focus:
    backgroundColor: "{colors.primary}"
    boxShadow: "{elevation.focus-ring}"
  button-secondary:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.md}"
    padding: 12px 32px
  button-secondary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button-sm}"
    iconColor: "{colors.primary}"
  button-link-hover:
    textColor: "{colors.primary-hover}"
  eyebrow:
    textColor: "{colors.ink} (suporta injeção via className para fundos escuros, ex: text-white/90)"
    typography: "{typography.eyebrow}"
    leadingDash: "13px solid {colors.primary}"
  eyebrow-hover:
    textColor: "{colors.primary}"
  hero:
    backgroundColor: "{colors.surface-dark}"
    scrimOverlay: "linear-gradient(90deg, #211f1fcc, #211f1f66)"
    headlineColor: "{colors.on-dark}"
    headlineAccentColor: "{colors.primary}"
    headlineAccentStyle: italic
    headlineTypography: "{typography.display}"
    subheadColor: "{colors.on-dark-muted}"
    subheadTypography: "{typography.lead}"
  stat-item:
    note: "O componente não possui padding interno para garantir alinhamento perfeito (flush) com grids externos. Em resoluções mobile (< 768px), coleções de Power Numbers devem ser exibidas em formato de carrossel infinito (marquee) para economizar espaço vertical."
    iconColor: "{colors.primary}"
    valueColor: "{colors.ink}"
    valueTypography: "{typography.body-medium}"
    labelColor: "{colors.muted}"
    labelTypography: "{typography.small}"
  quote-box:
    backgroundColor: "{colors.canvas}"
    borderLeft: "3px solid {colors.primary}"
    textColor: "{colors.body}"
    typography: "{typography.blockquote}"
    padding: 16px 24px
  value-card:
    backgroundColor: "{colors.surface-muted}"
    borderLeft: "3px solid {colors.primary}"
    iconColor: "{colors.primary}"
    titleColor: "{colors.ink}"
    titleTypography: "{typography.h4}"
    bodyColor: "{colors.body}"
    bodyTypography: "{typography.small}"
    rounded: "{rounded.xl}"
    padding: 24px
  checklist-item-primary:
    iconColor: "{colors.primary}"
    textColor: "{colors.body}"
    typography: "{typography.small}"
  checklist-item-ink:
    iconColor: "{colors.ink}"
    textColor: "{colors.body}"
    typography: "{typography.small}"
  spec-header:
    backgroundColor: "{colors.surface-muted}"
    iconColor: "{colors.muted}"
    textColor: "{colors.ink}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.lg}"
    padding: 12px 16px
  norms-callout:
    backgroundColor: "{colors.canvas}"
    borderTop: "1px solid {colors.primary}"
    borderBottom: "1px solid {colors.primary}"
    iconColor: "{colors.warning}"
    textColor: "{colors.muted}"
    typography: "{typography.small}"
    padding: 24px 0
  feature-card-image:
    backgroundColor: "{colors.surface-dark}"
    imageScrim: "linear-gradient(0deg, #211f1fe6, #211f1f33)"
    titleColor: "{colors.primary}"
    titleTypography: "{typography.h4}"
    bodyColor: "{colors.on-dark-muted}"
    bodyTypography: "{typography.small}"
    rounded: "{rounded.2xl}"
  feature-card-solid:
    backgroundColor: "{colors.primary-soft}"
    iconColor: "{colors.primary-hover}"
    titleColor: "{colors.ink}"
    titleTypography: "{typography.h4}"
    rounded: "{rounded.2xl}"
    padding: 24px
  cta-banner:
    backgroundColor: "{colors.surface-dark}"
    imageScrim: "linear-gradient(0deg, #211f1fe6, #211f1fb3)"
    headlineColor: "{colors.on-dark}"
    headlineAccentColor: "{colors.primary}"
    headlineTypography: "{typography.h2}"
    bodyColor: "{colors.on-dark-muted}"
    bodyTypography: "{typography.p}"
    rounded: "{rounded.3xl}"
    padding: 64px
  navbar-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
  navbar-link-active:
    borderColor: "{colors.primary}"
    borderWidth: 2px
  contact-link:
    iconColor: "{colors.primary}"
    textColor: "{colors.muted}"
    typography: "18px"
  contact-link-hover:
    textColor: "{colors.primary}"
  checklist-item:
    iconColorPrimary: "{colors.primary}"
    iconColorInk: "{colors.ink}"
    textColor: "{colors.muted}"
    typography: "16px"
  dropdown-menu:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    boxShadow: "{elevation.shadow-md}"
    itemTextColor: "{colors.ink}"
  dropdown-menu-item-hover:
    backgroundColor: "{colors.primary}"
  footer:
    backgroundColor: "{colors.surface-dark}"
    headingColor: "{colors.primary}"
    headingTypography: "{typography.eyebrow}"
    linkColor: "{colors.on-dark-muted}"
    linkTypography: "{typography.small}"
    dividerColor: "#3f3f46"
  form-card:
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.border}"
    rounded: "{rounded.xl}"
    padding: 24px
    boxShadow: "{elevation.shadow-sm}"
  cta-card:
    backgroundColor: "{colors.surface-muted}"
    borderLeftColor: "{colors.primary}"
    borderLeftWidth: "4px"
    rounded: "{rounded.xl}"
    padding: 40px
  info-card:
    backgroundColor: "{colors.surface-muted}"
    borderLeftColor: "{colors.primary}"
    borderLeftWidth: "4px"
    rounded: "{rounded.xl}"
    padding: 40px
  feature-card:
    backgroundColor: "{colors.surface-muted}"
    borderLeftColor: "{colors.primary}"
    borderLeftWidth: "4px"
    rounded: "{rounded.xl}"
    padding: 40px
    iconBackground: "rgba(250, 181, 15, 0.1)"
  app-card:
    rounded: "{rounded.xl}"
    padding: 32px
    minHeight: 480px
    variantImage:
      overlay: "linear-gradient(to top, {colors.surface-dark}, transparent)"
      titleColor: "{colors.primary}"
      textColor: "rgba(255,255,255,0.9)"
      layout: "justify-end"
    variantIcon:
      backgroundColor: "{colors.canvas} ou {colors.primary-soft}"
      titleColor: "{colors.ink}"
      textColor: "{colors.body}"
      layout: "justify-between"
  step-toggle:
    backgroundColor: "{colors.surface-muted}"
    rounded: "{rounded.lg}"
    activeBackground: "{colors.canvas}"
    activeTextColor: "{colors.primary}"
    activeTypography: "{typography.button-sm}"
    inactiveTextColor: "{colors.muted}"
    inactiveTypography: "{typography.button-sm}"
  input-field:
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.border}"
    textColor: "{colors.ink}"
    placeholderColor: "{colors.muted}"
    typography: "{typography.small}"
    labelColor: "{colors.ink}"
    labelTypography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: 10px 12px
  input-field-focus:
    borderColor: "{colors.primary}"
    boxShadow: "{elevation.focus-ring}"
  contact-row:
    iconColor: "{colors.primary}"
    labelColor: "{colors.ink}"
    labelTypography: "{typography.h4}"
    valueColor: "{colors.body}"
    valueTypography: "{typography.p}"
  feature-list-check:
    iconBackgroundColor: "{colors.success}/10"
    iconColor: "{colors.success}"
    titleColor: "{colors.primary}"
    titleTypography: "{typography.body-medium}"
    bodyColor: "{colors.body}"
    bodyTypography: "{typography.small}"
  feature-list-check-hover:
    iconBackgroundColor: "{colors.success}"
    iconColor: "{colors.canvas}"
  spec-header-primary:
    backgroundColor: "{colors.primary-soft}"
    iconColor: "{colors.primary}"
    textColor: "{colors.muted}"
  spec-header-primary-hover:
    backgroundColor: "{colors.primary}"
    iconColor: "{colors.on-primary}"
    textColor: "{colors.on-primary}"
  spec-header-neutral:
    backgroundColor: "{colors.surface-muted}"
    iconColor: "{colors.ink}"
    textColor: "{colors.muted}"
  spec-header-neutral-hover:
    backgroundColor: "{colors.ink}"
    iconColor: "{colors.on-dark}"
    textColor: "{colors.on-dark}"
---

# S&F Engenharia — Design System

## Overview

A S&F Engenharia se apresenta como o escritório que parou de vender horas e passou a assinar resultado — e o site traduz isso numa linguagem técnica e direta, sem ornamento. A estrutura é um canvas branco respirável pontuado por blocos quase-pretos (`#211F1F`) que ancoram os momentos de peso — hero, banners de CTA, footer — enquanto o amarelo `#FAB50F` funciona como voltagem única: nunca é fundo de leitura, só ação, ícone e ênfase.

A assinatura mais distintiva é o headline em Montserrat extrabold com uma palavra-chave em itálico amarelo ("Do projeto *à entrega, no prazo.*"), um gesto que transforma o título em promessa em vez de rótulo. Cada seção abre com um eyebrow de traço amarelo ("— Serviços") e os cards carregam o posicionamento por uma borda lateral ou um ícone amarelo, não por preenchimento sólido.

Contra a convenção do setor de engenharia — que costuma recorrer a azul corporativo e tipografia institucional — a S&F aposta no amarelo de capacete de obra e numa sans geométrica única (Montserrat em toda a hierarquia, do display de 60px ao label de 14px), projetando proximidade de canteiro e confiança técnica ao mesmo tempo. Cantos arredondados generosos (`rounded-2xl` em cards, `rounded-3xl` em banners, pílulas em toggles) suavizam o peso dos blocos escuros e mantêm o tom acessível.

## Colors

A paleta de marca tem só três cores no manual — amarelo, quase-preto e cinza claro — e o design system as expande para uma camada funcional sem inflar. O princípio mais importante de cor: **o amarelo é ação, não decoração**. Ele nunca é fundo de bloco de texto longo; aparece em botões, ícones, no acento itálico dos headlines, em bordas de acento e selos. Quando você precisar de peso visual, use o `surface-dark`, não mais amarelo.

`primary` (`#FAB50F`) carrega todo o CTA e a ênfase. Seus estados derivam da rampa real dos tokens: `primary-hover` (`#DB9206`) escurece no hover, `primary-pressed` (`#B76E08`) no clique. `primary-soft` e `primary-subtle` são os únicos usos do amarelo como fundo — em cards de destaque e badges, onde a saturação baixa não compromete a leitura.

`surface-dark` (`#211F1F`) é o quase-preto da marca. É ele que ancora header, banners de CTA e footer, criando o ritmo claro→escuro→claro que dá cadência às páginas. Sobre ele, texto usa `on-dark` (branco) e `on-dark-muted` (`#CBD5E1`) para o corpo secundário.

No texto sobre claro, `ink` (`#211F1F`) é o título, `body` (`#475569`) é o parágrafo e `muted` (`#64748B`) é o apoio. As hairlines (`border`, `border-strong`) são deliberadamente discretas — a separação entre seções vem mais da troca de superfície do que de linhas.

A camada semântica é mínima: `success` (verde, usado nos checks da seção de parceiros), `destructive` (vermelho, para erro de formulário) e `warning` (âmbar, no callout de normas ABNT). Note que `on-primary` é **escuro** (`#211F1F`), não branco — o texto sobre o botão amarelo é preto, confirmado em todas as telas; isso é regra, não escolha caso a caso.

## Typography

Decisão central e deliberada: **Montserrat em toda a hierarquia**, do display ao label. O manual de marca especifica Montserrat como fonte única, e o design system segue isso à risca — não há fonte secundária de corpo. Isso dá ao site uma voz tipográfica monolítica e reconhecível, coerente com uma marca que se vende como "Simples e Funcional".

A hierarquia se separa por **peso e tamanho**, não por família. Títulos vivem em 700–800 (h2–h4 em bold, h1 e display em extrabold) com `letter-spacing` negativo progressivo — quanto maior o texto, mais apertado, o que dá densidade e autoridade aos headlines grandes. O corpo (`p`) é 400 com `line-height` generoso de 1.75, priorizando leitura confortável de blocos técnicos longos.

O token `display` (60px/800) é o headline de hero — é nele que mora a assinatura do itálico amarelo: a frase fica em branco e a palavra-chave recebe `font-style: italic` + `color: {colors.primary}`. Não aplique o itálico amarelo a textos pequenos; ele é um gesto de hero e de banner de CTA (`h2`), não de subtítulo.

`eyebrow` (14px/600, leve tracking positivo) é o rótulo de abertura de seção, sempre em `{colors.primary}` e precedido de um traço curto. `button-md`/`button-sm` usam 600 para dar firmeza ao clique. `inline-code` é a única exceção à família única: usa um stack monospace genérico, já que Montserrat não tem variante mono.

## Layout

O layout é de coluna central com largura máxima de ~1280px (`max-w-7xl`), respiração lateral de 48px no desktop e seções verticais de ~96px (`spacing.section`). A página é uma sequência de faixas full-bleed que alternam superfície: hero escuro → faixa de stats clara → conteúdo branco → bloco `surface-muted` → banner de CTA escuro → footer escuro.

A grade de conteúdo é tipicamente de duas colunas (texto + imagem, ou checklist + checklist), colapsando para uma no mobile. Cards de feature usam grade bento — combinações de cards com imagem de fundo e um card sólido amarelo quebrando o ritmo. O espaçamento interno de cards é 24px (`spacing.lg`); entre itens de lista, 12px (`spacing.md`).

A barra de stats (4 itens: +14 anos, 9 especialidades, 100% BIM, +1000 clientes) é um padrão recorrente logo abaixo de cada hero, sempre com ícone amarelo + número em `ink` + label em `muted`.

## Elevation

A elevação é contida — coerente com um visual que prefere troca de superfície a sombra pesada. Cards sobre fundo claro usam `shadow-sm` ou nenhuma sombra, confiando na hairline `border` para definição. `shadow-md` e `shadow-lg` ficam reservados para o card de formulário e popovers eventuais. As sombras seguem a escala Tailwind dos tokens (opacidades de 0x0d a 0x1a sobre preto).

O **focus-ring** é o estado de acessibilidade mais importante a respeitar: um anel duplo (`{elevation.focus-ring}`) com offset branco de 2px e anel amarelo de mais 2px, aplicado em botões e inputs no foco de teclado. Isso vem direto dos tokens de efeito e não deve ser removido.

## Components

### navbar
Barra de navegação que intercala a logo e a navegação.
- **text-link**: Link de navegação textual (ex: "Home", "Projetos"). Texto em `ink` (ou `on-dark` dependendo do fundo). No hover e no estado `active`, ganha uma borda inferior de 2px sólida amarela (`border-primary`).
- **dropdown-menu**: Menu suspenso ancorado no link. Fundo branco (`canvas`), cantos arredondados, `shadow-md` leve. O link gatilho tem um ChevronDown. Os itens internos usam texto `ink`, que no hover do item muda para fundo amarelo (`primary`) mantendo o texto escuro `ink`.
- **contact-link**: Link de contato dinâmico para telefone ou e-mail. Usado no header e footer. Possui ícone sempre na cor amarela (`primary`) e texto na cor `muted`. No hover, o texto transita para amarelo (`primary`). O espaçamento é pequeno (gap-1.5).

### button-primary
O CTA principal: fundo amarelo, **texto escuro** (`on-primary`), seta diagonal à direita. Hover escurece para `primary-hover`; foco aplica o anel. É o único elemento que sempre puxa o olho — use um por bloco de decisão.

### button-secondary
Ação secundária ("Conheça nossos serviços"): fundo de baixa saturação em amarelo (`primary-soft`) e texto em amarelo (`primary`). No hover, ganha peso visual passando para fundo sólido (`primary`) e texto escuro (`on-primary`).

### button-link
Ação terciária inline em amarelo com seta ("Ver todos os serviços →"). Sem fundo nem borda. Para navegação leve dentro de uma seção, não para conversão.

### eyebrow
Rótulo de abertura de seção: traço amarelo curto + texto escuro semibold. No hover transita para texto amarelo. Estrutura toda seção e cria previsibilidade de leitura. Sempre acima do título da seção.

### hero
Bloco de abertura full-bleed: imagem de canteiro/escritório com scrim escuro à esquerda, headline `display` em branco com a palavra-chave em itálico amarelo, subhead em `on-dark-muted`, e um a dois botões. É o palco da assinatura tipográfica da marca.

### stat-item
Métrica compacta: ícone amarelo + valor em `ink` + label em `muted`. Vive em grupos de quatro na faixa logo abaixo do hero. Comunica escala e credibilidade ("+1000 clientes industriais").

### quote-box
Caixa de citação/destaque com borda lateral amarela de 3px, texto em `body` no token `blockquote`. Usada para a narrativa de posicionamento ("De empresa de horas a empresa de soluções"). A borda lateral é o acento; o fundo permanece neutro.

### highlight-block
Implementação estrutural do `quote-box`. É um bloco de texto responsivo e fluido (fundo transparente) que apresenta uma borda esquerda sólida de 3px amarela (`{colors.primary}`) e um padding esquerdo. Utiliza uma tipografia base mais suave (`{colors.muted}` ou customizada via classe) e suporta formatações HTML internas (como `<strong>` ou `<em>`).

### value-card
Card de Missão/Visão/Valores: fundo `surface-muted`, borda lateral amarela, ícone amarelo, título `h4`, corpo `small`. O acento amarelo vem da borda e do ícone, nunca do fundo.

### checklist-item
Item de lista puramente estático (sem hover) com check à esquerda. Duas variantes: 
- `primary`: check amarelo (`{colors.primary}`), para escopo de projeto.
- `ink`: check escuro (`{colors.ink}`), para listas de edificações atendidas.
Ambas usam texto na cor `{colors.muted}` e tipografia de corpo (16px). A diferença de cor no ícone separa visualmente dois tipos de informação na mesma tela sem precisar de colunas rotuladas.

### spec-header
Caixa-título de bloco técnico. Funciona como um card largo que preenche todo o fundo disponível (`w-full`). Possui duas variantes com interações de hover:
- **Primary (Amarela)**: Fundo claro sólido (`primary-soft`), ícone amarelo e texto `muted`. No hover, transita para amarelo sólido (`primary`), com ícone e texto brancos (`on-primary`). Usado para "Escopo do projeto".
- **Neutral (Preta)**: Fundo cinza claro sólido (`surface-muted`), ícone e texto `muted`. No hover, transita para fundo escuro (`ink`), com ícone e texto brancos (`on-dark`). Usado para "Edificações Atendidas".
Ambas funcionam como cabeçalho de uma lista estruturada abaixo delas.

### norms-callout
Bloco de normas técnicas (lista ABNT NBR) delimitado por hairlines amarelas em cima e embaixo, com ícone de alerta em âmbar. Comunica rigor técnico — é um diferencial da marca de engenharia, então tem tratamento próprio em vez de virar um parágrafo comum.

### alert-list-card
Implementação estrutural do norms-callout. Container com fundo transparente (`bg-transparent`), bordas superior e inferior (`border-y`) amarelas (`{colors.primary}`), e um layout em linha com um ícone de alerta (`{colors.primary}`) alinhado à esquerda. A lista de itens à direita exibe texto em `{colors.muted}` marcado com "▪".

### feature-card-image
Card bento com imagem de fundo + scrim escuro, título amarelo `h4` e corpo em `on-dark-muted`. Usado em "Pilares de atuação" e "Por que escolhem a S&F". O título amarelo sobre a imagem escura é o que dá unidade ao grid.

### feature-card-solid
Card de quebra de ritmo no grid bento: fundo `primary-soft` (o único amarelo de fundo permitido), ícone em `primary-hover`, título `ink`. Aparece uma vez por grid para destacar um número-chave ("Mais de 14 anos").

### cta-banner
Banner de conversão full-bleed: bloco `surface-dark` muito arredondado (`rounded-3xl`), headline `h2` centralizado com acento amarelo, e um `button-primary`. Fecha quase toda página antes do footer ("Vamos trabalhar juntos?").

### footer
Rodapé escuro: logo, colunas de links com cabeçalho amarelo (token `eyebrow`), links em `on-dark-muted`, e um bloco de newsletter. Divisores em cinza-escuro discreto.

### form-card
Card de formulário de contato: fundo branco, borda `border`, `shadow-sm`, com um toggle de etapas no topo. Hospeda o fluxo de orçamento em dois passos.

### cta-card
Componente de composição para chamada à ação. Possui fundo claro (`{colors.surface-muted}`), borda esquerda espessa amarela (`border-l-4` em `{colors.primary}`) e cantos arredondados (`{rounded.xl}`). Reúne os primitivos `eyebrow` e `button-primary` junto a um título que suporta destaque em itálico e cor primária.

### info-card
Cartão de informação técnica detalhada. Compartilha a mesma base visual do `cta-card` (fundo claro `{colors.surface-muted}` e borda grossa amarela `{colors.primary}`), focado em texto simples: um título `{typography.h4}` e um longo parágrafo descritivo (`{colors.body}`).

### feature-card
Cartão focado em destacar diferenciais, benefícios ou funcionalidades. Compartilha o layout base dos cards (`surface-muted` + `border-l-4` amarelo), adicionando um ícone de destaque (em uma caixa sutil com fundo `bg-primary/10` e cor `text-primary`) acima de um título e parágrafo curto.

### app-card
Componente de exibição de serviços, cases ou grandes destaques. Possui layout vertical (coluna) e altura mínima (`min-h-[400px]`), com duas variações principais:
- **image:** Fundo fotográfico coberto por overlay em gradiente escuro (`from-surface-dark to-transparent`), título amarelo (`{colors.primary}`) e texto branco translúcido. 
- **icon:** Fundo claro (`{colors.canvas}`), ícone em destaque, título escuro (`{colors.ink}`) e texto em `{colors.body}`. 
Ambas suportam a injeção de botões (`primary` ou `secondary`) no rodapé.

### forms
Campos de texto (`Input`, `Textarea`, `MultiStepForm`) seguem padrões sólidos e neutros (`bg-surface-muted`, texto `ink`) com anéis de foco amarelos (`ring-primary`). Formulários evitam bordas pesadas e priorizam o preenchimento por contraste de fundo. Campos tem largura total (`w-full`) para preencher os containers onde são inseridos.

A tela de sucesso (confirmação do formulário) apresenta ícone em `{colors.success}`, título em `{typography.h4}` com `{colors.ink}` e texto de apoio em `{colors.body}` centralizados.

### newsletter-input
Composto por um campo de input e um botão acoplados lado a lado sem gap. 
*Regra de Borda:* Mesmo que em alguns wireframes as bordas pareçam retas, o componente DEVE respeitar o `border-radius` padrão (`{rounded.md}`) no container externo, cortando os cantos dos elementos filhos via `overflow-hidden`. O campo usa fundo escurecido translúcido (`bg-black/20`) com texto claro, e o botão utiliza `{colors.primary}` com ícone de envio.

### step-toggle
Segmented control "Etapa 1 / Etapa 2" que indica o progresso no formulário multi-etapa. O trilho de fundo usa a cor `{colors.surface-muted}`. A aba ativa recebe fundo branco (`{colors.canvas}`) e texto amarelo (`{colors.primary}`). A aba inativa usa apenas texto cinza (`{colors.muted}`).

### input-field
Componente base seguindo o padrão shadcn/ui: label em `{colors.ink}`, input com borda padrão `{colors.border}` e fundo `{colors.canvas}`. Os campos devem possuir largura total (`w-full`) para preencherem seus containers. Placeholder em `{colors.muted}`. 
- **Focus:** A borda muda para amarelo (`{colors.primary}`) e aplica-se o anel de foco amarelado (`{elevation.focus-ring}`).
- **Erro:** A borda muda para vermelho (`{colors.destructive}`).

### contact-row
Linha de contato: ícone amarelo + rótulo `h4` (WhatsApp, E-mail, Endereço) + valor em `body`. Coluna ao lado do formulário na página de contato.

### feature-list-check
Lista de garantias com check **verde** (`success`): título `body-medium` + descrição `small`. Usada só na seção de parceiros (CBMM), onde o verde sinaliza conformidade/validação — único uso intencional de verde no sistema.

## Responsive Behavior

**Atenção: o comportamento responsivo abaixo é inferência.** Todos os 13 frames recebidos são desktop (1440px); não há telas mobile no Figma. A tabela segue os breakpoints padrão Tailwind/shadcn e deve ser validada quando frames mobile existirem.

| Breakpoint | Largura | Comportamento |
|---|---|---|
| Mobile | < 640px | Coluna única. Navbar colapsa em menu hambúrguer. Hero reduz `display` para ~36px e empilha texto sobre imagem (ou remove a imagem em favor de `surface-dark` sólido). Grids bento e duas-colunas viram pilha vertical. Padding lateral cai para 24px. |
| Tablet | 640–1024px | Duas colunas onde havia quatro (stats em 2×2). Grids bento em duas colunas. `display` ~48px. Padding lateral 32px. |
| Desktop | 1024–1280px | Layout pleno conforme as telas. Coluna central, grids de 3–4, padding lateral 48px. |
| Wide | > 1280px | Conteúdo trava em `max-w-7xl` (1280px) e centraliza; as faixas escuras seguem full-bleed enquanto o conteúdo interno permanece contido. |

Regra de hero no mobile a confirmar: o scrim lateral atual depende de largura; no mobile provavelmente vira scrim de baixo-para-cima para manter a legibilidade do headline sobre a foto.

## Known Gaps

- **Mobile não validado.** Toda a seção Responsive Behavior é inferência a partir de padrões Tailwind. Sem frames mobile, o comportamento do hero (scrim, tamanho do display), do menu e dos grids precisa de confirmação.
- **Estados de erro e disabled não desenhados.** Encodamos default + hover + focus. `input-field` em erro (borda `destructive`, mensagem) e botões/inputs em `disabled` (opacidade 50% pelos tokens de estado) são inferência — não há tela mostrando.
- **Navbar sobre fundo claro.** A navbar foi desenhada só transparente sobre hero escuro. O estado "scrolled" (fundo claro/branco com links escuros) não existe nas telas e precisa ser definido se houver navbar fixa.
- **Tokens shadcn divergem do site.** O export `shadcn/ui/*` veio no tema escuro padrão (slate-950, primary mapeado para branco) e **não** foi usado — a camada de cor deste documento foi reconstruída a partir do site real (claro + amarelo). Se o time for adotar shadcn, será preciso remapear `primary` → `#FAB50F`, `background` → branco, etc.
- **Dark mode fora de escopo.** O site é claro apenas. Não há tokens de tema escuro neste documento (apesar de `surface-dark` existir como cor de bloco, não como tema).
- **Divergência de fonte de corpo.** Os tokens exportados usavam Geist no corpo e SF Mono para código; seguimos a decisão do manual (Montserrat em tudo). `inline-code` usa um stack monospace genérico em vez do SF Mono proprietário. Se o time quiser de fato Geist no corpo, é uma troca de uma linha por token.
- **Ícones não tokenizados.** O sistema usa ícones de linha (estilo Lucide/Feather) em amarelo, mas não há biblioteca de ícones definida nem tamanhos padronizados. Recomenda-se fixar Lucide + tamanhos (16/20/24) numa próxima iteração.
- **Página de serviço é template único.** As 9 disciplinas (arquitetônico, estrutural, elétrico, hidrossanitário, etc.) compartilham o mesmo layout com slots de conteúdo — não foram modeladas como 9 componentes. O conteúdo de cada disciplina precisa ser preenchido nos slots de hero, escopo, edificações atendidas e normas.
