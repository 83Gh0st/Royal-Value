import { heroStats } from "@/lib/content";
import Counter from "./Counter";
import ElevationDrawing from "./ElevationDrawing";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__in">
        <div className="hero__copy">
          <Reveal>
            <p className="tag">Design &amp; build · Dubai · Sharjah · Ajman · Abu Dhabi</p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="t-hero">
              Built to the drawing.
              <br />
              Billed to <em>the quote.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="lede">
              Villas and warehouses delivered design-and-build — by the team that has run
              mechanical, electrical and plumbing works for DEWA, Dubai Police and the
              Presidential Court since 2007.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="hero__cta">
              <a className="btn btn--primary btn--lg" href="#quote">
                Book a free site visit
              </a>
              <a className="btn btn--ghost btn--lg" href="#estimator">
                Estimate my budget
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="stats">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <b className="num">
                    {/^\d+$/.test(s.value) ? (
                      <Counter value={Number(s.value)} />
                    ) : /^\d+\+$/.test(s.value) ? (
                      <Counter value={Number(s.value.replace("+", ""))} suffix="+" />
                    ) : (
                      s.value
                    )}
                  </b>
                  <span>
                    {s.label}
                    {s.sub ? (
                      <>
                        <br />
                        {s.sub}
                      </>
                    ) : null}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={24}>
          <div className="hero__draw" aria-hidden="true">
            <ElevationDrawing />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
