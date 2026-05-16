"use client";
import { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  durationSec?: number;
  className?: string;
};

export function Marquee({ children, reverse = false, durationSec = 40, className = "" }: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="marquee"
        style={{
          animation: `marquee ${durationSec}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="marquee-track">{children}</div>
        <div className="marquee-track" aria-hidden>{children}</div>
      </div>
    </div>
  );
}

const SEPARATORS = ["✦", "✺", "◆", "✿", "❋"];
const SEP_COLORS = ["text-clay", "text-sage", "text-ochre", "text-lilac", "text-teal", "text-berry"];

export function MarqueeRibbon({
  words,
  reverse,
  size = "md",
  accent = "ink",
}: {
  words: string[];
  reverse?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  accent?: "ink" | "paper" | "rainbow" | "cream" | "gold";
}) {
  const sizeClass =
    size === "xl"
      ? "text-[8vw] py-6 md:py-10"
      : size === "lg"
      ? "text-5xl md:text-7xl py-5 md:py-8"
      : size === "sm"
      ? "text-xs md:text-sm py-2.5 tracking-[0.4em]"
      : "text-2xl md:text-4xl py-4";

  // Map accent to (bg, text color)
  const isDark = accent === "ink" || accent === "rainbow";
  const wrapBg =
    accent === "paper"
      ? "bg-paper border-y border-ink/10"
      : accent === "rainbow"
      ? "bg-rainbow-sheen bg-[length:240%_100%] animate-shimmer"
      : accent === "cream" || accent === "gold"
      ? "bg-shell border-y border-ink/10"
      : "bg-ink-900 border-y border-ink/30"; // ink

  const wordColor = isDark
    ? accent === "rainbow"
      ? "text-ink-900"
      : "text-paper"
    : "text-ink-900";

  return (
    <div className={`${wrapBg} ${size === "sm" ? "" : "section-halo"} relative overflow-hidden`}>
      <Marquee durationSec={size === "sm" ? 30 : 55} reverse={reverse}>
        {words.map((w, i) => {
          const sep = SEPARATORS[i % SEPARATORS.length];
          const sepColor = isDark
            ? "text-paper/50"
            : SEP_COLORS[i % SEP_COLORS.length];
          return (
            <span
              key={i}
              className={`font-display font-display-hard uppercase whitespace-nowrap ${sizeClass} ${wordColor} flex items-center gap-10`}
            >
              <span>{w}</span>
              <span className={sepColor}>{sep}</span>
            </span>
          );
        })}
      </Marquee>
    </div>
  );
}
