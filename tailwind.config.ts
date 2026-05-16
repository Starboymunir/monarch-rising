import type { Config } from "tailwindcss";

/**
 * Atelier — warm editorial palette
 * Light bone base, deep navy ink, with 6 balanced accents:
 * clay (terracotta), sage (green), ochre (mustard),
 * lilac (lavender), teal, berry.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bone:  { DEFAULT: "#F4EFE6", 50: "#FAF6EE", 100: "#F4EFE6", 200: "#EBE4D2", 300: "#DFD5BC" },
        paper: { DEFAULT: "#FAF6EE", 50: "#FFFCF6", 100: "#FAF6EE" },
        shell: { DEFAULT: "#E6DCC6", 100: "#EFE7D3", 200: "#E6DCC6", 300: "#D6C9AB" },
        ink: {
          DEFAULT: "#15233D",
          900: "#0D1626",
          800: "#15233D",
          700: "#243352",
          600: "#3A4863",
          500: "#566180",
          400: "#7C859C",
          300: "#A8B0C2",
          200: "#D2D7E1",
          100: "#EAECF2",
        },
        mute: "#6B7587",
        clay: {
          DEFAULT: "#D96E48",
          50: "#FBEAE2",
          100: "#F4C8B4",
          200: "#EAA083",
          300: "#E18460",
          400: "#D96E48",
          500: "#B85530",
          600: "#8A3D20",
        },
        sage: {
          DEFAULT: "#7BA683",
          50: "#E9F1EB",
          100: "#CBDDD0",
          200: "#A8C5B0",
          300: "#7BA683",
          400: "#5C8C66",
          500: "#3E6D49",
        },
        ochre: {
          DEFAULT: "#E5B453",
          50: "#FBEFD2",
          100: "#F4DFA8",
          200: "#ECCA7D",
          300: "#E5B453",
          400: "#C6962F",
          500: "#8E6A1A",
        },
        lilac: {
          DEFAULT: "#9B8AC4",
          50: "#EFEAF7",
          100: "#D8CFE9",
          200: "#BBADD8",
          300: "#9B8AC4",
          400: "#7868A8",
          500: "#54487A",
        },
        teal: {
          DEFAULT: "#2A8F8B",
          50: "#DBF1F0",
          100: "#A8DEDB",
          200: "#6AC2BE",
          300: "#2A8F8B",
          400: "#1F706D",
          500: "#13504D",
        },
        berry: {
          DEFAULT: "#B8456B",
          50: "#FAE2EA",
          100: "#EDB2C4",
          200: "#D67A99",
          300: "#B8456B",
          400: "#8E2C4F",
          500: "#5C1A32",
        },
        sky: { DEFAULT: "#5B8AC4", 100: "#C7D7EB", 300: "#5B8AC4", 500: "#2F5F94" },
        midnight: { DEFAULT: "#08101F", 900: "#040812", 800: "#08101F", 700: "#0F1A30" },
        signal: { DEFAULT: "#2C7BE5", 50: "#E0EBFA", 100: "#B7CFF3", 300: "#5B97EB", 400: "#2C7BE5", 500: "#1A5BB8" },
        rust:   { DEFAULT: "#C23B22", 50: "#F8DDD6", 100: "#EDB1A4", 300: "#D85C3F", 400: "#C23B22", 500: "#8C2613" },
        moss:   { DEFAULT: "#1F4733", 50: "#D7E5DD", 100: "#9FBDAB", 300: "#3F6E55", 400: "#1F4733", 500: "#10271D" },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["'JetBrains Mono'", "'IBM Plex Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {
        "clay-grad":  "linear-gradient(135deg,#F4C8B4 0%,#E18460 50%,#B85530 100%)",
        "sage-grad":  "linear-gradient(135deg,#CBDDD0 0%,#7BA683 50%,#3E6D49 100%)",
        "ochre-grad": "linear-gradient(135deg,#F4DFA8 0%,#E5B453 50%,#8E6A1A 100%)",
        "lilac-grad": "linear-gradient(135deg,#D8CFE9 0%,#9B8AC4 50%,#54487A 100%)",
        "teal-grad":  "linear-gradient(135deg,#A8DEDB 0%,#2A8F8B 50%,#13504D 100%)",
        "berry-grad": "linear-gradient(135deg,#EDB2C4 0%,#B8456B 50%,#5C1A32 100%)",
        "rainbow-sheen":
          "linear-gradient(110deg,#D96E48 0%,#E5B453 20%,#7BA683 40%,#2A8F8B 60%,#9B8AC4 80%,#B8456B 100%)",
        "paper-radial":
          "radial-gradient(ellipse 70% 50% at 12% 10%, rgba(217,110,72,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 88% 18%, rgba(229,180,83,0.12), transparent 60%), radial-gradient(ellipse 65% 55% at 75% 95%, rgba(123,166,131,0.10), transparent 60%), radial-gradient(ellipse 55% 50% at 8% 85%, rgba(155,138,196,0.10), transparent 60%), #F4EFE6",
        "hero-bone":
          "radial-gradient(circle at 20% 20%, #FAF6EE 0%, transparent 50%), radial-gradient(circle at 80% 80%, #EFE7D3 0%, transparent 50%), #F4EFE6",
        "dot-grid":
          "radial-gradient(circle, rgba(21,35,61,0.18) 1px, transparent 1.4px)",
        "blueprint":
          "linear-gradient(rgba(21,35,61,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(21,35,61,0.06) 1px, transparent 1px)",
        "blueprint-dark":
          "linear-gradient(rgba(250,246,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(250,246,238,0.06) 1px, transparent 1px)",
        "midnight-radial":
          "radial-gradient(ellipse 60% 50% at 20% 10%, rgba(44,123,229,0.18), transparent 60%), radial-gradient(ellipse 50% 40% at 90% 30%, rgba(229,180,83,0.14), transparent 60%), radial-gradient(ellipse 60% 50% at 70% 95%, rgba(194,59,34,0.14), transparent 60%), #08101F",
      },
      boxShadow: {
        clay:  "0 24px 60px -22px rgba(217,110,72,0.55)",
        sage:  "0 24px 60px -22px rgba(123,166,131,0.55)",
        ochre: "0 24px 60px -22px rgba(229,180,83,0.55)",
        lilac: "0 24px 60px -22px rgba(155,138,196,0.55)",
        teal:  "0 24px 60px -22px rgba(42,143,139,0.55)",
        ink:   "0 24px 60px -22px rgba(21,35,61,0.45)",
        "paper-card": "0 1px 0 rgba(21,35,61,0.06), 0 18px 40px -22px rgba(21,35,61,0.20)",
        "brutal":     "6px 6px 0 0 #15233D",
        "brutal-lg":  "10px 10px 0 0 #15233D",
        "brutal-clay":  "6px 6px 0 0 #B85530",
        "brutal-ochre": "6px 6px 0 0 #C6962F",
        "brutal-signal":"6px 6px 0 0 #1A5BB8",
        "brutal-rust":  "6px 6px 0 0 #8C2613",
        "brutal-paper": "6px 6px 0 0 #FAF6EE",
      },
      animation: {
        shimmer: "shimmer 8s linear infinite",
        floaty:  "floaty 8s ease-in-out infinite",
        "spin-slow":   "spin 28s linear infinite",
        "spin-slower": "spin 60s linear infinite",
        marquee:     "marquee 40s linear infinite",
        "marquee-rev": "marquee 50s linear infinite reverse",
        rise:    "rise 0.9s cubic-bezier(.2,.7,.2,1) both",
        wave:    "wave 6s ease-in-out infinite",
        draw:    "draw 1.6s ease forwards",
        ticker:  "marquee 30s linear infinite",
        "ticker-fast": "marquee 18s linear infinite",
        blink:   "blink 1.4s steps(2,end) infinite",
      },
      keyframes: {
        shimmer: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
        floaty:  { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-14px)" } },
        marquee: { "0%": { transform: "translateX(0%)" }, "100%": { transform: "translateX(-50%)" } },
        rise:    { "0%": { transform: "translateY(110%)", opacity: "0" }, "100%": { transform: "translateY(0)", opacity: "1" } },
        wave:    { "0%,100%": { transform: "rotate(-4deg)" }, "50%": { transform: "rotate(4deg)" } },
        draw:    { from: { strokeDashoffset: "300" }, to: { strokeDashoffset: "0" } },
        blink:   { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } },
      },
    },
  },
  plugins: [],
};
export default config;
