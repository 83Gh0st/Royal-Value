import { additionalServices } from "@/lib/content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function AdditionalServices() {
  return (
    <section className="sec sec--steel" id="facilities">
      <div className="wrap">
        <div className="sec__head">
          <Reveal>
            <h2 className="t-h2">Facilities &amp; maintenance</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede">
              The trades that keep a finished building running, available on
              their own or bundled into an annual maintenance contract.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="extra" as="ul" stagger={0.05}>
          {additionalServices.map((s) => (
            <RevealItem as="li" key={s.title} amount={14}>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
