import { footerLinks, site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__grid">
          <div>
            <a href="#top" className="logo" style={{ marginBottom: ".9rem", display: "inline-flex" }}>
              <span className="logo__mark" style={{ background: "var(--on-gun)", color: "var(--gun)" }}>
                RV
              </span>
              <span className="logo__txt">
                <b style={{ color: "var(--on-gun)" }}>{site.name}</b>
                <span style={{ color: "color-mix(in srgb, var(--on-gun) 55%, transparent)" }}>
                  {site.parent}
                </span>
              </span>
            </a>
            <p className="ftr__p">
              Civil construction, MEP and HVAC contractor across Dubai,
              Sharjah, Ajman and Abu Dhabi. {site.legalName}, licensed in
              Dubai since March 2007.
            </p>
            <p className="ftr__p" style={{ marginTop: ".4rem" }}>
              <a href={site.phoneHref}>{site.phoneDisplay}</a> ·{" "}
              <a href={site.emailHref}>{site.email}</a>
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {footerLinks.services.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((c) => (
                <li key={c.label}><a href={c.href}>{c.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ftr__base">
          <span>© {year} Royal Value Group. All rights reserved.</span>
          <span>Dubai 592798 · Sharjah 777338 · Abu Dhabi CN-5446200</span>
        </div>
      </div>
    </footer>
  );
}
