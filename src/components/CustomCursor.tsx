import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide on mobile
    if (window.innerWidth < 768) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let hovering = false;
    let rafId: number;

    gsap.set([dot, ring], { opacity: 0 });

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0,
        opacity: 1,
      });
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      gsap.set(ring, { x: ringX, y: ringY, opacity: 1 });
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => {
      hovering = true;
      gsap.to(dot, { scale: 0, duration: 0.2 });
      gsap.to(ring, { scale: 1.8, borderColor: 'rgba(0,245,255,0.9)', duration: 0.3 });
    };

    const onLeave = () => {
      hovering = false;
      gsap.to(dot, { scale: 1, duration: 0.2 });
      gsap.to(ring, { scale: 1, borderColor: 'rgba(0,245,255,0.6)', duration: 0.3 });
    };

    const onMouseDown = () => {
      gsap.to(ring, { scale: hovering ? 1.4 : 0.8, duration: 0.1 });
    };
    const onMouseUp = () => {
      gsap.to(ring, { scale: hovering ? 1.8 : 1, duration: 0.2 });
    };

    const onHideLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };
    const onHideEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseleave', onHideLeave);
    window.addEventListener('mouseenter', onHideEnter);

    const interactables = document.querySelectorAll('a, button, [data-cursor="hover"]');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    // Re-attach on DOM changes via MutationObserver
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor="hover"]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseleave', onHideLeave);
      window.removeEventListener('mouseenter', onHideEnter);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ x: 0, y: 0 } as React.CSSProperties} />
      <div ref={ringRef} className="cursor-ring" style={{ x: 0, y: 0 } as React.CSSProperties} />
    </>
  );
}
