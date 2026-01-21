"use client";
import React from "react";
import { motion } from "framer-motion";


export default function AssessmentScope() {
const items = [
  {
    title: "Network Security",
    image: "/assets/images/services/security-assessment/network.png",
    points: [
      "Firewall rules, segmentation, VPN configurations",
      "Routing/switching baselines, remote access policies",
      "IDS/IPS policies, logging and alerting coverage",
    ],
  },
  {
    title: "Endpoint & Server Security",
    image: "/assets/images/services/security-assessment/endpoint.png",
    points: [
      "Patch status, AV/EDR, hardening baselines",
      "Local admin usage, removable media, application control",
      "Backup integrity and restoration drill readiness",
    ],
  },
  {
    title: "Identity & Access",
    image: "/assets/images/services/security-assessment/identity.png",
    points: [
      "AD/Azure AD hygiene (users, groups, roles)",
      "MFA usage, privileged access controls",
      "Password policies and account lifecycle processes",
    ],
  },
  {
    title: "Email & Web Security",
    image: "/assets/images/services/security-assessment/email.png",
    points: [
      "Anti-phishing, anti-malware",
      "SPF/DKIM/DMARC",
      "DLP policies, web filtering, safe browsing controls",
    ],
  },
  {
    title: "OT / Industrial Security (if applicable)",
    image: "/assets/images/services/security-assessment/ot.png",
    points: [
      "Network segmentation between IT/OT",
      "Remote vendor access governance and jump hosts",
      "Asset inventory, firmware status, protocol exposure",
      "Safety-critical change controls and maintenance procedures",
    ],
  },
  {
    title: "Physical & Environmental",
    image: "/assets/images/services/security-assessment/physical.png",
    points: [
      "Access controls, surveillance, secure racks and wiring",
      "Device labeling, asset custody, visitor/vendor processes",
    ],
  },
  {
    title: "Policies & Governance",
    image: "/assets/images/services/security-assessment/policy.png",
    points: [
      "Security policies, SOPs, incident response runbooks",
      "Roles & responsibilities, training & awareness",
      "Evidence collection and audit readiness",
    ],
  },
];

return (
      <section className="max-w-7xl mx-auto px-8 py-6">

      {/* Heading */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-semibold">Assessment Scope</h2>
        <p className="text-gray-500 mt-2">
          We tailor the assessment to your environment and priorities.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.22 } }
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="border border-orange-400 rounded-xl p-6 bg-white"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h4 className="text-orange-500 font-semibold mb-3">
              {item.title}
            </h4>

            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
              {item.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}

