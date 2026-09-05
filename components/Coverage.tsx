import Image from "next/image";
import { coverage } from "@/lib/content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function Coverage() {
  return (
    <section className="sec sec--steel" id="coverage">
      <div className="wrap">
        <div className="sec__head">
          <Reveal>
            <h2 className="t-h2">Licensed where we work.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede">
              Three emirates on our own trade licences, and a fourth through
              the group&rsquo;s Abu Dhabi branch. A contractor quoting all
              seven emirates is quoting at arm&rsquo;s length. We hold real
              licences and a real office in each of these four.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="cov-grid" stagger={0.08}>
          {coverage.map((c) => (
            <RevealItem className="cov-card" key={c.emirate} amount={18}>
              <div className="cov-card__media">
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  fill
                  sizes="(max-width: 980px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="cov-card__scrim" />
              <div className="cov-card__in">
                <h3>{c.emirate}</h3>
                <span>{c.tag}</span>
                <p>{c.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
