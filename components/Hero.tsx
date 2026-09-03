"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { heroStats } from "@/lib/content";
import Counter from "./Counter";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imgY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 160]);
  const imgScale = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : [1.08, 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12, delayChildren: shouldReduceMotion ? 0 : 0.15 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero__media" style={{ y: imgY, scale: imgScale }}>
        <Image
          src="https://images.unsplash.com/photo-1599995903128-531fc7fb694b"
          alt="Construction site at low sun, cranes over concrete foundations"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="hero__scrim" />

      <motion.div className="hero__in" style={{ y: contentY, opacity: contentOpacity }} initial="hidden" animate="show" variants={container}>
        <motion.p className="hero__kicker" variants={item}>
          Civil Construction · MEP · HVAC — Dubai, Sharjah, Ajman &amp; Abu Dhabi
        </motion.p>
        <motion.h1 className="t-display" variants={item}>
          Approved drawings.<br />Precisely executed.
        </motion.h1>
        <motion.p className="hero__lede" variants={item}>
          A multidisciplinary contracting company delivering end-to-end civil,
          MEP and HVAC execution for residential, commercial, industrial and
          institutional projects — since 2007. We focus on execution, not
          design engineering.
        </motion.p>
        <motion.div className="hero__cta" variants={item}>
          <motion.a
            className="btn btn--copper btn--lg"
            href="#quote"
            whileHover={shouldReduceMotion ? undefined : { y: -3, boxShadow: "0 14px 30px -10px rgba(235,28,37,0.55)" }}
            whileTap={{ scale: 0.97 }}
          >
            Talk to our team
          </motion.a>
          <motion.a
            className="btn btn--ghost-dark btn--lg"
            href="#services"
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            See what we build
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="stats">
        <div className="stats__in">
          {heroStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <b className="num">
                <Counter value={s.value} suffix={s.suffix} />
              </b>
              <span>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
