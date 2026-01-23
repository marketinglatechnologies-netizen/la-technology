"use client";

import { motion } from "framer-motion";

/* -------------------- DATA -------------------- */

const kpiData = [
  "Link uptime & failover success rate",
  "Latency, jitter, packet loss thresholds",
  "Wi-Fi coverage & client experience scores",
  "Security events blocked (IPS/ACL/NAC)",
  "Configuration compliance success rate",
];

/* -------------------- COMPONENT -------------------- */

export default function KeyPerformanceIndicators() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          className="text-3xl font-semibold text-gray-900 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Key Performance Indicators
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-medium text-gray-500 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
        >
          Measuring success through transparency.
        </motion.p>

        {/* KPI Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {kpiData.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white px-5 py-4 text-sm text-gray-700 shadow-sm"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
