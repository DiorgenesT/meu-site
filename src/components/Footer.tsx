import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolio';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Perfil', href: '#about' },
  { label: 'Stack Técnico', href: '#skills' },
  { label: 'Trajetória', href: '#experience' },
  { label: 'Destaques', href: '#projects' },
  { label: 'Conexão', href: '#contact' },
];

const socials = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FaInstagram, href: personalInfo.instagram, label: 'Instagram' },
  { icon: FaWhatsapp, href: personalInfo.whatsapp, label: 'WhatsApp' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(bgRef.current, { opacity: 0, scale: 0.95 }, {
        opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 95%' },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) gsap.to(window, { scrollTo: el.getBoundingClientRect().top + window.scrollY - 80, duration: 1, ease: 'power3.inOut' });
  };

  return (
    <footer ref={footerRef} className="relative bg-background overflow-hidden">
      {/* Big BG text */}
      <div ref={bgRef} className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span className="font-display font-bold text-[25vw] text-white/[0.015] leading-none tracking-tighter">DG</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="font-display font-bold text-5xl text-primary tracking-tight">
              DG<span className="text-accent">.</span>
            </div>
            <p className="text-muted/80 text-sm md:text-base leading-relaxed max-w-sm">
              Desenvolvedor de software especializado em digitalização de processos.
              <br /><span className="text-primary/70 font-mono text-xs mt-2 inline-block">TypeScript · Python · Next.js</span>
            </p>
            {/* Base indicator */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              </div>
              <span className="text-muted text-xs font-mono tracking-widest uppercase">Base Operacional M.G.</span>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-6">Mapa do Site</div>
            <div className="space-y-4">
              {navLinks.map((link) => (
                <button key={link.label} onClick={() => scrollTo(link.href)}
                  className="block text-primary/60 hover:text-accent hover:translate-x-1 transition-all duration-300 text-sm text-left">
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-4">
            <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-6">Diretório de Links</div>
            <div className="space-y-5">
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center text-muted hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300">
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-muted/60 text-[11px] font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} Diorgenes George.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-muted/40 text-[10px] font-mono hidden sm:block">
              SYS-V: v2.0-bento
            </p>
            <button
              onClick={() => gsap.to(window, { scrollTo: 0, duration: 1.2, ease: 'power4.inOut' })}
              className="flex items-center gap-3 text-muted/60 hover:text-accent transition-colors duration-300 text-xs font-mono uppercase tracking-widest group">
              Retornar ao Topo
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors duration-300">
                <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
