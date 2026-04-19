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
| Formulários | React Hook Form + Zod | latest | Padrão de mercado, performance e validação tipada |
| Deploy | Hetzner VPS (self-hosted) | — | Controle total, custo previsível, múltiplos projetos na mesma máquina |
| Runtime | Node.js + PM2 | — | Gerenciamento de processos e alta disponibilidade |
| Proxy | Nginx | — | Reverse proxy para múltiplos domínios e apps |
| SSL | Certbot | — | HTTPS gratuito e automatizado |
| Analytics | Google Analytics / Plausible | — | Monitoramento de conversão e comportamento |
| Testes unit/integration | Vitest | latest | Rápido, moderno, substitui Jest |
| Testes UI | Testing Library | latest | Foco em comportamento, não em implementação |
| Testes E2E | Playwright | latest | Testa o app real rodando no browser |
| Git hooks | Husky + lint-staged | latest | Padrão de mercado — bloqueia commit quebrado |
| Lint | ESLint | latest | Qualidade e consistência de código |
| Format | Prettier | latest | Formatação automática |
| Animações | Opcional (avaliar pós-MVP) | — | Adicionar apenas se houver necessidade real de UX |

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

**Contexto:** shadcn/ui permite customização total via CSS variables, sem lock-in de biblioteca. Padrão dominante em 2026.

**Decisão:** Usar shadcn/ui como base de componentes, sobrescrevendo as CSS variables para a paleta Dumentre (Carvão + Ouro).

**Consequências:**
- Componentes em `src/components/ui/`
- Tema dark-first (fundo Carvão é o padrão)
- Customização direta no código — sem dependência de configuração externa
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
├── hooks/                  # hooks customizados (futuro)
├── services/               # integrações externas (futuro)
└── types/                  # tipos TypeScript compartilhados
```

---

## ADR-005: SEO e Metadata

**Data:** 2026-04-19
**Status:** Planejado (Fase 3)

**Decisão:** Usar a Metadata API do Next.js 15 (`generateMetadata`). Adicionar JSON-LD para SEO estruturado (Organization, WebSite). Gerar `sitemap.xml` e `robots.txt` via Next.js.

---

## ADR-006: Deploy (Hetzner VPS)

**Data:** 2026-04-19
**Status:** Aceito

**Contexto:** Necessidade de hospedar múltiplos projetos com controle total e custo previsível. Hetzner já é parte da infraestrutura pessoal.

**Decisão:** Deploy self-hosted em VPS Hetzner (mesmo servidor que hospeda OpenBao e NetBird).

**Stack de deploy:**
- Node.js runtime
- PM2 (process manager, restart automático)
- Nginx (reverse proxy, múltiplos domínios)
- Certbot (SSL/HTTPS gratuito)

**Estrutura de diretórios no servidor:**
```
/var/www/
├── dumentre-website/
├── projeto-2/
└── projeto-3/
```

**Fluxo de deploy inicial (manual):**
```bash
git pull
npm ci
npm run build
pm2 restart dumentre-website
```

**Evolução futura (sem pressa):**
- GitHub Actions para CI/CD automático
- Coolify ou Docker para orquestração

---

## ADR-007: Formulários e validação

**Data:** 2026-04-19
**Status:** Aceito

**Decisão:** React Hook Form + Zod.

**Justificativa:**
- Padrão dominante do mercado em 2026
- Melhor performance (mínimo de re-renders)
- Integração forte com TypeScript via inferência de schema Zod

---

## ADR-008: Estratégia de testes automatizados

**Data:** 2026-04-19
**Status:** Aceito

**Contexto:** Sem testes automatizados o projeto não escala e não tem rede de segurança para mudanças.

**Decisão:**

| Camada | Tecnologia | Motivo |
|---|---|---|
| Unit / Integration | Vitest | Rápido, moderno, substitui Jest |
| UI | Testing Library | Testa comportamento real do usuário |
| E2E | Playwright | Valida o app rodando de verdade |
| Git hooks | Husky + lint-staged | Bloqueia commit quebrado antes de entrar no repo |

**Fluxo de qualidade por commit:**
```
git commit
  → Husky pre-commit
    → lint-staged (ESLint + Prettier nos arquivos alterados)
    → tsc --noEmit (typecheck)
    → vitest related --run (testes relacionados)
  → ✅ commit liberado | ❌ commit bloqueado
```

**Configuração base (`package.json`):**
```json
{
  "scripts": {
    "test": "vitest",
    "test:ci": "vitest run",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit"
  },
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "vitest related --run"]
  }
}
```

**`.husky/pre-commit`:**
```bash
npx lint-staged
npm run typecheck
```

**Consequências:**
- Código quebrado não entra no repo
- Feedback rápido no momento do commit
- Base pronta para CI futuro (Playwright E2E no pipeline)
- IAs (Codex, Claude) devem gerar testes junto com o código

---

## ADR-009: Estado e dados (futuro)

**Data:** 2026-04-19
**Status:** Planejado

**Decisão futura:**
- **Zustand** → estado de UI global (quando necessário)
- **TanStack Query** → dados de API (quando necessário)

**Justificativa:** Separação clara entre client state e server state. Adicionar apenas quando o projeto exigir — sem overengineering prematuro.

---

## Diretrizes gerais de implementação

- **TypeScript strict:** sem `any` sem justificativa
- **Mobile-first:** todos os componentes funcionam a partir de 375px
- **Server Components por padrão:** `"use client"` apenas quando necessário
- **Sem overengineering:** sem abstrações antes de 3+ usos concretos
- **Performance:** `next/image` para imagens, `next/font` para tipografia
- **Conversão-first:** clareza antes de efeitos visuais
- **Deploy simples primeiro:** processo manual validado antes de automação
