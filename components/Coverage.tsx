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
              seven emirates is quoting at arm&rsquo;s length — we hold real
              licences and a real office in each of these four.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="cov" stagger={0.08}>
          {coverage.map((c) => (
            <RevealItem className="cov__row" key={c.emirate} dir="left" amount={14}>
              <div>
                <h3>{c.emirate}</h3>
                <span>{c.tag}</span>
              </div>
              <p>{c.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
