"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";

export function Transformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const clipRight = useTransform(x, (v) => {
    const w = containerRef.current?.offsetWidth ?? 1;
    const pct = Math.max(0, Math.min(100, ((v + w / 2) / w) * 100));
    return `inset(0 ${100 - pct}% 0 0)`;
  });
  const clipLeft = useTransform(x, (v) => {
    const w = containerRef.current?.offsetWidth ?? 1;
    const pct = Math.max(0, Math.min(100, ((v + w / 2) / w) * 100));
    return `inset(0 0 0 ${pct}%)`;
  });

  return (
    <section className="relative bg-bone text-ink-900 section-halo overflow-hidden">
      {/* Blueprint */}
      <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none" />
      {/* Sectional numeral */}
      <div className="absolute top-12 -right-6 huge-numeral text-ink/[0.05] text-[22vw] leading-none pointer-events-none select-none">
        02
      </div>
      {/* Stripe accent */}
      <div className="absolute bottom-32 -left-6 w-40 h-40 stripe-diag text-rust opacity-30 rotate-12 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="tag-mono text-rust mb-4">№ 02 — THE REVEAL</div>
            <h2 className="font-display font-display-hard text-ink-900 text-5xl md:text-7xl leading-[0.88] tracking-[-0.04em] uppercase">
              From{" "}
              <span className="line-through decoration-rust decoration-[5px] underline-offset-4">firefighter</span>
              <br />
              to{" "}
              <span className="italic font-display-soft text-clay">commander.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-700 text-lg border-l-4 border-ink pl-5">
              Drag the handle. See the difference between the founder you are when you're
              trapped — and the founder you become when the operation runs without you.
            </p>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative h-[460px] md:h-[560px] border-2 border-ink shadow-brutal-lg overflow-hidden bg-paper"
        >
          {/* BEFORE — chaos panel */}
          <div className="absolute inset-0 bg-rust/10">
            <ChaosPanel />
          </div>

          {/* AFTER overlay clipped */}
          <motion.div
            style={{ clipPath: clipLeft }}
            className="absolute inset-0 bg-sage/10"
          >
            <ClarityPanel />
          </motion.div>

          {/* Vertical divider line */}
          <motion.div
            style={{ clipPath: clipLeft }}
            className="absolute inset-y-0 left-0 right-0 pointer-events-none border-l-[3px] border-ink"
          />

          {/* Drag handle — brutalist square */}
          <motion.div
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0.05}
            dragMomentum={false}
            style={{ x }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-grab active:cursor-grabbing"
          >
            <div className="w-14 h-14 bg-ink border-2 border-ink shadow-brutal-ochre grid place-items-center">
              <ChevronsLeftRight className="text-paper" size={22} />
            </div>
          </motion.div>

          {/* Labels */}
          <motion.div style={{ clipPath: clipRight }} className="absolute top-5 left-5 z-10">
            <div className="bg-rust text-paper border-2 border-ink px-3 py-1.5 mono text-[10px] tracking-[0.22em] uppercase">
              ← BEFORE / CHAOS
            </div>
          </motion.div>
          <motion.div style={{ clipPath: clipLeft }} className="absolute top-5 right-5 z-10">
            <div className="bg-sage text-paper border-2 border-ink px-3 py-1.5 mono text-[10px] tracking-[0.22em] uppercase">
              AFTER / CLARITY →
            </div>
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 mono text-[11px] tracking-[0.22em] uppercase text-ink/60">
          <span className="w-12 h-px bg-ink/40" />
          <span>← DRAG TO REVEAL →</span>
          <span className="w-12 h-px bg-ink/40" />
        </div>
      </div>
    </section>
  );
}

function ChaosPanel() {
  const items = [
    "12 unread Slacks",
    "Missed call · client",
    "Invoice overdue",
    "Hire? Fire? Rewrite?",
    "Cold email backlog",
    "Calendar double-booked",
  ];
  return (
    <div className="relative h-full p-8 md:p-12">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-display font-display-hard text-[18vw] md:text-[14vw] text-rust/15 select-none leading-none uppercase">CHAOS</span>
      </div>
      <div className="relative grid grid-cols-2 gap-3 md:gap-4 max-w-xl">
        {items.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-paper border-2 border-ink shadow-brutal-rust px-4 py-3 text-sm"
            style={{ transform: `rotate(${(i % 2 ? -1 : 1) * (1 + i * 0.4)}deg)` }}
          >
            <div className="mono text-rust text-[10px] uppercase tracking-[0.22em] mb-1">URGENT</div>
            <div className="text-ink-900 font-medium">{t}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ClarityPanel() {
  const items = [
    "Weekly priorities locked",
    "Team owns the inbox",
    "Pipeline → dashboard",
    "SOPs run themselves",
    "Founder calendar: 60% free",
    "Decisions, not chores",
  ];
  return (
    <div className="relative h-full p-8 md:p-12">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-display italic text-[18vw] md:text-[14vw] text-sage/25 select-none leading-none">clarity</span>
      </div>
      <div className="relative grid gap-3 max-w-md ml-auto">
        {items.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-paper border-2 border-ink shadow-brutal px-4 py-3 text-sm flex items-center gap-3"
          >
            <span className="w-2 h-6 bg-sage shrink-0" />
            <div className="text-ink-900 flex-1 font-medium">{t}</div>
            <span className="mono text-sage text-xs tracking-[0.22em]">DONE</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
