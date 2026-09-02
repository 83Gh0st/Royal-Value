import { coverage } from "@/lib/content";

export default function Coverage() {
  return (
    <section className="sec sec--steel" id="coverage">
      <div className="wrap">
        <div className="sec__head">
          <h2 className="t-h2">Licensed where we work.</h2>
          <p className="lede">
            Three emirates on our own trade licences, and a fourth through
            the group&rsquo;s Abu Dhabi branch. A contractor quoting all
            seven emirates is quoting at arm&rsquo;s length — we hold real
            licences and a real office in each of these four.
          </p>
        </div>

        <div className="cov">
          {coverage.map((c) => (
            <div className="cov__row" key={c.emirate}>
              <div>
                <h3>{c.emirate}</h3>
                <span>{c.tag}</span>
              </div>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
