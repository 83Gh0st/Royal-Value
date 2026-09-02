import { fleet, suppliers, technicalStaff } from "@/lib/content";

export default function Capability() {
  const fleetTotal = fleet.reduce((sum, f) => sum + f.count, 0);

  return (
    <section className="sec sec--gun" id="capability">
      <div className="wrap">
        <div className="sec__head">
          <h2 className="t-h2">What&rsquo;s actually behind the licence.</h2>
          <p className="lede">
            48 technical staff, an 11-vehicle fleet and relationships with
            the region&rsquo;s major equipment suppliers — not a brass
            plate and a phone number.
          </p>
        </div>

        <div className="cap-grid">
          <div className="cap-col">
            <h4>Technical staff, 48 total</h4>
            <ul>
              {technicalStaff.map((t) => (
                <li key={t}><span>{t}</span></li>
              ))}
            </ul>
          </div>

          <div className="cap-col">
            <h4>Fleet, {fleetTotal} vehicles</h4>
            <ul>
              {fleet.map((f) => (
                <li key={f.item}>
                  <span>{f.item}</span>
                  <b className="num">{f.count}</b>
                </li>
              ))}
            </ul>
          </div>

          <div className="cap-col">
            <h4>Major suppliers</h4>
            <ul className="suppliers">
              {suppliers.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
