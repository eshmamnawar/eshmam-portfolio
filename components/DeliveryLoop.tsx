"use client";

import { motion } from "framer-motion";

const SIZE = 360;
const CENTER = SIZE / 2;
const RING_R = 118; // carved channel radius, where the node dots sit
const LABEL_R = 170; // label ring, clear of the disc rim

const steps = ["Strategy", "Product", "Architecture", "Engineering", "Delivery"];

/** Angle for step i, starting at the top and going clockwise. */
function pointAt(index: number, radius: number) {
  const angle = (-90 + (360 / steps.length) * index) * (Math.PI / 180);
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
}

export default function DeliveryLoop() {
  const cycle = steps.length * 1.1;

  return (
    <div
      className="gradient-glow relative"
      style={{ width: SIZE, height: SIZE }}
      aria-label="Working across strategy, product, architecture, engineering and delivery"
    >
      {/* Outer raised disc */}
      <div className="absolute inset-[44px] rounded-full neu-raised-lg" />
      {/* Carved channel the process travels along */}
      <div className="absolute inset-[62px] rounded-full neu-inset" />

      {/* Sweeping gradient arc */}
      <svg
        className="absolute inset-0 animate-spin-slow pointer-events-none"
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="loop-arc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="55%" stopColor="var(--accent-3)" />
            <stop offset="100%" stopColor="var(--accent-2)" />
          </linearGradient>
        </defs>
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RING_R}
          fill="none"
          stroke="url(#loop-arc)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * RING_R * 0.42} ${
            2 * Math.PI * RING_R
          }`}
        />
      </svg>

      {/* Centre plate */}
      <div className="absolute inset-[112px] rounded-full neu-raised grid place-items-center text-center px-4">
        <div>
          <div className="text-[12px] tracking-[0.22em] uppercase text-ink-faint mb-1.5">
            Business &times;
          </div>
          <div className="text-[16px] font-bold text-gradient leading-tight">
            Technology
          </div>
        </div>
      </div>

      {/* Node dots on the ring */}
      {steps.map((step, i) => {
        const dot = pointAt(i, RING_R);
        return (
          <motion.span
            key={`${step}-dot`}
            className="absolute w-[13px] h-[13px] rounded-full gradient-ramp"
            style={{ left: dot.x - 6.5, top: dot.y - 6.5 }}
            animate={{ scale: [1, 1.55, 1], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: cycle,
              times: [0, 0.08, 0.2],
              repeat: Infinity,
              delay: (cycle / steps.length) * i,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Labels outside the disc */}
      {steps.map((step, i) => {
        const label = pointAt(i, LABEL_R);
        return (
          <motion.span
            key={step}
            className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-full neu-raised-sm text-[12px] font-semibold tracking-wide text-ink-muted"
            style={{ left: label.x, top: label.y }}
            animate={{ opacity: [0.62, 1, 0.62] }}
            transition={{
              duration: cycle,
              times: [0, 0.08, 0.2],
              repeat: Infinity,
              delay: (cycle / steps.length) * i,
              ease: "easeInOut",
            }}
          >
            {step}
          </motion.span>
        );
      })}
    </div>
  );
}
