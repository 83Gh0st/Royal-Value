"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { serviceGroups } from "@/lib/content";

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(serviceGroups[0]?.id ?? null);

  return (
    <section className="sec sec--steel" id="services">
      <div className="wrap">
        <div className="sec__head sec__head--wide">
          <h2 className="t-h2">Three disciplines. One contract.</h2>
          <p className="lede">
            Civil, MEP and HVAC each run as their own trade internally, but
            they sit under a single Dubai licence — which is what lets us
            coordinate them without a second contractor&rsquo;s margin in
            between.
          </p>
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
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
                        <div className="svc-row__img">
                          <Image
                            src={g.image.src}
                            alt={g.image.alt}
                            fill
                            sizes="(max-width: 860px) 100vw, 20rem"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
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
