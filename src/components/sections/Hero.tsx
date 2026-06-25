"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.8, ease: "easeOut" },
  },
};

const eyebrowVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const headlineVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const sublineVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "30%"]
  );

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex flex-col items-start justify-end overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
        variants={imageVariant}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/landscape/dji_fly_20260608_150122_0015_1780905739959_photo.JPG"
          alt="Poncol Padel House aerial view"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.75) 100%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-10 pb-20 md:pb-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={eyebrowVariant}
          className="font-sans text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-cream/70 mb-6 md:mb-8"
        >
          Jakarta &middot; Indonesia
        </motion.p>

        {/* Headlines */}
        <motion.div variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}>
          <motion.h1
            variants={headlineVariant}
            className="font-display font-[300] text-cream uppercase tracking-tight leading-none mb-2 md:mb-3"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
          >
            Where the Game
          </motion.h1>
          <motion.p
            variants={headlineVariant}
            className="font-display font-[300] italic text-cream leading-[1.1] pb-1"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)" }}
          >
            Comes Alive
          </motion.p>
        </motion.div>

        <motion.p
          variants={sublineVariant}
          className="font-sans font-[300] text-cream/70 text-base md:text-lg mt-6 md:mt-8 mb-8 md:mb-10 max-w-md"
        >
          Two indoor padel courts in the heart of Jakarta.
        </motion.p>

        <motion.div variants={sublineVariant}>
          <Button href="/courts">Explore the Venue</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
