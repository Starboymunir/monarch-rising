"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun } from "./Ornaments";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("mr-loaded")) {
      setDone(true);
      return;
    }
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 9 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => {
          sessionStorage.setItem("mr-loaded", "1");
          setDone(true);
        }, 380);
      }
      setPct(Math.min(100, Math.round(p)));
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.95, ease: [0.7, 0, 0.2, 1] }}
          className="fixed inset-0 z-[200] bg-paper-radial flex flex-col items-center justify-center"
          style={{ willChange: "transform" }}
        >
          <div className="relative flex flex-col items-center gap-10 px-6 w-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative"
            >
              <Sun className="w-24 h-24 text-ochre animate-spin-slower" />
            </motion.div>

            <div className="text-center">
              <div className="eyebrow justify-center mb-3"><span className="dot" /> Monarch Rising · Atelier</div>
              <div className="font-display text-3xl md:text-5xl text-ink-900">
                Setting the <em className="text-clay-grad font-display-soft italic">stage</em>
              </div>
            </div>

            <div className="w-full max-w-md">
              <div className="flex items-end justify-between text-[10px] tracking-[0.3em] text-mute uppercase mb-2">
                <span>Loading assets</span>
                <span className="font-display text-2xl text-ink-900">{String(pct).padStart(3, "0")}%</span>
              </div>
              <div className="h-[3px] w-full bg-ink/10 overflow-hidden rounded-full">
                <div
                  className="preloader-bar h-full rounded-full"
                  style={{ transform: `scaleX(${pct / 100})` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
