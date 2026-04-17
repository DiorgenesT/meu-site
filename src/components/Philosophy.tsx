import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    word: "ENTENDER",
    code: "PROBLEM_FIRST",
    headline: "O problema antes do editor.",
    body: "Mapeio o fluxo real — quem usa, onde trava, o que importa. Código escrito sem essa etapa é retrabalho garantido.",
    color: "#00D4FF",
    svg: "discover",
  },
  {
    id: "02",
    word: "PLANEJAR",
    code: "ARCHITECTURE",
    headline: "Estrutura que não precisa ser refeita.",
    body: "Modelagem do banco, escolha de stack, contratos de API. Decisões tomadas aqui custam menos do que decisões mudadas depois.",
    color: "#E2E8F0",
    svg: "arch",
  },
  {
    id: "03",
    word: "CONSTRUIR",
    code: "ITERATIVE_BUILD",
    headline: "Commits pequenos, progresso real.",
    body: "Desenvolvimento em ciclos curtos e testáveis. Sem big bangs. Cada entrega incremental é funcional e revisável.",
    color: "#00D4FF",
    svg: "build",
  },
  {
    id: "04",
    word: "VALIDAR",
    code: "QA_BEFORE_SHIP",
    headline: "Testar é parte do processo.",
    body: "Integração, edge cases, carga. O que não foi testado em ambiente controlado vai falhar em produção na hora errada.",
    color: "#E2E8F0",
    svg: "validate",
  },
  {
    id: "05",
    word: "ENTREGAR",
    code: "SHIP_TO_PROD",
    headline: "Deploy é rotina, não evento.",
    body: "CI/CD configurado, rollback planejado, variáveis corretas. Ir para produção não é ansiedade — é só mais um passo do processo.",
    color: "#00D4FF",
    svg: "ship",
  },
  {
    id: "06",
    word: "EVOLUIR",
    code: "ITERATE",
    headline: "Produção é onde começa o trabalho.",
    body: "Métricas, logs, feedback de uso real. O sistema não termina no deploy — ele melhora com cada ciclo seguinte.",
    color: "#E2E8F0",
    svg: "iterate",
  },
];

function DiscoverSVG() {
  return (
    <svg className="w-[110px] h-[110px]" viewBox="0 0 120 120" fill="none">
      <circle pathLength="1" className="svg-draw" cx="60" cy="60" r="28"
        stroke="currentColor" strokeWidth="1.5" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      <line pathLength="1" className="svg-draw" x1="60" y1="10" x2="60" y2="32"
        stroke="currentColor" strokeWidth="1" opacity="0.4" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      <line pathLength="1" className="svg-draw" x1="60" y1="88" x2="60" y2="110"
        stroke="currentColor" strokeWidth="1" opacity="0.4" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      <line pathLength="1" className="svg-draw" x1="10" y1="60" x2="32" y2="60"
        stroke="currentColor" strokeWidth="1" opacity="0.4" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      <line pathLength="1" className="svg-draw" x1="88" y1="60" x2="110" y2="60"
        stroke="currentColor" strokeWidth="1" opacity="0.4" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      <circle pathLength="1" className="svg-draw" cx="60" cy="60" r="6"
        stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.7"
        style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
    </svg>
  );
}

function ArchSVG() {
  return (
    <svg className="w-[120px] h-[120px]" viewBox="0 0 160 160" fill="none">
      <rect pathLength="1" className="svg-draw" x="20" y="20" width="36" height="28" rx="3"
        stroke="currentColor" strokeWidth="1.5" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      <rect pathLength="1" className="svg-draw" x="62" y="66" width="36" height="28" rx="3"
        stroke="currentColor" strokeWidth="1.5" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      <rect pathLength="1" className="svg-draw" x="104" y="20" width="36" height="28" rx="3"
        stroke="currentColor" strokeWidth="1.5" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      <line pathLength="1" className="svg-draw" x1="38" y1="48" x2="80" y2="66"
        stroke="currentColor" strokeWidth="1" opacity="0.5" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      <line pathLength="1" className="svg-draw" x1="122" y1="48" x2="80" y2="66"
        stroke="currentColor" strokeWidth="1" opacity="0.5" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      <line pathLength="1" className="svg-draw" x1="80" y1="94" x2="80" y2="120"
        stroke="currentColor" strokeWidth="1" opacity="0.3" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
    </svg>
  );
}

