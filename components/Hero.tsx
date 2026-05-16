"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const portraitY  = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  const year = new Date().getFullYear();

  return (
    <section
      id="top"
      ref={ref}
      className="relative bg-paper text-ink-900 section-halo overflow-hidden pt-24"
    >
      {/* Blueprint base */}
      <div className="absolute inset-0 bg-blueprint opacity-60 pointer-events-none" />
      {/* Warm wash on right half */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-ochre/25 via-clay/10 to-transparent pointer-events-none" />
      {/* Diag stripe accents */}
      <div className="absolute top-32 -right-10 w-72 h-72 stripe-diag text-rust opacity-30 -rotate-12 pointer-events-none" />
      <div className="absolute bottom-24 -left-10 w-72 h-72 stripe-diag text-signal opacity-25 rotate-12 pointer-events-none" />

      {/* Top file strip (dark) */}
      <div className="relative bg-ink text-paper border-b-2 border-ink">
        <div className="mx-auto max-w-7xl px-6 py-3 flex flex-wrap items-center gap-x-6 gap-y-2 mono text-[10px] tracking-[0.22em] uppercase text-paper/80">
          <span className="flex items-center gap-2 text-ochre">
            <span className="register-mark" /> FILE / 001
          </span>
          <span className="hidden md:inline text-paper/30">|</span>
          <span>VOL.I — HOUSTON</span>
          <span className="hidden md:inline text-paper/30">|</span>
          <span>EST. 2024</span>
          <span className="hidden md:inline text-paper/30">|</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sage-300 animate-blink" /> LIVE INTAKE
          </span>
          <span className="ml-auto hidden md:inline text-paper/60">{year}</span>
        </div>
      </div>

      {/* Ghost watermark */}
      <motion.div
        style={{ y: watermarkY }}
        aria-hidden
        className="absolute inset-x-0 top-40 pointer-events-none select-none flex justify-center"
      >
        <span className="font-display font-display-hard text-ink/[0.05] text-[24vw] leading-none uppercase tracking-[-0.06em]">
          MONARCH
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 grid grid-cols-12 gap-6 lg:gap-10">
        {/* Left aside — vertical metadata */}
        <aside className="hidden lg:flex col-span-1 flex-col items-start gap-6 pt-4">
          <div
            className="mono text-[10px] tracking-[0.32em] uppercase text-ink/60"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            CHAPTER · ONE
          </div>
          <div
            className="mono text-[10px] tracking-[0.32em] uppercase text-ink/40"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            SOFIA · EDITOR
          </div>
        </aside>

        {/* Center — headline */}
        <div className="col-span-12 lg:col-span-7">
          <div className="tag-mono text-rust mb-6">CHAPTER ONE — THE FOUNDER'S RECLAIM</div>

          <h1 className="font-display font-display-hard text-ink-900 text-6xl md:text-8xl lg:text-[8.5rem] leading-[0.82] tracking-[-0.045em] uppercase">
            Stop running
            <br />
            the{" "}
            <span className="marker marker-rust text-paper">business.</span>
            <br />
            <span className="italic font-display-soft text-clay normal-case tracking-tight">
              Start running the empire.
            </span>
          </h1>

          <div className="mt-8 max-w-xl">
            <p className="text-ink-700 text-lg leading-relaxed border-l-4 border-ink pl-5">
              We build the remote teams, cold-calling pods, and operating systems that
              let founders lead from the throne — not the trenches.
            </p>
            <div className="mt-4 mono text-[11px] tracking-[0.22em] uppercase text-ink/60">
              + FOUNDER-LED · BUILT TO OPERATE WITHOUT YOU
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href="#contact" className="btn-slab btn-slab-clay">
              BOOK THE CALL <ArrowUpRight size={18} />
            </a>
            <a
              href="#method"
              className="mono text-[12px] tracking-[0.22em] uppercase text-ink-900 hover:text-rust transition-colors border-b-2 border-ink hover:border-rust pb-1"
            >
              ↓ SEE THE METHOD
            </a>
          </div>

          {/* Index bar */}
          <div className="mt-14 pt-5 border-t-2 border-ink grid grid-cols-4 gap-3 mono text-[10px] tracking-[0.22em] uppercase">
            {[
              { n: "01", t: "Teams",   c: "text-ochre" },
              { n: "02", t: "Calling", c: "text-rust" },
              { n: "03", t: "Systems", c: "text-sage" },
              { n: "04", t: "Freedom", c: "text-signal" },
            ].map((x) => (
              <div key={x.n} className="flex items-center gap-2">
                <span className={`font-display text-2xl ${x.c}`}>{x.n}</span>
                <span className="text-ink/60">{x.t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — portrait */}
        <div className="col-span-12 lg:col-span-4 relative">
          <motion.div style={{ y: portraitY }} className="relative">
            <div className="bracket-frame-4 text-rust">
              <span className="bc-tl" /><span className="bc-tr" /><span className="bc-bl" /><span className="bc-br" />
              <div className="relative aspect-[3/4] bg-ink-900 border-2 border-ink shadow-brutal-rust overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop"
                  alt="Founder reclaimed"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Caption */}
              <div className="bg-ink text-paper border-l-4 border-rust px-4 py-3 mono text-[10px] tracking-[0.22em] uppercase">
                FIG. 01 / The founder, reclaimed.
              </div>
            </div>

            {/* Overlapping slab badges */}
            <div
              className="absolute -top-4 -left-6 bg-ochre text-ink border-2 border-ink px-3 py-2 mono text-[10px] tracking-[0.22em] uppercase shadow-brutal"
              style={{ transform: "rotate(-4deg)" }}
            >
              STATUS / OPERATING WITHOUT YOU
            </div>
            <div
              className="absolute -bottom-5 -right-4 bg-signal text-paper border-2 border-ink px-3 py-2 mono text-[10px] tracking-[0.22em] uppercase shadow-brutal"
              style={{ transform: "rotate(3deg)" }}
            >
              MATCH TIME / ≤24h
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom ticker (dark) */}
      <div className="relative ticker-row ticker-dark bg-ink mt-4 border-t-2 border-ink">
        <div className="mx-auto max-w-7xl px-6 py-4 grid grid-cols-2 md:grid-cols-5 gap-y-3 gap-x-6 mono text-[10px] tracking-[0.22em] uppercase text-paper/80">
          <div><span className="text-ochre">92%</span> RETENTION</div>
          <div><span className="text-rust-400">24H</span> FIRST MATCH</div>
          <div><span className="text-sage-300">12K+</span> HOURS BACK</div>
          <div><span className="text-signal-400">TOP 3%</span> TALENT</div>
          <div className="flex items-center gap-2"><span className="register-mark text-paper" /> AUDITED Q2/26</div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-6 flex items-center justify-between mono text-[10px] tracking-[0.22em] uppercase text-ink/50">
        <span>↓ SCROLL · UNFOLD THE METHOD</span>
        <span>PAGE 01 / 09</span>
      </div>
    </section>
  );
}
