"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MarqueeRibbon } from "./Marquee";

const NUMBERS = [
  { v: 92,  suf: "%",  k: "Client retention", sub: "Founders who stay past year one",       accent: "ochre"  as const },
  { v: 24,  suf: "h",  k: "First match",      sub: "From discovery call to candidate slate", accent: "rust"   as const },
  { v: 12,  suf: "k+", k: "Hours reclaimed",  sub: "Across active client engagements",       accent: "sage"   as const },
  { v: 3,   suf: "%",  k: "Top talent",       sub: "Pass rate from our applicant pool",      accent: "signal" as const },
];

const ACC: Record<"ochre" | "rust" | "sage" | "signal", { text: string; fill: string }> = {
  ochre:  { text: "text-ochre",     fill: "bg-ochre" },
  rust:   { text: "text-rust-400",  fill: "bg-rust" },
  sage:   { text: "text-sage-300",  fill: "bg-sage" },
  signal: { text: "text-signal-400",fill: "bg-signal" },
};

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1800;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function ByTheNumbers() {
  return (
    <section className="relative bg-ink-900 text-paper section-halo overflow-hidden">
      {/* Top ribbon */}
      <MarqueeRibbon
        size="xl"
        accent="rainbow"
        words={[
          "RECLAIM YOUR TIME",
          "LEAD WITH CLARITY",
          "BUILT FOR FOUNDERS",
          "DELEGATE SMARTER",
          "RISE OR REMAIN",
          "MONARCH RISING",
        ]}
      />

      {/* Blueprint dark */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-60 pointer-events-none" />
      {/* Big sectional numeral */}
      <div className="absolute top-32 -right-10 huge-numeral text-paper/[0.04] text-[22vw] leading-none pointer-events-none select-none">
        05
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="tag-mono text-ochre mb-4">№ 05 — BY THE NUMBERS</div>
            <h2 className="font-display font-display-hard text-paper text-5xl md:text-7xl leading-[0.88] tracking-[-0.04em] uppercase">
              Receipts, not{" "}
              <span className="italic font-display-soft text-ochre">rhetoric.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-paper/80 text-lg border-l-4 border-ochre pl-5">
              We don't pitch theory. These are the numbers the work produced — the
              kind a founder can quietly take to their board, their spouse, or their mirror.
            </p>
          </div>
        </div>
      </div>

      {/* Data table */}
      <div className="relative mx-auto max-w-7xl px-6 pb-28">
        {/* Column headers */}
        <div className="hidden md:grid grid-cols-12 gap-0 mono text-[11px] tracking-[0.22em] uppercase text-paper/50 pb-4 border-b-2 border-paper/30 mb-0">
          <div className="col-span-1">№</div>
          <div className="col-span-3">FIGURE</div>
          <div className="col-span-3">METRIC</div>
          <div className="col-span-5">DETAIL</div>
        </div>

        <div className="flex flex-col">
          {NUMBERS.map((n, i) => {
            const a = ACC[n.accent];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="relative grid md:grid-cols-12 gap-4 md:gap-0 items-center py-8 md:py-10 border-b-2 border-paper/20 group hover:bg-paper/[0.03] transition-colors"
              >
                {/* Index */}
                <div className="md:col-span-1 mono text-[12px] tracking-[0.22em] uppercase text-paper/50 flex items-center gap-3">
                  <span className={`w-2 h-2 ${a.fill}`} />0{i + 1}
                </div>

                {/* Big number */}
                <div className={`md:col-span-3 numeral-mono ${a.text} text-6xl md:text-8xl leading-none font-semibold`}>
                  <Counter to={n.v} suffix={n.suf} />
                </div>

                {/* Metric name */}
                <div className="md:col-span-3">
                  <div className="font-display font-display-hard text-paper text-xl md:text-2xl uppercase tracking-tight leading-tight">
                    {n.k}
                  </div>
                  <div className={`tag-mono mt-1 ${a.text}`}>VERIFIED</div>
                </div>

                {/* Detail */}
                <div className="md:col-span-5 md:pl-8 md:border-l border-paper/15">
                  <p className="text-paper/70 leading-relaxed">{n.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer file mark */}
        <div className="mt-10 flex items-center justify-between mono text-[10px] tracking-[0.22em] uppercase text-paper/40">
          <span>SOURCE / INTERNAL · 2024–2026</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sage-300 animate-blink" /> UPDATED LIVE
          </span>
        </div>
      </div>
    </section>
  );
}