function BuildSVG() {
  return (
    <svg className="w-full max-w-[300px] h-[60px]" viewBox="0 0 300 60" fill="none">
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect pathLength="1" className="svg-draw"
            x={i * 58 + 4} y="16" width="46" height="28" rx="4"
            stroke="currentColor" strokeWidth="1.5" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
          {i < 4 && (
            <path pathLength="1" className="svg-draw"
              d={`M${i * 58 + 50},30 L${i * 58 + 58},30`}
              stroke="currentColor" strokeWidth="1" opacity="0.4"
              markerEnd="url(#arrow)" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
          )}
        </g>
      ))}
      <circle cx="27" cy="30" r="4" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function ValidateSVG() {
  return (
    <svg className="w-[110px] h-[110px]" viewBox="0 0 120 120" fill="none">
      <rect pathLength="1" className="svg-draw" x="14" y="14" width="92" height="92" rx="8"
        stroke="currentColor" strokeWidth="1.5" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      <path pathLength="1" className="svg-draw" d="M36 60 L52 76 L84 44"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
    </svg>
  );
}

function ShipSVG() {
  return (
    <svg className="w-full max-w-[340px] h-[60px]" viewBox="0 0 340 60" fill="none">
      <line pathLength="1" className="svg-draw" x1="10" y1="30" x2="330" y2="30"
        stroke="currentColor" strokeWidth="1" opacity="0.25" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      {[40, 100, 160, 220, 280].map((x, i) => (
        <circle key={i} pathLength="1" className="svg-draw" cx={x} cy="30" r={i === 4 ? 9 : 5}
          stroke="currentColor" strokeWidth="1.5"
          fill={i === 4 ? 'currentColor' : 'none'}
          opacity={i === 4 ? 0.9 : 0.5}
          style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      ))}
    </svg>
  );
}

function IterateSVG() {
  return (
    <svg className="w-[120px] h-[120px]" viewBox="0 0 140 140" fill="none">
      <path pathLength="1" className="svg-draw"
        d="M70,20 A50,50 0 1,1 20,70"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      <path pathLength="1" className="svg-draw" d="M20,70 L10,52 M20,70 L36,60"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
      <circle pathLength="1" className="svg-draw" cx="70" cy="70" r="8"
        stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.5"
        style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
    </svg>
  );
}

const svgMap = {
  discover: DiscoverSVG,
  arch: ArchSVG,
  build: BuildSVG,
  validate: ValidateSVG,
  ship: ShipSVG,
  iterate: IterateSVG,
};

