"use client";

import { BadgeCheck, Clock, Hammer, Layers, ShieldCheck, Users } from "lucide-react";
import { whyUs } from "@/lib/content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const ICONS = {
  hammer: Hammer,
  check: BadgeCheck,
  layers: Layers,
  shield: ShieldCheck,
  clock: Clock,
  users: Users,
} as const;

export default function WhyUs() {
  return (
    <section className="sec sec--paper" id="why">
      <div className="wrap">
        <div className="sec__head">
          <Reveal>
            <h2 className="t-h2">Why clients choose us.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede">
              We believe successful construction is built on disciplined
              execution, coordination, communication and quality control,
              not promises.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="why-grid" stagger={0.08}>
          {whyUs.map((w) => {
            const Icon = ICONS[w.icon as keyof typeof ICONS];
            return (
              <RevealItem className="why-card" key={w.title}>
                <span className="why-card__icon"><Icon size={22} strokeWidth={1.75} /></span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
