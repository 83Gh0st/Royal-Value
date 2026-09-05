import Image from "next/image";
import { galleryImages, projectTypes } from "@/lib/content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function Industries() {
  const doubledImages = [...galleryImages.industries, ...galleryImages.industries];

  return (
    <section className="sec sec--steel">
      <div className="wrap">
        <div className="sec__head" style={{ marginBottom: "0" }}>
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
      </div>

      <Reveal delay={0.12}>
        <div className="img-carousel">
          <div className="img-carousel__track">
            {doubledImages.map((img, i) => (
              <div className="img-carousel__item" data-label key={`${img.src}-${i}`}>
                <Image src={img.src} alt={img.alt} fill sizes="18rem" style={{ objectFit: "cover" }} />
                <span>{img.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="wrap" style={{ marginTop: "2.5rem" }}>
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
