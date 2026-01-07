"use client";

export default function FourBoxSection({
  heading,
  headingTag = "h2",
  items = [],
}) {
  const HeadingTag = headingTag;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <HeadingTag className="text-2xl md:text-3xl text-center text-gray-900 mb-16">
          {heading}
        </HeadingTag>

        {/* Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <Box
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function Box({ title, description }) {
  return (
    <div className="border border-orange-300 rounded-2xl px-6 py-8 text-center">
      <h4 className="text-base font-semibold text-gray-900 mb-4">
        {title}
      </h4>

      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

{/* <FourBoxSection
  heading="Why Network Infrastructure Matters"
  headingTag="h2"
  items={[
    {
      title: "Performance & Uptime",
      description:
        "Poorly designed networks cause latency, packet loss, and outages that impact business.",
    },
    {
      title: "Security & Segmentation",
      description:
        "Flat networks and weak policies expose critical systems to threats.",
    },
    {
      title: "Scalability Across Locations",
      description:
        "New branches and upgrades demand standardized designs and predictable rollouts.",
    },
    {
      title: "Operational Visibility",
      description:
        "Proactive monitoring and clear network baselines reduce firefighting.",
    },
  ]}
/> */}

