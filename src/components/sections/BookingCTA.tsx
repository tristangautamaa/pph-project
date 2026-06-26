"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/components/animations/variants";

interface BookingCTAProps {
  /** Hide the "Book a Court" heading when a page already provides one (e.g. the /book hero). */
  showHeading?: boolean;
}

export default function BookingCTA({ showHeading = true }: BookingCTAProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-black py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: text */}
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.14 } },
            }}
          >
            {showHeading && (
              <>
                <motion.p
                  variants={fadeUp}
                  className="font-sans text-[11px] tracking-[0.3em] uppercase text-turf mb-5"
                >
                  Reserve
                </motion.p>

                <motion.h2
                  variants={fadeUp}
                  className="font-display font-[300] text-cream uppercase tracking-tight leading-none mb-6"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  Book a Court
                </motion.h2>
              </>
            )}

            <motion.p
              variants={fadeUp}
              className="font-sans font-[300] text-cream/60 leading-relaxed mb-10 max-w-sm"
            >
              Reserve your time on the court through Courtside - our booking
              platform of choice.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8"
            >
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-cream/30 text-cream/80 hover:border-cream hover:text-cream font-sans text-[13px] tracking-widest uppercase transition-all duration-300"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-cream/30 text-cream/80 hover:border-cream hover:text-cream font-sans text-[13px] tracking-widest uppercase transition-all duration-300"
                >
                  Google Play
                </a>
              </div>

              {/* Courtside brand logo */}
              <Image
                src="/images/courtside/courtside-logo.png"
                alt="Courtside"
                width={120}
                height={40}
                className="w-[100px] md:w-[120px] h-auto object-contain opacity-85"
              />
            </motion.div>
          </motion.div>

          {/* Right: phone mockup */}
          <motion.div
            className="flex justify-center items-center"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="relative"
              animate={
                prefersReducedMotion
                  ? {}
                  : { y: [0, -12, 0] }
              }
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Image
                src="/images/courtside/Courtside1.png"
                alt="Courtside app mockup"
                width={480}
                height={960}
                className="object-contain w-auto max-h-[420px] lg:max-h-[560px]"
                sizes="(max-width: 1024px) 70vw, 40vw"
                quality={90}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
