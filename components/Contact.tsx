"use client";

import { FormEvent, useState } from "react";
import { contactInfo, site } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const body = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      emirate: String(data.get("emirate") ?? ""),
      project: String(data.get("project") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong. Please call or WhatsApp us instead.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section className="sec sec--steel" id="quote">
      <div className="wrap">
        <div className="sec__head">
          <h2 className="t-h2">Book a free site visit.</h2>
          <p className="lede">
            Tell us the plot and what you have in mind. We reply the same
            working day and visit within 48 hours across all four emirates.
          </p>
        </div>

        <div className="contact">
          <div>
            {status === "success" && (
              <p className="form__ok" role="status">
                Thank you — your enquiry has been sent. We&rsquo;ll call you back today.
              </p>
            )}
            {status === "error" && (
              <p className="form__err" role="alert">
                {errorMsg} You can also call {site.phoneDisplay} directly.
              </p>
            )}

            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="f-row">
                <div>
                  <label htmlFor="q-name">Your name</label>
                  <input id="q-name" name="name" type="text" autoComplete="name" required />
                </div>
                <div>
                  <label htmlFor="q-phone">Mobile / WhatsApp</label>
                  <input
                    id="q-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+971 5X XXX XXXX"
                    required
                  />
                </div>
              </div>
              <div className="f-row">
                <div>
                  <label htmlFor="q-emirate">Emirate</label>
                  <select id="q-emirate" name="emirate" defaultValue="Dubai">
                    <option>Dubai</option>
                    <option>Sharjah</option>
                    <option>Ajman</option>
                    <option>Abu Dhabi</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="q-project">Project type</label>
                  <select id="q-project" name="project" defaultValue="Civil construction">
                    <option>Civil construction</option>
                    <option>MEP package</option>
                    <option>HVAC</option>
                    <option>New villa</option>
                    <option>Renovation / maintenance</option>
                  </select>
                </div>
              </div>
              <label htmlFor="q-msg">Location and anything else we should know</label>
              <textarea
                id="q-msg"
                name="message"
                placeholder="Plot number or area, approximate size, and when you'd like to start."
              />
              <button type="submit" className="btn btn--copper btn--lg" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Request my site visit"}
              </button>
              <p className="form__note">
                We use your details only to respond to this enquiry. No
                marketing lists, no sharing with third parties.
              </p>
            </form>
          </div>

          <div className="contact__side">
            <dl className="info">
              <dt>Call or WhatsApp</dt>
              <dd><a href={site.phoneHref}>{contactInfo.callWhatsapp}</a></dd>
              <dt>Sharjah office</dt>
              <dd><a href={site.phoneSharjahHref}>{contactInfo.sharjahOffice}</a></dd>
              <dt>Email</dt>
              <dd><a href={site.emailHref}>{contactInfo.email}</a></dd>
              <dt>Dubai — head office</dt>
              <dd>
                {contactInfo.dubai.company}<br />
                {contactInfo.dubai.line1}<br />
                {contactInfo.dubai.line2}
              </dd>
              <dt>Sharjah</dt>
              <dd>
                {contactInfo.sharjah.company}<br />
                {contactInfo.sharjah.line1}<br />
                {contactInfo.sharjah.line2}
              </dd>
              <dt>Abu Dhabi branch</dt>
              <dd>
                {contactInfo.abudhabi.company}<br />
                {contactInfo.abudhabi.line1}
              </dd>
              <dt>Hours</dt>
              <dd>{contactInfo.hours}</dd>
            </dl>

            <div className="panel">
              <h4 className="t-h3" style={{ fontFamily: "var(--f-body)", fontSize: "1.05rem" }}>
                Prefer to talk first?
              </h4>
              <p style={{ fontSize: ".9rem", color: "var(--muted)", margin: ".6rem 0 1.1rem" }}>
                Most clients start with a short call about their project
                before anything else. Ask for {site.contactPerson}.
              </p>
              <a className="btn btn--ghost" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
