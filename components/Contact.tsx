"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { contactInfo, galleryImages, hq, site } from "@/lib/content";
import Reveal from "./Reveal";

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
          <Reveal>
            <h2 className="t-h2">Let&rsquo;s build together.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede">
              Have a construction, MEP or HVAC project? Talk to our team
              about your requirements. We reply the same working day.
            </p>
          </Reveal>
        </div>

        <div className="contact">
          <Reveal dir="left">
            <div>
              {status === "success" && (
                <p className="form__ok" role="status">
                  Thank you. Your enquiry has been sent. We&rsquo;ll call you back today.
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
                      <option>Renovation / maintenance</option>
                    </select>
                  </div>
                </div>
                <label htmlFor="q-msg">Location and anything else we should know</label>
                <textarea
                  id="q-msg"
                  name="message"
                  placeholder="Approved drawings, scope, approximate size, and when you'd like to start."
                />
                <button type="submit" className="btn btn--copper btn--lg" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending…" : "Send enquiry"}
                </button>
                <p className="form__note">
                  We use your details only to respond to this enquiry. No
                  marketing lists, no sharing with third parties.
                </p>
              </form>
            </div>
          </Reveal>

          <Reveal dir="right" delay={0.1}>
            <div className="contact__side">
              <div className="contact__photo">
                <Image
                  src={galleryImages.contactSide.src}
                  alt={galleryImages.contactSide.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 25rem"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <dl className="info">
                <dt>Call or WhatsApp</dt>
                <dd><a href={site.phoneHref}>{contactInfo.callWhatsapp}</a></dd>
                <dt>Sales enquiries</dt>
                <dd><a href={site.salesEmailHref}>{contactInfo.email}</a></dd>
                <dt>{hq.label}</dt>
                <dd>
                  {contactInfo.sharjah.company}<br />
                  {contactInfo.sharjah.line1}<br />
                  {contactInfo.sharjah.line2}
                </dd>
                <dt>Dubai, registered office</dt>
                <dd>
                  {contactInfo.dubai.line1}<br />
                  {contactInfo.dubai.line2}
                </dd>
                <dt>Abu Dhabi branch</dt>
                <dd>{contactInfo.abudhabi.line1}</dd>
                <dt>Hours</dt>
                <dd>{contactInfo.hours}</dd>
              </dl>

              <div className="map-embed">
                <iframe
                  src={hq.embedUrl}
                  title={`Map to ${contactInfo.sharjah.company}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a className="map-embed__link" href={hq.shareUrl} target="_blank" rel="noopener noreferrer">
                  Get directions ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
