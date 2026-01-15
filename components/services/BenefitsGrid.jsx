"use client";

import React from "react";
import Image from "next/image";

/**
 * @param {string} heading - The section title
 * @param {string} headingTag - Dynamic HTML tag (h1-h6)
 * @param {Array} items - Array of {icon, title, description}
 * @param {number} columns - 3 or 4 (default is 3)
 */
export default function BenefitsGrid({
  heading = "Key Benefits",
  headingTag: Tag = "h2",
  items = [],
  columns = 3,
}) {
  // Logic to switch between 3 and 4 column grid
  const gridConfig = columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
        {/* Dynamic Heading */}
        <Tag
          className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-6"
          dangerouslySetInnerHTML={{ __html: heading }}
        />

        {/* Gradient Divider */}
        <div className="w-full h-[4px] bg-gradient-to-r from-orange-400 to-red-500 mb-16" />

        {/* Responsive Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridConfig} gap-8`}>
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-orange-100 p-8 shadow-lg shadow-orange-100/50 flex flex-col h-full hover:shadow-orange-200 transition-shadow duration-300"
            >
              {/* Icon Image */}
              <div className="w-12 h-12 flex items-center justify-start mb-6">
                <Image
                  src={item.icon}
                  alt={item.title.replace(/<[^>]*>?/gm, "")} // Strip HTML for Alt text
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold text-gray-900 mb-3"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />

              {/* Description */}
              <p
                className="text-sm text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}