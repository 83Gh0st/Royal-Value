"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string; label?: string };

/**
 * A real, multi-image carousel built on native scroll-snap rather than
 * manual absolute-positioning: robust (no layout edge cases), swipeable
 * on touch, and hardware-accelerated smooth scrolling for free. Auto
 * advances one item at a time, pauses on hover/focus, and exposes
 * arrows + dots for manual control.
 */
export default function ImageCarousel({
  images,
  interval = 4200,
}: {
  images: Slide[];
  interval?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = ((i % images.length) + images.length) % images.length;
    const child = track.children[clamped] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({
        left: child.offsetLeft - track.offsetLeft,
        behavior: reducedMotion.current ? "auto" : "smooth",
      });
    }
    setActive(clamped);
  }, [images.length]);

  useEffect(() => {
    if (paused || reducedMotion.current || images.length < 2) return;
    const id = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % images.length;
        scrollToIndex(next);
        return next;
      });
    }, interval);
    return () => clearInterval(id);
  }, [paused, images.length, interval, scrollToIndex]);

  // Keep the active dot honest if the visitor drags/swipes the track manually.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let timeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const children = Array.from(track.children) as HTMLElement[];
        let closest = 0;
        let minDist = Infinity;
        children.forEach((child, i) => {
          const dist = Math.abs(child.offsetLeft - track.offsetLeft - track.scrollLeft);
          if (dist < minDist) {
            minDist = dist;
            closest = i;
          }
        });
        setActive(closest);
      }, 120);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel__viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="carousel__track" ref={trackRef}>
          {images.map((img, i) => (
            <div className="carousel__item" key={img.src}>
              <div className="carousel__frame">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 700px) 78vw, 26rem"
                  style={{ objectFit: "cover" }}
                  priority={i < 2}
                />
              </div>
              {img.label && <p className="carousel__caption">{img.label}</p>}
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--prev"
              onClick={() => scrollToIndex(active - 1)}
              aria-label="Previous image"
            >
              <ChevronLeft size={19} strokeWidth={2} />
            </button>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--next"
              onClick={() => scrollToIndex(active + 1)}
              aria-label="Next image"
            >
              <ChevronRight size={19} strokeWidth={2} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="carousel__dots" role="tablist" aria-label="Slides">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to image ${i + 1} of ${images.length}`}
              className={i === active ? "carousel__dot is-active" : "carousel__dot"}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
