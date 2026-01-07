"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageTabsSection({
  heading,
  headingTag = "h2",
  tabs = [],
  defaultActive = 0,
}) {
  const [activeTab, setActiveTab] = useState(defaultActive);
  const HeadingTag = headingTag;

  if (!tabs.length) return null;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Dynamic Heading */}
        <HeadingTag className="text-2xl md:text-3xl text-gray-900 mb-12">
          {heading}
        </HeadingTag>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Tabs */}
          <div className="space-y-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left px-6 py-4 rounded-xl border transition
                  ${
                    activeTab === index
                      ? "bg-orange-50 border-orange-200 text-gray-900"
                      : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Image */}
          <div className="relative w-full h-[380px] rounded-2xl overflow-hidden">
            <Image
              src={tabs[activeTab].image}
              alt={tabs[activeTab].label}
              fill
              className="object-cover transition-opacity duration-300"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
