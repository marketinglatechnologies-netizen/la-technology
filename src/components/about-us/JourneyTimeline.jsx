"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const journeyData = [
  {
    year: "2003",
    title: "Founded LA Technologies Pvt Ltd.",
    description:
      "Officially began operations in India with a vision to deliver technology-driven, business-empowering solutions.",
  },
  {
    year: "2006",
    title: "3,000+ Cisco-trained, 35 CCIEs nurtured",
    description:
      "Built one of the strongest Cisco talent pools with 3,000+ trained engineers and over 35 CCIE-certified professionals.",
  },
  {
    year: "2014",
    title: "200+ clientele with global OEM alliances",
    description:
      "Formed strategic partnerships with leading technology providers including Cisco, Juniper, Avaya, APC, Polycom, and Fortinet.",
  },
  {
    year: "2016",
    title: "Shift to managed services (ARR)",
    description:
      "Transitioned to a recurring, services-led business approach focused on customer longevity and operational continuity.",
  },
  {
    year: "2018",
    title: "Dedicated Security & Cybersecurity focus",
    description:
      "Established a dedicated cybersecurity practice to support enterprise protection, compliance, and threat defense.",
  },
  {
    year: "2020",
    title: "International expansion: Singapore & Dubai",
    description:
      "Launched regional presence in Singapore and Dubai, marking the first phase of the company’s global footprint.",
  },
  {
    year: "2022",
    title: "Expansion: Hong Kong & Indonesia",
    description:
      "Expanded operations into Hong Kong and Indonesia to serve growing enterprise demand across the region.",
  },
  {
    year: "2024",
    title: "Entered Qatar & Malaysia",
    description:
      "Entered the Qatar and Malaysia markets, enhancing regional coverage and strengthening cybersecurity capabilities.",
  },
  {
    year: "2025",
    title: "250+ employees in 7 countries",
    description:
      "Grew to 250+ employees across 7 countries with advanced Network Operations and cybersecurity delivery at scale.",
  },
];

export default function JourneySection() {
  return (
    <section className="py-24 bg-white w-full">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-center text-2xl font-semibold mb-12"
        >
          A journey of innovation and impact
        </motion.h2>

        {/* SCROLLABLE LIST */}
        <motion.div
          className="max-h-[520px] overflow-y-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              variants={rowVariants}
              className="grid grid-cols-[80px_1fr_1.2fr] gap-6 py-8 border-b border-gray-200 items-start"
            >
              {/* YEAR */}
              <span className="text-red-500 font-semibold">
                {item.year}
              </span>

              {/* TITLE */}
              <h4 className="font-semibold text-gray-900">
                {item.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
