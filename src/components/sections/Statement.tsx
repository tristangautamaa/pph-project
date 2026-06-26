"use client";

import { motion, useReducedMotion } from "framer-motion";

const lines = [
  { text: "PONCOL PADEL HOUSE", isHeading: true },
  {
    text: "Jakarta's premier indoor padel destination.",
    isHeading: false,
  },
  {
    text: "Two competition-ready courts, built for players who take the game seriously",
    isHeading: false,
  },
  {
    text: "and those who are just discovering it.",
    isHeading: false,
  },
];

const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function AnimatedLine({
  text,
  isHeading,
  className,
  style,
}: {
  text: string;
  isHeading: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (prefersReducedMotion) {
    return (
      <span className={className} style={style}>
        {text}
      </span>
    );
  }

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariant}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Statement() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-forest py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <AnimatedLine
            text="PONCOL PADEL HOUSE"
            isHeading
            className="block font-sans text-[11px] md:text-[13px] tracking-[0.35em] text-turf mb-8 md:mb-12"
          />

          <div className="space-y-2">
            <AnimatedLine
              text="Jakarta's premier indoor padel destination."
              isHeading={false}
              className="block font-display font-[300] text-cream leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" } as React.CSSProperties}
            />
          </div>

          <motion.p
            variants={wordVariant}
            className="font-display font-[300] italic text-sand mt-6 md:mt-8 leading-relaxed"
            style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
          >
            Two competition-ready courts, built for players who take the game
            seriously - and those who are just discovering it.
          </motion.p>

          <motion.p
            variants={wordVariant}
            className="font-sans font-[300] text-cream/40 text-sm tracking-widest uppercase mt-12 md:mt-16"
          >
            Est. 2024 &middot; Poncol, Jakarta
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
