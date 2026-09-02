import { additionalServices } from "@/lib/content";

export default function AdditionalServices() {
  return (
    <section className="sec sec--steel" id="facilities">
      <div className="wrap">
        <div className="sec__head">
          <h2 className="t-h2">Facilities &amp; maintenance</h2>
          <p className="lede">
            The trades that keep a finished building running, available on
            their own or bundled into an annual maintenance contract.
          </p>
        </div>

        <ul className="extra">
          {additionalServices.map((s) => (
            <li key={s.title}>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
