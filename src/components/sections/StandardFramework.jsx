"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StandardsFrameworks() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          className="text-2xl font-semibold text-gray-900 mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Standards & Frameworks We Align To
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {[
            {
              img: "/assets/images/services/security-assessment/nist.png",
              title: "NIST Cybersecurity Framework (CSF)",
            },
            {
              img: "/assets/images/services/security-assessment/iso.png",
              title: "ISO/IEC 27001 (controls and audit readiness)",
            },
            {
              img: "/assets/images/services/security-assessment/iec.png",
              title: "IEC 62443 (for industrial/OT environments)",
            },
            {
              img: "/assets/images/services/security-assessment/cert.png",
              title: "CERT-In advisories (India-specific guidance)",
            },
            {
              img: "/assets/images/services/security-assessment/oem.png",
              title:
                "OEM Best Practices (firewalls, endpoints & network gear)",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm font-semibold">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
