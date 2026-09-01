import Image from "next/image";
import { services } from "@/lib/content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function Services() {
  return (
    <section className="sec sec--sheet" id="build">
      <div className="wrap">
        <div className="sec__head">
          <Reveal>
            <div>
              <p className="tag">What we build</p>
              <h2 className="t-h2">Three things, done properly.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">
              We deliberately don&rsquo;t chase towers or infrastructure. Depth in a narrow
              range is what keeps our rates predictable.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="svc">
          {services.map((s, i) => (
            <RevealItem key={s.title} className="svc__item">
              <div className="svc__img" data-slot={s.slot}>
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  priority={i === 0}
                />
              </div>
              <div className="svc__body">
                <h3 className="t-h3">{s.title}</h3>
                <p>{s.body}</p>
                <ul className="svc__list">
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
