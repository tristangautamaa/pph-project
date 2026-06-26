"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const galleryImages = [
  { src: "/images/landscape/ST307665.jpg", alt: "Venue interior", tall: false },
  { src: "/images/portrait/IMG_6323.jpg", alt: "Player action", tall: true },
  { src: "/images/landscape/ST307673.jpg", alt: "Court detail", tall: false },
  { src: "/images/portrait/IMG_6331.jpg", alt: "Player in motion", tall: true },
  { src: "/images/landscape/ST307745.jpg", alt: "Venue atmosphere", tall: false },
  { src: "/images/portrait/IMG_6332.jpg", alt: "Court action", tall: true },
  { src: "/images/landscape/ST307778.jpg", alt: "Interior space", tall: false },
  { src: "/images/portrait/IMG_6347.jpg", alt: "Player portrait", tall: true },
];

export default function VenueGallery() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-forest py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.h2
          className="font-display font-[300] text-cream text-center mb-16 md:mb-20 uppercase tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          The Venue
        </motion.h2>

        {/* Masonry grid using CSS columns */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid mb-3 md:mb-4 relative overflow-hidden"
              style={{ aspectRatio: img.tall ? "3/4" : "4/3" }}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, scale: 0.95 }
              }
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={80}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
