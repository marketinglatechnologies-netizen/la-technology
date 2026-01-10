"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * @param {string} title - Section Heading
 * @param {Array} items - Array of {header, description}
 * @param {string} align - 'center' | 'left'
 */
export default function SolutionGrid({ title, items = [], align = "center" }) {
  const isFiveItems = items.length === 5;
  const isSevenItems = items.length === 7;

  // Alignment Utility Classes
  const alignmentClasses = {
    container:
      align === "center" ? "items-center text-center" : "items-start text-left",
    title: align === "center" ? "text-center" : "text-left",
    icon: align === "center" ? "mx-auto" : "mr-auto",
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        {title && (
          <h2
            className={`text-2xl md:text-3xl font-bold text-[#3D2C2E] mb-16 ${alignmentClasses.title}`}
          >
            {title}
          </h2>
        )}

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-12 gap-y-16`}
        >
          {items.map((item, index) => {
            let gridClasses = "lg:col-span-2";

            // Logic for 5 items: Center the bottom two
            if (isFiveItems && index >= 3 && align === "center") {
              gridClasses = "lg:col-span-3 lg:px-[10%]";
            }

            // Logic for 7 items (Application Security Mockup)
            if (isSevenItems) {
              // 4 in top row, 3 in bottom row
              gridClasses = index < 4 ? "lg:col-span-3" : "lg:col-span-4";
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${gridClasses} flex flex-col ${alignmentClasses.container} group`}
              >
                {/* Icon Placeholder */}
                {/* <div
                  className={`w-14 h-14 bg-[#D9D9D9] mb-6 rounded-sm transition-transform group-hover:rotate-6 duration-300`}
                /> */}
                <div className="mb-4 transition-transform group-hover:rotate-6 duration-300">
                  <Image src={item.icon} alt={title} width={48} height={48} />
                </div>

                <h3
                  className="text-lg font-bold text-[#1A1A1A] mb-3 leading-tight min-h-[3rem]"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h3>

                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        /* Dynamic Grid columns to support 4-3 and 3-2 layouts */
        @media (min-width: 1024px) {
          .lg\\:grid-cols-6 {
            grid-template-columns: repeat(
              ${isSevenItems ? 12 : 6},
              minmax(0, 1fr)
            );
          }
        }
      `}</style>
    </section>
  );
}
