"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageHighlightSection({
  heading,
  headingTag = "h2",
  imageSrc,
  imageAlt = "",
  description,
}) {
  const HeadingTag = headingTag;

  return (
     <section className="w-full py-20 bg-white">
      <motion.div
        className="max-w-6xl mx-auto px-4 lg:px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } }
        }}
      >
        {/* Heading */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeadingTag className="text-2xl md:text-3xl text-gray-900 mb-8 font-semibold">
            {heading}
          </HeadingTag>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative w-full h-[300px] md:h-[360px] rounded-2xl overflow-hidden mb-8"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt || heading}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto font-medium"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </motion.div>
    </section>
  );
}
