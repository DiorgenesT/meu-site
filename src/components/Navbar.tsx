import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { personalInfo } from '../data/portfolio';

const links = [
  { label: 'Sobre', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Conectar', href: '#connect' },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.4 }
    );
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;
    if (menuOpen) {
      gsap.fromTo(
        menu,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      gsap.to(window, { scrollTo: y, duration: 1, ease: 'power3.inOut' });
    } else {
      window.location.hash = href;
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-bold text-xl tracking-tight group"
        >
          <span className="text-primary group-hover:text-accent transition-colors duration-300">
            {personalInfo.initials}
          </span>
          <span className="text-accent">.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="nav-link font-sans text-sm text-muted hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/cv.pdf"
            download
            className="ml-4 px-6 py-2.5 text-sm font-medium bg-white/5 hover:bg-white/10 text-primary border border-white/10 hover:border-accent/40 rounded-full transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-[2px] bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/5 px-6 py-6"
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left font-sans text-muted hover:text-primary transition-colors duration-200 text-lg"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/cv.pdf"
              download
              className="mt-4 px-6 py-3 text-sm font-medium bg-accent/10 border border-accent/20 text-accent text-center rounded-full"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
