"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, scaleIn } from "@/components/animations/variants";
// Static imports → Next.js auto-generates the blurDataURL for placeholder="blur".
import court1 from "../../../public/images/landscape/ST307839.jpg";
import court2 from "../../../public/images/landscape/ST307841.jpg";
import court3 from "../../../public/images/landscape/ST307847.jpg";
import court4 from "../../../public/images/landscape/ST307862.jpg";

const courtImages = [
  { src: court1, alt: "Court view 1" },
  { src: court2, alt: "Court view 2" },
  { src: court3, alt: "Court view 3" },
  { src: court4, alt: "Court view 4" },
];

const features = [
  "10m x 20m per court",
  "Climate-controlled indoor facility",
  "Glass-walled courts",
  "Professional LED lighting",
  "Artificial turf surface",
  "Casual play, coaching and tournaments",
];

const stats = [
  { label: "Quantity", value: "2 Courts" },
  { label: "Dimensions", value: "10m × 20m" },
  { label: "Facility", value: "Indoor" },
  { label: "Environment", value: "Climate Controlled" },
];

function CourtLineBackdrop() {
  return (
    <svg
      viewBox="0 0 400 760"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      className="hidden lg:block absolute inset-0 w-full h-full text-cream pointer-events-none"
      style={{ opacity: 0.06 }}
    >
      {/* Outer court boundary */}
      <rect x="20" y="20" width="360" height="720" stroke="currentColor" strokeWidth="1.5" />
      {/* Center net line (dashed) */}
      <line x1="20" y1="380" x2="380" y2="380" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
      {/* Service lines */}
      <line x1="20" y1="160" x2="380" y2="160" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="600" x2="380" y2="600" stroke="currentColor" strokeWidth="1" />
      {/* Center service T */}
      <line x1="200" y1="160" x2="200" y2="600" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export default function Courts() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-black py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: sticky text */}
          <div className="relative lg:sticky lg:top-32 lg:self-start">
            <CourtLineBackdrop />
            <motion.div
              className="relative z-10"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              <motion.h2
                variants={fadeUp}
                className="font-display font-[300] text-cream uppercase tracking-tight leading-none mb-8"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                The Courts
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="font-display font-[400] text-cream/80 leading-relaxed mb-10"
                style={{ fontSize: "clamp(1.25rem, 1.6vw, 1.6rem)" }}
              >
                Two full-size indoor padel courts, climate-controlled and
                competition-ready. Glass walls, artificial turf, and
                professional lighting - everything the game demands.
              </motion.p>

              <motion.ul variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="space-y-3">
                {features.map((feature, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex items-center gap-3 font-display font-[400] text-cream/70"
                    style={{ fontSize: "clamp(1.05rem, 1.3vw, 1.25rem)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-turf flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Stat block */}
              <motion.div
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                className="mt-10 pt-10 border-t border-sand/20 grid grid-cols-2 gap-px bg-cream/10"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-black px-6 py-7"
                  >
                    <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-sand/60 mb-2">
                      {stat.label}
                    </p>
                    <p
                      className="font-display font-[400] text-cream leading-none"
                      style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}
                    >
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right: scrolling images */}
          <div className="flex flex-col gap-6">
            {courtImages.map((img, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-none"
                style={{ aspectRatio: "16/10" }}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  placeholder="blur"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
