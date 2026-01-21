"use client";

import { motion } from "framer-motion";

/* -------------------- DATA (JSON) -------------------- */
const engagementOptions = [
  {
    title: "Rapid Security Health Check",
    duration: "1–2 Weeks",
    description:
      "Quick baseline and top risks assessment for rapid insights.",
    buttonText: "Get Started",
    primary: false,
  },
  {
    title: "Comprehensive Assessment",
    duration: "3–6 Weeks",
    description:
      "Full-scope multi-location deep dive into all assets.",
    buttonText: "Learn More",
    primary: true,
  },
  {
    title: "OT-Focused Assessment",
    duration: "Specialized",
    description:
      "Tailored specifically for industrial and operational environments.",
    buttonText: "Contact Us",
    primary: false,
  },
];

/* -------------------- COMPONENT -------------------- */
export default function EngagementOptions() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          className="text-center text-3xl font-semibold text-gray-900 mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Engagement Options
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {engagementOptions.map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 text-center transition
                ${
                  item.primary
                    ? "border-2 border-gray-200 hover:shadow-md hover:border-red-500"
                    : "border-2 border-gray-200 hover:shadow-md hover:border-red-500"
                }`}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <h3 className="text-lg font-semibold text-red-500 mb-2">
                {item.title}
              </h3>

              <p className="text-xs font-semibold text-gray-400 uppercase mb-4">
                {item.duration}
              </p>

              <p className="text-gray-600 mb-8">
                {item.description}
              </p>

              <button
                className={`px-8 py-2 rounded-full font-medium transition
                  ${
                    item.primary
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "border border-red-500 text-red-500 hover:bg-red-50"
                  }`}
              >
                {item.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
