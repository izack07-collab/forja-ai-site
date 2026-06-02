# Forjage — Site Institucional

Site one-page institucional da Forjage. Apresenta o pacote (vitrine + CRM + agente IA WhatsApp) pra donas de loja física brasileira.

## Stack

- Vite 5 + React 18 + TypeScript 5
- Tailwind CSS 3.4 + tailwindcss-animate
- Shadcn UI minimal (Button, Input, Textarea, Accordion, Label, Separator)
- Lucide React (ícones)
- Sem backend (form abre mailto:)

## Identidade visual

Paleta **sóbria + tech** — off-white quente, grafite, dourado fosco. Tipografia mista: Cormorant Garamond (display, italic) + Inter (UI).

Sensação: ourivesaria/joalheria fina meets B2B limpo. Não é "agência tech genérica", não é "loja de joia", é "agência boutique que fala a língua de quem tem loja boutique".

## Rodar local

```bash
pnpm install
pnpm dev
```

Abre em `http://localhost:5173`.

## Build

```bash
pnpm build
pnpm preview
```

## Deploy Vercel

```bash
npx vercel
```

Vai gerar uma URL preview tipo `forja-ai-site-<hash>.vercel.app`. Quando o domínio `forjage.com.br` estiver comprado, configurar via dashboard Vercel.

## Estrutura

```
src/
├── App.tsx                       # Composição one-page
├── main.tsx
├── index.css                     # Tailwind base + components customizados (eyebrow, h-display, h-section, etc.)
├── lib/utils.ts                  # cn helper
├── components/
│   ├── ui/                       # Shadcn customizado pra paleta Forjage
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   ├── accordion.tsx
│   │   └── separator.tsx
│   ├── sections/                 # 11 seções da one-page
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── ComoFunciona.tsx
│   │   ├── Ecossistema.tsx
│   │   ├── Pacotes.tsx
│   │   ├── Comparativo.tsx
│   │   ├── Tecnologias.tsx
│   │   ├── Case.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contato.tsx
│   │   └── Footer.tsx
│   └── WhatsAppFloat.tsx         # CTA flutuante (fora de sections/)
└── (sem outras pastas — one-page sem rotas)
```

## Estrutura visual (ordem da página)

1. **Nav** sticky com links + CTA "Falar comigo"
2. **Hero** com headline editorial italic + CTAs principais
3. **Como funciona** em 3 passos numerados
4. **Ecossistema** 4 pilares (vitrine + CRM + agente IA + atribuição)
5. **Pacotes** modular (vitrine base + peças adicionais)
6. **Comparativo** Forjage × Shopify × Nuvemshop
7. **Tecnologias** grid de stack
8. **Case** Ri Pratas (placeholder até foto real chegar)
9. **FAQ** perguntas críticas
10. **Contato** form mailto + canais alternativos
11. **Footer**

\+ **WhatsAppFloat** — CTA flutuante de WhatsApp fixo na tela (fora de `sections/`).

## Pendências externas (Isaac executa)

- [ ] Comprar domínio `forjage.com.br` (+ `.com` e `.ai` opcionais)
- [ ] Configurar DNS no Vercel
- [ ] Trocar email do form pra `contato@forjage.com.br` quando Google Workspace estiver ativo
- [ ] Adicionar foto real da Ri Pratas no Case (substituir placeholder)
- [ ] Atualizar métricas reais do Case após 30 dias de operação

## Contexto

Parte da operação **Forjage** do Isaac. Spec completo em [opensquad/docs/superpowers/specs/2026-05-17-forja-ai-squad-design.md](../opensquad/docs/superpowers/specs/2026-05-17-forja-ai-squad-design.md).
