"use client";

import { motion } from "framer-motion";

export default function FourBoxSection({
  heading,
  headingTag = "h2",
  items = [],
}) {
  const HeadingTag = headingTag;

  // Determine the desktop grid columns based on the number of items
  // If 4 or more, use 4 cols. If 3, use 3 cols. Default to 4.
  const gridColsClass =
    items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";

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
          <HeadingTag
            className="text-2xl md:text-3xl text-center text-gray-900 mb-16 font-semibold"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-8 justify-center`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.22 }
            }
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <Box
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function Box({ title, description }) {
  return (
    <div className="border border-orange-200 hover:border-orange-400 transition-colors duration-300 rounded-2xl px-6 py-10 text-center flex flex-col h-full bg-orange-50/10">
      <h4
        className="text-lg font-bold text-gray-900 mb-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <p
        className="text-sm text-gray-600 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
