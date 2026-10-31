"use client";

import { useEffect, useSyncExternalStore } from "react";
import { motion, useSpring, useMotionValue, useReducedMotion } from "framer-motion";

const emptySubscribe = () => () => {};

export function MouseAura() {
  const shouldReduceMotion = useReducedMotion();
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for high-end feel
  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted || shouldReduceMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Primary Technical Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="w-10 h-10 border border-brand-cyan/20 rounded-full flex items-center justify-center bg-brand-cyan/5"
      >
        {/* Central Core Dot */}
        <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
      </motion.div>

      {/* Large Ambient Glow */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[400px] h-[400px] bg-brand-purple/5 blur-[120px] rounded-full"
      />
    </div>
  );
}
