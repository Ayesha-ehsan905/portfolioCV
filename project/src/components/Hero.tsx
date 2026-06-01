import { useEffect, useState } from 'react';
import { Mail, Phone, Linkedin, ChevronDown, Sparkles } from 'lucide-react';

const roles = [
  'Frontend Engineer (React / Next.js)',
  'Product-minded UI Engineer',
  'Design Systems & Component Architecture',
  'Performance, Accessibility & UX Polish',
  'Full‑stack growth (Node.js / NestJS)',
  'Web3 integrations (EVM / Solana)',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg px-6"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-8 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Sparkles size={12} />
          <span>Available for opportunities</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-white tracking-tight">
          <span className="relative inline-block">
            Ayesha
            <span className="absolute left-0 -bottom-2 h-px w-full bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
          </span>
        </h1>

        {/* Typewriter */}
        <div
          className={`h-10 flex items-center justify-center mb-6 transition-all duration-700 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-sky-400 font-mono text-xl sm:text-2xl font-semibold">
            {displayed}
            <span className="animate-blink text-sky-300">|</span>
          </span>
        </div>

        {/* Years badge */}
        <div
          className={`flex items-center justify-center gap-3 mb-8 transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-300 text-sm">
            <span className="text-sky-400 font-bold font-mono">4+</span>
            <span>Years Experience</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-300 text-sm">
            <span>Rawalpindi, Pakistan</span>
          </div>
        </div>

        {/* Summary */}
        <p
          className={`text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-[400ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Frontend Engineer focused on building fast, accessible interfaces and maintainable component systems with React, Next.js
          &amp; TypeScript. Experienced with Web3 integrations (EVM &amp; Solana) and expanding into full‑stack delivery with Node.js
          &amp; NestJS.
        </p>

        {/* CTA links */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 mb-14 transition-all duration-700 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="mailto:aishaehsan0@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mail size={15} />
            Get in Touch
          </a>
          {/* <a
            href="tel:+923365010495"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800/80 border border-slate-700/60 hover:border-sky-500/50 text-slate-300 hover:text-sky-400 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <Phone size={15} />
            +92 336 501 0495
          </a> */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800/80 border border-slate-700/60 hover:border-sky-500/50 text-slate-300 hover:text-sky-400 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </div>

        {/* Tech stack pills */}
        <div
          className={`flex flex-wrap justify-center gap-2 transition-all duration-700 delay-[600ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {['React.js', 'Next.js', 'Angular', 'TypeScript', 'Node.js', 'NestJS', 'Web3', 'Solana', 'Ethereum', 'Tailwind'].map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/40 text-slate-400 text-xs font-mono hover:border-sky-500/40 hover:text-sky-400 transition-colors cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-sky-400 transition-all duration-700 delay-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
