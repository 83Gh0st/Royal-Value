"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqJsonLd, faqs } from "@/lib/content";
import Reveal from "./Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="sec sec--paper" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="wrap">
        <div className="sec__head">
          <Reveal>
            <h2 className="t-h2">The questions you&rsquo;re actually asking.</h2>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="faq">
            {faqs.map((item, i) => {
              const open = openIndex === i;
              return (
                <div className="faq-item" key={item.q}>
                  <h3>
                    <button
                      type="button"
                      className="faq-item__btn"
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpenIndex(open ? null : i)}
                    >
                      {item.q}
                      <span className="faq-item__icon" aria-hidden="true">
                        {open ? "\u2212" : "+"}
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        className="faq-item__panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
