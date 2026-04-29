"use client";

import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

/** Home route: first paint is full opacity so the hero photograph is never “invisible” behind a fade. */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <AnimatePresence mode={isHome ? "sync" : "wait"}>
      <motion.div
        key={pathname}
        initial={{ opacity: isHome ? 1 : 0, y: isHome ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: isHome ? 0 : 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
