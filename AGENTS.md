# AGENTS.md — dumentre-website

> Contexto específico deste projeto para OpenAI Codex e outros agentes.
> Manter semanticamente espelhado com `CLAUDE.md` e `GEMINI.md`.
> Para contexto pessoal global, leia o `AGENTS.md` do brain: `C:\Users\luanc\projects\personal\brain\AGENTS.md`

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

## Colaboração Multi-IA

| Agente | Papel |
|---|---|
| **Claude Code** | Raciocínio, implementação complexa, MCPs, arquitetura |
| **Gemini CLI** (`gemini -p`) | Consultas rápidas, brainstorm, sumarizações, pesquisas |
| **Codex** | Tarefas paralelas isoladas, worktrees, geração de código |

**Regra:** Antes de implementar algo extenso, verificar se outra IA já está trabalhando na mesma área para evitar conflito de edição.

## Regras deste projeto

### Descoberta antes de agir
- Ler `README.md` e `docs/` antes de implementar qualquer coisa
- Ler `docs/architecture.md` antes de qualquer decisão técnica
- Se for bug: reproduzir, inspecionar causa raiz, **não trabalhar no achismo**

### Documentação
- Docs em `pt-BR` com acentuação correta
- Toda doc navegável a partir do `README.md`
- Decisões arquiteturais registradas em `docs/architecture.md`

### Git
- **Nunca usar `rebase`** — sempre `merge`
- Convenção: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`
- Remote pessoal: `git@personal.github.com:luancardosolc/dumentre-website.git`
- Pedir aprovação do nome do commit antes de commitar

### Qualidade
- TypeScript strict — sem `any` sem justificativa
- Mobile-first — validar responsividade
- Componentes reutilizáveis: verificar se já existe antes de criar

### Design
- Seguir estritamente a paleta Carvão + Ouro de `docs/brand.md`
- Minimalismo suíço: sem excessos visuais, tipografia como elemento central

## Como iniciar cada sessão

1. Ler este `AGENTS.md`
2. Ler `docs/next-steps.md` para saber o que está pendente
3. Ler `docs/roadmap.md` para entender a fase atual
4. Verificar se há outro agente atuando em paralelo antes de editar arquivos

## Roadmap (visão rápida)

| Fase | Status |
|---|---|
| 0 — Docs & Setup | ✅ Em andamento |
| 1 — Scaffold Next.js + Design System | ⬜ Pendente |
| 2 — Landing Page MVP | ⬜ Pendente |
| 3 — Polish & SEO | ⬜ Pendente |
| 4 — Expansão | ⬜ Planejado |

*Detalhes: [`docs/roadmap.md`](docs/roadmap.md)*
