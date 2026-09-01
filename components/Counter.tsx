"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CounterProps = {
  /** Numeric value to count up to. */
  value: number;
  /** Text shown before the number, e.g. "" */
  prefix?: string;
  /** Text shown after the number, e.g. "+" */
  suffix?: string;
  duration?: number;
  className?: string;
};

/** Counts up from 0 to `value` once it scrolls into view. */
export default function Counter({ value, prefix = "", suffix = "", duration = 1.4, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || shouldReduceMotion) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, shouldReduceMotion]);

  // Reduced-motion visitors see the final value immediately, with no
  // dependency on scroll position or an animation frame loop.
  return (
    <span ref={ref} className={className}>
      {prefix}
      {shouldReduceMotion ? value : display}
      {suffix}
    </span>
  );
}
