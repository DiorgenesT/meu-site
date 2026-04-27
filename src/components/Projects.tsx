import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolio';
import { ExternalLink, Github, Terminal as TerminalIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function CodePreview({ project, accent }: { project: typeof projects[0]; accent: string }) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-[#0D0D14] group">
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
    <div className="project-card relative flex flex-col md:flex-row h-auto md:h-full w-full md:w-[72vw] lg:w-[62vw] md:shrink-0 gap-8 md:gap-14 items-start md:items-center justify-center px-0 md:px-16">

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

        <h3
          className="font-display font-bold leading-[1.05] tracking-tight text-primary"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}
        >
          {project.title}
        </h3>

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
  const headingRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section bg number + title (now in headingRef, not scrollRef)
      const sectionNum = headingRef.current?.querySelector('.section-bg-num');
      const sectionTitle = headingRef.current?.querySelector('.section-bg-title');
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

      const scrollWidth = scrollRef.current?.scrollWidth || 0;
      const viewportWidth = window.innerWidth;
      const amountToScroll = Math.max(0, scrollWidth - viewportWidth);
      if (amountToScroll <= 0) return;

      // Horizontal scroll — natural: left to right (x: 0 → -amountToScroll)
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
    <section ref={containerRef} id="projects" className="relative overflow-hidden flex flex-col md:h-screen">

      {/* pt-16 on md+ so section-bg-num (-top-10) stays within section bounds */}
      <div className="pt-8 md:pt-16 shrink-0">
        <div ref={headingRef} className="relative max-w-7xl mx-auto px-6 pb-6">

          <div className="section-bg-num hidden md:block absolute -left-4 -top-10 select-none pointer-events-none font-display font-bold leading-none opacity-0"
            style={{ fontSize: 'clamp(100px, 18vw, 200px)', color: 'rgba(0,212,255,0.04)' }}>
            04
          </div>
          <div className="section-bg-title hidden md:block absolute right-0 -top-6 select-none pointer-events-none font-display font-bold leading-none opacity-0 text-right"
            style={{ fontSize: 'clamp(70px, 12vw, 140px)', color: 'rgba(255,255,255,0.025)' }}>
            PROJECTS
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-accent font-medium">04.</span>
                <span className="font-mono text-xs text-muted tracking-[0.2em] uppercase">Projects</span>
                <div className="w-16 h-[1px] bg-white/10" />
              </div>
            </div>
            <div className="title-sub">
              <p className="font-mono text-[11px] text-muted/50 tracking-[0.15em] uppercase pb-1">
                Sistemas reais, entregues em produção
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile: vertical card grid */}
      <div className="md:hidden px-4 sm:px-6 pb-16 space-y-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      {/* Desktop: horizontal scroll area */}
      <div className="hidden md:flex flex-1 min-h-0 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex h-full items-center"
          style={{ width: 'fit-content' }}
        >
          <div className="w-[10vw] h-full shrink-0 flex items-center justify-center">
            <div className="w-px h-[25vh] bg-gradient-to-b from-transparent via-white/8 to-transparent" />
          </div>

          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}

          <div className="w-[10vw] h-full shrink-0 flex items-center justify-center">
            <div className="w-px h-[25vh] bg-gradient-to-b from-transparent via-white/8 to-transparent" />
          </div>
        </div>
      </div>

    </section>
  );
}
