"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Discovery & Vision",
    sub: "We listen first.",
    body:
      "A founder-led intake. We map your bottlenecks, your standards, and the parts of the business only you should be touching.",
    bullets: ["60-min founder call", "Role + scope audit", "Standards & voice doc"],
    accent: "ochre" as const,
    duration: "Day 01–03",
  },
  {
    n: "02",
    title: "Architect the Team",
    sub: "We design the roster.",
    body:
      "We assemble vetted talent against your exact spec — assistants, callers, ops — with backups already in motion.",
    bullets: ["Top-3% talent pool", "Voice + skill fit", "Backup bench"],
    accent: "rust" as const,
    duration: "Day 04–10",
  },
  {
    n: "03",
    title: "Onboard & Integrate",
    sub: "We ship the systems.",
    body:
      "We embed your new team into your stack, write the SOPs, and run a 14-day calibration so the rhythm is real, not theoretical.",
    bullets: ["Stack integration", "SOPs & playbooks", "14-day calibration"],
    accent: "signal" as const,
    duration: "Day 11–17",
  },
  {
    n: "04",
    title: "Rise & Scale",
    sub: "You step back. The empire grows.",
    body:
      "Weekly scorecards, monthly reviews, and a partner you can phone for any judgment call. You lead the vision. We hold the line.",
    bullets: ["Weekly scorecards", "Monthly reviews", "Always-on partnership"],
    accent: "sage" as const,
    duration: "Day 18 →",
  },
];

const ACCENT: Record<"ochre" | "rust" | "signal" | "sage", {
  fill: string;
  text: string;
  shadow: string;
}> = {
  ochre:  { fill: "bg-ochre",  text: "text-ochre",  shadow: "shadow-brutal-ochre" },
  rust:   { fill: "bg-rust",   text: "text-rust",   shadow: "shadow-brutal-rust" },
  signal: { fill: "bg-signal", text: "text-signal", shadow: "shadow-brutal-signal" },
  sage:   { fill: "bg-sage",   text: "text-sage",   shadow: "shadow-brutal" },
};

export function Method() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="method" ref={ref} className="relative bg-bone text-ink-900 section-halo overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-fine opacity-50 pointer-events-none" />
      {/* Massive sectional numeral */}
      <div className="absolute top-12 -right-12 huge-numeral text-ink/[0.04] text-[24vw] leading-none pointer-events-none select-none">
        03
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-28 relative">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <div className="tag-mono text-rust mb-4">№ 03 — THE METHOD</div>
            <h2 className="font-display font-display-hard text-ink-900 text-5xl md:text-7xl leading-[0.88] tracking-[-0.04em] uppercase">
              The four-step{" "}
              <span className="marker marker-signal text-paper">coronation.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-700 text-lg border-l-4 border-ink pl-5">
              Predictable. Founder-led. No surprises. Every engagement moves through
              the same four chapters — from first call to fully autonomous team.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-6xl px-6 pb-32">
        {/* Vertical track */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
          <div className="w-px h-full bg-ink/15 border-l-2 border-dashed border-ink/30" />
          <motion.div
            className="absolute top-0 left-0 w-[3px] bg-ink origin-top"
            style={{ height: lineH }}
          />
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {STEPS.map((s, i) => (
            <StepRow key={i} step={s} index={i} />
          ))}
        </div>

        {/* Terminal cap */}
        <div className="relative mt-20 flex items-center justify-center gap-3 mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
          <span className="register-mark" />
          <span>END OF METHOD · OPERATING WITHOUT YOU</span>
          <span className="register-mark" />
        </div>
      </div>
    </section>
  );
}

function StepRow({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  const a = ACCENT[step.accent];
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="relative grid md:grid-cols-[1fr_auto_1fr] items-start gap-0"
    >
      {/* Left side content (or empty) */}
      <div className={`hidden md:block ${isLeft ? "" : "invisible"} pr-12 text-right`}>
        {isLeft && <StepCard step={step} accent={a} alignRight />}
      </div>

      {/* Center node */}
      <div className="relative flex md:flex-col items-center gap-4 md:gap-0 pl-16 md:pl-0">
        <div className={`absolute md:relative left-0 md:left-auto top-0 w-16 h-16 md:w-20 md:h-20 ${a.fill} border-2 border-ink grid place-items-center font-display font-display-hard text-paper text-2xl md:text-3xl shadow-brutal z-10`}>
          {step.n}
        </div>
      </div>

      {/* Right side content (or empty) */}
      <div className={`${isLeft ? "hidden md:block invisible" : ""} md:pl-12 pl-16 md:pl-12`}>
        {!isLeft && <StepCard step={step} accent={a} />}
        {/* On mobile show always on right */}
        <div className="md:hidden">
          {isLeft && <StepCard step={step} accent={a} />}
        </div>
      </div>
    </motion.div>
  );
}

function StepCard({
  step,
  accent,
  alignRight = false,
}: {
  step: (typeof STEPS)[number];
  accent: { fill: string; text: string; shadow: string };
  alignRight?: boolean;
}) {
  return (
    <div className={`relative bg-paper border-2 border-ink ${accent.shadow} p-6 md:p-8 ${alignRight ? "text-right" : ""}`}>
      <div className={`flex items-center gap-3 mb-3 mono text-[10px] tracking-[0.22em] uppercase ${accent.text} ${alignRight ? "justify-end" : ""}`}>
        <span>CHAPTER {step.n}</span>
        <span className="text-ink/30">·</span>
        <span className="text-ink/60">{step.duration}</span>
      </div>
      <h3 className="font-display font-display-hard text-ink-900 text-2xl md:text-3xl uppercase tracking-tight leading-tight">
        {step.title}
      </h3>
      <p className={`mt-1 italic font-display-soft ${accent.text} text-base md:text-lg`}>{step.sub}</p>
      <p className="text-ink-700 mt-4 leading-relaxed text-sm md:text-base">{step.body}</p>
      <ul className={`mt-5 flex flex-wrap gap-0 border-l-2 border-ink/20 ${alignRight ? "justify-end" : ""}`}>
        {step.bullets.map((b) => (
          <li
            key={b}
            className="mono text-[10px] tracking-[0.22em] uppercase px-3 py-2 text-ink-700 border-r-2 border-ink/20 bg-bone/60"
          >
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
