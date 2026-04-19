# GEMINI.md — dumentre-website

> Contexto específico deste projeto para o Gemini CLI.
> Manter semanticamente espelhado com `CLAUDE.md` e `AGENTS.md`.

## Quem é Luan

- **Nome:** Luan Cardoso
- **GitHub pessoal:** `luancardosolc`
- **Máquina:** Windows 11 Pro, Dell G15 5530 (`LUAN-DELL`)
- **Root de projetos:** `C:\projects`
- **Vault Obsidian (brain):** `C:\projects\personal\brain`

## O Projeto

Website oficial da **Dumentre** — arquitetos de sistemas autônomos.

- **Razão social:** Simplifica Desenvolvimento de Softwares Ltda (ex-Kavanah)
- **Repositório:** `git@personal.github.com:luancardosolc/dumentre-website.git`
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

## Papel do Gemini neste projeto

O Gemini CLI (`gemini -p`) é o caminho padrão para:
- Consultas rápidas de sintaxe e API
- Brainstorm de copy e variações de texto
- Sumarizações e reformulações
- Pesquisas de bibliotecas e dependências
- Validações rápidas de abordagem

**Deixar para Claude Code:** raciocínio profundo, implementação de features complexas, revisão de arquitetura, uso de MCPs locais.

## Regras deste projeto

### Descoberta antes de agir
- Ler `README.md` e `docs/` antes de implementar qualquer coisa
- Ler `docs/architecture.md` antes de decisões técnicas

### Documentação
- Docs em `pt-BR` com acentuação correta
- Toda doc navegável a partir do `README.md`

### Git
- **Nunca usar `rebase`** — sempre `merge`
- Convenção: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`
- Remote: `git@personal.github.com:luancardosolc/dumentre-website.git` (alias SSH pessoal)

### Qualidade
- TypeScript strict — sem `any` sem justificativa
- Mobile-first
- Seguir paleta Carvão + Ouro de `docs/brand.md`

## Como iniciar cada sessão

1. Ler este `GEMINI.md`
2. Ler `docs/next-steps.md`
3. Ler `docs/roadmap.md`

## Roadmap (visão rápida)

| Fase | Status |
|---|---|
| 0 — Docs & Setup | ✅ Em andamento |
| 1 — Scaffold Next.js + Design System | ⬜ Pendente |
| 2 — Landing Page MVP | ⬜ Pendente |
| 3 — Polish & SEO | ⬜ Pendente |
| 4 — Expansão | ⬜ Planejado |

*Detalhes: [`docs/roadmap.md`](docs/roadmap.md)*
