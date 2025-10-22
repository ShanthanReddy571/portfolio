'use client';

import { useEffect, useRef, useState } from 'react';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);
  return reduced;
}

export default function WelcomeBurst() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const rainCanvasRef = useRef(null);
  const rainRafRef = useRef(0);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    // prepare canvas size
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    function resize() {
      const r = wrap.getBoundingClientRect();
      canvas.width = Math.floor(r.width * DPR);
      canvas.height = Math.floor(r.height * DPR);
      canvas.style.width = r.width + 'px';
      canvas.style.height = r.height + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  // Create and manage a full-page confetti canvas appended to body
  useEffect(() => {
    const cvs = document.createElement('canvas');
    cvs.style.position = 'absolute';
    cvs.style.left = '0';
    cvs.style.top = '0';
    cvs.style.pointerEvents = 'none';
    cvs.style.zIndex = '5';
    cvs.style.opacity = '0';
    document.body.appendChild(cvs);
    rainCanvasRef.current = cvs;

    const ctx = cvs.getContext('2d', { alpha: true });
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    function size() {
      const docH = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight
      );
      cvs.width = Math.floor(window.innerWidth * DPR);
      cvs.height = Math.floor(docH * DPR);
      cvs.style.width = window.innerWidth + 'px';
      cvs.style.height = docH + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    size();
    window.addEventListener('resize', size);
    const ro = new ResizeObserver(size);
    ro.observe(document.body);
    return () => {
      window.removeEventListener('resize', size);
      ro.disconnect();
      if (cvs.parentNode) cvs.parentNode.removeChild(cvs);
      rainCanvasRef.current = null;
    };
  }, []);

  function burstAt(x, y, opts = {}) {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    const origin = { x: x - rect.left, y: y - rect.top };
    const colors = opts.colors || [
      '#ffffff',
      '#c7d2fe', // indigo-200
      '#a78bfa', // violet-400
      '#93c5fd', // blue-300
      '#818cf8', // indigo-400
    ];

    const particles = [];
    const count = opts.count || 120;
    const power = opts.power || 1;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.6;
      const speed = (2 + Math.random() * 3.5) * power;
      particles.push({
        x: origin.x,
        y: origin.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        decay: 0.01 + Math.random() * 0.02,
        r: 1.4 + Math.random() * 2.4,
        c: colors[(Math.random() * colors.length) | 0],
        shape: ['dot', 'square', 'triangle'][Math.floor(Math.random() * 3)],
        spin: (Math.random() - 0.5) * 0.3,
        rot: Math.random() * Math.PI,
      });
    }

    let raf = 0;
    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02; // gravity
        p.life -= p.decay;
        if (p.life <= 0) continue;
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.fillStyle = p.c;
        ctx.save();
        ctx.translate(p.x, p.y);
        p.rot += p.spin;
        ctx.rotate(p.rot);
        if (p.shape === 'square') {
          ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 2);
        } else if (p.shape === 'triangle') {
          ctx.beginPath();
          ctx.moveTo(0, -p.r * 1.6);
          ctx.lineTo(p.r * 1.4, p.r * 1.2);
          ctx.lineTo(-p.r * 1.4, p.r * 1.2);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      if (particles.some((p) => p.life > 0)) raf = requestAnimationFrame(tick);
      else cancelAnimationFrame(raf);
    }
    cancelAnimationFrame(raf);
    tick();
  }

  function confettiRain(opts = {}) {
    const cvs = rainCanvasRef.current;
    const ctx = cvs?.getContext('2d');
    if (!cvs || !ctx) return;
    const duration = opts.duration || 2000;
    const start = performance.now();
    const W = cvs.width;
    const H = cvs.height;
    const colors = ['#ffffff', '#a78bfa', '#93c5fd', '#818cf8', '#fde68a'];
    const count = opts.count || 140;
    const pieces = Array.from({ length: count }).map(() => ({
      x: Math.random() * (W / (window.devicePixelRatio || 1)),
      y: -20 - Math.random() * 200,
      vy: 1 + Math.random() * 2.5,
      sway: 10 + Math.random() * 18,
      freq: 0.01 + Math.random() * 0.02,
      rot: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.25,
      w: 4 + Math.random() * 4,
      h: 8 + Math.random() * 10,
      c: colors[(Math.random() * colors.length) | 0],
      t: Math.random() * 1000,
    }));

    // ensure previous animation is stopped and canvas visible
    if (rainRafRef.current) cancelAnimationFrame(rainRafRef.current);
    cvs.style.opacity = '1';
    let raf = 0;
    function tick(now) {
      const elapsed = now - start;
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      ctx.globalCompositeOperation = 'source-over';
      for (const p of pieces) {
        p.t += p.freq * 60;
        p.y += p.vy;
        const dx = Math.sin(p.t) * p.sway;
        p.rot += p.spin;
        ctx.save();
        ctx.translate(p.x + dx, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
        // do not recycle; let pieces fall off-page naturally
      }
      if (elapsed < duration) {
        raf = requestAnimationFrame(tick);
        rainRafRef.current = raf;
      } else {
        cancelAnimationFrame(raf);
        rainRafRef.current = 0;
        // fade out and clear
        const fadeStart = performance.now();
        function fade(ts) {
          const t = Math.min(1, (ts - fadeStart) / 250);
          cvs.style.opacity = String(1 - t);
          if (t < 1) requestAnimationFrame(fade);
          else {
            ctx.clearRect(0, 0, cvs.width, cvs.height);
            cvs.style.opacity = '0';
          }
        }
        requestAnimationFrame(fade);
      }
    }
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(tick);
    rainRafRef.current = raf;
  }

  // Fire a gentle auto-burst on first visit per session
  useEffect(() => {
    if (prefersReduced) return;
    try {
      if (!sessionStorage.getItem('welcome-burst')) {
        sessionStorage.setItem('welcome-burst', '1');
        const wrap = wrapRef.current;
        if (wrap) {
          const rect = wrap.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          // main burst + delayed ring
          burstAt(cx, cy, { count: 90, power: 1 });
          setTimeout(() => burstAt(cx, cy, { count: 60, power: 1.2, colors: ['#ffffff', '#a78bfa', '#93c5fd'] }), 150);
        }
      }
    } catch {}
  }, [prefersReduced]);

  return (
    <div ref={wrapRef} className="relative inline-block">
      <button
        type="button"
        className="welcome-banner"
        onClick={(e) => {
          if (prefersReduced) return;
          // central burst
          burstAt(e.clientX, e.clientY, { count: 140, power: 1.2 });
          // additional ring bursts around
          const angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
          const radius = 36;
          setTimeout(() => {
            const rect = canvasRef.current?.getBoundingClientRect();
            if (!rect) return;
            for (const a of angles) {
              const x = e.clientX + Math.cos(a) * radius;
              const y = e.clientY + Math.sin(a) * radius;
              burstAt(x, y, { count: 40, power: 0.8 });
            }
          }, 120);
          // start short confetti rain across the viewport
          confettiRain({ duration: 2200, count: 160 });
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 3v3M21 12h-3M6 12H3M17.657 6.343l-2.121 2.121M8.464 15.536l-2.121 2.121M17.657 17.657l-2.121-2.121M8.464 8.464L6.343 6.343"/>
        </svg>
        <span>Welcome</span>
        <span aria-hidden>✨</span>
      </button>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />
      <canvas ref={rainCanvasRef} className="pointer-events-none fixed inset-0 z-[5]" />
    </div>
  );
}
