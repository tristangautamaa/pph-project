"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/components/animations/variants";
import Button from "@/components/ui/Button";
// Static imports → Next.js auto-generates the blurDataURL for placeholder="blur".
import imgOne from "../../../public/images/portrait/ST307814.webp";
import imgTwo from "../../../public/images/portrait/ST307823.webp";
import imgThree from "../../../public/images/portrait/ST307825.webp";

const machineImages = {
  hero: { src: imgOne, alt: "Pusun ball machine on court" },
  pair: [
    { src: imgTwo, alt: "Ball machine feeding session" },
    { src: imgThree, alt: "Player drilling with the ball machine" },
  ],
};

export default function BallMachine() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-forest py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="font-sans text-[11px] tracking-[0.3em] uppercase text-sand mb-6"
            >
              Equipment
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display font-[300] text-cream uppercase tracking-tight leading-none mb-3"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Train Smarter
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-display font-[400] italic text-sand mb-8"
              style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
            >
              Pusun Ball Machine
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-sans font-[300] text-cream/70 leading-relaxed mb-8 max-w-md"
            >
              Elevate your practice with our Pusun ball machine. Available to
              rent with any court booking - perfect for solo drills, warm-ups,
              and consistent feeding sessions that sharpen your game.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 border-t border-sand/20 pt-6 mb-10 max-w-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-turf flex-shrink-0" />
              <p className="font-sans text-sm tracking-wide uppercase text-cream/60">
                Available as a court add-on &middot; 1 hour sessions
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Button href="/book">Book with a Court</Button>
            </motion.div>
          </motion.div>

          {/* Right: offset gallery */}
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="flex flex-col gap-4"
          >
            {/* Large lead image */}
            <motion.div
              variants={fadeUp}
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={machineImages.hero.src}
                alt={machineImages.hero.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                placeholder="blur"
                loading="eager"
              />
            </motion.div>

            {/* Two images side by side, slightly inset to break the grid */}
            <div className="grid grid-cols-2 gap-4 lg:pl-10">
              {machineImages.pair.map((img) => (
                <motion.div
                  key={img.alt}
                  variants={fadeUp}
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    quality={85}
                    placeholder="blur"
                    loading="eager"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
