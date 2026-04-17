import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolio';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Connect() {
  const sectionRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title char reveal — each letter slides up out of clip
      const chars = sectionRef.current?.querySelectorAll('.connect-char');
      if (chars?.length) {
        gsap.fromTo(chars,
          { yPercent: 115 },
          {
            yPercent: 0, duration: 1.0, stagger: 0.03, ease: 'power4.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
          }
        );
      }

      // Button + sub fade in
      gsap.fromTo('.connect-cta',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' } }
      );

      // Magnetic effect
      const btn = btnRef.current;
      if (btn) {
        btn.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
          gsap.to(btn, { x, y, duration: 0.4, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.3)' });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleWords = ['VAMOS', 'CONSTRUIR?'];
  const titleChars = titleWords.map(w => w.split(''));

  return (
    <section ref={sectionRef} id="connect" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32 bg-black">

      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-green-500/4 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 text-center px-6">

        <div className="font-mono text-[10px] text-accent/60 tracking-[0.5em] uppercase mb-10">
          [ STATUS: READY_FOR_DEPLOYMENT ]
        </div>

        <h2 className="font-display font-bold text-[13vw] md:text-[10vw] leading-[0.9] tracking-tighter text-primary mb-16 flex flex-wrap justify-center gap-x-[0.3em]">
          {titleChars.map((word, wi) => (
            <span key={wi} className="inline-flex">
              {word.map((char, ci) => (
                <span key={ci} className="inline-block overflow-hidden" style={{ lineHeight: 1 }}>
                  <span className="connect-char inline-block">
                    {char}
                  </span>
                </span>
              ))}
            </span>
          ))}
        </h2>

        {/* CTA */}
        <div className="connect-cta opacity-0 flex flex-col items-center gap-6">
          <p className="font-mono text-[11px] text-muted/40 tracking-[0.3em] uppercase">
            WhatsApp · Responde em minutos
          </p>

          <div className="relative">
            {/* Pulsing glow ring */}
            <div className="absolute inset-0 rounded-full bg-green-400/15 animate-ping"
              style={{ animationDuration: '2.2s', transform: 'scale(1.15)' }} />
            <div className="absolute inset-0 rounded-full border border-green-400/20 scale-125 pointer-events-none" />

            <a
              ref={btnRef}
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-5 px-14 py-7 rounded-full bg-white text-black font-display font-bold text-xl tracking-tight overflow-hidden"
            >
              {/* Hover fill slide-in */}
              <span className="absolute inset-0 bg-green-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

              <span className="relative z-10 w-10 h-10 rounded-full bg-green-500 group-hover:bg-black/15 flex items-center justify-center transition-colors duration-500 shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </span>

              <span className="relative z-10">INICIAR CONVERSA</span>

              <ArrowUpRight className="relative z-10 w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hud-element opacity-20 whitespace-nowrap pointer-events-none">
        DIORGENES_GEORGE // 2026 // ENGENHEIRO_DE_SOFTWARE
      </div>
    </section>
  );
}
