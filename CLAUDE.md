# CLAUDE.md — dumentre-website

> Contexto específico deste projeto para o Claude Code.
> Para contexto pessoal, MCPs, SSH e infra, leia o `CLAUDE.md` do brain: `C:\Users\luanc\projects\personal\brain\CLAUDE.md`

## O Projeto

Website oficial da **Dumentre** — arquitetos de sistemas autônomos.

- **Razão social:** Simplifica Desenvolvimento de Softwares Ltda (ex-Kavanah)
- **Repositório GitHub:** `git@personal.github.com:luancardosolc/dumentre-website.git`
- **Deploy:** Vercel → `dumentre.com`

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router) |
| Linguagem | TypeScript (strict) |
| Estilo | Tailwind CSS v4 |
| Componentes | shadcn/ui (tema customizado) |
| Deploy | Vercel |

## Marca (resumo operacional)

- **Posicionamento:** Arquitetos de sistemas autônomos — NÃO software house
- **Tagline:** *"Connecting the world that exists to the systems that should exist."*
- **Paleta:** Carvão `#1C1C1E` (fundo) + Ouro `#C9A84C` (destaque)
- **Tom:** Direto, técnico, autoritário, zero hype
- **Guia completo:** [`docs/brand.md`](docs/brand.md)

## Regras deste projeto

### Descoberta antes de agir
- Ler `README.md` e `docs/` antes de implementar qualquer coisa
- Ler `docs/architecture.md` antes de decisões técnicas

### Documentação
- Docs em `pt-BR`
- Toda doc deve ser navegável a partir do `README.md`
- Decisões de arquitetura registradas em `docs/architecture.md` como ADR

### Git
- Branch principal: `main`
- **Nunca usar `rebase`** — sempre `merge`
- Convenção de commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`
- Remote pessoal: `git@personal.github.com:luancardosolc/dumentre-website.git`
- Pedir aprovação do nome do commit antes de commitar

### Economia de contexto
- **Usar `gemini -p` para:** consultas de sintaxe, brainstorm de copy, sumarizações, pesquisas rápidas
- **Usar Claude para:** raciocínio, implementação complexa, revisão de arquitetura
- Sempre avisar quando `gemini -p` for usado

### Qualidade
- TypeScript strict — sem `any` sem justificativa
- Mobile-first — validar responsividade
- Performance: Core Web Vitals devem passar no Lighthouse
- Antes de declarar pronto, validar impacto nas superfícies relacionadas

### Design
- Se houver link Figma, usar MCP do Figma para inspecionar tokens reais
- Seguir estritamente a paleta Carvão + Ouro definida em `docs/brand.md`
- Minimalismo suíço: sem excessos visuais

## Como iniciar cada sessão

1. Ler este `CLAUDE.md`
2. Ler `docs/next-steps.md` para saber o que está pendente
3. Ler `docs/roadmap.md` para entender a fase atual
4. Identificar o que pode ser delegado ao `gemini -p` nesta sessão

## Roadmap (visão rápida)

| Fase | Status | Descrição |
|---|---|---|
| 0 — Docs & Setup | ✅ Em andamento | Documentação, CLAUDE.md, estrutura do repo |
| 1 — Scaffold | ⬜ Pendente | Next.js + Tailwind + shadcn/ui + design tokens |
| 2 — MVP | ⬜ Pendente | Landing page completa com todas as seções |
| 3 — Polish | ⬜ Pendente | SEO, animações, performance, deploy |
| 4 — Expansão | ⬜ Planejado | Blog, cases, CRM, analytics |

*Detalhes completos: [`docs/roadmap.md`](docs/roadmap.md)*
