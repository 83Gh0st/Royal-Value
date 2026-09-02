import AdditionalServices from "@/components/AdditionalServices";
import Capability from "@/components/Capability";
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
        <WhyCheaper />
        <Services />
        <FeatureBand
          eyebrow="Engineering, before site"
          heading="Value-engineered on paper, before it costs you on site."
          body="Civil, MEP and HVAC drawings are coordinated before anything mobilises — so a specification change is a conversation at the drafting table, not a variation claim once the blockwork is up."
          image={{
            src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
            alt: "Architect working on a technical drawing with a pencil and ruler",
          }}
        />
        <Process />
        <Pricing />
        <Estimator />
        <FeatureBand
          eyebrow="Our own trade"
          heading="MEP done by the people who commission it."
          body="Callbacks on air-conditioning, power and plumbing come back to the same team that installed them — not a subcontractor we've lost touch with."
          image={{
            src: "https://images.unsplash.com/photo-1615774925655-a0e97fc85c14",
            alt: "Electrician in a hard hat and face shield testing an electrical panel",
          }}
          cta={{ label: "See our capability", href: "#capability" }}
        />
        <Coverage />
        <Capability />
        <Clients />
        <AdditionalServices />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
