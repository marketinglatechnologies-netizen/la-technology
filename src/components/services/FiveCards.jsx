"use client";

import Image from "next/image";

export default function FiveCards({
  heading,
  headingTag = "h2",
  items = [],
}) {
  const HeadingTag = headingTag;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <HeadingTag className="text-2xl md:text-3xl text-center text-gray-900 mb-16 font-semibold">
          {heading}
        </HeadingTag>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          
          {/* First 3 cards */}
          {items.slice(0, 3).map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}

          {/* Bottom row wrapper (centers 2 cards) */}
          <div className="lg:col-span-3 flex justify-center gap-12">
            {items.slice(3, 5).map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, description }) {
  return (
    <div className="flex flex-col items-left text-left max-w-xs">
      <div className="mb-4">
        <Image src={icon} alt={title} width={48} height={48} />
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


//To be used in pages

{/* <FiveCards
  heading="Our NOC Service Models"
  headingTag="h2"
  items={[
    {
      icon: "/icons/maas.svg",
      title: "MaaS (Monitoring-as-a-Service)",
      description:
        "24×7 monitoring and escalation for critical systems and infrastructure.",
    },
    {
      icon: "/icons/manage.svg",
      title: "Manage",
      description:
        "Level 1, 2 & 3 resolution staff for comprehensive issue handling.",
    },
    {
      icon: "/icons/agile-pod.svg",
      title: "Agile Pod",
      description:
        "Dedicated NOC team with Level 2 & 3 technical personnel tailored to your needs.",
    },
    {
      icon: "/icons/rsa.svg",
      title: "RSA (Remote System Administration)",
      description:
        "Remote administration and migration support for project-based requirements.",
    },
    {
      icon: "/icons/business-continuity.svg",
      title: "Managed Business Continuity",
      description:
        "24×7 managed data protection and disaster recovery services.",
    },
  ]}
/> */}
