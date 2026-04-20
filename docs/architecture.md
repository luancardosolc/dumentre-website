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
| Deploy | Hetzner VPS (self-hosted) | — | Controle total, custo previsível |
| Runtime | Node.js + PM2 | — | Gerenciamento de processos e alta disponibilidade |
| Proxy | Nginx | — | Reverse proxy para múltiplos domínios |
| SSL | Certbot | — | HTTPS gratuito e automatizado |
| Analytics | Google Analytics (GA4) | — | Tracking de conversão e origem de leads |
| Testes unit/integration | Vitest | latest | Rápido, moderno, substitui Jest |
| Testes UI | Testing Library | latest | Testa comportamento real do usuário |
| Testes E2E | Playwright | latest | Valida o app rodando de verdade |
| Git hooks | Husky + lint-staged | latest | Bloqueia commit quebrado |
| Lint | ESLint | latest | Qualidade de código |
| Format | Prettier | latest | Formatação automática |
| Animações | Opcional | — | Apenas se necessário para UX |

---

## ADR-001: App Router (Next.js 15)

**Data:** 2026-04-19
**Status:** Aceito

Usar App Router com Server Components como padrão. Client Components apenas quando necessário (interatividade, hooks).

**Consequências:**
- Layouts em `app/layout.tsx`
- Páginas em `app/page.tsx`
- `"use client"` apenas quando necessário
- Metadados via `export const metadata`

---

## ADR-002: Tailwind CSS v4

**Data:** 2026-04-19
**Status:** Aceito

Design tokens via `@theme` em `globals.css`.

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

## ADR-003: shadcn/ui

**Data:** 2026-04-19
**Status:** Aceito

Base de componentes com customização total via CSS variables. Sem lock-in.

**Consequências:**
- Componentes em `src/components/ui/`
- Tema dark-first (fundo Carvão como padrão)
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
│   ├── globals.css
│   └── api/
│       └── lead/
│           └── route.ts    # endpoint de captura de lead
├── components/
│   ├── ui/                 # shadcn/ui
│   └── sections/           # seções da landing page + LeadForm
├── lib/
│   ├── utils.ts            # utilitários (cn, formatters)
│   ├── analytics.ts        # helper GA4 (trackEvent)
│   └── utm.ts              # helper captura de UTM params
├── hooks/                  # hooks customizados
├── services/               # integrações externas (futuro: CRM, webhook)
└── types/                  # tipos TypeScript compartilhados
```

---

## ADR-005: SEO e Metadata

**Data:** 2026-04-19
**Status:** Aceito — **Fase 1** (crítico para aquisição de leads)

**Decisão:**
- Metadata via Next.js (`generateMetadata`)
- Open Graph básico (título, descrição, imagem)
- `sitemap.xml` gerado pelo Next.js
- `robots.txt`

SEO é parte do pipeline de aquisição — não é detalhe de polimento.

---

## ADR-006: Deploy (Hetzner VPS)

**Data:** 2026-04-19
**Status:** Aceito

Deploy self-hosted em VPS Hetzner.

**Stack:**
- Node.js runtime
- PM2 (process manager, restart automático)
- Nginx (reverse proxy, múltiplos domínios)
- Certbot (SSL/HTTPS gratuito)

**Estrutura no servidor:**
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

React Hook Form + Zod. Padrão dominante de mercado em 2026.

**Justificativa:**
- Performance (mínimo de re-renders)
- Validação tipada via inferência de schema Zod
- Integração direta com shadcn/ui

---

## ADR-008: Estratégia de testes automatizados

**Data:** 2026-04-19
**Status:** Aceito

| Camada | Tecnologia |
|---|---|
| Unit / Integration | Vitest |
| UI | Testing Library |
| E2E | Playwright |
| Git hooks | Husky + lint-staged |

**Commit bloqueado se:**
- lint falhar
- typecheck falhar
- testes relacionados falharem

**Fluxo:**
```
git commit
  → lint-staged (ESLint + Prettier nos arquivos alterados)
  → tsc --noEmit
  → vitest related --run
  → ✅ liberado | ❌ bloqueado
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

---

## ADR-009: Estado e dados (futuro)

**Data:** 2026-04-19
**Status:** Planejado

- **Zustand** → estado de UI global (quando necessário)
- **TanStack Query** → dados de API (quando necessário)

Adicionar apenas quando o projeto exigir. Sem overengineering prematuro.

---

## ADR-010: Lead Tracking e Conversão

**Data:** 2026-04-19
**Status:** Aceito — **CRÍTICO**

**Objetivo:** Transformar o site em máquina de geração de leads rastreáveis.

### Pipeline de conversão

```
visit → interação → formulário → lead capturado → evento GA4
```

### Captura de UTM

Capturar automaticamente na entrada do site:
- `utm_source`
- `utm_medium`
- `utm_campaign`

Persistir em `localStorage`. Enviar junto com o payload do lead.

```ts
// lib/utm.ts
getUTMParams(): { utm_source?: string; utm_medium?: string; utm_campaign?: string }
```

### Eventos GA4 obrigatórios

| Evento | Quando disparar |
|---|---|
| `page_view` | automático |
| `click_cta` | clique no botão principal |
| `generate_lead` | após envio do formulário |

```ts
// lib/analytics.ts
trackEvent('generate_lead', { source: 'website', utm_source, utm_medium, utm_campaign })
```

### Estrutura do lead

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "utm_source": "string",
  "utm_medium": "string",
  "utm_campaign": "string"
}
```

### Endpoint de captura

```
POST /api/lead
```

### Persistência inicial (simples)

Log estruturado ou arquivo JSON local. Estrutura preparada para troca futura por DB ou CRM sem retrabalho.

### Integrações futuras (sem pressa)

- HubSpot
- Webhook externo
- Banco de dados

### Objetivo de negócio

- Saber de onde vem cada lead
- Medir taxa de conversão por canal
- Otimizar aquisição com dados reais

---

## Diretrizes gerais de implementação

- **TypeScript strict:** sem `any` sem justificativa
- **Mobile-first:** base em 375px
- **Server Components por padrão:** `"use client"` apenas quando necessário
- **Sem overengineering:** sem abstrações antes de 3+ usos concretos
- **Performance:** `next/image`, `next/font`
- **Conversão acima de estética:** clareza antes de efeitos visuais
- **Deploy simples primeiro:** processo manual validado antes de automação
