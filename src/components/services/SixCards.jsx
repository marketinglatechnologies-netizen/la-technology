"use client";

import Image from "next/image";

export default function SixCards({
  heading,
  headingTag = "h2",
  items = [],
}) {
  const HeadingTag = headingTag;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <HeadingTag className="text-2xl md:text-3xl text-left text-gray-900 mb-16">
          {heading}
        </HeadingTag>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 text-center">
          {items.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function Card({ icon, title, description }) {
  return (
    <div className="flex flex-col items-left max-w-sm mx-auto">
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

{/* <SixCards
  heading="Our Managed Security Services Include"
  headingTag="h2"
  items={[
    {
      icon: "/icons/threat-monitoring.svg",
      title: "Threat Monitoring & Detection",
      description:
        "Real-time monitoring of networks, endpoints, and cloud environments using advanced SIEM tools.",
    },
    {
      icon: "/icons/incident-response.svg",
      title: "Incident Response & Remediation",
      description:
        "Rapid containment and resolution of security incidents to minimize downtime and damage.",
    },
    {
      icon: "/icons/firewall.svg",
      title: "Firewall & Network Security Management",
      description:
        "Configuration, monitoring, and optimization of firewalls, IDS/IPS, and VPNs.",
    },
    {
      icon: "/icons/endpoint.svg",
      title: "Endpoint Protection",
      description:
        "Advanced antivirus, EDR, and patch management for endpoints.",
    },
    {
      icon: "/icons/vulnerability.svg",
      title: "Vulnerability Management",
      description:
        "Regular scans and remediation to eliminate weaknesses before attackers exploit them.",
    },
    {
      icon: "/icons/compliance.svg",
      title: "Compliance & Reporting",
      description:
        "Support for GDPR, HIPAA, PCI DSS, ISO 27001 through detailed logs and audit-ready reports.",
    },
  ]}
/> */}
