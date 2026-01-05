"use client";

import { useState } from "react";

const servicesData = {
  "Managed Services": [
    {
      title: "SOC-as-a-Service",
      description: "Stay Ahead of Cyber Threats with 24/7 Security Monitoring",
      icon: "/assets/images/home/icon1.png",
    },
    {
      title: "NOC-as-a-Service",
      description: "Scale Your IT Operations Without Increasing Overhead",
      icon: "/assets/images/home/icon2.png",
    },
    {
      title: "Infrastructure Managed Services",
      description: "Optimize, Secure, and Scale Your IT Environment Efficiently",
      icon: "/assets/images/home/icon3.png",
    },
    {
      title: "Managed Security Services",
      description: "Comprehensive Protection for Your Digital Assets",
      icon: "/assets/images/home/icon4.png",
    },
    {
      title: "IT Staff Augmentation",
      description: "Scale Your Team with Certified IT Experts",
      icon: "/assets/images/home/icon5.png",
    },
    {
      title: "Facility Management Services",
      description: "End-to-End IT Support for Your Business",
      icon: "/assets/images/home/icon6.png",
    },
  ],
  "Technology Services": [
    {
      title: "Cloud Services",
      description: "Secure and Scalable Cloud Infrastructure",
      icon: "/assets/images/home/icon5.png",
    },
    {
      title: "Application Services",
      description: "Modern and Secure Application Development",
      icon: "/assets/images/home/icon6.png",
    },
  ],
  "OT Security": [
    {
      title: "ICS & SCADA Security",
      description: "Protect Industrial Control Systems",
      icon: "/assets/images/home/icon6.png", 
    },
    {
      title: "OT Endpoint Protection",
      description: "Secure OT Devices and Endpoints",
      icon: "/assets/images/home/icon6.png",
    },
  ],
};

const tabs = Object.keys(servicesData);

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-15 bg-[#FFF6E9]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 xl:px-0">
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
              className={`px-6 py-2 rounded-lg text-sm font-medium border transition
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
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E11D48] to-[#F97316] text-white text-sm px-4 py-2 rounded-md transition">
                <img
                  src="/assets/images/home/send.svg"
                  alt={service.title}
                  className="w-5 h-5"
                />
                <span>Check Details</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
