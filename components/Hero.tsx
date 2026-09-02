"use client";

import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { heroStats, site } from "@/lib/content";
import Counter from "./Counter";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12, delayChildren: shouldReduceMotion ? 0 : 0.15 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="hero">
      <div className="hero__media">
        <Image
          src="https://images.unsplash.com/photo-1599995903128-531fc7fb694b"
          alt="Construction site at low sun, cranes over concrete foundations"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero__scrim" />

      <motion.div className="hero__in" initial="hidden" animate="show" variants={container}>
        <motion.p className="hero__kicker" variants={item}>
          Civil construction, MEP and HVAC — Dubai, Sharjah, Ajman &amp; Abu Dhabi
        </motion.p>
        <motion.h1 className="t-display" variants={item}>
          Built by one crew, since 2007.
        </motion.h1>
        <motion.p className="hero__lede" variants={item}>
          {site.legalName} runs civil construction, MEP and HVAC under a single
          Dubai licence — the same electromechanical team behind DEWA&rsquo;s
          power plant, Dubai Police HQ and the Presidential Court&rsquo;s
          palaces now works on projects of every size.
        </motion.p>
        <motion.div className="hero__cta" variants={item}>
          <a className="btn btn--copper btn--lg" href="#quote">Book a site visit</a>
          <a className="btn btn--ghost-dark btn--lg" href="#services">See what we build</a>
        </motion.div>
      </motion.div>

      <div className="stats">
        <div className="stats__in">
          {heroStats.map((s) => (
            <div key={s.label}>
              <b className="num">
                <Counter value={s.value} suffix={s.suffix} />
              </b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
