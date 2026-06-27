"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTransition } from "./TransitionContext";

/**
 * Floating café action button, fixed to the bottom-right of every page.
 * Forest-green comic-book starburst with a circular drink image at its
 * center. Idle float + periodic attention shake, hover glow, click navigates
 * to /cafe via the shared page transition.
 */

export default function CafeButton() {
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
  const { triggerTransition } = useTransition();

  // Periodic attention shake every 4s — paused while hovered or reduced motion.
  useEffect(() => {
    if (prefersReducedMotion || hovered) return;
    const interval = setInterval(() => {
      controls.start({
        x: [0, -8, 8, -8, 8, -6, 6, -3, 3, 0],
        rotate: [0, -6, 6, -6, 6, -3, 3, 0],
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [controls, hovered, prefersReducedMotion]);

  const handleClick = () => {
    if (pathname === "/cafe") return;
    triggerTransition("/cafe");
  };

  // Hide the button on the very page it links to.
  if (pathname === "/cafe") return null;

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-label="Visit The Café"
      className="fixed group flex items-center justify-center"
      style={{ bottom: 32, right: 32, zIndex: 9997 }}
      animate={controls}
    >
      {/* Tooltip — desktop hover only; hidden on touch devices */}
      <span
        className={`hidden md:block pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap rounded-full bg-black/70 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.2em] text-sand backdrop-blur-sm transition-opacity duration-200 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        The Café
      </span>

      {/* Float + hover wrapper */}
      <motion.span
        className="relative block h-[104px] w-[104px] md:h-[128px] md:w-[128px]"
        animate={
          prefersReducedMotion || hovered
            ? { y: 0, scale: hovered ? 1.1 : 1 }
            : { y: [-4, 0], scale: 1 }
        }
        transition={
          hovered || prefersReducedMotion
            ? { duration: 0.3, ease: "easeOut" }
            : {
                y: {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }
        }
        style={{
          filter: hovered
            ? "drop-shadow(0 0 20px rgba(61,107,71,0.6))"
            : "none",
        }}
      >
        {/* Starburst café button image */}
        <Image
          src="/images/ui/cafe-button.png"
          alt="LU'S café"
          fill
          sizes="(max-width: 768px) 104px, 128px"
          className="object-contain"
        />
      </motion.span>
    </motion.button>
  );
}
