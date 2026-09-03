"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** A thin fixed progress bar reflecting how far down the page the visitor has scrolled. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 32, mass: 0.2 });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        transformOrigin: "0% 50%",
        background: "var(--copper)",
        zIndex: 70,
        scaleX,
      }}
    />
  );
}
