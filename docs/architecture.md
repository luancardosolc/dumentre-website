# Decisões de Arquitetura — dumentre-website

Registro de decisões técnicas (ADRs) e diretrizes de implementação.

---

## Stack definida

| Camada | Tecnologia | Versão | Justificativa |
|---|---|---|---|
| Framework | Next.js | 15 (App Router) | SSR/SSG nativo, SEO, React Server Components |
| Linguagem | TypeScript | 5.x (strict) | Segurança de tipos em todo o projeto |
| Estilo | Tailwind CSS | v4 | Velocidade de desenvolvimento, design tokens nativos |
| Componentes | shadcn/ui | latest | Componentes sem lock-in, customizáveis |
| Deploy | Vercel | — | Integração nativa Next.js, Edge Network global |
| Animações | Framer Motion | — | Animações sutis (Fase 3) |

---

## ADR-001: App Router (Next.js 15)

**Data:** 2026-04-19
**Status:** Aceito

**Contexto:** Next.js 15 com App Router é o padrão atual do framework.

**Decisão:** Usar App Router com Server Components como padrão. Client Components apenas quando necessário (interatividade, hooks).

**Consequências:**
- Layouts em `app/layout.tsx`
- Páginas em `app/page.tsx`
- Componentes com estado usam `"use client"`
- Metadados via `export const metadata` (sem `<Head>`)

---

## ADR-002: Tailwind CSS v4

**Data:** 2026-04-19
**Status:** Aceito

**Contexto:** Tailwind v4 usa CSS nativo para configuração (sem `tailwind.config.js`).

**Decisão:** Usar Tailwind v4 com design tokens definidos via `@theme` em `globals.css`.

**Tokens de marca:**
```css
@theme {
  --color-charcoal: #1C1C1E;
  --color-gold: #C9A84C;
  --color-off-white: #F5F5F0;
  --color-gray-subtle: #3A3A3C;
}
```

---

## ADR-003: shadcn/ui com tema customizado

**Data:** 2026-04-19
**Status:** Aceito

**Contexto:** shadcn/ui permite customização total via CSS variables, sem lock-in de biblioteca.

**Decisão:** Usar shadcal/ui como base de componentes, sobrescrevendo as CSS variables para a paleta Dumentre (Carvão + Ouro).

**Consequências:**
- Componentes em `src/components/ui/`
- Tema dark-first (fundo Carvão é o padrão)
- Não criar componentes do zero se shadcn/ui já oferece a base

---

## ADR-004: Estrutura de diretórios

**Data:** 2026-04-19
**Status:** Aceito

```
src/
├── app/                    # App Router (páginas, layouts, metadata)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/                 # shadcn/ui (gerados via CLI)
│   └── sections/           # seções da landing page (Hero, Services, etc.)
├── lib/
│   └── utils.ts            # utilitários (cn, formatters)
└── types/                  # tipos TypeScript compartilhados
```

---

## ADR-005: SEO e Metadata

**Data:** 2026-04-19
**Status:** Planejado (Fase 3)

**Decisão:** Usar a Metadata API do Next.js 15 (`generateMetadata`). Adicionar JSON-LD para SEO estruturado (Organization, WebSite).

---

## Diretrizes gerais de implementação

- **TypeScript strict:** sem `any` sem comentário justificando
- **Mobile-first:** todos os componentes devem funcionar em 375px antes de desktop
- **Server Components por padrão:** `"use client"` apenas quando necessário
- **Sem overengineering:** não criar abstrações antes de ter 3+ usos concretos
- **Performance:** imagens via `next/image`, fontes via `next/font`
