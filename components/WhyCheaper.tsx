import { mechanisms } from "@/lib/content";

export default function WhyCheaper() {
  return (
    <section className="sec sec--paper" id="why">
      <div className="wrap">
        <div className="sec__head">
          <h2 className="t-h2">Why the number is lower than you expect.</h2>
          <p className="lede">
            Anyone can quote low and claim it back later in variations. Our
            price is lower for three structural reasons, each one you can
            verify before you sign anything.
          </p>
        </div>

        <div className="mech">
          {mechanisms.map((m) => (
            <div className="mech__row" key={m.title}>
              <div className="mech__fig">
                {m.figure}
                <small>{m.figureLabel}</small>
              </div>
              <div className="mech__body">
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
