import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo, terminalLines } from '../data/portfolio';
import { ArrowDown, Circle, Terminal as TerminalIcon } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);



function Terminal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contents = containerRef.current?.querySelectorAll('.terminal-line-content');
    if (!contents?.length) return;

    let delay = 1.8;
    contents.forEach((el) => {
      const text = (el.textContent || '').trim();
      if (!text) {
        delay += 0.15;
        return;
      }
      const chars = text.length;
      const duration = Math.min(0.55, Math.max(0.1, chars * 0.022));
      gsap.fromTo(el,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration, ease: `steps(${chars}, end)`, delay }
      );
      delay += duration + 0.06;
    });
  }, []);

  const getLineMarkup = (text: string) => {
    if (text.includes('const ')) {
      return (
        <>
          <span className="text-muted">const </span>
          <span className="text-[var(--accent)]">developer</span>
          <span className="text-primary"> = {'{'}</span>
        </>
      );
    }
    if (text === '};') return <span className="text-primary">{'};'}</span>;
    if (text === '') return null;
    if (text.includes('// ✓')) {
      const [code, comment] = text.split('//');
      return (
        <>
          <span className="text-[var(--accent)]">{code}</span>
          <span className="text-muted pl-2">{'// '}</span>
          <span className="text-green-400">{comment.trim()}</span>
          <span className="terminal-cursor inline-block w-1.5 h-3 bg-[var(--accent)] animate-pulse ml-1" />
        </>
      );
    }
    if (text.startsWith('  ')) {
      const colonIdx = text.indexOf(':');
      const key = text.slice(0, colonIdx).trim();
      const val = text.slice(colonIdx + 1).trim().replace(/,$/, '');
      return (
        <>
          <span className="text-muted opacity-50">&nbsp;&nbsp;</span>
          <span className="text-primary/80">{key}</span>
          <span className="text-muted">: </span>
          <span className="text-[var(--accent)]/90">{val}</span>
          <span className="text-muted">,</span>
        </>
      );
    }
    return <span className="text-muted">{text}</span>;
  };

  return (
    <div
      ref={containerRef}
      className="bento-box p-6 font-mono text-xs md:text-sm leading-relaxed w-full border border-white/5 bg-[#0D0D14]/90 hover:border-white/10 transition-colors duration-300"
    >
      {/* Terminal header bar */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-muted" />
          <span className="text-muted text-[10px] tracking-wider uppercase">~/system/dg.tsConfig</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
      </div>

      <div className="space-y-1">
        {terminalLines.map((line, i) => (
          <div key={i} className="terminal-line min-h-[1.5em] flex items-start">
            <span className="text-muted/30 w-6 select-none shrink-0">{i + 1}</span>
            <div className="terminal-line-content flex-1">{getLineMarkup(line.text)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const scrollIndRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const roleTag = line1Ref.current?.querySelector('.role-tag');
      const diorgenesElem = line1Ref.current?.querySelector('.diorgenes-line');
      const georgeElem = line1Ref.current?.querySelector('.full-stack-line');

      // Set initial state for slide-up reveal
      gsap.set([diorgenesElem, georgeElem], { y: '105%' });

      const tl = gsap.timeline({
        onComplete: () => ScrollTrigger.refresh(),
      });

      // Curtain rises
      tl.to(curtainRef.current, { yPercent: -100, duration: 0.85, ease: 'expo.inOut' }, 0);

      // Role tag
      if (roleTag) {
        tl.fromTo(roleTag,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
          0.38
        );
      }

      // DIORGENES — slide up from mask
      if (diorgenesElem) {
        tl.to(diorgenesElem,
          { y: '0%', duration: 0.9, ease: 'expo.out' },
          0.50
        );
      }

      // GEORGE — slide up, slightly after
      if (georgeElem) {
        tl.to(georgeElem,
          { y: '0%', duration: 0.9, ease: 'expo.out' },
          0.68
        );
      }

      // Terminal card (enters early alongside content)
      tl.fromTo(terminalRef.current,
        { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out' },
        0.65
      );

      tl.fromTo(statusRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 }, 0.9);
      tl.fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 1.0);
      tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 1.1);
      tl.fromTo(scrollIndRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.55);

      // Parallax on scroll
      gsap.to(terminalRef.current, {
        yPercent: 15, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 0.8 },
      });

      gsap.to(scrollIndRef.current, {
        y: 8, repeat: -1, yoyo: true, duration: 1.5, ease: 'power1.inOut', delay: 2,
      });
    }, heroRef);

    // Mouse parallax on ambient glows
    const onMouseMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      gsap.to(glow1Ref.current, { x: nx * 55, y: ny * 40, duration: 1.8, ease: 'power1.out', overwrite: 'auto' });
      gsap.to(glow2Ref.current, { x: nx * -40, y: ny * -28, duration: 2.2, ease: 'power1.out', overwrite: 'auto' });
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      gsap.to(window, { scrollTo: { y: el, offsetY: 80 }, duration: 1, ease: 'power3.inOut' });
    }
  };

  const magnetMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    gsap.to(e.currentTarget, {
      x: (e.clientX - r.left - r.width / 2) * 0.45,
      y: (e.clientY - r.top - r.height / 2) * 0.45,
      duration: 0.3, ease: 'power2.out',
    });
  };

  const magnetLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  };

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">

      {/* Curtain — covers hero on load, slides up to reveal */}
      <div ref={curtainRef} className="absolute inset-0 bg-[#0D0D14] z-[100] pointer-events-none" />

      <div className="vignette" />

      {/* Aurora Background Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-bg w-[60vw] h-[60vw] top-[-10%] left-[-10%] bg-accent/10" />
        <div className="aurora-bg w-[50vw] h-[50vw] bottom-[-10%] right-[-10%] bg-blue-900/20" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Core Glow — mouse parallax via glow1Ref / glow2Ref */}
      <div ref={glow1Ref} className="bg-glow w-[600px] h-[600px] bg-[var(--accent)] top-1/4 -right-20 animate-float" />
      <div ref={glow2Ref} className="bg-glow w-[500px] h-[500px] bg-[var(--accent)] bottom-0 -left-20 opacity-10 animate-float" style={{ animationDelay: '-3s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">

            {/* Status Badge */}
            <div ref={statusRef} className="opacity-0 flex flex-wrap gap-4">
              {personalInfo.available && (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-mono backdrop-blur-md">
                  <Circle className="w-2 h-2 fill-green-400 animate-pulse" />
                  Disponível para projetos
                </span>
              )}
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 text-muted text-xs font-mono backdrop-blur-md">
                {personalInfo.location}
              </span>
            </div>

            {/* Title */}
            <div ref={line1Ref} className="font-display font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight">
              <div className="role-tag opacity-0 font-mono font-normal text-[11px] tracking-[0.3em] text-muted/50 mb-5 flex items-center gap-2">
                <span className="text-accent/50">[</span>
                <span>ENGENHEIRO DE SOFTWARE</span>
                <span className="text-accent/50">]</span>
              </div>
              <div className="overflow-hidden pb-[0.08em]">
                <span className="steel-liquid block diorgenes-line">DIORGENES</span>
              </div>
              <div className="overflow-hidden pb-[0.08em]">
                <span className="steel-liquid block full-stack-line" style={{ animationDuration: '7s', animationDirection: 'normal' }}>GEORGE</span>
              </div>
            </div>

            {/* Subtitle */}
            <div ref={subtitleRef} className="opacity-0 max-w-lg">
              <p className="text-primary/60 text-base md:text-lg leading-relaxed border-l-2 border-accent/30 pl-5">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Actions & Socials */}
            <div ref={ctaRef} className="opacity-0 pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                onClick={() => scrollTo('#projects')}
                className="px-10 py-4 bg-white text-background font-display font-bold text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-background transition-all duration-500 rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.08)]"
              >
                Ver Sistemas
              </button>

              <div className="flex items-center gap-4">
                {[
                  { icon: FaWhatsapp, href: personalInfo.whatsapp, label: 'WhatsApp' },
                  { icon: FaInstagram, href: personalInfo.instagram, label: 'Instagram' },
                  { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
                  { icon: FaLinkedinIn, href: personalInfo.linkedin, label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    onMouseMove={magnetMove}
                    onMouseLeave={magnetLeave}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-white/30 transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Terminal Bento */}
          <div ref={terminalRef} className="lg:col-span-5 relative group">
            <Terminal />

            {/* Overlay Decorative Badge */}
            <div className="absolute bottom-2 right-2 sm:-bottom-6 sm:-right-6 bento-box px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 bg-background/40 backdrop-blur-3xl border border-white/10 z-20 shadow-2xl">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-[11px] font-mono tracking-widest">build passing</span>
                </div>
                <span className="text-muted/40 text-[10px] font-mono tracking-widest pl-3.5">v2026 · stable</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndRef} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted opacity-0">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Iniciar</span>
        <ArrowDown className="w-4 h-4 text-accent" />
      </div>
    </section>
  );
}
