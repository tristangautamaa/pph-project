"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 200, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("img")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <motion.div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] hidden md:flex items-center justify-center"
      style={{ x, y }}
    >
      <motion.div
        className="rounded-full border border-cream/60 flex items-center justify-center overflow-hidden"
        animate={{
          width: isHovering ? 64 : 40,
          height: isHovering ? 64 : 40,
          backgroundColor: isHovering
            ? "rgba(240, 235, 224, 0.15)"
            : "transparent",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <motion.span
          className="font-sans text-[9px] tracking-widest uppercase text-cream"
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        >
          View
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
