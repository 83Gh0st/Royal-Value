import { clients, projectRecord } from "@/lib/content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const recordGroups = [projectRecord.villas, projectRecord.industrial, projectRecord.landmark];

export default function Clients() {
  return (
    <section className="sec sec--sheet" id="clients">
      <div className="wrap">
        <div className="sec__head">
          <Reveal>
            <div>
              <p className="tag">Who we&rsquo;ve worked for</p>
              <h2 className="t-h2">The names on our invoices.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">
              Ninety-five projects between 2008 and 2025. These are the organisations that
              signed them off — the ordinary reason to trust a contractor you haven&rsquo;t
              met.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.05}>
        <div className="marquee" style={{ marginBottom: "1.75rem" }}>
          <div className="marquee__track">
            {[...clients, ...clients].map((c, i) => (
              <span
                key={`${c}-${i}`}
                style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: ".72rem",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  padding: "0 1.6rem",
                  borderRight: "1px solid var(--rule)",
                  whiteSpace: "nowrap",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="wrap">
        <RevealGroup className="clients" as="ul" stagger={0.02}>
          {clients.map((c) => (
            <RevealItem key={c} as="li">
              {c}
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="rec">
          {recordGroups.map((group) => (
            <RevealItem key={group.title} className="rec__col">
              <h3 className="t-h3">{group.title}</h3>
              <ul className="rec__list">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <b>{item.name}</b>
                    <span>{item.place}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
