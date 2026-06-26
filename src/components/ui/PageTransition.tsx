"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { useTransition } from "./TransitionContext";

/**
 * Full-screen forest-green wipe driven by user-initiated navigation.
 *
 *  1. A <TransitionLink> click sets `isTransitioning` → the panel slides in from
 *     the left ("covering", 0.4s ease-in) the instant the click lands.
 *  2. Once the panel covers the screen the context calls router.push; the new
 *     page mounts and `usePathname` changes.
 *  3. That pathname change flips us to "revealing" → the panel slides off to the
 *     right (0.4s ease-out), exposing the new page, then unmounts.
 *
 * The initial page load never fires (panel starts hidden; pathname ref is seeded
 * on mount) — that is covered by <PageLoader />.
 */
type Phase = "hidden" | "covering" | "revealing";

export default function PageTransition() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const { isTransitioning, endTransition } = useTransition();
  const [phase, setPhase] = useState<Phase>("hidden");
  const prevPath = useRef(pathname);

  // Start covering the moment a transition is triggered.
  useEffect(() => {
    if (isTransitioning && !prefersReducedMotion) {
      setPhase("covering");
    }
  }, [isTransitioning, prefersReducedMotion]);

  // The first pathname change while covering means the new page has mounted.
  useEffect(() => {
    if (pathname !== prevPath.current) {
      prevPath.current = pathname;
      if (phase === "covering") {
        setPhase("revealing");
      }
    }
  }, [pathname, phase]);

  if (phase === "hidden") return null;

  return (
    <motion.div
      key="page-transition-panel"
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 9998,
        backgroundColor: "#0f1a0a",
        borderRight: "1px solid #3d6b47",
      }}
      initial={{ x: "-100%" }}
      animate={{ x: phase === "covering" ? "0%" : "100%" }}
      transition={{
        duration: 0.4,
        ease: phase === "covering" ? "easeIn" : "easeOut",
      }}
      onAnimationComplete={() => {
        if (phase === "revealing") {
          setPhase("hidden");
          endTransition();
        }
      }}
    />
  );
}
