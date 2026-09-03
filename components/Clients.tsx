import { clients } from "@/lib/content";
import Reveal from "./Reveal";

const mid = Math.ceil(clients.length / 2);
const rowA = clients.slice(0, mid);
const rowB = clients.slice(mid);

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className={reverse ? "marquee__track marquee__track--reverse" : "marquee__track"}>
        {doubled.map((c, i) => (
          <span className="marquee__item" key={`${c}-${i}`}>{c}</span>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="sec sec--paper" id="projects">
      <div className="wrap">
        <div className="sec__head">
          <Reveal>
            <h2 className="t-h2">The names that trust us.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede">
              Ninety-five projects between 2008 and 2025. Some of the
              organisations behind them we can name here — others, including
              several distinguished private clients, we&rsquo;re trusted to
              keep confidential.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="marquee-stack">
          <Row items={rowA} />
          <Row items={rowB} reverse />
        </div>
      </Reveal>
    </section>
  );
}
