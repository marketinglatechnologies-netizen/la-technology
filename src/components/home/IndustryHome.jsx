"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IndustryGrid({
  data,
  headingTag: Tag = "h3",
}) {
  if (!data || !data.items) return null;

  return (
    <section className="bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {data.sectionTitle && (
          <Tag
            className="text-2xl md:text-3xl font-semibold text-[#3D2C2E] mb-10 md:mb-14 text-center md:text-left max-w-4xl"
            dangerouslySetInnerHTML={{ __html: data.sectionTitle }}
          />
        )}
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 lg:px-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {data.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="
                relative overflow-hidden
                rounded-[1.75rem]
                shadow-md
                h-[260px] md:h-[300px]
                group
              "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Subtle dark overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Bottom pill label */}
              <div className="absolute bottom-4 inset-x-0 flex justify-center">
                <div className="
                  bg-black/10
                  backdrop-blur-md
                  px-8 py-3
                  rounded-md
                ">
                  <span
                    className="text-white text-sm font-medium"
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
