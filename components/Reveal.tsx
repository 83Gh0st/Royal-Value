"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Dir = "up" | "left" | "right" | "none";

const MOTION_TAGS = {
  div: motion.div,
  ul: motion.ul,
  li: motion.li,
} as const;
type MotionTag = keyof typeof MOTION_TAGS;

function offset(dir: Dir, amount: number) {
  switch (dir) {
    case "up":
      return { y: amount, x: 0 };
    case "left":
      return { x: -amount, y: 0 };
    case "right":
      return { x: amount, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
}

/** Fades a single element into place as it enters the viewport. */
export default function Reveal({
  children,
  className,
  delay = 0,
  dir = "up",
  amount = 22,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  dir?: Dir;
  amount?: number;
  once?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const o = offset(dir, shouldReduceMotion ? 0 : amount);

  const variants: Variants = {
    hidden: { opacity: 0, ...o },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.75, delay: shouldReduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2, margin: "0px 0px -10% 0px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/** Wraps a grid/list, staggering each direct child's reveal. */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: MotionTag;
}) {
  const shouldReduceMotion = useReducedMotion();
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : stagger } },
  };
  const Tag = MOTION_TAGS[as];
  return (
    <Tag className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }} variants={container}>
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  dir = "up",
  amount = 20,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  dir?: Dir;
  amount?: number;
  as?: MotionTag;
}) {
  const shouldReduceMotion = useReducedMotion();
  const o = offset(dir, shouldReduceMotion ? 0 : amount);
  const item: Variants = {
    hidden: { opacity: 0, ...o },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] } },
  };
  const Tag = MOTION_TAGS[as];
  return (
    <Tag className={className} variants={item}>
      {children}
    </Tag>
  );
}
