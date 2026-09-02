import { clients, projectRecord } from "@/lib/content";

const recordGroups = [projectRecord.villas, projectRecord.industrial, projectRecord.landmark];

export default function Clients() {
  return (
    <section className="sec sec--paper" id="projects">
      <div className="wrap">
        <div className="sec__head">
          <h2 className="t-h2">The names on our invoices.</h2>
          <p className="lede">
            Ninety-five projects between 2008 and 2025. These are the
            organisations that signed them off.
          </p>
        </div>

        <div className="clients-wall" style={{ marginBottom: "4rem" }}>
          {clients.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>

        <div className="rec">
          {recordGroups.map((group) => (
            <div className="rec__col" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="rec__list">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <b>{item.name}</b>
                    <span>{item.place}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
