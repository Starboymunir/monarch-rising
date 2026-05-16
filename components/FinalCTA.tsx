"use client";

import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { MarqueeRibbon } from "./Marquee";

export function FinalCTA() {
  return (
    <section id="contact" className="relative bg-midnight text-paper overflow-hidden">
      {/* Top ribbon */}
      <MarqueeRibbon
        size="sm"
        accent="ink"
        words={[
          "BOOK THE CALL",
          "RECLAIM THE THRONE",
          "MONARCH RISING",
          "EST. 2024",
          "HOUSTON · TX",
        ]}
      />

      {/* Blueprint dark + diag stripes */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-60 pointer-events-none" />
      <div className="absolute top-32 -left-10 w-72 h-72 stripe-diag text-rust opacity-30 -rotate-12 pointer-events-none" />
      <div className="absolute bottom-20 -right-10 w-72 h-72 stripe-diag text-signal opacity-25 rotate-12 pointer-events-none" />

      {/* Sectional huge numeral */}
      <div className="absolute top-20 right-6 huge-numeral text-paper/[0.04] text-[22vw] leading-none pointer-events-none select-none">
        09
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24">
        {/* Tag */}
        <div className="tag-mono text-ochre mb-6">№ 09 — THE CORONATION</div>

        {/* Headline — sliced RISE */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-display-hard text-paper text-6xl md:text-8xl lg:text-9xl leading-[0.82] tracking-[-0.04em] uppercase">
              Stop running.
              <br />
              <span className="marker marker-rust text-paper">Start</span>{" "}
              <span className="italic font-display-soft text-ochre">reigning.</span>
            </h2>
            <p className="text-paper/80 text-lg mt-8 border-l-4 border-ochre pl-5 max-w-xl">
              One call. Thirty minutes. We look at your operation, name the leaks,
              and show you the exact roles that close them. No pitch deck. No filler.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="https://calendly.com/monarchrising"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-slab btn-slab-clay"
              >
                BOOK THE CALL <ArrowUpRight size={18} />
              </a>
              <a
                href="tel:+18328530722"
                className="btn-slab btn-slab-outline text-paper border-paper hover:bg-paper hover:text-ink"
              >
                CALL DIRECT <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Right — contact card */}
          <div className="lg:col-span-5">
            <div className="bracket-frame-4 text-ochre">
              <span className="bc-tl" /><span className="bc-tr" /><span className="bc-bl" /><span className="bc-br" />
              <div className="bg-ink-900 border-2 border-paper/20 p-8 md:p-10">
                <div className="flex items-center justify-between mono text-[10px] tracking-[0.22em] uppercase text-paper/50 pb-4 mb-5 border-b-2 border-paper/15">
                  <span className="flex items-center gap-2">
                    <span className="register-mark" /> DIRECT LINE
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sage-300 animate-blink" /> ONLINE
                  </span>
                </div>

                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="w-10 h-10 bg-ochre border-2 border-ink grid place-items-center shrink-0">
                      <Phone className="text-ink" size={16} />
                    </span>
                    <div>
                      <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/40 mb-1">PHONE</div>
                      <a href="tel:+18328530722" className="font-display text-2xl text-paper hover:text-ochre transition-colors tracking-tight">
                        +1 (832) 853-0722
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-10 h-10 bg-signal border-2 border-ink grid place-items-center shrink-0">
                      <Mail className="text-paper" size={16} />
                    </span>
                    <div>
                      <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/40 mb-1">EMAIL</div>
                      <a href="mailto:Sofia@Monarchrisingllc.com" className="font-display text-lg text-paper hover:text-ochre transition-colors tracking-tight break-all">
                        Sofia@Monarchrisingllc.com
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-paper/15 grid grid-cols-2 gap-3 mono text-[10px] tracking-[0.22em] uppercase text-paper/60">
                  <div>
                    <div className="text-paper/40">HOURS</div>
                    <div className="text-paper mt-0.5">10A–6P CST</div>
                  </div>
                  <div>
                    <div className="text-paper/40">BASE</div>
                    <div className="text-paper mt-0.5">HOUSTON · TX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Massive RISE wordmark — sliced */}
        <div className="mt-24 relative">
          <div className="border-t-2 border-paper/20 pt-6 mb-2 flex items-center justify-between mono text-[10px] tracking-[0.22em] uppercase text-paper/50">
            <span>WORDMARK / RISE</span>
            <span>CORONATION · 2026</span>
          </div>
          <div className="relative overflow-hidden">
            <div className="font-display font-display-hard text-paper text-[26vw] md:text-[22vw] leading-[0.78] tracking-[-0.06em] uppercase">
              RISE
            </div>
            {/* Diagonal slice overlay */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[10%] bg-rust mix-blend-difference" />
          </div>
        </div>
      </div>

      {/* Bottom ticker contact strip */}
      <div className="border-t-2 border-paper/15 bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap items-center gap-x-8 gap-y-2 mono text-[10px] tracking-[0.22em] uppercase text-paper/60">
          <span className="text-ochre">↳ NEXT INTAKE WINDOW · ≤24H</span>
          <span className="hidden md:inline text-paper/20">|</span>
          <span>5 SLOTS / QUARTER</span>
          <span className="hidden md:inline text-paper/20">|</span>
          <span>FOUNDER-LED ENGAGEMENTS ONLY</span>
          <span className="hidden md:inline text-paper/20">|</span>
          <span className="text-sage-300">+ ACCEPTING APPLICATIONS</span>
        </div>
      </div>
    </section>
  );
}
