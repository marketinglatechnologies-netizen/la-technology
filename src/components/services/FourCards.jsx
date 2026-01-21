"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FourCards({ heading, cards }) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-3xl text-center text-gray-900 mb-16 font-semibold"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {heading}
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25
              }
            }
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="text-left"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
