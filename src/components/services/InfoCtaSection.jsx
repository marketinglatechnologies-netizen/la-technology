"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CtaCenteredAnimated({ title, description }) {
  const router = useRouter();

  return (
    <section className="w-full py-20 bg-white">
  <motion.div
    className="max-w-3xl mx-auto px-4 text-center space-y-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.25 } }
    }}
  >
    <motion.h2
      className="text-2xl md:text-3xl text-gray-900 font-semibold"
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {title}
    </motion.h2>

    <motion.p
      className="text-gray-600 text-base leading-relaxed"
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {description}
    </motion.p>

    <motion.div
      className="pt-4"
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <button
        onClick={() => router.push("/contact")}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90 transition"
      >
        <Phone size={18} />
        Talk to an Expert
      </button>
    </motion.div>
  </motion.div>
</section>

  );
}
