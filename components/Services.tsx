"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { serviceGroups } from "@/lib/content";
import Reveal from "./Reveal";

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(serviceGroups[0]?.id ?? null);

  return (
    <section className="sec sec--steel" id="services">
      <div className="wrap">
        <div className="sec__head sec__head--wide">
          <Reveal>
            <h2 className="t-h2">Three disciplines. One team.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede">
              Civil, MEP and HVAC each run as their own trade internally, so
              we coordinate them ourselves on site instead of leaving it to
              chance between subcontractors.
            </p>
          </Reveal>
        </div>

        <div className="svc-list">
          {serviceGroups.map((g) => {
            const open = openId === g.id;
            return (
              <div className={open ? "svc-row is-open" : "svc-row"} key={g.id}>
                <button
                  type="button"
                  className="svc-row__head"
                  aria-expanded={open}
                  aria-controls={`svc-panel-${g.id}`}
                  onClick={() => setOpenId(open ? null : g.id)}
                >
                  <span className="svc-row__title">
                    <h3>{g.title}</h3>
                    <p>{g.blurb}</p>
                  </span>
                  <span className="svc-row__plus" aria-hidden="true">+</span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`svc-panel-${g.id}`}
                      className="svc-row__panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="svc-row__panel-in">
                        {g.subgroups ? (
                          <div className="svc-row__cols">
                            {g.subgroups.map((sub) => (
                              <div key={sub.label}>
                                <h4>{sub.label}</h4>
                                <ul>
                                  {sub.items.map((it) => (
                                    <li key={it}>{it}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="svc-plain">
                            {g.items.map((it) => (
                              <li key={it}>{it}</li>
                            ))}
                          </ul>
                        )}
                        <motion.div
                          className="svc-row__img"
                          initial={{ opacity: 0, scale: 1.08 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Image
                            src={g.image.src}
                            alt={g.image.alt}
                            fill
                            sizes="(max-width: 860px) 100vw, 20rem"
                            style={{ objectFit: "cover" }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
