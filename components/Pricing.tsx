import { excludedList, includedList, pricingTable } from "@/lib/content";

export default function Pricing() {
  return (
    <section className="sec sec--paper" id="pricing">
      <div className="wrap">
        <div className="sec__head">
          <h2 className="t-h2">A villa build cost guide, published.</h2>
          <p className="lede">
            Most contractors won&rsquo;t print a number before a meeting.
            Here&rsquo;s the bracket for a direct villa build — MEP,
            warehouse and fit-out packages are quoted per project after a
            site visit.
          </p>
        </div>

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

        <div className="two">
          <div className="panel panel--in">
            <h4>Inside a fixed quote</h4>
            <ul>
              {includedList.map((li) => <li key={li}>{li}</li>)}
            </ul>
          </div>
          <div className="panel panel--out">
            <h4>Priced separately, stated upfront</h4>
            <ul>
              {excludedList.map((li) => <li key={li}>{li}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
