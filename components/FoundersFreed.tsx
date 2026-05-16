"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CASES = [
  {
    n: "01",
    founder: "Mike Villacis",
    company: "Bang It Services",
    industry: "Home Services · TX",
    headline: "Reclaimed 22 hours / week. Doubled booked jobs.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    role: "Executive Assistant + Dial Team",
    accent: "ochre" as const,
  },
  {
    n: "02",
    founder: "Jordy Perez",
    company: "Cash4Keys",
    industry: "Real Estate · Multi-state",
    headline: "From 60 cold dials/day to 600 — without lifting the phone.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    role: "4-Person Cold Calling Pod",
    accent: "rust" as const,
  },
  {
    n: "03",
    founder: "Sarah Coleman",
    company: "Coleman & Co.",
    industry: "Consulting · Houston",
    headline: "Stepped out of operations entirely in 47 days.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    role: "Ops Manager + Full SOP Suite",
    accent: "signal" as const,
  },
  {
    n: "04",
    founder: "David Okafor",
    company: "Northstar Logistics",
    industry: "Freight · Dallas",
    headline: "Hired a back office without a single interview.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&auto=format&fit=crop",
    role: "Dispatch + Admin Team of 3",
    accent: "sage" as const,
  },
];

const ACC: Record<"ochre" | "rust" | "signal" | "sage", { text: string; fill: string }> = {
  ochre:  { text: "text-ochre",  fill: "bg-ochre" },
  rust:   { text: "text-rust",   fill: "bg-rust" },
  signal: { text: "text-signal", fill: "bg-signal" },
  sage:   { text: "text-sage",   fill: "bg-sage" },
};

export function FoundersFreed() {
  return (
    <section id="results" className="relative bg-paper text-ink-900 section-halo overflow-hidden">
      {/* Blueprint bg */}
      <div className="absolute inset-0 bg-blueprint-fine opacity-40 pointer-events-none" />
      {/* Sectional numeral */}
      <div className="absolute top-12 right-8 huge-numeral text-ink/[0.05] text-[20vw] leading-none pointer-events-none select-none">
        04
      </div>
      {/* Stripe accent */}
      <div className="absolute bottom-20 -left-10 w-48 h-48 stripe-diag text-rust opacity-30 -rotate-12 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-8">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="tag-mono text-rust mb-4">№ 04 — THE RECORD</div>
            <h2 className="font-display font-display-hard text-ink-900 text-5xl md:text-7xl leading-[0.88] tracking-[-0.04em] uppercase">
              Founders we've{" "}
              <span className="marker marker-rust text-paper">freed.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-700 text-lg border-l-4 border-ink pl-5">
              Quiet wins. Loud results. A scrollable record of the operators we've
              given their time, their leverage, and their throne back.
            </p>
          </div>
        </div>
      </div>

      {/* Roster table */}
      <div className="relative mx-auto max-w-7xl px-6 pb-28">
        {/* Header row */}
        <div className="hidden md:grid grid-cols-12 gap-4 mono text-[11px] tracking-[0.22em] uppercase text-ink/50 pb-4 border-b-2 border-ink mb-0">
          <div className="col-span-1">№</div>
          <div className="col-span-4">CLIENT</div>
          <div className="col-span-4">OUTCOME</div>
          <div className="col-span-3 text-right">DEPLOYMENT</div>
        </div>

        <div className="flex flex-col">
          {CASES.map((c) => (
            <CaseRow key={c.n} c={c} />
          ))}
        </div>

        {/* Footer mark */}
        <div className="mt-8 flex items-center justify-between mono text-[10px] tracking-[0.22em] uppercase text-ink/40">
          <span>ROSTER / ACTIVE · 47 ENGAGEMENTS</span>
          <span className="flex items-center gap-2">
            <span className="register-mark" /> AUDITED Q2 2026
          </span>
        </div>
      </div>
    </section>
  );
}

function CaseRow({ c }: { c: (typeof CASES)[number] }) {
  const a = ACC[c.accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="group border-b-2 border-ink/15 py-6 md:py-8 grid grid-cols-12 gap-4 items-center cursor-pointer hover:bg-bone/60 transition-colors px-2"
    >
      {/* Index with color tab */}
      <div className="col-span-2 md:col-span-1 mono text-[12px] tracking-[0.22em] uppercase text-ink/60 flex items-center gap-3">
        <span className={`w-2 h-8 ${a.fill}`} />{c.n}
      </div>

      {/* Founder + portrait (bracket frame) */}
      <div className="col-span-10 md:col-span-4 flex items-center gap-4">
        <div className="relative bracket-frame text-rust shrink-0">
          <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-ink overflow-hidden bg-ink-900">
            <img src={c.image} alt={c.founder} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div>
          <div className={`mono text-[10px] tracking-[0.22em] uppercase ${a.text} mb-1`}>{c.industry}</div>
          <div className="font-display font-display-hard text-ink-900 text-xl md:text-2xl leading-tight uppercase tracking-tight group-hover:text-rust transition-colors">
            {c.founder}
          </div>
          <div className="mono text-[11px] tracking-[0.18em] uppercase text-ink/60 mt-0.5">{c.company}</div>
        </div>
      </div>

      {/* Outcome */}
      <div className="hidden md:flex md:col-span-4 text-ink-700 text-base lg:text-lg italic font-display-soft">
        "{c.headline}"
      </div>

      {/* Role + arrow */}
      <div className="col-span-12 md:col-span-3 flex md:justify-end items-center gap-3">
        <span className="mono text-[10px] tracking-[0.22em] uppercase text-ink/60 text-right max-w-[180px]">{c.role}</span>
        <span className={`w-10 h-10 ${a.fill} border-2 border-ink grid place-items-center shrink-0 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform`}>
          <ArrowUpRight className="text-paper" size={18} />
        </span>
      </div>

      {/* Mobile-only headline */}
      <div className="md:hidden col-span-12 text-ink-700 italic font-display-soft -mt-2">"{c.headline}"</div>
    </motion.div>
  );
}
