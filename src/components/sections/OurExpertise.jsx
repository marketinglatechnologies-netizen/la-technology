"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurExpertise() {
  const expertiseData = [
    {
      title: "Certified Data Center Design Professionals (CDCDP)",
      image: "/assets/images/services/data-center-solutions/expertise1.png",
    },
    {
      title: "RCDD-certified cabling experts with experience",
      image: "/assets/images/services/data-center-solutions/expertise2.png",
    },
    {
      title: "Experienced project managers and infrastructure engineers",
      image: "/assets/images/services/data-center-solutions/expertise3.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          className="text-3xl font-semibold mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Expertise
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              className="mx-auto w-[320px]"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">

                {/* Image */}
                <div className="relative h-[180px] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <div className="p-6">
                  <h3 className="text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
