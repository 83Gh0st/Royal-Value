import { processSteps } from "@/lib/content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function Process() {
  return (
    <section className="sec sec--sheet" id="process">
      <div className="wrap">
        <div className="sec__head">
          <Reveal>
            <div>
              <p className="tag">How it runs</p>
              <h2 className="t-h2">Five stages. Each with a date attached.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">
              The sequence below is what goes into your contract programme, with liquidated
              damages against the handover date.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="steps">
          {processSteps.map((step) => (
            <RevealItem key={step.no} className="step">
              <span className="step__no">{step.no}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <time>{step.time}</time>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
