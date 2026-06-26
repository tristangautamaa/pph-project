"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { useReducedMotion } from "framer-motion";

/**
 * Time (ms) the wipe-in panel takes to fully cover the screen before we
 * actually navigate. Kept marginally longer than the 0.4s cover animation so
 * the new route never flashes out from under the panel.
 */
const COVER_MS = 420;

interface TransitionContextValue {
  /** True from the moment a navigation click fires until the wipe-out finishes. */
  isTransitioning: boolean;
  /** Fire the wipe-in immediately, then navigate once the screen is covered. */
  triggerTransition: (href: string) => void;
  /** Called by <PageTransition> once the wipe-out animation completes. */
  endTransition: () => void;
}

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const triggerTransition = useCallback(
    (href: string) => {
      // Respect reduced-motion: skip the panel entirely and navigate at once.
      if (prefersReducedMotion) {
        router.push(href);
        return;
      }

      setIsTransitioning(true);
      window.setTimeout(() => router.push(href), COVER_MS);
    },
    [router, prefersReducedMotion]
  );

  const endTransition = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  return (
    <TransitionContext.Provider
      value={{ isTransitioning, triggerTransition, endTransition }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return ctx;
}
