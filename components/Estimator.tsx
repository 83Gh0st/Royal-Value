"use client";

import { useMemo, useState } from "react";
import { COVERAGE, ProjectType, RATES, Spec } from "@/lib/content";
import Reveal from "./Reveal";

const fmt = new Intl.NumberFormat("en-US");

function round(n: number) {
  if (n >= 1_000_000) return Math.round(n / 10_000) * 10_000;
  return Math.round(n / 1_000) * 1_000;
}

export default function Estimator() {
  const [type, setType] = useState<ProjectType>("villa");
  const [spec, setSpec] = useState<Spec>("premium");
  const [area, setArea] = useState(5000);
  const [floors, setFloors] = useState(1.85);

  const result = useMemo(() => {
    const clampedArea = Math.max(500, Math.min(200_000, Number(area) || 0));
    const mult = type === "warehouse" ? 1 : floors;
    const bua = clampedArea * COVERAGE[type] * mult;
    const rate = RATES[type][spec];
    const lo = round(bua * rate[0]);
    const hi = round(bua * rate[1]);

    const all = RATES[type];
    const min = all.standard[0];
    const max = all.luxury[1];
    const barLeft = ((rate[0] - min) / (max - min)) * 100;
    const barRight = ((max - rate[1]) / (max - min)) * 100;

    return {
      lo: fmt.format(lo),
      hi: fmt.format(hi),
      bua: fmt.format(Math.round(bua)),
      rateLabel: `${rate[0]}\u2013${rate[1]}`,
      barLeft: `${barLeft.toFixed(1)}%`,
      barRight: `${barRight.toFixed(1)}%`,
    };
  }, [type, spec, area, floors]);

  return (
    <section className="sec" id="estimator">
      <div className="wrap">
        <div className="sec__head">
          <Reveal>
            <div>
              <p className="tag">Budget estimator</p>
              <h2 className="t-h2">A number in ten seconds.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">
              Rough bracket only, using the published rates above. It is not a quote and it
              is not binding — but it will tell you whether we&rsquo;re worth a phone call.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="est">
            <div className="est__form">
              <div className="est__row">
                <div className="field">
                  <label htmlFor="e-type">Project type</label>
                  <select
                    id="e-type"
                    value={type}
                    onChange={(e) => setType(e.target.value as ProjectType)}
                  >
                    <option value="villa">Villa</option>
                    <option value="warehouse">Warehouse / industrial</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="e-spec">Specification</label>
                  <select id="e-spec" value={spec} onChange={(e) => setSpec(e.target.value as Spec)}>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="e-area">Plot / footprint area (sq ft)</label>
                  <input
                    id="e-area"
                    type="number"
                    min={500}
                    max={200_000}
                    step={100}
                    inputMode="numeric"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                  />
                </div>
                {type === "villa" && (
                  <div className="field" id="floorsField">
                    <label htmlFor="e-floors">Floors</label>
                    <select
                      id="e-floors"
                      value={floors}
                      onChange={(e) => setFloors(Number(e.target.value))}
                    >
                      <option value={1}>Ground only</option>
                      <option value={1.85}>Ground + 1</option>
                      <option value={2.65}>Ground + 2</option>
                    </select>
                  </div>
                )}
              </div>
              <p className="est__note">
                Built-up area is estimated at 55% plot coverage for villas and 80% for
                warehouses, which is typical for these three emirates. Your actual coverage
                depends on your plot&rsquo;s zoning regulation.
              </p>
            </div>

            <div className="est__out">
              <p
                className="tag tag--plain"
                style={{ color: "color-mix(in srgb, var(--on-pine) 58%, transparent)" }}
              >
                Indicative build cost
              </p>
              <p className="est__val">
                <span className="cur">AED</span>
                <span>{result.lo}</span>
                <span className="dash">–</span>
                <span>{result.hi}</span>
              </p>
              <div className="est__bar" aria-hidden="true">
                <i style={{ left: result.barLeft, right: result.barRight }} />
              </div>
              <p className="est__note">
                Built-up area <span className="num">{result.bua}</span> sq ft ·{" "}
                <span className="num">{result.rateLabel}</span> AED/sq ft
              </p>
              <a className="btn btn--primary" href="#quote" style={{ marginTop: "1.1rem" }}>
                Turn this into a fixed quote
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
