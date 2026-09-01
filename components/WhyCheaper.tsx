import { mechanisms } from "@/lib/content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function WhyCheaper() {
  return (
    <section className="sec sec--sheet" id="why">
      <div className="wrap">
        <div className="sec__head">
          <Reveal>
            <div>
              <p className="tag">Why our number is lower</p>
              <h2 className="t-h2">
                Cheaper because of how we&rsquo;re built — not because of what we leave out.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">
              Anyone can quote low and claim it back in variations. Our price is lower for
              three structural reasons you can verify before you sign.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid-3">
          {mechanisms.map((m) => (
            <RevealItem key={m.no} className="card">
              <span className="card__no">{m.no}</span>
              <h3 className="t-h3">{m.title}</h3>
              <div className="card__fig">
                {m.figure}
                <small>{m.figureLabel}</small>
              </div>
              <p>{m.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
