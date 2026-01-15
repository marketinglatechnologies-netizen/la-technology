import InnerPageBanner from "@/components/layout/InnerPageBanner";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const csrPillarsData = [
  {
    id: 1,
    image: "/assets/images/insights/digital.jpg",
    title: "Digital Literacy & Education",
    description:
      "We conduct workshops and bootcamps to equip students and professionals with essential cybersecurity and IT skills.",
  },
  {
    id: 2,
    image: "/assets/images/insights/community.jpg",
    title: "Community Development",
    description:
      "Supporting local initiatives that foster skill development, employment opportunities, and inclusive growth.",
  },
  {
    id: 3,
    image: "/assets/images/insights/green-it.jpg",
    title: "Sustainability & Green IT",
    description:
      "Advocating eco-friendly practices in technology deployment and operations to reduce environmental impact.",
  },
  {
    id: 4,
    image: "/assets/images/insights/social.jpg",
    title: "Social Impact Projects",
    description:
      "Collaborating with NGOs and educational institutions to bridge the digital divide and promote equal access to technology.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/insights/csr-banner.jpg"
          title="Technology with a Purpose. Impact that Matters.         "
          titleTag="h1"
          description={`At LA Technologies, we believe in creating value beyond business. Our CSR initiatives focus on empowering communities, promoting education, and driving sustainable development through technology.`}
        />
      </div>
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
            Our CSR Pillars
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {csrPillarsData.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-xl border border-gray-200
                         shadow-sm hover:shadow-md transition overflow-hidden"
              >
                {/* Image */}
                <div className="h-36 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="flex flex-col md:flex-row items-start md:items-center
                     justify-between gap-6
                     rounded-2xl px-8 py-8
                     bg-gradient-to-r from-[#E11D48] to-[#F97316]"
          >
            {/* Left Content */}
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold mb-2">
                WHY CSR MATTERS TO US
              </h3>

              <p className="text-white/90 text-sm md:text-base max-w-2xl">
                We see technology as a tool for positive change. Our goal is to
                empower individuals, strengthen communities, and contribute to a
                sustainable future.
              </p>
            </div>

            {/* CTA Button */}
            <button
              className="shrink-0 bg-white text-[#E11D48]
                       text-sm font-medium
                       px-6 py-3 rounded-lg
                       hover:bg-white/90 transition"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
