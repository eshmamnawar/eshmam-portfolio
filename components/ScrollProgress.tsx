"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[5px] z-[60] neu-inset-sm">
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="h-full w-full"
      >
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          }}
        />
      </motion.div>
    </div>
  );
}
