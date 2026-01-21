"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureHighlightSection({
  images = [],
  title,
  description,
}) {
  return (
    <section className="w-full py-16">
  <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGES */}
    <motion.div
      className="grid grid-cols-2 gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.25 } }
      }}
    >

      {/* Tall Image */}
      <motion.div
        className="relative rounded-2xl overflow-hidden h-[420px]"
        variants={{
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Image
          src={images[0]?.src}
          alt={images[0]?.alt}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Stacked Images */}
      <div className="flex flex-col gap-4">
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl overflow-hidden h-[200px]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={images[i]?.src}
              alt={images[i]?.alt}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* RIGHT CONTENT */}
    <motion.div
      className="space-y-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.25 } }
      }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-gray-900"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-gray-600"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </motion.div>

  </div>
</section>

  );
}
