import AdditionalServices from "@/components/AdditionalServices";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import FeatureBand from "@/components/FeatureBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import ScrollProgress from "@/components/ScrollProgress";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <WhyUs />
        <Services />
        <FeatureBand
          eyebrow="Execution, not design engineering"
          heading="We build exactly what's approved, nothing assumed, nothing missing."
          body="Civil, MEP and HVAC trades are coordinated on site so the drawing comes together the way it was intended on paper, with clashes resolved before they cost you time."
          image={{
            src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
            alt: "Engineer reviewing an approved technical drawing on site",
          }}
        />
        <Process />
        <FeatureBand
          eyebrow="Our own trade"
          heading="MEP done by the people who commission it."
          body="Callbacks on air-conditioning, power and plumbing come back to the same team that installed them, not a subcontractor we've lost touch with."
          image={{
            src: "https://images.unsplash.com/photo-1615774925655-a0e97fc85c14",
            alt: "Electrician in a hard hat and face shield testing an electrical panel",
          }}
          cta={{ label: "See our coverage", href: "#coverage" }}
        />
        <Coverage />
        <Clients />
        <Industries />
        <Trust />
        <AdditionalServices />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
