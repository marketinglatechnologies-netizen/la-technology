"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageTabsSection({
  heading,
  headingTag = "h2",
  tabs = [],
  defaultActive = 0,
}) {
  const [activeTab, setActiveTab] = useState(defaultActive);
  const HeadingTag = headingTag;

  if (!tabs.length) return null;

  return (
   <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeadingTag className="text-2xl md:text-3xl text-gray-900 mb-12 font-semibold">
            {heading}
          </HeadingTag>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Tabs */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`w-full text-left px-6 py-4 rounded-xl border transition cursor-pointer 
                  ${
                    activeTab === index
                      ? "bg-orange-50 border-orange-200 text-gray-900"
                      : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative w-full h-[380px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Image
              src={tabs[activeTab].image}
              alt={tabs[activeTab].label}
              fill
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
