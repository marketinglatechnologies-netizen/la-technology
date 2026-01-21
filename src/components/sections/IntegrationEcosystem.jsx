"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* -------------------- DATA -------------------- */

const integrationEcosystemData = [
  {
    icon: "/assets/images/services/network-infrastructure/service1.png",
    title: "Switching/Routing",
    description: "Cisco, HPE/Aruba, Juniper, Extreme",
  },
  {
    icon: "/assets/images/services/network-infrastructure/service2.png",
    title: "Firewalls/Security",
    description: "Fortinet, Palo Alto, Check Point, Sophos",
  },
  {
    icon: "/assets/images/services/network-infrastructure/service3.png",
    title: "Wi-Fi/NAC",
    description: "Aruba, Cisco Meraki/Catalyst, Ruckus, FortiNAC",
  },
  {
    icon: "/assets/images/services/network-infrastructure/service4.png",
    title: "Monitoring",
    description: "SolarWinds, PRTG, Zabbix, NetFlow/sFlow tools",
  },
];

/* -------------------- COMPONENT -------------------- */

export default function IntegrationEcosystem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          className="text-2xl font-semibold text-gray-900 mb-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Integration Ecosystem (Representative)
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-gray-500 max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
        >
          We align to your current stack or recommend an optimal mix.
        </motion.p>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {integrationEcosystemData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-50 mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={26}
                  height={26}
                />
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
