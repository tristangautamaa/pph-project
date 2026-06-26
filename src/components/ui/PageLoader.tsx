"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SESSION_KEY = "pph_loaded";

export default function PageLoader() {
  // Render visible by default so the splash covers the first paint. On mount we
  // check the session flag: if the user has already seen it this session we
  // dismiss instantly (no animation); otherwise we run the branded sequence.
  const [visible, setVisible] = useState(true);
  const [instant, setInstant] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem(SESSION_KEY);

    if (alreadyLoaded) {
      setInstant(true);
      setVisible(false);
      return;
    }

    // Hold while the progress bar fills (~1.2s) then trigger the exit.
    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "true");
      setVisible(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="pph-loader"
          className="fixed inset-0 flex flex-col items-center justify-center"
          style={{ zIndex: 9999, backgroundColor: "#0f1a0a" }}
          initial={{ opacity: 1, y: 0 }}
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, y: -20 }
          }
          transition={{
            duration: instant ? 0 : 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="flex flex-col items-center gap-8">
            <Image
              src="/images/logo/Poncol Padel House Logo - Transparency White.png"
              alt="Poncol Padel House"
              width={220}
              height={132}
              priority
              className="w-[180px] md:w-[200px] h-auto object-contain"
            />

            {/* Progress line — fills left to right over ~1.2s */}
            <div className="h-[2px] w-[120px] overflow-hidden bg-cream/15">
              <motion.div
                className="h-full w-full origin-left bg-cream"
                initial={{ scaleX: prefersReducedMotion ? 1 : 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
