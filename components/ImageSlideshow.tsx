"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string; label?: string };

/**
 * A large, single-image slideshow: smooth crossfades, a slow Ken-Burns
 * zoom while each photo holds, and dot/arrow controls. Auto-advance
 * pauses on hover/focus and is skipped entirely for prefers-reduced-motion.
 */
export default function ImageSlideshow({
  images,
  interval = 5500,
}: {
  images: Slide[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current || images.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [paused, images.length, interval]);

  const goTo = useCallback(
    (i: number) => setIndex(((i % images.length) + images.length) % images.length),
    [images.length]
  );

  return (
    <div
      className="slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {images.map((img, i) => (
        <div
          className={i === index ? "slideshow__slide is-active" : "slideshow__slide"}
          key={img.src}
          aria-hidden={i !== index}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 860px) 100vw, 76rem"
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
          {img.label && <p className="slideshow__caption">{img.label}</p>}
        </div>
      ))}
      <div className="slideshow__scrim" aria-hidden="true" />

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="slideshow__arrow slideshow__arrow--prev"
            onClick={() => goTo(index - 1)}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>
          <button
            type="button"
            className="slideshow__arrow slideshow__arrow--next"
            onClick={() => goTo(index + 1)}
            aria-label="Next image"
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>

          <div className="slideshow__dots" role="tablist" aria-label="Slides">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show image ${i + 1} of ${images.length}`}
                className={i === index ? "slideshow__dot is-active" : "slideshow__dot"}
                onClick={() => goTo(i)}
              >
                {i === index && (
                  <span
                    className="slideshow__dot-fill"
                    key={`fill-${index}`}
                    style={{ animationDuration: `${interval}ms`, animationPlayState: paused ? "paused" : "running" }}
                  />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
