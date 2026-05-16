"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const QUOTES = [
  {
    text: "I stopped firefighting and started leading. My week looks like a CEO's again, not a glorified inbox.",
    name: "Mike Villacis",
    role: "Owner",
    company: "Bang It Services",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    metric: "+22 HRS/WK RECLAIMED",
    accent: "rust" as const,
  },
  {
    text: "Their cold callers booked us more qualified meetings in 30 days than our last in-house team did in six months.",
    name: "Jordy Perez",
    role: "Founder",
    company: "Cash4Keys",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    metric: "6× PIPELINE — 30 DAYS",
    accent: "ochre" as const,
  },
  {
    text: "They built the operating system I'd been trying to write for two years. I just had to show up and lead.",
    name: "Sarah Coleman",
    role: "Managing Partner",
    company: "Coleman & Co.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    metric: "OPERATING SYSTEM SHIPPED",
    accent: "signal" as const,
  },
];

const ACC: Record<"rust" | "ochre" | "signal", { fill: string; text: string; shadow: string }> = {
  rust:   { fill: "bg-rust",   text: "text-rust",   shadow: "shadow-brutal-rust" },
  ochre:  { fill: "bg-ochre",  text: "text-ochre",  shadow: "shadow-brutal-ochre" },
  signal: { fill: "bg-signal", text: "text-signal", shadow: "shadow-brutal-signal" },
};

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % QUOTES.length), 8000);
    return () => clearInterval(id);
  }, []);

  const q = QUOTES[i];
  const a = ACC[q.accent];

  return (
    <section className="relative bg-paper text-ink-900 section-halo overflow-hidden">
      {/* Blueprint backdrop */}
      <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none" />
      {/* Stripe accents */}
      <div className="absolute top-32 right-12 w-40 h-40 stripe-diag text-clay opacity-30 -rotate-6 pointer-events-none" />
      <div className="absolute bottom-20 left-12 w-32 h-32 stripe-diag text-rust opacity-25 rotate-12 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="tag-mono text-clay mb-4">№ 06 — THE WITNESSES</div>
            <h2 className="font-display font-display-hard text-ink-900 text-5xl md:text-7xl leading-[0.88] tracking-[-0.04em] uppercase">
              What the <span className="marker marker-clay text-ink-900">freed</span> say.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="mono text-[11px] tracking-[0.22em] uppercase text-ink/60">
              {String(i + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => setI((v) => (v - 1 + QUOTES.length) % QUOTES.length)}
              className="w-12 h-12 border-2 border-ink bg-paper grid place-items-center hover:bg-ink hover:text-paper transition-colors shadow-brutal"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setI((v) => (v + 1) % QUOTES.length)}
              className="w-12 h-12 border-2 border-ink bg-ink text-paper grid place-items-center hover:bg-paper hover:text-ink transition-colors shadow-brutal"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Magazine spread */}
        <div className="grid lg:grid-cols-12 gap-0">
          {/* Portrait panel with bracket frame */}
          <div className="lg:col-span-4 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`p-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.5 }}
                className="relative bracket-frame-4 text-rust"
              >
                <span className="bc-tl" /><span className="bc-tr" /><span className="bc-bl" /><span className="bc-br" />
                <div className={`aspect-[3/4] bg-ink-900 border-2 border-ink ${a.shadow} overflow-hidden`}>
                  <img src={q.avatar} alt={q.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                {/* Caption strip */}
                <div className="absolute -bottom-1 left-0 right-0 bg-ink border-l-4 border-rust px-4 py-3 text-paper">
                  <div className="mono text-[10px] tracking-[0.22em] uppercase text-ochre">CASE / {String(i + 1).padStart(3, "0")}</div>
                  <div className="font-display font-display-hard text-sm md:text-base leading-tight mt-0.5 uppercase">{q.name}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quote panel */}
          <div className="lg:col-span-8 lg:pl-12 mt-12 lg:mt-0">
            <div className="relative bg-bone border-2 border-ink shadow-brutal p-8 md:p-12 min-h-[420px] flex flex-col">
              {/* Big floating quote mark */}
              <Quote className={`absolute -top-5 -left-5 w-14 h-14 ${a.text} bg-paper border-2 border-ink p-3`} strokeWidth={1.5} />

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.55 }}
                  className="relative flex-1 flex flex-col"
                >
                  <p className="font-display italic font-display-soft text-2xl md:text-4xl lg:text-5xl leading-[1.1] text-ink-900 tracking-tight text-balance">
                    {q.text}
                  </p>

                  <footer className="mt-auto pt-10">
                    {/* Metric strip */}
                    <div className={`inline-flex items-center gap-3 mb-6 mono text-[11px] tracking-[0.22em] uppercase ${a.text}`}>
                      <span className={`w-8 h-px ${a.fill}`} />
                      {q.metric}
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t-2 border-ink">
                      <div>
                        <div className="font-display font-display-hard text-ink-900 text-xl uppercase">{q.name}</div>
                        <div className="mono text-[11px] tracking-[0.18em] uppercase text-ink/60 mt-1">
                          {q.role} · {q.company}
                        </div>
                      </div>
                      <div className="mono text-[10px] tracking-[0.22em] uppercase text-ink/40">VERIFIED CLIENT</div>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div className="mt-8 flex items-center gap-2">
              {QUOTES.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 border border-ink transition-all ${idx === i ? `w-16 ${ACC[QUOTES[idx].accent].fill}` : "w-8 bg-paper hover:bg-ink/10"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
