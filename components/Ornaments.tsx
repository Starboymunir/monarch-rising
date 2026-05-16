import type { SVGProps } from "react";

/* ============================================================
   Atelier — custom hand-drawn shape library
   All shapes accept currentColor unless they need multi-tone.
   ============================================================ */

type SP = SVGProps<SVGSVGElement>;

/** Organic squishy blob — pass a Tailwind text-color class for fill */
export function BlobShape({ className, ...props }: SP) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M40,90 C25,55 65,15 105,20 C150,25 185,55 180,100 C175,140 145,180 100,180 C60,180 50,150 35,130 C20,115 50,120 40,90 Z" />
    </svg>
  );
}

/** Hand-drawn squiggly underline — use inside .underline-scribble */
export function Squiggle({ className, ...props }: SP) {
  return (
    <svg viewBox="0 0 300 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M3 14 C 30 4, 60 22, 90 12 S 150 4, 180 14 S 240 22, 297 10" />
    </svg>
  );
}

/** 8-point asymmetric star burst */
export function StarBurst({ className, ...props }: SP) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M50 2 L57 38 L92 30 L66 56 L96 78 L60 70 L54 98 L46 70 L10 80 L36 56 L4 32 L42 38 Z" />
    </svg>
  );
}

/** Curvy doodle arrow (points right-down by default) */
export function ArrowDoodle({ className, ...props }: SP) {
  return (
    <svg viewBox="0 0 160 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M6 14 C 40 6, 70 18, 90 36 S 130 64, 150 60" />
      <path d="M138 48 L150 60 L142 72" />
    </svg>
  );
}

/** Circular stamp with curving text */
export function CircleStamp({ text = "MONARCH · RISING · ", className, ...props }: SP & { text?: string }) {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <path id="cs-curve" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
      </defs>
      <text fontSize="11" letterSpacing="3" fill="currentColor" fontFamily="var(--font-display)">
        <textPath href="#cs-curve">{text.repeat(3)}</textPath>
      </text>
    </svg>
  );
}

/** 4-point sparkle */
export function Sparkle({ className, ...props }: SP) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M12 0 L13.6 9 L22 11 L13.6 13 L12 22 L10.4 13 L2 11 L10.4 9 Z" />
    </svg>
  );
}

/** Organic leaf shape (was Laurel) */
export function LeafShape({ className, ...props }: SP) {
  return (
    <svg viewBox="0 0 60 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M30 4 C 8 26, 4 70, 30 96 C 56 70, 52 26, 30 4 Z" />
      <path d="M30 14 L30 92" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
    </svg>
  );
}

/** Sun with radial rays */
export function Sun({ className, ...props }: SP) {
  return (
    <svg viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <circle cx="60" cy="60" r="20" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 12;
        const x1 = 60 + Math.cos(a) * 30;
        const y1 = 60 + Math.sin(a) * 30;
        const x2 = 60 + Math.cos(a) * 50;
        const y2 = 60 + Math.sin(a) * 50;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="4" strokeLinecap="round" />;
      })}
    </svg>
  );
}

/** Decorative diamond grid */
export function DiamondGrid({ className, ...props }: SP) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.2" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {[0, 20, 40, 60].map((y) =>
        [0, 20, 40, 60].map((x) => (
          <path key={`${x}-${y}`} d={`M${x + 10} ${y} L${x + 20} ${y + 10} L${x + 10} ${y + 20} L${x} ${y + 10} Z`} />
        ))
      )}
    </svg>
  );
}

/** Wavy divider line */
export function Wave({ className, ...props }: SP) {
  return (
    <svg viewBox="0 0 400 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M0 15 Q 25 0, 50 15 T 100 15 T 150 15 T 200 15 T 250 15 T 300 15 T 350 15 T 400 15" />
    </svg>
  );
}

/** Custom check icon (hand-drawn) */
export function CheckMark({ className, ...props }: SP) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M4 13 L 9 18 L 20 5" />
    </svg>
  );
}

/** Three-dot accent (clay/sage/ochre) */
export function TriDot({ className }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 ${className ?? ""}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-clay" />
      <span className="w-1.5 h-1.5 rounded-full bg-sage" />
      <span className="w-1.5 h-1.5 rounded-full bg-ochre" />
    </div>
  );
}

/** Ornamental rule with center sparkle */
export function Divider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-ink/40 ${className ?? ""}`}>
      <span className="hairline-ink w-24" />
      <Sparkle className="w-3.5 h-3.5 text-ochre" />
      <span className="hairline-ink w-24" />
    </div>
  );
}

/** Brand mark — geometric "M" monogram in ink with tri-color dot accents */
export function MonarchMark({ className, light = false }: { className?: string; light?: boolean }) {
  const inkColor = light ? "#FAF6EE" : "#15233D";
  const muteColor = light ? "rgba(250,246,238,0.7)" : "#6B7587";
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <div className="relative w-10 h-10 grid place-items-center">
        <svg viewBox="0 0 40 40" className="w-10 h-10">
          <rect x="1" y="1" width="38" height="38" rx="10" fill="none" stroke={inkColor} strokeWidth="1.5" />
          {/* Geometric M */}
          <path
            d="M10 28 L10 12 L20 22 L30 12 L30 28"
            fill="none"
            stroke={inkColor}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Tri-color dots */}
          <circle cx="13" cy="32" r="1.8" fill="#D96E48" />
          <circle cx="20" cy="32" r="1.8" fill="#7BA683" />
          <circle cx="27" cy="32" r="1.8" fill="#E5B453" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-display text-lg tracking-tight" style={{ color: inkColor }}>
          Monarch Rising
        </div>
        <div className="text-[10px] tracking-[0.32em] uppercase" style={{ color: muteColor }}>
          atelier for founders
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Legacy aliases (kept so any stray import doesn't break)
   ============================================================ */
export const Crown = Sun;
export const GoldDivider = Divider;

