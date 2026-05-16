"use client";

import { useState } from "react";
import { Users, PhoneCall, Workflow, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    n: "01",
    title: "Remote Teams",
    tagline: "Executive assistants, ops managers, schedulers, support — sourced, vetted, integrated.",
    body:
      "We assemble high-trust virtual teams that move at the speed of your business. From the first 10-hour-a-week assistant to a fully staffed back office.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
    bullets: ["Executive Assistant", "Operations Manager", "Inbox & Calendar", "Project Coordination"],
    accent: "ochre" as const,
  },
  {
    n: "02",
    title: "Cold Calling",
    tagline: "Conversion-grade dial teams who book the meetings that compound your pipeline.",
    body:
      "Trained on your offer. Loaded with your scripts. Held to your standards. Our cold callers don't just dial — they qualify, route, and earn trust on the first ring.",
    icon: PhoneCall,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop",
    bullets: ["Outbound Dialing", "Lead Qualification", "Appointment Setting", "CRM Hygiene"],
    accent: "rust" as const,
  },
  {
    n: "03",
    title: "Operational Freedom",
    tagline: "The systems, SOPs, and rhythms that let you step back without anything dropping.",
    body:
      "We architect the operating system of your business — playbooks, dashboards, rituals — so your team runs the day-to-day while you focus on the next horizon.",
    icon: Workflow,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
    bullets: ["SOPs & Playbooks", "Dashboards & KPIs", "Hiring Funnels", "Quarterly Cadence"],
    accent: "signal" as const,
  },
];

const ACCENT: Record<"ochre" | "rust" | "signal", {
  fill: string;
  text: string;
  veil: string;
  shadow: string;
}> = {
  ochre:  { fill: "bg-ochre",  text: "text-ochre",  veil: "bg-ochre/85",  shadow: "shadow-brutal-ochre" },
  rust:   { fill: "bg-rust",   text: "text-rust",   veil: "bg-rust/80",   shadow: "shadow-brutal-rust" },
  signal: { fill: "bg-signal", text: "text-signal", veil: "bg-signal/80", shadow: "shadow-brutal-signal" },
};

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative bg-paper section-halo overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-50 pointer-events-none" />
      <div className="absolute top-12 right-8 huge-numeral text-ink/[0.05] text-[18vw] leading-none pointer-events-none select-none">
        01
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="tag-mono text-clay mb-4">№ 01 — THE OFFERING</div>
            <h2 className="font-display font-display-hard text-ink-900 text-5xl md:text-7xl leading-[0.88] tracking-[-0.04em] uppercase">
              Three pillars.<br />
              <span className="marker marker-clay text-ink-900">Zero compromise.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-700 text-lg border-l-4 border-ink pl-5">
              Pick the one you need today — or stack all three for a complete operating
              layer behind your business. Every engagement starts with one founder-led call.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile: stacked slabs */}
      <div className="md:hidden relative mx-auto max-w-7xl px-6 pb-24 flex flex-col gap-6 mt-10">
        {SERVICES.map((s, i) => (
          <MobileSlab key={i} service={s} />
        ))}
      </div>

      {/* Desktop: horizontal accordion */}
      <div className="hidden md:block relative mx-auto max-w-[1500px] px-6 pb-32 mt-6">
        <div
          className="flex gap-3 h-[600px]"
          onMouseLeave={() => setActive(0)}
        >
          {SERVICES.map((s, i) => {
            const isActive = active === i;
            const Icon = s.icon;
            const a = ACCENT[s.accent];
            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                className="accordion-panel relative overflow-hidden cursor-pointer group border-2 border-ink"
                style={{
                  flexGrow: isActive ? 4.6 : 1,
                  transition: "flex-grow .8s cubic-bezier(.2,.7,.2,1)",
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${s.image}')` }}
                />
                <div className={`absolute inset-0 ${a.veil} mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
                <div className="absolute inset-0 bg-crosshatch opacity-25 mix-blend-overlay pointer-events-none" />

                <div className="absolute top-5 left-5 z-10 mono text-paper text-[11px] tracking-[0.22em] uppercase flex items-center gap-2">
                  <span className="register-mark" /> {s.n} / 03
                </div>

                <div
                  className={`absolute left-1/2 bottom-12 transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-100"}`}
                  style={{ transform: "translateX(-50%) rotate(-90deg)", transformOrigin: "center" }}
                >
                  <span className="font-display font-display-hard text-paper text-2xl tracking-[0.1em] whitespace-nowrap uppercase">{s.title}</span>
                </div>

                <div
                  className={`absolute inset-0 p-10 flex flex-col justify-end transition-opacity duration-500 delay-100 ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 ${a.fill} border-2 border-ink grid place-items-center`}>
                      <Icon size={22} className="text-paper" />
                    </div>
                    <ArrowUpRight className="text-paper" size={28} />
                  </div>

                  <div className="mono text-paper/70 text-sm tracking-[0.22em] uppercase mb-3">
                    PILLAR / {s.n}
                  </div>
                  <h3 className="font-display font-display-hard text-paper text-5xl lg:text-6xl leading-[0.9] tracking-[-0.03em] max-w-xl uppercase">
                    {s.title}
                  </h3>
                  <p className="text-paper/90 mt-5 text-lg max-w-2xl font-medium">{s.tagline}</p>
                  <p className="text-paper/70 mt-2 max-w-2xl text-sm leading-relaxed">{s.body}</p>

                  <ul className="mt-6 flex flex-wrap gap-0 max-w-2xl border-l-2 border-paper/30">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="mono text-[10px] tracking-[0.22em] uppercase px-3 py-2 text-paper border-r-2 border-paper/30 bg-midnight/40"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute left-0 top-0 h-full w-1.5 bg-paper/20">
                  <motion.div
                    className={`${a.fill} w-full origin-top`}
                    initial={false}
                    animate={{ scaleY: isActive ? 1 : 0.08 }}
                    transition={{ duration: 0.6 }}
                    style={{ height: "100%" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MobileSlab({ service }: { service: (typeof SERVICES)[number] }) {
  const Icon = service.icon;
  const a = ACCENT[service.accent];
  return (
    <div className={`relative overflow-hidden border-2 border-ink ${a.shadow}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${service.image}')` }}
      />
      <div className={`absolute inset-0 ${a.veil} mix-blend-multiply`} />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />

      <div className="relative p-6">
        <div className="flex items-center justify-between mb-6">
          <div className={`w-12 h-12 ${a.fill} border-2 border-ink grid place-items-center`}>
            <Icon size={20} className="text-paper" />
          </div>
          <span className="mono text-paper text-[11px] tracking-[0.22em] uppercase">{service.n} / 03</span>
        </div>
        <div className="mono text-paper/70 text-[11px] tracking-[0.22em] uppercase mb-2">PILLAR {service.n}</div>
        <h3 className="font-display font-display-hard text-paper text-3xl leading-tight uppercase">{service.title}</h3>
        <p className="text-paper/85 mt-3">{service.tagline}</p>
      </div>
    </div>
  );
}
