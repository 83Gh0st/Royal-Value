import CredibilityBanner from "@/components/CredibilityBanner";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Coverage from "@/components/Coverage";
import Estimator from "@/components/Estimator";
import FAQ from "@/components/FAQ";
import FeatureBand from "@/components/FeatureBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyCheaper from "@/components/WhyCheaper";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <CredibilityBanner />
        <WhyCheaper />
        <FeatureBand
          eyebrow="One set of drawings"
          heading="Value-engineered on paper, before it costs you on site."
          body="Because design and build sit under one contract, a specification change is a five-minute conversation before drawings freeze — not a variation claim once the blockwork is up."
          image={{
            src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
            alt: "Architect working on a technical drawing with a pencil and ruler",
          }}
        />
        <Services />
        <Pricing />
        <Estimator />
        <Process />
        <FeatureBand
          eyebrow="On site, every week"
          heading="A dated photo report, without you asking for one."
          body="Our own MEP crew works alongside the civil team from foundation to handover, so callbacks on air-conditioning and plumbing come back to the people who installed them."
          image={{
            src: "https://images.unsplash.com/photo-1599995903128-531fc7fb694b",
            alt: "Construction cranes over a building site at low sun",
          }}
          reverse
        />
        <Coverage />
        <Clients />
        <FeatureBand
          eyebrow="Premium specification"
          heading="Reads as luxury, priced at mid-market."
          body="Large-format porcelain, solid-core doors, ducted HVAC and LED cove lighting — the Premium tier most clients choose, at AED 520–680 per sq ft build-only."
          image={{
            src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
            alt: "Living room interior with a marble fireplace and white sofas",
          }}
          cta={{ label: "See the full rate card", href: "#pricing" }}
        />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
