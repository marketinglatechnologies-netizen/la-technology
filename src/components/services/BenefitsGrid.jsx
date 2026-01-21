"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * @param {string} heading - Section title
 * @param {string} description - Paragraph below heading
 * @param {string} headingTag - HTML tag for heading
 * @param {Array} items - Cards data
 * @param {number} columns - 3 or 4
 */
export default function BenefitsGrid({
  heading = "",
  description = "",
  headingTag: Tag = "h2",
  items = [],
  columns = 3,
}) {
  const gridConfig = columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">

        {/* Heading + Paragraph */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Tag
            className="text-2xl md:text-3xl font-semibold text-gray-900"
            dangerouslySetInnerHTML={{ __html: heading }}
          />

          {description && (
            <p
              className="mt-4 text-gray-600 text-base max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </motion.div>

        {/* Gradient Divider */}
        <motion.div
          className="w-full h-[4px] bg-gradient-to-r from-orange-400 to-red-500 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
        />

        {/* Cards Grid */}
        <motion.div
          className={`grid grid-cols-1 sm:grid-cols-2 ${gridConfig} gap-8`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.22 } },
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-orange-100 p-8 shadow-lg shadow-orange-100/50 flex flex-col h-full hover:shadow-orange-200 transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <h3
                className="text-lg font-bold text-gray-900 mb-3"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />

              <p
                className="text-sm text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
