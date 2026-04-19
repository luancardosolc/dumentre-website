# Próximos Passos

Tarefas imediatas para operacionalizar o projeto, em ordem de prioridade.

*Atualizado em: 2026-04-19*

---

## Agora (Fase 0 — finalizando)

### 1. Inicializar o repositório git e criar no GitHub
- `git init` na pasta `dumentre-website`
- Criar `.gitignore` (Next.js + `.env*`)
- Primeiro commit com toda a documentação
- Criar repositório `luancardosolc/dumentre-website` no GitHub via MCP `github_pessoal`
- Push para `main`
- Remote: `git@personal.github.com:luancardosolc/dumentre-website.git`

**Por quê agora:** Tudo que foi criado precisa estar versionado antes de começar a codar.

---

## Esta semana (Fase 1 — Scaffold)

### 2. Criar o projeto Next.js 15
```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"
```
- Confirmar que está usando Next.js 15 e Tailwind v4
- Apagar conteúdo de exemplo gerado pelo `create-next-app`

**Por quê:** Base do projeto. Tudo depende disso.

### 3. Configurar design tokens de marca em `globals.css`
```css
@theme {
  --color-charcoal: #1C1C1E;
  --color-gold: #C9A84C;
  --color-off-white: #F5F5F0;
  --color-gray-subtle: #3A3A3C;
}
```
**Por quê:** Garantir consistência visual desde o primeiro componente. Sem tokens definidos, cada desenvolvedor (humano ou IA) usa cores diferentes.

### 4. Instalar shadcn/ui e configurar tema
```bash
npx shadcn@latest init
```
- Escolher dark mode como padrão
- Sobrescrever CSS variables com a paleta Dumentre

**Por quê:** Os componentes de UI serão baseados no shadcn/ui. Configurar agora evita retrabalho depois.

### 5. Configurar tipografia via `next/font`
- Inter como fonte principal (fallback web-safe para Neue Haas Grotesk)
- JetBrains Mono para elementos de código (se houver)

**Por quê:** Fonte é parte central do minimalismo suíço da marca.

---

## Próxima semana (Fase 2 — MVP)

### 6. Implementar `<Hero>` (prioridade máxima)
- É a seção que determina se o visitante continua lendo
- Fundo Carvão, título em off-white, CTA em Ouro
- Usar `gemini -p` para iterar variações de copy

### 7. Implementar `<TheGap>` e `<Services>`
- Três pilares e três produtos
- Ver copy detalhado em `docs/content.md`

### 8. Implementar `<Footer>`
- Links sociais (@dumentre)
- Razão social

### 9. Revisão mobile e aprovação visual
- Testar em 375px, 768px, 1440px
- Aprovar com Luan antes de seguir para Fase 3

---

## Decisões pendentes (precisam de input do Luan)

- [ ] **Identidade visual final:** Logo e tipografia definitiva (Neue Haas Grotesk ou alternativa) estão definidos ou ainda vamos usar placeholders?
- [ ] **Domínio:** `dumentre.com` ou `dumentre.com.br` como primário?
- [ ] **Formulário de contato:** Fase 2 (simples, mailto) ou Fase 4 (integrado a CRM)?
- [ ] **Deploy imediato:** Quer uma página "Coming Soon" no ar durante o desenvolvimento do MVP?

---

## Dicas de fluxo

- Usar `gemini -p` para copy, variações de texto, pesquisas de sintaxe
- Usar Claude Code para implementação, arquitetura, revisão de código
- Commitar com frequência (`feat:`, `docs:`, `style:` etc.)
- Nunca usar `rebase` — sempre `merge`
- Atualizar este arquivo à medida que tarefas são concluídas
