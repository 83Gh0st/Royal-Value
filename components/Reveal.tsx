"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

/**
 * Fades and lifts content into place as it enters the viewport.
 * Mirrors the original site's IntersectionObserver-driven ".rv" class,
 * but with a spring easing curve and automatic reduced-motion support.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15, margin: "0px 0px -8% 0px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

type MotionTag = "div" | "ul" | "li";
// Resolve each motion.* component once at module scope (not inside the
// component render body) so the element type stays referentially stable
// across renders — otherwise React would remount the subtree every time.
const MOTION_TAGS = {
  div: motion.div,
  ul: motion.ul,
  li: motion.li,
} as const;

/** Wraps a grid/list of children, staggering each direct child's reveal. */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
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
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : stagger },
    },
  };
  const Tag = MOTION_TAGS[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -8% 0px" }}
      variants={container}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  y = 16,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: MotionTag;
}) {
  const shouldReduceMotion = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const Tag = MOTION_TAGS[as];
  return (
    <Tag className={className} variants={item}>
      {children}
    </Tag>
  );
}
