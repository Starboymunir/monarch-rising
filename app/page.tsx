import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeRibbon } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Transformation } from "@/components/Transformation";
import { Method } from "@/components/Method";
import { FoundersFreed } from "@/components/FoundersFreed";
import { ByTheNumbers } from "@/components/ByTheNumbers";
import { Testimonials } from "@/components/Testimonials";
import { Pillars } from "@/components/Pillars";
import { LeadMagnet } from "@/components/LeadMagnet";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <MarqueeRibbon
        words={[
          "REMOTE TEAMS",
          "COLD CALLING",
          "OPERATIONAL FREEDOM",
          "FOUNDER-LED",
          "TOP-3% TALENT",
          "BUILT IN HOUSTON",
        ]}
        size="lg"
        accent="ink"
      />
      <Services />
      <Transformation />
      <Method />
      <MarqueeRibbon
        words={[
          "RECLAIM YOUR TIME",
          "DELEGATE SMARTER",
          "LEAD THE EMPIRE",
          "RISE OR REMAIN",
        ]}
        size="lg"
        reverse
        accent="paper"
      />
      <FoundersFreed />
      <ByTheNumbers />
      <Testimonials />
      <Pillars />
      <LeadMagnet />
      <FinalCTA />
      <Footer />
    </main>
  );
}
