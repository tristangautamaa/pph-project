"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "@/components/animations/variants";

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-cream text-black py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative overflow-hidden"
            style={{ aspectRatio: "4/5" }}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <Image
              src="/images/landscape/ST307664.jpg"
              alt="Interior of Poncol Padel House"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.14 } },
            }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display font-[400] text-forest leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Our Story
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-sans font-[300] text-black/70 leading-relaxed mb-5"
            >
              Poncol Padel House was born from a simple idea: Jakarta deserved
              a padel venue that matched the energy of the sport.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-sans font-[300] text-black/70 leading-relaxed mb-5"
            >
              We built two indoor courts in Poncol - a space designed not just
              for competition, but for the community that grows around it.
              Whether you&apos;re a seasoned player or picking up a racket for
              the first time, you belong here.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-sans font-[300] text-black/50 text-sm tracking-widest uppercase mt-10"
            >
              Jakarta &middot; Indonesia
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
