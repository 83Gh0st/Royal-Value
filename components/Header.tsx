"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Close the mobile menu whenever the viewport grows back to desktop width.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 921px)");
    const onChange = () => setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lightweight scroll-spy: highlight whichever section heading is nearest the top.
  useEffect(() => {
    const ids = nav.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="hdr" id="top">
      <a href="#main" className="skip">
        Skip to content
      </a>
      <div className="hdr__in" style={{ position: "relative" }}>
        <Link href="#top" className="logo">
          <span className="logo__mark">RV</span>
          <span className="logo__txt">
            <b>{site.name}</b>
            <span>{site.parent}</span>
          </span>
        </Link>

        <nav className="nav nav-desktop" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={active === item.href ? "is-active" : ""}>
              {item.label}
            </a>
          ))}
          <a className="hdr__tel" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <ThemeToggle />
          <a href="#quote" className="btn btn--primary">
            Get a fixed quote
          </a>
        </nav>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: ".4rem" }}>
            {open ? <X size={14} /> : <Menu size={14} />}
            {open ? "Close" : "Menu"}
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-nav"
              className="nav-mobile"
              aria-label="Primary"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => {
                if ((e.target as HTMLElement).tagName === "A") setOpen(false);
              }}
            >
              {nav.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a className="hdr__tel" href={site.phoneHref} style={{ paddingTop: ".85rem" }}>
                {site.phoneDisplay}
              </a>
              <a href="#quote" className="btn btn--primary">
                Get a fixed quote
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
