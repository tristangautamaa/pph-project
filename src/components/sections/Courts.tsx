"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, scaleIn } from "@/components/animations/variants";

const courtImages = [
  { src: "/images/landscape/ST307839.jpg", alt: "Court view 1" },
  { src: "/images/landscape/ST307841.jpg", alt: "Court view 2" },
  { src: "/images/landscape/ST307847.jpg", alt: "Court view 3" },
  { src: "/images/landscape/ST307862.jpg", alt: "Court view 4" },
];

const features = [
  "10m x 20m per court",
  "Climate-controlled indoor facility",
  "Glass-walled courts",
  "Professional LED lighting",
  "Artificial turf surface",
  "Casual play, coaching and tournaments",
];

export default function Courts() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-black py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: sticky text */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
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
                className="font-sans font-[300] text-cream/70 leading-relaxed mb-10"
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
                    className="flex items-center gap-3 font-sans font-[300] text-sm text-cream/60"
                  >
                    <span className="w-1 h-1 rounded-full bg-turf flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
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
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
