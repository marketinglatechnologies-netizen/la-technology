"use client";

import { useState } from "react";
import Link from "next/link";

const servicesData = {
  "Managed Services": [
    {
      title: "SOC-as-a-Service",
      description: "Stay Ahead of Cyber Threats with 24/7 Security Monitoring",
      icon: "/assets/images/home/icon1.png",
      link: "/services/managed-services/soc-as-service", // Example link
    },
    {
      title: "NOC-as-a-Service",
      description: "Scale Your IT Operations Without Increasing Overhead",
      icon: "/assets/images/home/icon2.png",
      link: "/services/managed-services/noc-as-service", // Example link
    },
    {
      title: "Infrastructure Managed Services",
      description:
        "Optimize, Secure, and Scale Your IT Environment Efficiently",
      icon: "/assets/images/home/icon3.png",
      link: "/services/managed-services/infra-managed-services", // Example link
    },
    {
      title: "Managed Security Services",
      description: "Comprehensive Protection for Your Digital Assets",
      icon: "/assets/images/home/icon4.png",
      link: "/services/managed-services/managed-security-services", // Example link
    },
    {
      title: "Managed Broadband + SDWAN",
      description: "End-to-End IT Support for Your Business with Scalable Technology Management",
      icon: "/assets/images/home/icon6.png",
      link: "/services/managed-services/managed-broadband-sdwan", // Example link
    },
     {
      title: "IT Branch Operations",
      description: "End-to-End IT Support for Your Business with Scalable Technology Management",
      icon: "/assets/images/home/it.png",
      link: "/services/managed-services/it-branch-operations", // Example link
    },
    {
      title: "IT Staff Augmentation",
      description: "Scale Your Team Efficiently with Certified IT Experts",
      icon: "/assets/images/home/icon5.png",
      link: "/services/managed-services/it-staff-augmentation", // Example link
    },
    // {
    //   title: "Facility Management Services",
    //   description: "End-to-End IT Support for Your Business with Scalable Technology Management",
    //   icon: "/assets/images/home/icon6.png",
    //   link: "/services/managed-services/facility-management", // Example link
    // },
     {
      title: "Security Assessment",
      description: "End-to-End IT Support for Your Business with Scalable Technology Management",
      icon: "/assets/images/home/security.png",
      link: "/services/managed-services/security-assessment", // Example link
    },
  ],
  "Cyber Security & IT Infra Services": [
     {
      title: "Data Security",
      description: "Protecting Your Data Across All Platforms",
      icon: "/assets/images/home/data.png",
      link: "/services/cyber-security-&-it-infra-services/data-security",
    },
    {
      title: "Endpoint Security",
      description: "Comprehensive Security for All Devices",
      icon: "/assets/images/home/endpoint.png",
      link: "/services/cyber-security-&-it-infra-services/endpoint-security",
    },
     {
      title: "Network Security",
      description: "Comprehensive Security for All Devices",
      icon: "/assets/images/home/network.png",
      link: "/services/cyber-security-&-it-infra-services/network-security",
    },
     {
      title: "Application Security",
      description: "Modern and Secure Application Development",
      icon: "/assets/images/home/application.png",
      link: "/services/cyber-security-&-it-infra-services/application-security",
    },
    {
      title: "Cloud Security",
      description: "Secure and Scalable Cloud Infrastructure",
      icon: "/assets/images/home/icon1.png",
      link: "/services/cyber-security-&-it-infra-services/cloud-security",
    },
    // {
    //   title: "Data Center Build",
    //   description: "Robust and Efficient Data Center Construction",
    //   icon: "/assets/images/home/icon3.png",
    //   link: "/services/cyber-security-&-it-infra-services/data-center-build",
    // },
     {
      title: "Network Infrastructure ",
      description: "Next-Gen Network Infrastructure Solutions",
      icon: "/assets/images/home/icon4.png",
      link: "/services/cyber-security-&-it-infra-services/network-infrastructure",
    },
    {
      title: "Data Center Solutions",
      description: "Comprehensive Data Center Management Solutions",
      icon: "/assets/images/home/data1.png",
      link: "/services/cyber-security-&-it-infra-services/data-center-solutions",
    },
  ],

  "OT Security": [
    {
      title: "ICS & SCADA Security",
      description: "Protect Industrial Control Systems",
      icon: "/assets/images/home/icon1.png",
      link: "/services/ot-services/ics-scada-security", // Correct link path
    },
    {
      title: "Asset Discovery",
      description: "Discover OT Assets in Your Network",
      icon: "/assets/images/home/icon2.png",
      link: "/services/ot-services/asset-discovery",
    },
    {
      title: "Network Segmentation",
      description: "Segment Your OT Network for Security",
      icon: "/assets/images/home/icon3.png",
      link: "/services/ot-services/network-segmentation",
    },
    {
      title: "Threat Detection & Incident Response",
      description: "Detect and Respond to OT Threats",
      icon: "/assets/images/home/icon4.png",
      link: "/services/ot-services/threat-detection-incident-response", // Correct link path
    },
    {
      title: "OT Endpoint Protection",
      description: "Secure OT Devices and Endpoints",
      icon: "/assets/images/home/network.png",
      link: "/services/ot-services/ot-endpoint-protection", // Correct link path
    },
    {
      title: "Compliance for OT",
      description: "Ensure Compliance for OT Environments",
      icon: "/assets/images/home/icon6.png",
      link: "/services/ot-services/compliance-for-ot",
    },
     {
      title: "Secure Remote Access",
      description: "Secure Remote Access for OT Environments",
      icon: "/assets/images/home/data1.png",
      link: "/services/ot-services/secure-remote-access",
    },
    {
      title: "OT Privileged Access Management",
      description: "Manage Privileged Access in OT Environments",
      icon: "/assets/images/home/icon6.png",
      link: "/services/ot-services/ot-privileged-access-management",
    },
  ],
};

const tabs = Object.keys(servicesData);

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-15 bg-[#FFF6E9]">
      <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-10">
          Delivering value through execution.
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-medium border transition cursor-pointer
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#E11D48] to-[#F97316] text-white"
                    : "bg-[#FFF6E9] text-black border border-black"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData[activeTab].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-15 h-15 mb-4 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-15 h-15"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-6">
                {service.description}
              </p>

              {/* CTA */}
              <Link href={service.link}>
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E11D48] to-[#F97316] text-white text-sm px-4 py-2 rounded-md transition">
                  <img
                    src="/assets/images/home/send.svg"
                    alt={service.title}
                    className="w-5 h-5"
                  />
                  <span>Check Details</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
