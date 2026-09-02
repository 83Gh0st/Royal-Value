import Image from "next/image";

type FeatureBandProps = {
  eyebrow: string;
  heading: string;
  body: string;
  image: { src: string; alt: string };
  cta?: { label: string; href: string };
};

/** A full-bleed photography break that pairs a real trade photo with a short claim. */
export default function FeatureBand({ eyebrow, heading, body, image, cta }: FeatureBandProps) {
  return (
    <section className="feature">
      <div className="feature__media">
        <Image src={image.src} alt={image.alt} fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="feature__scrim" />
      <div className="feature__in">
        <div>
          <p className="hero__kicker" style={{ marginBottom: ".5rem" }}>{eyebrow}</p>
          <h3>{heading}</h3>
        </div>
        <div style={{ alignSelf: "end", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          <p>{body}</p>
          {cta && (
            <a className="btn btn--ghost-dark" href={cta.href} style={{ alignSelf: "flex-start" }}>
              {cta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
