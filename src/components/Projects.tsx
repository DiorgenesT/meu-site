import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolio';
import { ExternalLink, Github, Terminal as TerminalIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TITLE_CHARS = 'PROJETOS'.split('');

function CodePreview({ project, accent }: { project: typeof projects[0]; accent: string }) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-[#040406] group">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: `radial-gradient(circle at 30% 50%, ${accent}15 0%, transparent 65%)` }}
      />

      <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5">
        <TerminalIcon className="w-3 h-3 text-muted/40" />
        <span className="font-mono text-[10px] text-muted/40 tracking-wider">
          {project.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}.ts
        </span>
        <div className="ml-auto flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/8" />
          <div className="w-2 h-2 rounded-full bg-white/8" />
          <div className="w-2 h-2 rounded-full bg-white/8" />
        </div>
      </div>

      <div className="p-5 font-mono text-[11px] leading-[1.8] text-muted/40 space-y-0.5">
        <div>
          <span className="text-[#569CD6]/70">const</span>
          <span className="text-[#9CDCFE]/60"> project</span>
          <span className="text-white/30"> = {'{'}</span>
        </div>
        <div className="pl-4">
          <span className="text-white/25">name: </span>
          <span style={{ color: `${accent}80` }}>"{project.title.split(' ').slice(0, 2).join(' ')}"</span>
          <span className="text-white/20">,</span>
        </div>
        <div className="pl-4">
          <span className="text-white/25">stack: </span>
          <span className="text-white/30">[</span>
          {project.tech.slice(0, 2).map((t, i) => (
            <span key={t}>
              <span style={{ color: `${accent}60` }}>"{t}"</span>
              {i < 1 && <span className="text-white/20">, </span>}
            </span>
          ))}
          <span className="text-white/30">]</span>
          <span className="text-white/20">,</span>
        </div>
        <div className="pl-4">
          <span className="text-white/25">year: </span>
          <span className="text-green-400/50">"{project.year}"</span>
          <span className="text-white/20">,</span>
        </div>
        <div className="pl-4">
          <span className="text-white/25">status: </span>
          <span className="text-green-400/70">"deployed"</span>
          <span className="text-white/20">,</span>
        </div>
        <div><span className="text-white/30">{'};'}</span></div>
        <div className="pt-1">
          <span className="text-white/20">{'// '}</span>
          <span className="text-green-400/50">✓ em produção</span>
          <span className="inline-block w-1.5 h-3 bg-green-400/40 animate-pulse ml-1 align-middle" />
        </div>
      </div>

      {/* Hover overlay with links */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/75 backdrop-blur-sm z-20">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/8 hover:bg-white hover:text-black flex items-center justify-center transition-all border border-white/10"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full hover:text-black flex items-center justify-center transition-all border border-white/10"
          style={{ background: `${accent}20` }}
          onMouseEnter={e => (e.currentTarget.style.background = accent)}
          onMouseLeave={e => (e.currentTarget.style.background = `${accent}20`)}
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const accent = index % 2 === 0 ? '#00A3FF' : '#E2E8F0';

  return (
    <div className="project-card relative flex flex-col md:flex-row h-full w-[88vw] md:w-[72vw] lg:w-[62vw] shrink-0 gap-10 md:gap-14 items-center justify-center px-8 md:px-16">

      <div className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] font-display font-bold"
        style={{ fontSize: 'clamp(120px, 22vw, 260px)', lineHeight: 1, color: accent }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="w-full md:w-[45%] shrink-0">
        <CodePreview project={project} accent={accent} />
      </div>

      <div className="w-full md:w-[55%] flex flex-col space-y-5">

        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted/60">{project.year}</span>
          <div className="w-6 h-px bg-white/15" />
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
          />
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted/50">EM_PRODUÇÃO</span>
        </div>

        <div className="overflow-hidden">
          <h3
            className="card-title-inner font-display font-bold leading-[1.05] tracking-tight text-primary"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}
          >
            {project.title}
          </h3>
        </div>

        <p className="text-muted/80 text-sm md:text-base leading-relaxed max-w-xs md:max-w-sm font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded border font-mono text-[10px] text-muted/50 transition-colors duration-300 cursor-default"
              style={{ borderColor: `${accent}15`, background: `${accent}05` }}
            >
              #{t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2">
          {project.github && (
            <>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted/50 hover:text-primary transition-colors duration-300 font-mono text-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>repositório</span>
              </a>
              <div className="w-px h-4 bg-white/10" />
            </>
          )}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-300 font-mono text-xs"
            style={{ color: `${accent}80` }}
            onMouseEnter={e => (e.currentTarget.style.color = accent)}
            onMouseLeave={e => (e.currentTarget.style.color = `${accent}80`)}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>ver sistema</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section bg number + title
      const sectionNum = scrollRef.current?.querySelector('.section-bg-num');
      const sectionTitle = scrollRef.current?.querySelector('.section-bg-title');
      if (sectionNum) {
        gsap.fromTo(sectionNum,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out',
            scrollTrigger: { trigger: containerRef.current, start: 'top 90%' } }
        );
      }
      if (sectionTitle) {
        gsap.fromTo(sectionTitle,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.4, ease: 'power2.out', delay: 0.15,
            scrollTrigger: { trigger: containerRef.current, start: 'top 90%' } }
        );
      }

      // Title chars — always animate regardless of scroll amount
      const titleChars = scrollRef.current?.querySelectorAll('.title-char');
      if (titleChars?.length) {
        gsap.fromTo(titleChars,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.05, ease: 'power3.out',
            scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
          }
        );
      }

      const titleSub = scrollRef.current?.querySelector('.title-sub');
      if (titleSub) {
        gsap.fromTo(titleSub,
          { opacity: 0, y: 14 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
            scrollTrigger: { trigger: containerRef.current, start: 'top 76%' },
          }
        );
      }

      const scrollWidth = scrollRef.current?.scrollWidth || 0;
      const viewportWidth = window.innerWidth;
      const amountToScroll = Math.max(0, scrollWidth - viewportWidth);
      if (amountToScroll <= 0) return;

      // Card title reveals — offset based on each card's actual left position
      const cards = Array.from(scrollRef.current?.querySelectorAll('.project-card') || []);
      cards.forEach((card) => {
        const titleEl = card.querySelector('.card-title-inner') as HTMLElement | null;
        if (!titleEl) return;
        const cardEl = card as HTMLElement;
        // When this much has been scrolled, the card center reaches the viewport center
        const scrollAtCenter = Math.max(0, cardEl.offsetLeft + cardEl.offsetWidth / 2 - viewportWidth / 2);
        const triggerAt = Math.max(0, scrollAtCenter - viewportWidth * 0.4);

        gsap.set(titleEl, { yPercent: 110 });
        gsap.to(titleEl, {
          yPercent: 0, duration: 0.55, ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${triggerAt} top`,
            once: true,
          },
        });
      });

      // Horizontal scroll
      gsap.to(scrollRef.current, {
        x: -amountToScroll,
        ease: 'none',
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="relative h-screen bg-transparent overflow-hidden">

      {/* HUD elements */}
      <div className="absolute bottom-10 left-10 z-30 pointer-events-none">
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-accent/30">
          {projects.length.toString().padStart(2, '0')}_PROJETOS // TODOS_EM_PROD
        </span>
      </div>
      <div className="absolute top-10 right-10 z-30 pointer-events-none flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400/60 animate-pulse" />
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/20">
          STATUS_ONLINE
        </span>
      </div>

      <div
        ref={scrollRef}
        className="flex h-full items-center"
        style={{ width: 'fit-content' }}
      >
        {/* Heading panel — scrolls with cards */}
        <div
          className="relative flex flex-col justify-center h-full shrink-0 px-[8vw] md:px-[10vw]"
          style={{ minWidth: 'clamp(320px, 72vw, 60vw)' }}
        >
          <div className="section-bg-num absolute -left-4 -top-10 select-none pointer-events-none font-display font-bold leading-none"
            style={{ fontSize: 'clamp(100px, 18vw, 200px)', color: 'rgba(0,212,255,0.04)', opacity: 0 }}>
            04
          </div>
          <div className="section-bg-title absolute right-0 -top-6 select-none pointer-events-none font-display font-bold leading-none opacity-0 text-right"
            style={{ fontSize: 'clamp(70px, 12vw, 140px)', color: 'rgba(255,255,255,0.025)' }}>
            PROJECTS
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-accent font-medium">04.</span>
            <span className="font-mono text-xs text-muted tracking-[0.2em] uppercase">Projects</span>
          </div>

          <div className="flex items-end gap-2 mb-5">
            <div
              className="font-display font-bold tracking-tight leading-[0.9]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {TITLE_CHARS.map((char, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom" style={{ lineHeight: 1.1 }}>
                  <span className="title-char inline-block">{char}</span>
                </span>
              ))}
            </div>
            <div className="overflow-hidden pb-1">
              <span
                className="title-char inline-block font-display font-bold tracking-tight text-muted"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.9 }}
              >
                _PORTFOLIO
              </span>
            </div>
          </div>

          <div className="title-sub">
            <p className="font-mono text-[11px] text-muted/50 tracking-[0.15em] uppercase">
              Sistemas reais — entregues em produção
            </p>
          </div>

          {/* Divider to first card */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-[30vh] bg-gradient-to-b from-transparent via-white/8 to-transparent" />
        </div>

        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}

        {/* End spacer */}
        <div className="w-[20vw] h-full shrink-0 flex items-center justify-center">
          <div className="w-px h-[25vh] bg-gradient-to-b from-transparent via-white/8 to-transparent" />
        </div>
      </div>
    </section>
  );
}
