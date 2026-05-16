"use client";

import { useEffect, useState } from "react";
import { MonarchMark } from "./Ornaments";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Services",   href: "#services", num: "01" },
  { label: "The Method", href: "#method",   num: "02" },
  { label: "Results",    href: "#results",  num: "03" },
  { label: "Why Us",     href: "#why",      num: "04" },
  { label: "Contact",    href: "#contact",  num: "05" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-paper border-b-2 border-ink shadow-brutal"
          : "py-3 bg-paper/70 backdrop-blur-md border-b border-ink/10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between gap-6">
        <a href="#top" className="shrink-0 flex items-center gap-3">
          <MonarchMark />
          <span className="hidden md:inline-block mono text-[10px] tracking-[0.22em] uppercase text-ink/50 border-l-2 border-ink/30 pl-3">
            EST. 2024 · HOUSTON
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group flex items-center gap-2 mono text-[11px] tracking-[0.22em] uppercase text-ink-700 hover:text-rust transition-colors"
            >
              <span className="text-ink/40 group-hover:text-ochre transition-colors">{n.num}</span>
              <span className="border-b-2 border-transparent group-hover:border-ochre pb-0.5">{n.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-slab btn-slab-clay text-sm">
            BOOK A CALL
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-11 h-11 grid place-items-center border-2 border-ink bg-paper text-ink-900 shadow-brutal"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-5 sm:mx-8 mt-3 bg-paper border-2 border-ink shadow-brutal p-5">
          <div className="flex items-center justify-between mono text-[10px] tracking-[0.22em] uppercase text-ink/50 pb-3 mb-3 border-b-2 border-ink/15">
            <span className="flex items-center gap-2">
              <span className="register-mark" /> NAV / OPEN
            </span>
            <span>05 ITEMS</span>
          </div>
          <div className="flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-ink/10 text-ink-900 flex items-center gap-3 group"
              >
                <span className="mono text-[10px] tracking-[0.22em] text-ink/40 w-6">{n.num}</span>
                <span className="font-display font-display-hard uppercase tracking-tight text-lg group-hover:text-rust transition-colors">
                  {n.label}
                </span>
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-slab btn-slab-clay mt-5 justify-center">
              BOOK A CALL
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