function revealPanel(panel: Element, masterTl: gsap.core.Timeline, base: number) {
  const wordEl = panel.querySelector('.word-reveal-inner');
  const headlineEl = panel.querySelector('.headline-reveal');
  const bodyEl = panel.querySelector('.body-reveal');
  const svgEls = panel.querySelectorAll('.svg-draw');

  if (wordEl) masterTl.fromTo(wordEl, { yPercent: 115 }, { yPercent: 0, duration: 0.45, ease: 'power3.out' }, base);
  if (headlineEl) masterTl.fromTo(headlineEl, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out' }, base + 0.15);
  if (bodyEl) masterTl.fromTo(bodyEl, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out' }, base + 0.25);
  if (svgEls.length) masterTl.to(svgEls, { strokeDashoffset: 0, duration: 0.65, ease: 'power2.out', stagger: 0.07 }, base + 0.1);
}

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current?.offsetWidth || 0;
      const viewportWidth = window.innerWidth;
      const amountToScroll = Math.max(0, scrollWidth - viewportWidth);
      if (amountToScroll <= 0) return;

      const panels = Array.from(containerRef.current?.querySelectorAll('.process-panel') ?? []);

      // Panel 1 reveals before pin
      const panel1 = panels[0];
      if (panel1) {
        const wordEl1 = panel1.querySelector('.word-reveal-inner');
        const headEl1 = panel1.querySelector('.headline-reveal');
        const bodyEl1 = panel1.querySelector('.body-reveal');
        const svgEls1 = panel1.querySelectorAll('.svg-draw');

        gsap.set([wordEl1].filter(Boolean), { yPercent: 115 });
        gsap.set([headEl1, bodyEl1].filter(Boolean), { y: 22, opacity: 0 });

        const tl1 = gsap.timeline({
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%', once: true },
        });
        if (wordEl1) tl1.fromTo(wordEl1, { yPercent: 115 }, { yPercent: 0, duration: 0.55, ease: 'power3.out' });
        if (headEl1) tl1.fromTo(headEl1, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.2');
        if (bodyEl1) tl1.fromTo(bodyEl1, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.2');
        if (svgEls1.length) tl1.to(svgEls1, { strokeDashoffset: 0, duration: 0.7, stagger: 0.08 }, '-=0.3');
      }

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1.2,
          start: 'top top',
          end: () => `+=${amountToScroll}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          once: false,
        },
      });

      masterTl.to(scrollRef.current, {
        x: -amountToScroll,
        ease: 'none',
        duration: steps.length,
      }, 0.4);

      panels.slice(1).forEach((panel) => {
        const el = panel as HTMLElement;
        const scrollAtCenter = Math.max(0, el.offsetLeft + el.offsetWidth / 2 - viewportWidth / 2);
        const base = 0.4 + (scrollAtCenter / amountToScroll) * steps.length - 0.35;
        revealPanel(panel, masterTl, base);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-transparent overflow-hidden">

      <div className="absolute top-10 left-10 z-30 pointer-events-none">
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-accent/40">
          FLUXO_DE_TRABALHO // DO_CONCEITO_AO_PROD
        </span>
      </div>
      <div className="absolute bottom-10 right-10 z-30 pointer-events-none flex items-center gap-3">
        <div className="w-6 h-px bg-white/10" />
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/25">
          {steps.length.toString().padStart(2, '0')}_ETAPAS
        </span>
      </div>

      <div
        ref={scrollRef}
        className="flex h-full items-center"
        style={{ width: 'fit-content' }}
      >
        {steps.map((step, i) => {
          const SvgComp = svgMap[step.svg as keyof typeof svgMap];

          return (
            <div
              key={step.id}
              className="process-panel relative flex flex-col justify-center h-full px-[8vw] md:px-[7vw]"
              style={{ minWidth: 'clamp(340px, 84vw, 72vw)' }}
            >
              {/* Faint background number */}
              <div
                className="absolute right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none font-display font-bold leading-none"
                style={{ fontSize: 'clamp(110px, 17vw, 190px)', color: step.color, opacity: 0.028 }}
              >
                {step.id}
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-10 opacity-50">
                <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: step.color }}>
                  {step.id}
                </span>
                <div className="w-8 h-px" style={{ background: step.color }} />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
                  {step.code}
                </span>
                {i < steps.length - 1 && (
                  <span className="font-mono text-[10px] text-white/15 ml-2">→</span>
                )}
              </div>

              {/* Clipped word */}
              <div className="overflow-hidden mb-7">
                <div
                  className="word-reveal-inner font-display font-bold leading-[0.9] tracking-tight"
                  style={{
                    fontSize: 'clamp(3rem, 9.5vw, 8.5rem)',
                    background: `linear-gradient(110deg, ${step.color} 0%, rgba(255,255,255,0.9) 50%, ${step.color} 100%)`,
                    backgroundSize: '220% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.word}
                </div>
              </div>

              {/* Headline */}
              <div className="headline-reveal mb-4 max-w-sm">
                <p className="font-display font-semibold text-xl md:text-[1.35rem] text-primary/90 leading-snug">
                  {step.headline}
                </p>
              </div>

              {/* Body */}
              <div className="body-reveal max-w-[38ch]">
                <p
                  className="text-muted text-sm md:text-base leading-relaxed font-light border-l-2 pl-5"
                  style={{ borderColor: `${step.color}28` }}
                >
                  {step.body}
                </p>
              </div>

              {/* SVG */}
              <div className="mt-10" style={{ color: step.color, opacity: 0.22 }}>
                <SvgComp />
              </div>

              {/* Divider */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-[32vh] bg-gradient-to-b from-transparent via-white/8 to-transparent" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
