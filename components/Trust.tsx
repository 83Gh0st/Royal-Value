"use client";

import { Award, Layers, Lock, ShieldCheck, Truck } from "lucide-react";
import { commitment, strengths, trust } from "@/lib/content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const ICONS = [Award, Lock, ShieldCheck, Layers, Truck];

export default function Trust() {
  return (
    <section className="sec sec--gun" id="trust">
      <div className="wrap">
        <div className="trust-top">
          <Reveal className="trust-top__head">
            <h2 className="t-h2">{commitment.headline}</h2>
          </Reveal>
          <Reveal delay={0.1} className="trust-top__body">
            <p className="lede">{commitment.body}</p>
            <ul className="strengths">
              {strengths.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="trust-div" />

        <div className="sec__head">
          <Reveal>
            <h3 className="t-h3" style={{ fontFamily: "var(--f-display)", fontSize: "clamp(1.7rem,3vw,2.3rem)" }}>
              {trust.eyebrow}
            </h3>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede" style={{ fontStyle: "italic", color: "var(--on-gun)", opacity: 0.92 }}>
              &ldquo;{trust.headline}&rdquo;
            </p>
            <p className="lede" style={{ marginTop: "0.9rem" }}>{trust.body}</p>
          </Reveal>
        </div>

        <RevealGroup className="trust-grid" stagger={0.08}>
          {trust.points.map((p, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <RevealItem className="trust-card" key={p.title}>
                <Icon size={20} strokeWidth={1.75} />
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
