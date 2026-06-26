"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/ui/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const menuItems = [
  { src: "/images/portrait/cafe/IMG_5625.jpg", name: "Iced Latte", price: "Rp 35.000" },
  { src: "/images/portrait/cafe/IMG_5707.jpg", name: "Signature Cold Brew", price: "Rp 40.000" },
  { src: "/images/portrait/cafe/IMG_5712.jpg", name: "Matcha Latte", price: "Rp 38.000" },
  { src: "/images/portrait/cafe/IMG_5719.jpg", name: "Sparkling Yuzu", price: "Rp 32.000" },
  { src: "/images/portrait/cafe/IMG_5726.jpg", name: "Teh Tarik", price: "Rp 28.000" },
  { src: "/images/portrait/cafe/IMG_5743.jpg", name: "Iced Americano", price: "Rp 30.000" },
  { src: "/images/portrait/cafe/IMG_5749.jpg", name: "Seasonal Special", price: "Rp 45.000" },
  { src: "/images/portrait/cafe/IMG_5760.jpg", name: "Fruit Cooler", price: "Rp 33.000" },
  { src: "/images/portrait/cafe/IMG_5853.jpg", name: "Waffle Fries", price: "Rp 45.000" },
  { src: "/images/portrait/cafe/IMG_5883.jpg", name: "Cheese Fries", price: "Rp 42.000" },
  { src: "/images/portrait/cafe/IMG_5954.jpg", name: "Club Sandwich", price: "Rp 55.000" },
  { src: "/images/portrait/cafe/IMG_5956.jpg", name: "Iced Chocolate", price: "Rp 38.000" },
];

const lifestyleImages = [
  "/images/portrait/cafe/IMG_6099.jpg",
  "/images/portrait/cafe/IMG_6131.jpg",
  "/images/portrait/cafe/IMG_6168.jpg",
];

// Wide (col-span-2) cards fall on indices where i % 7 is 0 or 6, producing the
// asymmetric rhythm: row1 = wide + standard, row2 = 3 standard, row3 = standard
// + wide, then repeat.
const isWide = (i: number) => i % 7 === 0 || i % 7 === 6;

const menuContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function CafeContent() {
  return (
    <main>
      {/* SECTION A — Hero strip */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <Image
          src="/images/portrait/IMG_6331.jpg"
          alt="LU'S café at Poncol Padel House"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.3), rgba(10,10,10,0.7))",
          }}
        />
        <motion.div
          className="relative z-10 text-center px-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <p className="font-sans text-[11px] md:text-[12px] uppercase tracking-[0.3em] text-cream mb-5">
            LU&apos;S at Poncol Padel House
          </p>
          <h1
            className="font-display font-[300] text-cream uppercase tracking-tight leading-none mb-5"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            The Café
          </h1>
          <p className="font-sans font-[300] text-sand text-base">
            Fuel your game.
          </p>
        </motion.div>
      </section>

      {/* SECTION B — Menu grid */}
      <section className="bg-cream py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <h2
            className="font-display font-[400] text-forest text-center mb-16 uppercase tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            On the Menu
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
            variants={menuContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {menuItems.map((item, i) => {
              const wide = isWide(i);
              return (
                <motion.div
                  key={item.src}
                  variants={fadeUp}
                  className={`group ${wide ? "md:col-span-2" : "md:col-span-1"}`}
                >
                  <div
                    className="relative w-full overflow-hidden rounded-sm border border-transparent transition-colors duration-300 group-hover:border-turf"
                    style={{ aspectRatio: wide ? "4 / 3" : "3 / 4" }}
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      sizes={
                        wide
                          ? "(max-width: 768px) 100vw, 66vw"
                          : "(max-width: 768px) 100vw, 33vw"
                      }
                      quality={82}
                      className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-baseline justify-between gap-3 pt-4">
                    <h3
                      className="font-display font-[400] text-forest"
                      style={{ fontSize: "20px" }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="font-sans text-sand"
                      style={{ fontSize: "14px" }}
                    >
                      {item.price}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION C — Lifestyle editorial strip */}
      <motion.section
        className="bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row">
          {lifestyleImages.map((src) => (
            <div
              key={src}
              className="relative w-full md:w-1/3 overflow-hidden h-[50vw] md:h-[60vh]"
            >
              <Image
                src={src}
                alt="LU'S café lifestyle"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={82}
                className="object-cover transition-transform duration-[500ms] ease-out hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </motion.section>

      {/* SECTION D — Bottom CTA */}
      <section className="bg-forest">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
          <motion.div
            className="flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <h2
              className="font-display font-[400] text-cream uppercase tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Visit Us Courtside
            </h2>
            <p className="font-sans font-[300] text-sand text-base max-w-[480px] leading-relaxed mb-8">
              LU&apos;S café is open every day alongside the courts. Stop by
              before your session, or stay after the game.
            </p>
            <p className="font-sans text-cream text-sm tracking-[0.15em] mb-2">
              Jl. Poncol No.9A, Gandaria Selatan, Jakarta Selatan
            </p>
            <p className="font-sans text-cream text-sm tracking-[0.15em]">
              Open daily
              <span className="mx-2 text-cream/40">·</span>
              09:00 – 22:00
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
