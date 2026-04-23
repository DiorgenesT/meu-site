import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { techStack } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const SKILL_GROUPS = [
  {
    title: 'Core Stack',
    desc: 'Linguagens & Ecossistema Principal',
    skills: ['TypeScript', 'Python', 'React / Next.js', 'FastAPI'],
    colSpan: 'md:col-span-2'
  },
  {
    title: 'Infra & Data',
    desc: 'Banco de Dados, Cloud & DevOps',
    skills: ['PostgreSQL', 'Docker', 'Vercel', 'AWS / Cloudflare'],
    colSpan: 'md:col-span-1'
  },
  {
    title: 'Data & Automação',
    desc: 'Processamento, Raspagem & Pipelines',
    skills: ['Web Scraping', 'Pandas / NumPy', 'Playwright', 'Beautiful Soup'],
    colSpan: 'md:col-span-1'
  },
  {
    title: 'Design Engine',
    desc: 'Interface & Animações UI/UX',
    skills: ['Tailwind CSS', 'GSAP', 'Framer Motion', 'UI Architecture'],
    colSpan: 'md:col-span-2'
  }
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleWords = headingRef.current?.querySelectorAll('.section-title-word');
      if (titleWords?.length) {
        gsap.set(titleWords, { yPercent: 115 });
        gsap.to(titleWords, {
          yPercent: 0, duration: 0.75, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        });
      }

      // Section bg number + title
      const sectionNum = headingRef.current?.querySelector('.section-bg-num');
      const sectionTitle = headingRef.current?.querySelector('.section-bg-title');
      if (sectionNum) {
        gsap.fromTo(sectionNum,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out',
            scrollTrigger: { trigger: headingRef.current, start: 'top 90%' } }
        );
        gsap.to(sectionNum, {
          yPercent: -20, ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
        });
      }
      if (sectionTitle) {
        gsap.fromTo(sectionTitle,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.4, ease: 'power2.out', delay: 0.15,
            scrollTrigger: { trigger: headingRef.current, start: 'top 90%' } }
        );
        gsap.to(sectionTitle, {
          yPercent: -15, ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
        });
      }

      // Nodes stagger in
      const nodes = gridRef.current?.querySelectorAll('.skill-node');
      if (nodes) {
        gsap.fromTo(nodes,
          { y: 30, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.2)',
            scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-surface/30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div ref={headingRef} className="relative flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">

          <div className="section-bg-num absolute -left-4 -top-10 select-none pointer-events-none font-display font-bold leading-none opacity-0"
            style={{ fontSize: 'clamp(100px, 18vw, 200px)', color: 'rgba(0,212,255,0.04)' }}>
            02
          </div>
          <div className="section-bg-title absolute right-0 -top-6 select-none pointer-events-none font-display font-bold leading-none opacity-0 text-right"
            style={{ fontSize: 'clamp(70px, 12vw, 140px)', color: 'rgba(255,255,255,0.025)' }}>
            SKILLS
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-[var(--accent)] font-medium">02.</span>
              <span className="font-mono text-xs text-muted tracking-[0.2em] uppercase">Tech Stack</span>
              <div className="w-16 h-[1px] bg-white/10" />
            </div>
            <h2 className="font-display font-bold text-5xl md:text-7xl text-primary tracking-tight uppercase">
              <span className="inline-block overflow-hidden align-bottom mr-4">
                <span className="section-title-word inline-block">Infraestrutura</span>
              </span>
              <span className="inline-block overflow-hidden align-bottom">
                <span className="section-title-word inline-block text-muted">& Ferramentas</span>
              </span>
            </h2>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_GROUPS.map((group, i) => (
            <div key={i} className={`skill-node bento-box p-8 flex flex-col justify-between ${group.colSpan} border border-white/5 bg-[#0D0D14]/80`}>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-medium text-xl text-primary uppercase tracking-wide">
                    {group.title}
                  </h3>
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] animate-pulse" />
                </div>
                <p className="text-muted text-sm font-mono">{group.desc}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span key={skill}
                    className="px-4 py-2 rounded border border-white/5 bg-white/5 text-primary/80 hover:text-white hover:border-[var(--accent)] transition-all duration-300 text-sm font-mono cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Marquee Footnote */}
      <div className="mt-32 py-6 border-y border-[var(--accent)]/10 bg-[#0D0D14] overflow-hidden relative z-10">
        <div className="marquee-track flex gap-16 items-center">
          {[...techStack, ...techStack].map((t, i) => (
            <span key={i} className="flex-shrink-0 font-mono text-sm text-[var(--accent)]/50 uppercase tracking-widest hover:text-[var(--accent)] transition-colors duration-300 cursor-default whitespace-nowrap">
              {t} <span className="text-white/20 ml-16">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
