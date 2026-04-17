# Portfolio — Diorgenes George

Portfolio pessoal desenvolvido com foco em motion design e performance. Cada animação tem propósito definido — nenhuma biblioteca trabalha silenciosamente em segundo plano.

## Stack

| Camada | Tecnologia |
|---|---|
| UI | React 19 + TypeScript |
| Build | Vite 6 |
| Estilização | Tailwind CSS 3 |
| Animação | GSAP 3 (ScrollTrigger, ScrollToPlugin) |
| Ícones | Lucide React + React Icons |

## Arquitetura

```
src/
├── components/
│   ├── Hero.tsx          # Cortina de entrada, slide-up com máscara, parallax no mouse
│   ├── Philosophy.tsx    # Scroll horizontal sticky com scrub de progresso
│   ├── About.tsx         # Contador de stats, word reveal, bio
│   ├── Skills.tsx        # Bento grid, entrada escalonada dos cards
│   ├── Experience.tsx    # Timeline vertical com linha de progresso scrubbed
│   ├── Projects.tsx      # Scroll horizontal com drag por momentum
│   ├── Connect.tsx       # CTA com reveal letra a letra
│   ├── Navbar.tsx        # Nav fixa com detecção de scroll
│   ├── Footer.tsx
│   └── CustomCursor.tsx  # Cursor dot + ring com lerp (somente desktop)
├── data/
│   └── portfolio.ts      # Fonte única de verdade — todo o conteúdo fica aqui
├── utils/
│   └── SplitChars.tsx    # Utilitário para animações de máscara por caractere
└── index.css             # Tokens de design, keyframes, utilitários globais
```

**Todo o conteúdo está centralizado em `src/data/portfolio.ts`.** Para alterar textos, links, projetos ou experiências, basta editar esse arquivo — sem tocar nos componentes.

## Rodando Localmente

```bash
npm install
npm run dev
```

Requer Node 18+. Nenhuma variável de ambiente necessária.

## Decisões de Animação

- **Nomes no Hero** — reveal com slide-up por trás de máscaras `overflow-hidden`, preservando a animação CSS `steel-liquid` no texto.
- **Números de seção em ghost** — GSAP `fromTo` + ScrollTrigger `scrub` para parallax em profundidade. Título fantasma na direção oposta com opacidade menor.
- **Scroll horizontal (Projects, Philosophy)** — único `gsap.to(x)` scrubado a um ScrollTrigger pinado, sem lógica de scroll customizada.
- **Ícones sociais** — efeito magnético (delta `mousemove` × 0.45, `elastic.out` ao sair).
- **Glows ambientes** — duas camadas se movem na direção oposta com velocidades diferentes ao rastrear o mouse, criando profundidade sem WebGL.
- **ScrollTriggers** — `once: true` por padrão (configurado globalmente em `App.tsx`) para não re-disparar ao rolar de volta.

## Build

```bash
npm run build   # gera a pasta dist/
npm run preview # pré-visualiza o build de produção localmente
```

## Contato

- **E-mail** — DgtsSK8@hotmail.com
- **GitHub** — [github.com/DiorgenesT](https://github.com/DiorgenesT)
- **LinkedIn** — [linkedin.com/in/diorgenesgeorge](https://www.linkedin.com/in/diorgenesgeorge/)
