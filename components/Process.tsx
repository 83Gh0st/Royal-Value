import { approach } from "@/lib/content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function Process() {
  return (
    <section className="sec sec--gun" id="process">
      <div className="wrap">
        <div className="sec__head">
          <Reveal>
            <h2 className="t-h2">From site to handover.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede">
              Six stages, on every project — whether we&rsquo;re the main
              contractor or delivering one trade to somebody else&rsquo;s
              programme.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="process" stagger={0.07}>
          {approach.map((step, i) => (
            <RevealItem className="proc-row" key={step.title} dir="left" amount={16}>
              <span className="proc-row__no num">{String(i + 1).padStart(2, "0")}</span>
              <div className="proc-row__body">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
