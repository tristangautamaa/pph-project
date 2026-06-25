"use client";

import { motion, useReducedMotion } from "framer-motion";

interface CourtLineDividerProps {
  color?: "light" | "dark";
  className?: string;
}

export default function CourtLineDivider({
  color = "light",
  className = "",
}: CourtLineDividerProps) {
  const prefersReducedMotion = useReducedMotion();
  const stroke = color === "light" ? "#f0ebe0" : "#0f1a0a";

  const lineTransition = (delay: number) => ({
    pathLength: { duration: prefersReducedMotion ? 0 : 1.4, ease: "easeInOut", delay },
    opacity: { duration: 0.3, delay },
  });

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 800 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        aria-hidden="true"
      >
        {/* Outer court boundary */}
        <motion.rect
          x="4"
          y="8"
          width="792"
          height="64"
          stroke={stroke}
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={lineTransition(0)}
        />
        {/* Net line - center vertical */}
        <motion.line
          x1="400"
          y1="8"
          x2="400"
          y2="72"
          stroke={stroke}
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={lineTransition(0.3)}
        />
        {/* Left service line */}
        <motion.line
          x1="136"
          y1="8"
          x2="136"
          y2="72"
          stroke={stroke}
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={lineTransition(0.5)}
        />
        {/* Right service line */}
        <motion.line
          x1="664"
          y1="8"
          x2="664"
          y2="72"
          stroke={stroke}
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={lineTransition(0.5)}
        />
        {/* Center T - left side */}
        <motion.line
          x1="136"
          y1="40"
          x2="400"
          y2="40"
          stroke={stroke}
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={lineTransition(0.7)}
        />
        {/* Center T - right side */}
        <motion.line
          x1="400"
          y1="40"
          x2="664"
          y2="40"
          stroke={stroke}
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={lineTransition(0.7)}
        />
      </svg>
    </div>
  );
}
