"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Compass } from "lucide-react";
import { Sun, LeafShape } from "./Ornaments";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Vetted to a founder's standard",
    body:
      "Every operator we place has been auditioned, voice-tested, and pressure-checked. We bring you talent we'd staff our own business with.",
    accent: "ochre" as const,
  },
  {
    icon: Compass,
    title: "Founder-led, end to end",
    body:
      "You'll know the people behind your account. No layers, no anonymous account managers — just direct line, direct ownership.",
    accent: "signal" as const,
  },
  {
    icon: Sun,
    title: "Systems that outlast people",
    body:
      "We don't just place humans. We codify your operation — playbooks, dashboards, decision rules — so the wheels keep turning if anyone steps away.",
    accent: "clay" as const,
  },
  {
    icon: LeafShape,
    title: "Partners, not vendors",
    body:
      "Most clients started with one role and stayed for the next four. What we build with you is meant to grow with you.",
    accent: "sage" as const,
  },
];

const ACCENT: Record<"ochre" | "signal" | "clay" | "sage", {
  shadow: string;
  fill: string;
  text: string;
  border: string;
}> = {
  ochre:  { shadow: "shadow-brutal-ochre", fill: "bg-ochre",  text: "text-ochre",  border: "border-ochre" },
  signal: { shadow: "shadow-brutal-signal",fill: "bg-signal", text: "text-signal", border: "border-signal" },
  clay:   { shadow: "shadow-brutal-clay",  fill: "bg-clay",   text: "text-clay",   border: "border-clay" },
  sage:   { shadow: "shadow-brutal",       fill: "bg-sage",   text: "text-sage",   border: "border-sage" },
};

export function Pillars() {
  return (
    <section id="why" className="relative bg-bone bg-blueprint-fine section-halo overflow-hidden">
      <div className="absolute top-20 right-12 w-32 h-32 stripe-diag text-clay opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 py-28 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16 mb-20">
          <div className="lg:w-1/2">
            <div className="tag-mono text-clay mb-4">№ 07 — WHY MONARCH</div>
            <h2 className="font-display font-display-hard text-ink-900 text-5xl md:text-7xl leading-[0.88] tracking-[-0.04em] uppercase">
              Four <span className="marker marker-ochre text-ink-900">unbroken</span> laws.
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-ink-700 text-lg max-w-xl border-l-4 border-ink pl-5">
              The things we don't compromise on — the reason founders keep
              introducing us to other founders.
            </p>
          </div>
        </div>

        {/* Pillar slabs */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            const a = ACCENT[p.accent];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative bg-paper border-2 border-ink ${a.shadow} p-8 md:p-10 group transition-all hover:-translate-x-1 hover:-translate-y-1`}
              >
                {/* Numeral big */}
                <div className={`absolute -top-2 right-4 numeral-mono text-7xl md:text-8xl ${a.text} opacity-15 leading-none pointer-events-none select-none`}>
                  0{i + 1}
                </div>

                <div className="relative flex items-start gap-5">
                  <div className={`shrink-0 w-14 h-14 ${a.fill} border-2 border-ink grid place-items-center`}>
                    <Icon className="w-6 h-6 text-paper" />
                  </div>
                  <div className="min-w-0">
                    <div className={`tag-mono ${a.text} mb-2`}>LAW {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="font-display font-display-hard text-ink-900 text-2xl md:text-3xl tracking-tight leading-tight uppercase">
                      {p.title}
                    </h3>
                    <p className="text-ink-700 mt-3 leading-relaxed">{p.body}</p>
                  </div>
                </div>

                {/* Bottom register strip */}
                <div className="mt-8 pt-4 border-t border-ink/15 flex items-center justify-between mono text-[10px] tracking-[0.22em] uppercase text-mute">
                  <span>FILE-{String(i + 1).padStart(3, "0")}</span>
                  <span className={a.text}>—</span>
                  <span>NON-NEGOTIABLE</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
