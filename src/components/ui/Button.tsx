"use client";

import { motion } from "framer-motion";
import TransitionLink from "@/components/ui/TransitionLink";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "outline" | "solid";
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "outline",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-block px-8 py-3 rounded-full text-sm font-sans font-400 tracking-widest uppercase transition-all duration-300 cursor-pointer";

  const styles = {
    outline:
      "border border-cream text-cream bg-transparent hover:bg-cream hover:text-forest",
    solid:
      "border border-cream bg-cream text-forest hover:bg-transparent hover:text-cream",
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  const inner = (
    <motion.span
      className={classes}
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      );
    }
    return <TransitionLink href={href}>{inner}</TransitionLink>;
  }

  return inner;
}
