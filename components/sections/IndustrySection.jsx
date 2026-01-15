"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IndustryGrid({
  data,
  headingTag: Tag = "h3",
  columns = 3,
}) {
  if (!data || !data.items) return null;

  // Logic to handle desktop column spans
  // 3 columns = 33.33%, 4 columns = 25%
  const desktopWidth =
    columns === 4 ? "lg:w-[calc(25%-1.5rem)]" : "lg:w-[calc(33.33%-1.5rem)]";

  return (
    <section className="bg-white overflow-hidden mb-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Responsive Heading */}
        {data.sectionTitle && (
          <Tag
            className=" text-2xl md:text-3xl font-semibold text-[#3D2C2E] mb-10 md:mb-16 text-center md:text-left max-w-4xl"
            dangerouslySetInnerHTML={{ __html: data.sectionTitle }}
          />
        )}
      </div>
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        {/* Responsive Flex Logic:
          - flex-col: Stacked on mobile
          - sm:flex-row: Side-by-side on tablet/desktop
          - justify-center: Centers the last row if odd
        */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8">
          {data.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`
                relative group overflow-hidden rounded-[2rem] shadow-lg bg-gray-100
                w-full 
                sm:w-[calc(50%-0.75rem)] 
                ${desktopWidth}
                h-[320px] md:h-[380px]
              `}
            >
              {/* Image with zoom effect */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Glassmorphism Label */}
              <div className="absolute bottom-5 left-0 right-0 flex justify-center px-4 md:px-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-center py-3 px-4 rounded-xl w-full transition-all duration-300 group-hover:bg-white/20">
                  <span
                    className="text-xs md:text-sm font-bold tracking-widest uppercase"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
