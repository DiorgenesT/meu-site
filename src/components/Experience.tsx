import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience, education } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Section heading ─────────────────────────────────────
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

      // ── Timeline progress line (scrub-driven) ────────────────
      if (progressRef.current) {
        gsap.fromTo(progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1, ease: 'none', transformOrigin: 'top',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              end: 'bottom 60%',
              scrub: 0.6,
            },
          }
        );
      }

      // ── Experience cards ─────────────────────────────────────
      timelineRef.current?.querySelectorAll('.exp-card').forEach((card) => {

        // Card clip-path reveal
        gsap.fromTo(card,
          { clipPath: 'inset(0 100% 0 0 round 32px)', opacity: 0 },
          {
            clipPath: 'inset(0 0% 0 0 round 32px)', opacity: 1,
            duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%' },
          }
        );

        // Role words reveal
        card.querySelectorAll('.role-word').forEach((word, wi) => {
          gsap.fromTo(word,
            { yPercent: 110 },
            {
              yPercent: 0, duration: 0.5, ease: 'power3.out',
              scrollTrigger: { trigger: card, start: 'top 86%' },
              delay: wi * 0.08,
            }
          );
        });

        // Period badge slides in from right
        const period = card.querySelector('.period-badge');
        if (period) {
          gsap.fromTo(period,
            { x: 24, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out',
              scrollTrigger: { trigger: card, start: 'top 86%' }, delay: 0.2 }
          );
        }

        // Description fade
        const desc = card.querySelector('.card-desc');
        if (desc) {
          gsap.fromTo(desc,
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out',
              scrollTrigger: { trigger: card, start: 'top 84%' }, delay: 0.28 }
          );
        }

        // Tech tags stagger
        const tags = card.querySelectorAll('.tech-tag');
        if (tags.length) {
          gsap.fromTo(tags,
            { scale: 0.7, opacity: 0, y: 8 },
            {
              scale: 1, opacity: 1, y: 0,
              duration: 0.35, stagger: 0.05, ease: 'back.out(1.8)',
              scrollTrigger: { trigger: card, start: 'top 82%' }, delay: 0.35,
            }
          );
        }
      });

      // ── Timeline dots & connectors ───────────────────────────
      timelineRef.current?.querySelectorAll('.tl-dot').forEach((dot) => {
        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2.5)',
            scrollTrigger: { trigger: dot, start: 'top 90%' } }
        );
      });

      timelineRef.current?.querySelectorAll('.tl-connector').forEach((line) => {
        gsap.fromTo(line,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.4, ease: 'power2.out', transformOrigin: 'left',
            scrollTrigger: { trigger: line, start: 'top 90%' } }
        );
      });

      // ── Education ────────────────────────────────────────────
      const eduItems = eduRef.current ? Array.from(eduRef.current.children) : [];
      gsap.fromTo(eduItems,
        { x: 24, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.55, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: { trigger: eduRef.current, start: 'top 85%' } }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-32 relative overflow-hidden">

      {/* HUD elements */}
      <div className="absolute top-10 right-10 z-10 pointer-events-none">
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-accent/30">
          03 // TRAJETÓRIA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div ref={headingRef} className="relative flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">

          {/* Background number */}
          <div className="section-bg-num absolute -left-4 -top-10 select-none pointer-events-none font-display font-bold leading-none opacity-0"
            style={{ fontSize: 'clamp(100px, 18vw, 200px)', color: 'rgba(0,212,255,0.04)' }}>
            03
          </div>
          <div className="section-bg-title absolute right-0 -top-6 select-none pointer-events-none font-display font-bold leading-none opacity-0 text-right"
            style={{ fontSize: 'clamp(70px, 12vw, 140px)', color: 'rgba(255,255,255,0.025)' }}>
            EXPERIENCE
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent font-medium">03.</span>
              <span className="font-mono text-xs text-muted tracking-[0.2em] uppercase">Experience</span>
              <div className="w-16 h-[1px] bg-white/10" />
            </div>
            <h2 className="font-display font-bold text-5xl md:text-7xl text-primary tracking-tight">
              <span className="inline-block overflow-hidden align-bottom mr-4">
                <span className="section-title-word inline-block">TRAJETÓRIA</span>
              </span>
              <span className="inline-block overflow-hidden align-bottom">
                <span className="section-title-word inline-block text-muted">PROFISSIONAL</span>
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left: Timeline */}
          <div ref={timelineRef} className="lg:col-span-8 relative pl-10 md:pl-16">

            {/* Static track */}
            <div className="absolute left-0 top-6 bottom-0 w-px bg-white/5" />
            {/* Animated progress fill */}
            <div ref={progressRef} className="absolute left-0 top-6 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent origin-top" />

            <div className="space-y-10">
              {experience.map((item, i) => (
                <div key={i} className="relative group">

                  {/* Dot */}
                  <div
                    className="tl-dot absolute -left-[45px] md:-left-[69px] top-8 w-4 h-4 rounded-full z-10"
                    style={{
                      background: item.isCurrentJob ? '#00A3FF' : '#12121A',
                      border: `2px solid ${item.isCurrentJob ? '#00A3FF' : 'rgba(255,255,255,0.2)'}`,
                      boxShadow: item.isCurrentJob ? '0 0 20px rgba(0,163,255,0.5), 0 0 40px rgba(0,163,255,0.2)' : 'none',
                    }}
                  />

                  {/* Connector */}
                  <div className="tl-connector absolute top-10 -left-[41px] md:-left-[65px] w-6 md:w-10 h-px bg-white/10 group-hover:bg-accent/30 transition-colors duration-500" />

                  {/* Card */}
                  <div className={`exp-card bento-box p-8 md:p-10 ${item.isCurrentJob ? 'border-accent/25' : ''}`}
                    style={{ clipPath: 'inset(0 100% 0 0 round 32px)', opacity: 0 }}>

                    {item.isCurrentJob && (
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent via-accent/20 to-transparent" />
                    )}

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                          {/* Role — word-by-word reveal */}
                          <h3 className="font-display font-semibold text-primary text-xl md:text-2xl leading-tight group-hover:text-accent transition-colors duration-300">
                            {item.role.split(' ').map((word, wi) => (
                              <span key={wi} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
                                <span className="role-word inline-block">{word}</span>
                              </span>
                            ))}
                          </h3>
                          {item.isCurrentJob && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] tracking-wider uppercase">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                              Atual
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-primary/70">{item.company}</span>
                          {item.companyDetail && (
                            <>
                              <span className="text-white/20">/</span>
                              <span className="text-muted text-sm">{item.companyDetail}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="period-badge font-mono text-xs text-muted/60 whitespace-nowrap pt-1 px-4 py-2 rounded-full border border-white/5 bg-white/5 flex-shrink-0">
                        {item.period}
                      </div>
                    </div>

                    <p className="card-desc text-muted/90 text-sm md:text-base leading-relaxed mb-8">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span key={t} className="tech-tag px-3 py-1 rounded border border-white/10 bg-white/5 text-primary/60 font-mono text-[10px] hover:border-accent/40 hover:text-accent transition-colors duration-300 cursor-default">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="bento-box p-8">
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-[10px] text-accent tracking-widest uppercase">Histórico Acadêmico</span>
                  <div className="flex-1 h-[1px] bg-white/10" />
                </div>

                <div ref={eduRef} className="space-y-6">
                  {education.map((edu, i) => (
                    <div key={i} className="group relative">
                      <div className="absolute -left-3 top-2 w-[2px] h-0 bg-accent group-hover:h-full transition-all duration-300" />
                      <div className="pl-4">
                        <span className="inline-block px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-muted mb-2">
                          {edu.degree}
                        </span>
                        <div className="font-display font-medium text-primary text-base mb-1 leading-snug group-hover:text-accent transition-colors duration-300">
                          {edu.field}
                        </div>
                        <div className="text-muted/80 text-sm">{edu.institution}</div>
                        <div className="font-mono text-[10px] text-muted/50 mt-1">{edu.period}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
