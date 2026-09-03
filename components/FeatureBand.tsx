"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

type FeatureBandProps = {
  eyebrow: string;
  heading: string;
  body: string;
  image: { src: string; alt: string };
  cta?: { label: string; href: string };
};

/** A full-bleed photography break that pairs a real trade photo with a short claim. */
export default function FeatureBand({ eyebrow, heading, body, image, cta }: FeatureBandProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-40, 40]);
  const scale = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : [1.12, 1.24]);

  return (
    <section className="feature" ref={ref}>
      <motion.div className="feature__media" style={{ y, scale }}>
        <Image src={image.src} alt={image.alt} fill sizes="100vw" style={{ objectFit: "cover" }} />
      </motion.div>
      <div className="feature__scrim" />
      <div className="feature__in">
        <Reveal>
          <p className="hero__kicker" style={{ marginBottom: ".5rem" }}>{eyebrow}</p>
          <h3>{heading}</h3>
        </Reveal>
        <Reveal delay={0.1} className="feature__aside">
          <p>{body}</p>
          {cta && (
            <a className="btn btn--ghost-dark" href={cta.href} style={{ alignSelf: "flex-start", marginTop: "1.1rem" }}>
              {cta.label}
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
