import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolio';
import { MessageCircle, MapPin, ExternalLink, Download } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const specialties = [
  {
    area: 'Python & Backend',
    stack: ['Python', 'FastAPI', 'Pydantic', 'PostgreSQL', 'TypeScript'],
    accent: '#00A3FF',
  },
  {
    area: 'AI & LLMs',
    stack: ['LangChain', 'RAG', 'AI Agents', 'OpenAI API', 'Anthropic API'],
    accent: '#E2E8F0',
  },
  {
    area: 'Cloud & Infra',
    stack: ['AWS', 'Docker', 'Cloudflare', 'CI/CD', 'pgvector'],
    accent: '#00A3FF',
  },
  {
    area: 'Dados & Automação',
    stack: ['Pandas', 'Polars', 'Web Scraping', 'Playwright', 'Pipelines'],
    accent: '#E2E8F0',
  },
  {
    area: 'Frontend & UI',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'GSAP', 'shadcn/ui'],
    accent: '#00A3FF',
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const specialtiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading word reveal
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

      // Image
      gsap.fromTo(imgRef.current,
        { scale: 0.95, opacity: 0, filter: 'blur(10px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: imgRef.current, start: 'top 80%' } }
      );

      // Bio items
      const items = bioRef.current ? Array.from(bioRef.current.children) : [];
      gsap.fromTo(items,
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: bioRef.current, start: 'top 80%' } }
      );

      // Specialties cards
      const cards = specialtiesRef.current ? Array.from(specialtiesRef.current.children) : [];
      gsap.fromTo(cards,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: specialtiesRef.current, start: 'top 88%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-20" ref={headingRef}>

          <div className="section-bg-num hidden md:block absolute -left-4 -top-10 select-none pointer-events-none font-display font-bold leading-none opacity-0"
            style={{ fontSize: 'clamp(100px, 18vw, 200px)', color: 'rgba(0,212,255,0.04)' }}>
            01
          </div>
          <div className="section-bg-title hidden md:block absolute right-0 -top-6 select-none pointer-events-none font-display font-bold leading-none opacity-0 text-right"
            style={{ fontSize: 'clamp(70px, 12vw, 140px)', color: 'rgba(255,255,255,0.025)' }}>
            ABOUT
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent font-medium">01.</span>
              <span className="font-mono text-xs text-muted tracking-[0.2em] uppercase">About Me</span>
              <div className="w-16 h-[1px] bg-white/10" />
            </div>
            <h2 className="font-display font-bold text-5xl md:text-7xl text-primary tracking-tight">
              <span className="inline-block overflow-hidden align-bottom mr-4">
                <span className="section-title-word inline-block">PERFIL</span>
              </span>
              <span className="inline-block overflow-hidden align-bottom">
                <span className="section-title-word inline-block text-muted">PROFISSIONAL</span>
              </span>
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm">
            Focado em resolver problemas estruturais complexos através de interfaces simples e sistemas escaláveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left — Photo Bento */}
          <div ref={imgRef} className="lg:col-span-4 bento-box relative overflow-hidden group">
            <div className="aspect-[4/5] relative w-full h-full flex flex-col justify-end p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-surfaceHover via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 grayscale mix-blend-luminosity" />
              
              <div className="relative z-20">
                <div className="w-16 h-16 rounded-full border border-white/10 bg-background/50 backdrop-blur-md flex items-center justify-center mb-6">
                  <span className="font-display text-xl font-bold text-primary">DG</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-1">{personalInfo.name}</h3>
                <p className="font-mono text-xs text-accent/80 tracking-widest uppercase">
                  Engenheiro de Software
                </p>
              </div>
            </div>
          </div>

          {/* Right — Bio & Details Bento */}
          <div className="lg:col-span-8 grid gap-8">
            
            {/* Top Bio Box */}
            <div ref={bioRef} className="bento-box p-8 md:p-12 space-y-8">
              <p className="text-primary/90 text-lg md:text-xl leading-relaxed font-light">
                {personalInfo.bio}
              </p>

              <p className="text-muted leading-relaxed border-l-[3px] border-accent/20 pl-6 text-sm md:text-base">
                Minha trajetória não é linear — e isso é um diferencial. Vim da gestão operacional
                e migrei para desenvolvimento de software. Hoje entendo o{' '}
                <span className="text-primary font-medium">negócio antes do código</span>, o que resulta em
                sistemas que resolvem problemas reais, não apenas cumprem requisitos técnicos.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-primary text-sm font-medium transition-all duration-300">
                  <FaGithub className="text-base" /> GitHub <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-primary text-sm font-medium transition-all duration-300">
                  <FaLinkedinIn className="text-base" /> LinkedIn <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                </a>
                <a href="/cv.pdf" download
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-primary text-sm font-medium transition-all duration-300">
                  <Download className="w-4 h-4" /> Baixar CV
                </a>
              </div>
            </div>

            {/* Bottom Row: Stats & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Location & Contact Box */}
              <div className="bento-box p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <p className="font-mono text-[10px] text-muted tracking-[0.2em] uppercase mb-4">Base de Operações</p>
                    <div className="flex items-center gap-3 text-primary">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-accent" />
                      </div>
                      <span className="font-display font-medium">{personalInfo.location}</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-muted tracking-[0.2em] uppercase mb-4">Comunicação Direta</p>
                    <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary group">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                        <MessageCircle className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                      </div>
                      <span className="font-display font-medium group-hover:text-accent transition-colors">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Education Box */}
              <div className="bento-box p-8">
                <p className="font-mono text-[10px] text-muted tracking-[0.2em] uppercase mb-6">Formação Acadêmica</p>
                <div className="space-y-6">
                  {[
                    { tag: 'Pós-Graduação', title: 'Sistemas com Python', school: 'UniCesumar', year: '2025' },
                    { tag: 'Bacharelado', title: 'Ciência da Computação', school: 'Cruzeiro do Sul', year: '2024' },
                  ].map((edu) => (
                    <div key={edu.title} className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_8px_rgba(0,163,255,0.8)]" />
                      <div>
                        <div className="text-primary font-medium mb-1">{edu.title}</div>
                        <div className="flex gap-2 items-center text-xs font-mono text-muted">
                          <span>{edu.tag}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span>{edu.school}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Specialties Strip */}
        <div ref={specialtiesRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {specialties.map((s) => (
            <div key={s.area}
              className="bento-box px-6 py-7 group hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.accent, boxShadow: `0 0 8px ${s.accent}` }} />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted">{s.area}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {s.stack.map((tech) => (
                  <span key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono border border-white/8 bg-white/3 text-primary/50 group-hover:text-primary/70 group-hover:border-white/15 transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
