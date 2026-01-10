'use client';
import React from "react";
import { motion } from "framer-motion";

/**
 * InfoList Component
 * @param {string} title - The section heading
 * @param {string[]} items - Array of strings for the list items
 * @param {string} accentColor - Tailwind class for item background (default: cream/peach)
 */


export default function InfoList({
  title = "",
  items = [],
  // Use a hex fallback or no-space RGBA for Tailwind JIT
  bgColor = "bg-[rgba(245,128,40,0.17)]",
}) {
  return (
    // REMOVED 'bg-white' to let the prop or global theme take over if needed
    <section className="py-12 md:py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 xl:px-0">
        {/* Responsive Heading */}
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-3xl font-semibold text-center text-[#3D2C2E] mb-10 md:mb-16 tracking-tight"
          >
            {title}
          </motion.h2>
        )}

        {/* List Container */}
        <div className="max-w-6xl mx-auto flex flex-col gap-4 md:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Ensure the bgColor prop doesn't have spaces if passed as a string
              className={`w-full ${bgColor} rounded-xl md:rounded-md p-5 md:py-5 md:px-6 transition-all duration-300 hover:shadow-md hover:bg-[rgba(245,128,40,0.25)] flex items-center border border-orange-200/10`}
            >
              {/* Added a small bullet or indicator for better visual hierarchy */}
              <div className="flex items-start gap-4 md:gap-6">
                {/* <span className="mt-1 md:mt-2 h-2 w-2 md:h-3 md:w-3 rounded-full bg-la-orange flex-shrink-0" /> */}
                <p className="text-base md:text-lg font-semibold text-[#1A1A1A] leading-tight">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
