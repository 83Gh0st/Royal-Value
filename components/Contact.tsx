"use client";

import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
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
    <section className="sec sec--gun trust-bg contact-bg" id="quote">
      <div className="trust-bg__media">
        <Image
          src={galleryImages.contactBg.src}
          alt={galleryImages.contactBg.alt}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="trust-bg__scrim" />
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
            <div className="contact-card">
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

              <div className="contact-trust">
                <div>
                  <b className="num">{site.founded}</b>
                  <span>Trading since</span>
                </div>
                <div>
                  <b className="num">48</b>
                  <span>Technical staff</span>
                </div>
                <div>
                  <b className="num">4</b>
                  <span>Emirates covered</span>
                </div>
                <div>
                  <b className="num">95+</b>
                  <span>Projects delivered</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal dir="right" delay={0.1}>
            <div className="contact-card">
              <div className="contact__side">
                <dl className="info">
                  <div className="info-row">
                    <span className="info-row__icon"><Phone size={16} strokeWidth={1.75} /></span>
                    <div>
                      <dt>Call or WhatsApp</dt>
                      <dd><a href={site.phoneHref}>{contactInfo.callWhatsapp}</a></dd>
                    </div>
                  </div>
                  <div className="info-row">
                    <span className="info-row__icon"><Mail size={16} strokeWidth={1.75} /></span>
                    <div>
                      <dt>Sales enquiries</dt>
                      <dd><a href={site.salesEmailHref}>{contactInfo.email}</a></dd>
                    </div>
                  </div>
                  <div className="info-row">
                    <span className="info-row__icon"><MapPin size={16} strokeWidth={1.75} /></span>
                    <div>
                      <dt>{hq.label}</dt>
                      <dd>
                        {contactInfo.sharjah.company}<br />
                        {contactInfo.sharjah.line1}, {contactInfo.sharjah.line2}
                      </dd>
                      <dd className="info-row__extra">
                        Also at Al Qusais, Dubai and Musaffah, Abu Dhabi
                      </dd>
                    </div>
                  </div>
                  <div className="info-row">
                    <span className="info-row__icon"><Clock size={16} strokeWidth={1.75} /></span>
                    <div>
                      <dt>Hours</dt>
                      <dd>{contactInfo.hours}</dd>
                    </div>
                  </div>
                </dl>

                <div className="info-map">
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
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
