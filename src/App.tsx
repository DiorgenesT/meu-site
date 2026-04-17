import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
ScrollTrigger.defaults({ once: true });
ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <div id="main-site">
        <Navbar />
        <main>
          <Hero />
          <Philosophy />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Connect />
        </main>
        <Footer />
      </div>
    </>
  );
}
