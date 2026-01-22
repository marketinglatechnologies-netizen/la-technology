"use client";

import { motion } from "framer-motion";

export default function PageWrapper({ children, delay = 0 }) {
  return (
       <motion.div
  initial={{ opacity: 0, y: 100, scale: 0.94 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 1.15,               // 👈 slightly slower
    delay: 0.30,                  // 👈 intentional wait
    ease: [0.22, 1, 0.36, 1],     // 👈 smoother easing (easeOutExpo-like)
  }}
  viewport={{
    once: true,
    amount: 0.45,
  }}
>
  {children}
</motion.div>


  );
}
