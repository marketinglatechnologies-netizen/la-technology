"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageWrapper({ children, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : isMobile ? 40 : 100,
        scale: shouldReduceMotion ? 1 : isMobile ? 0.98 : 0.94,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: isMobile ? 0.75 : 1.15,
        delay: delay || (isMobile ? 0.15 : 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
        amount: isMobile ? 0.25 : 0.45,
      }}
    >
      {children}
    </motion.div>
  );
}
