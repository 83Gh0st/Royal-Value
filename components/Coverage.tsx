import { coverage } from "@/lib/content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function Coverage() {
  return (
    <section className="sec sec--sheet" id="coverage">
      <div className="wrap">
        <div className="sec__head">
          <Reveal>
            <div>
              <p className="tag">Where we work</p>
              <h2 className="t-h2">
                Three emirates on our own licences. A fourth on the group&rsquo;s.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">
              A contractor who claims all seven emirates is quoting your job at arm&rsquo;s
              length. We hold real licences where we work, and our own office in each.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="cov">
          {coverage.map((c) => (
            <RevealItem key={c.emirate} className="cov__c">
              <h3 className="t-h3">
                {c.emirate}
                <span>{c.tag}</span>
              </h3>
              <p>{c.body}</p>
              <ul className="chips">
                {c.areas.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
