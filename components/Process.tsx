import { projectExecution } from "@/lib/content";

export default function Process() {
  return (
    <section className="sec sec--gun" id="process">
      <div className="wrap">
        <div className="sec__head">
          <h2 className="t-h2">Planning through to handover.</h2>
          <p className="lede">
            Civil, MEP and HVAC are coordinated through the same seven
            stages on every project, whether we&rsquo;re the main contractor
            or delivering one trade to somebody else&rsquo;s programme.
          </p>
        </div>

        <div className="process">
          {projectExecution.map((step, i) => (
            <div className="proc-row" key={step.title}>
              <span className="proc-row__no num">{String(i + 1).padStart(2, "0")}</span>
              <div className="proc-row__body">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
