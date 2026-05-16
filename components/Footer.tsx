import { MonarchMark } from "./Ornaments";

export function Footer() {
  return (
    <footer className="relative bg-ink text-paper overflow-hidden">
      {/* Top ticker strip */}
      <div className="border-b-2 border-paper/15 bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 py-3 flex flex-wrap items-center gap-x-8 gap-y-2 mono text-[10px] tracking-[0.22em] uppercase text-paper/70">
          <span className="flex items-center gap-2 text-ochre">
            <span className="register-mark" /> MONARCH RISING / EOF
          </span>
          <span className="hidden md:inline text-paper/30">|</span>
          <a href="tel:+18328530722" className="hover:text-ochre transition-colors">+1 832 · 853 · 0722</a>
          <span className="hidden md:inline text-paper/30">|</span>
          <a href="mailto:Sofia@Monarchrisingllc.com" className="hover:text-ochre transition-colors">SOFIA@MONARCHRISINGLLC.COM</a>
          <span className="hidden md:inline text-paper/30">|</span>
          <span>HOUSTON · TX · USA</span>
          <span className="hidden md:inline text-paper/30">|</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sage-300 animate-blink" /> LIVE
          </span>
        </div>
      </div>

      {/* Diag stripe accent */}
      <div className="absolute -bottom-10 -right-10 w-56 h-56 stripe-diag text-rust opacity-30 -rotate-12 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand block */}
          <div className="md:col-span-5">
            <MonarchMark light />
            <p className="text-paper/70 mt-6 max-w-md leading-relaxed">
              Monarch Rising builds remote teams, cold-calling pods, and operational
              systems for founders ready to lead and not be led by their business.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="bg-paper/10 border border-paper/20 px-3 py-1.5 mono text-[10px] tracking-[0.22em] uppercase text-paper/80">HOUSTON</span>
              <span className="bg-paper/10 border border-paper/20 px-3 py-1.5 mono text-[10px] tracking-[0.22em] uppercase text-paper/80">REMOTE-FIRST</span>
              <span className="bg-ochre text-ink border border-ochre px-3 py-1.5 mono text-[10px] tracking-[0.22em] uppercase">FOUNDER-LED</span>
            </div>
          </div>

          {/* Sitemap col */}
          <div className="md:col-span-3">
            <div className="tag-mono text-ochre mb-5 pb-3 border-b-2 border-paper/15">SITEMAP / 01</div>
            <ul className="space-y-2.5">
              {[
                { h: "#services", t: "Services" },
                { h: "#method",   t: "The Method" },
                { h: "#results",  t: "Results" },
                { h: "#why",      t: "Why Us" },
                { h: "#contact",  t: "Contact" },
              ].map((l) => (
                <li key={l.t}>
                  <a href={l.h} className="group flex items-center gap-3 text-paper/80 hover:text-ochre transition-colors">
                    <span className="mono text-[10px] tracking-[0.22em] text-paper/40 group-hover:text-ochre">→</span>
                    <span className="uppercase tracking-tight">{l.t}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach col */}
          <div className="md:col-span-4">
            <div className="tag-mono text-sage-300 mb-5 pb-3 border-b-2 border-paper/15">REACH / 02</div>
            <ul className="space-y-3 text-paper/80">
              <li>
                <a href="tel:+18328530722" className="block hover:text-ochre transition-colors">
                  <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/40 mb-0.5">PHONE</div>
                  <div className="font-display text-xl tracking-tight">+1 (832) 853-0722</div>
                </a>
              </li>
              <li>
                <a href="mailto:Sofia@Monarchrisingllc.com" className="block hover:text-ochre transition-colors">
                  <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/40 mb-0.5">EMAIL</div>
                  <div className="font-display text-lg tracking-tight">Sofia@Monarchrisingllc.com</div>
                </a>
              </li>
              <li className="pt-2 border-t border-paper/10 flex items-center justify-between mono text-[10px] tracking-[0.22em] uppercase text-paper/60">
                <span>MON–FRI · 10A–6P CST</span>
                <span className="text-sage-300">OPEN</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom EOF bar */}
        <div className="mt-16 pt-6 border-t-2 border-paper/15 flex flex-col md:flex-row gap-4 items-center justify-between mono text-[10px] tracking-[0.22em] uppercase text-paper/50">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} MONARCH RISING LLC · ALL RIGHTS RESERVED</span>
            <span className="caret" />
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-paper transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-paper transition-colors">TERMS</a>
            <span className="text-ochre">// BUILT FOR FOUNDERS WHO LEAD.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
