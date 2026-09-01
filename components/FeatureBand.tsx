import Image from "next/image";
import Reveal from "./Reveal";

type FeatureBandProps = {
  eyebrow: string;
  heading: string;
  body: string;
  image: { src: string; alt: string };
  reverse?: boolean;
  cta?: { label: string; href: string };
};

/** A full-bleed photography break that pairs a real project photo with a short claim. */
export default function FeatureBand({ eyebrow, heading, body, image, reverse, cta }: FeatureBandProps) {
  return (
    <section className="sec sec--sheet" style={{ paddingBlock: "0" }}>
      <div className="wrap" style={{ paddingBlock: "clamp(3.25rem, 7vw, 6rem)" }}>
        <Reveal>
          <div className={reverse ? "feature feature--reverse" : "feature"}>
            <div className="feature__img">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="feature__copy">
              <p className="tag">{eyebrow}</p>
              <h3 className="t-h2" style={{ fontSize: "clamp(1.5rem,2.6vw,2.1rem)" }}>
                {heading}
              </h3>
              <p className="lede" style={{ maxWidth: "40ch" }}>
                {body}
              </p>
              {cta && (
                <a className="btn btn--ghost" href={cta.href} style={{ alignSelf: "flex-start" }}>
                  {cta.label}
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
