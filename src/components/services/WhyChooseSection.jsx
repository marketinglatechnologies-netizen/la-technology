"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseSection({
  heading,
  centerImage,
  featuresLeft = [],
  featuresRight = [],
}) {
  return (
   <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-3xl text-center text-gray-900 mb-16 font-semibold"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* LEFT FEATURES */}
          <motion.div
            className="space-y-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {featuresLeft.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Feature {...item} />
              </motion.div>
            ))}
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-[300px] h-[420px] rounded-2xl overflow-hidden">
              <Image
                src={centerImage}
                alt="Why choose"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT FEATURES */}
          <motion.div
            className="space-y-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {featuresRight.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Feature {...item} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-14 h-14 relative flex items-center justify-center shrink-0">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>

      <div>
        <h4 className="text-base text-gray-900 mb-1 font-semibold">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
