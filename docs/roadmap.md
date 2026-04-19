# Roadmap — dumentre-website

Fases de desenvolvimento com critérios de conclusão e dependências.

---

## Fase 0 — Docs & Setup do Repositório
**Status:** ✅ Em andamento
**Objetivo:** Documentação completa e repositório pronto para receber código.

### Checklist
- [x] Criar estrutura de diretórios (`docs/`, raiz)
- [x] `README.md` — entry point navegável
- [x] `CLAUDE.md` — contexto para Claude Code
- [x] `GEMINI.md` — contexto para Gemini CLI
- [x] `AGENTS.md` — contexto para Codex e outros agentes
- [x] `docs/brand.md` — guia de identidade da marca
- [x] `docs/content.md` — mapa de conteúdo e copy
- [x] `docs/architecture.md` — decisões técnicas e ADRs
- [x] `docs/roadmap.md` — este arquivo
- [x] `docs/next-steps.md` — tarefas imediatas
- [ ] Inicializar repositório git (`git init`)
- [ ] Criar repositório no GitHub (`luancardosolc/dumentre-website`)
- [ ] Primeiro commit e push para `main`
- [ ] `.gitignore` configurado (Next.js + env vars)

**Critério de conclusão:** Repositório no GitHub com toda a documentação comitada.

---

## Fase 1 — Scaffold & Design System
**Status:** ⬜ Pendente
**Dependência:** Fase 0 concluída

**Objetivo:** Projeto Next.js funcional com design tokens e componentes base configurados.

### Checklist
- [ ] Criar projeto Next.js 15 com TypeScript e Tailwind v4
- [ ] Configurar `src/app/globals.css` com tokens de marca (Carvão, Ouro)
- [ ] Instalar e configurar shadcn/ui com tema customizado
- [ ] Definir tipografia via `next/font` (Inter como fallback web-safe)
- [ ] Criar componente `<Button>` com variantes (primary/gold, ghost)
- [ ] Configurar metadados base (`layout.tsx` — título, description, OG)
- [ ] Validar que `npm run dev` funciona e o tema está correto
- [ ] Configurar ESLint e TypeScript strict

**Critério de conclusão:** `npm run dev` exibe página em branco com fundo Carvão e tokens corretos no DevTools.

---

## Fase 2 — Landing Page MVP
**Status:** ⬜ Pendente
**Dependência:** Fase 1 concluída

**Objetivo:** Landing page completa e fiel ao guia de marca, funcional em mobile e desktop.

### Seções a implementar (ordem)
- [ ] `<Hero>` — título principal, subtítulo, CTA (seção mais crítica)
- [ ] `<TheGap>` — A tese, os três pilares (Legacy↔AI, Physical↔Digital, Integration↔Automation)
- [ ] `<Services>` — Cards dos 3 produtos (Audit, Build, Partnership)
- [ ] `<Differentials>` — Os 4 filtros de posicionamento
- [ ] `<Footer>` — Links sociais, legal, contato

### Diretrizes
- Mobile-first (375px → 768px → 1440px)
- Tipografia como elemento visual central
- Sem imagens genéricas de stock
- CTA com cor Ouro `#C9A84C`

**Critério de conclusão:** Landing page revisada visualmente pelo Luan e aprovada em mobile + desktop.

---

## Fase 3 — Polish, SEO & Deploy
**Status:** ⬜ Pendente
**Dependência:** Fase 2 aprovada

**Objetivo:** Site pronto para produção — performance, SEO e domínio configurado.

### Checklist
- [ ] Animações sutis com Framer Motion (entrada de seções, hover nos cards)
- [ ] SEO: `generateMetadata` em todas as páginas
- [ ] JSON-LD: Organization + WebSite schema
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1
- [ ] `next/image` para qualquer imagem futura
- [ ] `next/font` configurado e carregando via CDN
- [ ] Configurar projeto na Vercel (conta pessoal `luancardosolc`)
- [ ] Apontar domínio `dumentre.com` / `dumentre.com.br` para Vercel
- [ ] Testar deploy em produção

**Critério de conclusão:** Site no ar em `dumentre.com` com Lighthouse score ≥ 90 em todas as métricas.

---

## Fase 4 — Expansão & Conversão
**Status:** ⬜ Planejado
**Dependência:** Fase 3 concluída

**Objetivo:** Geração de autoridade e conversão de leads.

### Iniciativas
- [ ] Blog/artigos técnicos (MDX ou CMS headless)
- [ ] Página `/cases` com estudos de caso
- [ ] Formulário de contato funcional (email ou CRM)
- [ ] Captura de lead (newsletter / Substack)
- [ ] Google Analytics / Plausible para analytics
- [ ] Google Business Profile configurado

---

## Linha do tempo estimada

| Fase | Duração estimada | Milestone |
|---|---|---|
| 0 — Docs & Setup | 1 dia | Repo no GitHub |
| 1 — Scaffold | 1-2 dias | Dev server rodando com design tokens |
| 2 — MVP | 3-5 dias | Landing page aprovada |
| 3 — Polish & Deploy | 2-3 dias | Site no ar em produção |
| 4 — Expansão | Contínuo | Após validação em produção |
