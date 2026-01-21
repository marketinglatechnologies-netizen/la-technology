"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GradientCtaBanner({
  text,
  buttonText = "Contact Us Today",
  iconSrc = "/assets/images/home/plane.png",
}) {
  const router = useRouter();

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6
        rounded-2xl px-8 py-8
        bg-gradient-to-r from-red-500 to-orange-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                ease: "easeOut",
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Left Text */}
          <motion.p
            className="text-white text-lg md:text-lg font-semibold text-center md:text-left uppercase font-montserrat"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            dangerouslySetInnerHTML={{ __html: text }}
          />

          {/* Button */}
          <motion.button
            onClick={() => router.push("/contact")}
            className="inline-flex items-center gap-2 bg-white text-orange-500
          px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <img src={iconSrc} alt="Phone" className="w-4 h-4" />
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
