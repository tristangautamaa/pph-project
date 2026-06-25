"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    src: "/images/landscape/ST307560.jpg",
    caption: "The Venue",
    number: "01",
  },
  {
    src: "/images/landscape/ST307664.jpg",
    caption: "Two Courts",
    number: "02",
  },
  {
    src: "/images/landscape/ST307716.jpg",
    caption: "The Details",
    number: "03",
  },
  {
    src: "/images/landscape/ST307783.jpg",
    caption: "The Space",
    number: "04",
  },
  {
    src: "/images/landscape/ST308412.jpg",
    caption: "The Game",
    number: "05",
  },
  {
    src: "/images/landscape/ST308241.jpg",
    caption: "The Players",
    number: "06",
  },
  {
    src: "/images/landscape/ST308179.jpg",
    caption: "The Court",
    number: "07",
  },
  {
    src: "/images/portrait/ST307512.JPG",
    caption: "The Atmosphere",
    number: "08",
  },
];

export default function HorizontalGallery() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile || prefersReducedMotion || !wrapRef.current || !trackRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const wrap = wrapRef.current!;

      const getDistance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={wrapRef} className="relative overflow-hidden bg-black">
      {/* Desktop: horizontal scroll */}
      <div
        ref={trackRef}
        className="hidden md:flex h-[100dvh]"
        style={{ width: `${panels.length * 100}vw` }}
      >
        {panels.map((panel) => (
          <div
            key={panel.number}
            className="relative w-screen h-full flex-shrink-0 overflow-hidden"
          >
            <Image
              src={panel.src}
              alt={panel.caption}
              fill
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            {/* Bottom gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)",
              }}
            />
            {/* Caption */}
            <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-cream/80">
                {panel.caption}
              </span>
              <span className="font-sans text-[11px] tracking-widest text-cream/40">
                {panel.number} / {String(panels.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden">
        {panels.map((panel) => (
          <div
            key={panel.number}
            className="relative h-[70vw] min-h-[280px] overflow-hidden"
          >
            <Image
              src={panel.src}
              alt={panel.caption}
              fill
              className="object-cover"
              sizes="100vw"
              quality={80}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)",
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream/80">
                {panel.caption}
              </span>
              <span className="font-sans text-[10px] tracking-widest text-cream/40">
                {panel.number} / {String(panels.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
