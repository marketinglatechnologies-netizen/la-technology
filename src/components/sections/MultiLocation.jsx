"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* -------------------- DATA -------------------- */

const imageGrid = [
  {
    src: "/assets/images/services/network-infrastructure/location1.png",
    alt: "Team working in office",
    tall: true,
  },
  {
    src: "/assets/images/services/network-infrastructure/location2.png",
    alt: "Code on screen",
  },
  {
    src: "/assets/images/services/network-infrastructure/location3.png",
    alt: "Data center team",
  },
];

const features = [
  {
    title: "Centralized Command Center (NOC/SOC)",
    description: "24×7 monitoring and incident response for all sites.",
  },
  {
    title: "Standard Templates",
    description:
      "Golden configs for rapid branch deployment and consistent security.",
  },
  {
    title: "Hybrid Support",
    description:
      "Remote-first operations with scheduled on-site visits for critical tasks.",
  },
  {
    title: "Vendor Management",
    description:
      "Single-point coordination with ISPs and OEMs for escalations.",
  },
  {
    title: "Change Governance",
    description:
      "Controlled rollouts, maintenance windows, and rollback plans.",
  },
];

/* -------------------- COMPONENT -------------------- */

export default function MultiLocationOperatingModel() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT – IMAGE GRID */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.18 } },
            }}
          >
            {imageGrid.map((img, index) => (
              <motion.div
                key={index}
                className={`rounded-xl overflow-hidden ${
                  img.tall ? "row-span-2" : ""
                }`}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.75, ease: "easeOut" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={img.tall ? 800 : 400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT – CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.h2
              className="text-2xl font-semibold text-gray-900 mb-3"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Multi-Location Operating Model
            </motion.h2>

            <motion.p
              className="text-gray-500 mb-8 max-w-xl"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Comprehensive management for your distributed infrastructure.
            </motion.p>

            <ul className="space-y-6">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm">
                    ✓
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              className="mt-10"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <button className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-white font-medium hover:bg-orange-600 transition">
                Talk to an Expert
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
