import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/Preloader";

const display = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  axes: ["SOFT", "opsz"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monarch Rising — The Architecture of a Lasting Business",
  description:
    "Reclaim your time with expert remote assistants, cold callers, and delegation systems. Monarch Rising helps founders rise above the chaos and into their highest role.",
  metadataBase: new URL("https://monarchrisingllc.com"),
  openGraph: {
    title: "Monarch Rising",
    description:
      "Remote teams, cold calling, and operational freedom for founders ready to lead, delegate, and scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
