"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Check } from "lucide-react";

export function LeadMagnet() {
  const [first, setFirst] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setDone(true);
  };

  return (
    <section id="cheatsheet" className="relative bg-bone text-ink-900 section-halo overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-fine opacity-40 pointer-events-none" />
      <div className="absolute top-12 -right-4 huge-numeral text-ink/[0.05] text-[22vw] leading-none pointer-events-none select-none">
        08
      </div>
      <div className="absolute top-40 -left-10 w-40 h-40 stripe-diag text-rust opacity-30 rotate-12 pointer-events-none" />
      <div className="absolute bottom-32 -right-10 w-40 h-40 stripe-diag text-signal opacity-30 -rotate-12 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <div className="lg:col-span-6">
            <div className="tag-mono text-rust mb-4">№ 08 — THE CHEAT SHEET</div>
            <h2 className="font-display font-display-hard text-ink-900 text-5xl md:text-7xl leading-[0.88] tracking-[-0.04em] uppercase">
              The Founder's{" "}
              <span className="marker marker-ochre text-ink-900">Delegation</span>{" "}
              <span className="italic font-display-soft text-rust">Map.</span>
            </h2>
            <p className="text-ink-700 mt-6 text-lg leading-relaxed border-l-4 border-ink pl-5 max-w-xl">
              A one-page diagnostic for founders. Twelve questions to surface the work
              that's already costing you — and the exact roles that solve it. Sent the moment you submit.
            </p>

            <ul className="mt-10 space-y-0 border-t-2 border-ink">
              {[
                { t: "Your personal hour-leak audit",       a: "bg-ochre" },
                { t: "The four delegation archetypes",      a: "bg-rust" },
                { t: "Founder-grade SOP starter template",  a: "bg-signal" },
                { t: "First-90-day hiring sequence",        a: "bg-sage" },
              ].map((b, i) => (
                <li key={b.t} className="flex items-center gap-4 py-4 border-b-2 border-ink/15">
                  <span className="mono text-[11px] tracking-[0.22em] uppercase text-ink/50 w-8">0{i + 1}</span>
                  <span className={`w-8 h-8 ${b.a} border-2 border-ink grid place-items-center shrink-0`}>
                    <Check className="text-paper" size={16} strokeWidth={3} />
                  </span>
                  <span className="text-ink-900 font-medium">{b.t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — poster form */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -top-4 left-6 bg-rust text-paper border-2 border-ink px-3 py-1.5 mono text-[10px] tracking-[0.22em] uppercase z-10 -rotate-2">
              FREE / NO CARD
            </div>

            <div className="relative bracket-frame-4 text-rust">
              <span className="bc-tl" /><span className="bc-tr" /><span className="bc-bl" /><span className="bc-br" />
              <div className="bg-paper border-2 border-ink shadow-brutal-lg p-8 md:p-10">
                {/* Form header strip */}
                <div className="flex items-center justify-between border-b-2 border-ink pb-3 mb-6 mono text-[10px] tracking-[0.22em] uppercase text-ink/60">
                  <span className="flex items-center gap-2">
                    <span className="register-mark" /> FORM / 008
                  </span>
                  <span>DELIVERY · INSTANT</span>
                </div>

                {!done ? (
                  <form onSubmit={submit} className="space-y-5">
                    <Field label="First name" value={first} onChange={setFirst} type="text" required idx="01" />
                    <Field label="Email"      value={email} onChange={setEmail} type="email" required idx="02" />
                    <Field label="Phone (optional)" value={phone} onChange={setPhone} type="tel" idx="03" />
                    <button
                      type="submit"
                      disabled={loading || !first || !email}
                      className="btn-slab btn-slab-clay w-full justify-center mt-4 disabled:opacity-50"
                    >
                      {loading ? "SENDING..." : <>DOWNLOAD THE PLAYBOOK <Download size={16} /></>}
                    </button>
                    <p className="mono text-[10px] tracking-[0.18em] uppercase text-ink/50 leading-relaxed mt-3 text-center">
                      // NO SPAM · NO RESALE · READ ONCE · KEEP FOREVER
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 bg-sage border-2 border-ink shadow-brutal mx-auto grid place-items-center">
                      <Check className="text-paper" size={32} strokeWidth={3} />
                    </div>
                    <div className="font-display font-display-hard text-3xl text-ink-900 mt-6 uppercase tracking-tight">
                      Sent. Long live the founder.
                    </div>
                    <p className="text-ink-700 mt-3 max-w-sm mx-auto">
                      Check your inbox for the Delegation Map. We'll follow up with a calendar link if you want to talk further.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, type, required, idx,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  required?: boolean;
  idx: string;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-2">
        <span className="mono text-[10px] tracking-[0.22em] uppercase text-ink/70">
          {label}{required && <span className="text-rust"> *</span>}
        </span>
        <span className="mono text-[10px] tracking-[0.22em] uppercase text-ink/40">{idx} / 03</span>
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-bone border-2 border-ink focus:bg-paper focus:shadow-brutal outline-none px-4 py-3 text-ink-900 placeholder:text-ink/40 transition-all"
      />
    </label>
  );
}
