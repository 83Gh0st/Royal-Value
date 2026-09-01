import { excludedList, includedList, pricingTable } from "@/lib/content";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section className="sec sec--sheet" id="pricing">
      <div className="wrap">
        <div className="sec__head">
          <Reveal>
            <div>
              <p className="tag">Rates, published</p>
              <h2 className="t-h2">Most contractors won&rsquo;t print a number. Here are ours.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">
              Indicative build rates before we&rsquo;ve seen your plot. Your fixed quote
              follows the site visit — but you should know the bracket before you spend an
              afternoon on a meeting.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="tbl-scroll">
            <table>
              <caption>{pricingTable.note}</caption>
              <thead>
                <tr>
                  <th scope="col">Specification</th>
                  <th scope="col">Villas</th>
                  <th scope="col">Warehouses</th>
                  <th scope="col">What that buys</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.rows.map((row) => (
                  <tr key={row.spec} className={row.pill ? "is-focus" : undefined}>
                    <th scope="row">
                      {row.spec}
                      {row.pill ? <span className="pill">{row.pill}</span> : null}
                    </th>
                    <td className="rate">{row.villa}</td>
                    <td className="rate">{row.warehouse}</td>
                    <td>{row.buys}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="two">
          <Reveal delay={0.05}>
            <div className="panel panel--in">
              <h4 className="t-h3">Inside our fixed quote</h4>
              <ul>
                {includedList.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="panel panel--out">
              <h4 className="t-h3">Priced separately, and stated upfront</h4>
              <ul>
                {excludedList.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
