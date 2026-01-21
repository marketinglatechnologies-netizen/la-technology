"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const whatWeDeliverData = [
  {
    title: "Network Architecture & Design",
    image: "/assets/images/services/network-infrastructure/network.png",
    points: [
      "Site surveys, topology design (LAN/WAN), IP scheme and VLAN planning",
      "Network segmentation for users, servers, IoT, and OT environments",
      "High availability design (redundant links, failover, VRRP/HSRP)",
    ],
  },
  {
    title: "Routing, Switching & Firewalls",
    image: "/assets/images/services/network-infrastructure/routing.png",
    points: [
      "Core/distribution/access switching with QoS and ACLs",
      "Dynamic routing (OSPF/BGP) and policy-based routing",
      "Next-gen firewall deployment with IPS, application control, and VPN",
    ],
  },
  {
    title: "Secure Wi-Fi",
    image: "/assets/images/services/network-infrastructure/wifi.png",
    points: [
      "Enterprise Wi-Fi planning (coverage maps, capacity, RF optimization)",
      "Role-based SSIDs (corporate/guest), captive portals, bandwidth management",
      "802.1X/NAC enforcement and device onboarding controls",
    ],
  },
  {
    title: "WAN & Branch Connectivity",
    image: "/assets/images/services/network-infrastructure/wan.png",
    points: [
      "Broadband/MPLS/4G/5G integration with path redundancy",
      "SD-WAN design for intelligent link selection and policy-based traffic steering",
      "Centralized configuration and templates for multi-site rollout",
    ],
  },
  {
    title: "Data Center & Server Room",
    image: "/assets/images/services/network-infrastructure/data.png",
    points: [
      "Rack layout, structured cabling, power and environmental standards",
      "Core switch/firewall clustering, link aggregation, segmentation",
      "Network services (DHCP/DNS/NTP), logging and time sync baselines",
    ],
  },
  {
    title: "Network Access Control (NAC)",
    image: "/assets/images/services/network-infrastructure/nac.png",
    points: [
      "Identity-based access (802.1X/MAB), posture checks, guest workflows",
      "Device profiling for endpoints, printers, CCTV, POS, and OT devices",
    ],
  },
  {
    title: "Monitoring & Observability",
    image: "/assets/images/services/network-infrastructure/monitoring.png",
    points: [
      "NMS setup (SNMP/Flow), health dashboards, alerts, and runbooks",
      "Link performance, utilization trends, and SLA reporting",
      "Config backup, compliance checks, and change tracking",
    ],
  },
  {
    title: "Security Hardening & Policies",
    image: "/assets/images/services/network-infrastructure/security.png",
    points: [
      "Standardized configurations, least privilege, and admin access control",
      "VPN standards (site-to-site/remote), key rotation, and logging",
      "Incident response playbooks aligned to network events",
    ],
  },
];

export default function WhatWeDeliver() {
  return (
  <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          className="text-xl font-semibold text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What We Deliver
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.18 },
            },
          }}
        >
          {whatWeDeliverData.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-orange-300 bg-white p-5 flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Image */}
              <div className="mb-4 h-32 w-full overflow-hidden rounded-lg relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-orange-600 mb-3">
                {item.title}
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-2 text-sm text-gray-600">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
