"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EightCards({
  heading,
  headingTag = "h2",
  items = [],
}) {
  const HeadingTag = headingTag;

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
          <HeadingTag className="text-2xl md:text-3xl text-center text-gray-900 mb-16 font-semibold">
            {heading}
          </HeadingTag>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25
              }
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
              <Card
                icon={item.icon}
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

function Card({ icon, title, description }) {
  return (
    <div className="flex flex-col items-left max-w-xs mx-auto">
      <div className="mb-4">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
        />
      </div>

      <h4 className="text-base text-gray-900 mb-2 text-left font-semibold">
        {title}
      </h4>

      <p className="text-sm text-gray-600 leading-relaxed text-left">
        {description}
      </p>
    </div>
  );
}


{/* <EightCards
  heading="What We Manage Across Multiple Branches"
  headingTag="h2"
  items={[
    {
      icon: "/icons/network.svg",
      title: "Network & Connectivity",
      description:
        "Broadband/MPLS/4G/5G links, SD-WAN, firewalls, VPNs, routing & switching.",
    },
    {
      icon: "/icons/wifi.svg",
      title: "Wi-Fi & Access",
      description:
        "Secure SSIDs (Corp/Guest), NAC policies, captive portal, bandwidth management.",
    },
    {
      icon: "/icons/endpoint.svg",
      title: "Endpoint & Server Ops",
      description:
        "Windows/macOS endpoints, POS devices, local servers, patching.",
    },
    {
      icon: "/icons/iam.svg",
      title: "Identity & Access Management",
      description:
        "AD/Azure AD, MFA, role-based access, password policies.",
    },
    {
      icon: "/icons/security-ops.svg",
      title: "Security Operations",
      description:
        "EDR/XDR, email security, DLP policies, web filtering, vulnerability management.",
    },
    {
      icon: "/icons/iot.svg",
      title: "Local Apps & IoT",
      description:
        "Printers, CCTV/NVR, IoT devices onboarding.",
    },
    {
      icon: "/icons/itsm.svg",
      title: "ITSM & Helpdesk",
      description:
        "Centralized ticketing for all branches with SLA tracking.",
    },
    {
      icon: "/icons/assets.svg",
      title: "Asset & License Governance",
      description:
        "Policy rollouts and audit readiness for every branch.",
    },
  ]}
/> */}

