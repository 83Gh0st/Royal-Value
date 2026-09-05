import Image from "next/image";
import { galleryImages, projectTypes } from "@/lib/content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function Industries() {
  return (
    <section className="sec sec--steel">
      <div className="wrap">
        <div className="sec__head" style={{ marginBottom: "2rem" }}>
          <Reveal>
            <h2 className="t-h2">Industries we serve.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede">
              Construction and MEP/HVAC execution for a wide range of
              project types, across all four emirates we cover.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="industries-grid" stagger={0.06}>
          {galleryImages.industries.map((img) => (
            <RevealItem className="industries-grid__item" key={img.label} amount={16}>
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 860px) 50vw, 25vw" style={{ objectFit: "cover" }} />
              <span>{img.label}</span>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="chips-wrap" as="ul" stagger={0.03}>
          {projectTypes.map((t) => (
            <RevealItem as="li" className="chip" key={t} amount={12}>
              {t}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
