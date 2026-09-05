"use client";

import {
  Bug,
  Droplets,
  Fan,
  Flower2,
  PaintRoller,
  Plug,
  Snowflake,
  Umbrella,
  Wrench,
} from "lucide-react";
import { additionalServices } from "@/lib/content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const ICONS = [Bug, Plug, Snowflake, PaintRoller, Fan, Droplets, Wrench, Umbrella, Flower2];

export default function AdditionalServices() {
  return (
    <section className="sec sec--steel" id="facilities">
      <div className="wrap">
        <div className="sec__head">
          <Reveal>
            <h2 className="t-h2">Facilities &amp; maintenance</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede">
              The trades that keep a finished building running, available on
              their own or bundled into an annual maintenance contract.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="extra" as="ul" stagger={0.05}>
          {additionalServices.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <RevealItem as="li" key={s.title} amount={14}>
                <span className="extra__icon"><Icon size={19} strokeWidth={1.75} /></span>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
