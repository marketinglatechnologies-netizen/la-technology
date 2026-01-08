"use client";

const journeyData = [
  {
    year: "2003",
    title: "Founded LA Technologies Pvt Ltd.",
    description:
      "Officially began operations in India with a vision to deliver technology-driven, business-empowering solutions.",
    icon: "/assets/images/about-us/2003.png",
  },
  {
    year: "2006",
    title: "3,000+ Cisco-trained, 35 CCIEs nurtured",
    description:
      "Built one of the strongest Cisco talent pools with 3,000+ trained engineers and over 35 CCIE-certified professionals.",
    icon: "/assets/images/about-us/2006.png",
  },
  {
    year: "2014",
    title: "200+ clientele with global OEM alliances",
    description:
      "Formed strategic partnerships with leading technology providers including Cisco, Juniper, Avaya, APC, Polycom, and Fortinet.",
    icon: "/assets/images/about-us/2014.png",
  },
  {
    year: "2016",
    title: "Shift to managed services (ARR)",
    description:
      "Transitioned to a recurring, services-led business approach focused on customer longevity and operational continuity.",
    icon: "/assets/images/about-us/2016.png",
  },
  {
    year: "2018",
    title: "Dedicated Security & Cybersecurity focus",
    description:
      "Established a dedicated cybersecurity practice to support enterprise protection, compliance, and threat defense.",
    icon: "/assets/images/about-us/2016.png",
  },
  {
    year: "2020",
    title: "International expansion: Singapore & Dubai",
    description:
      "Launched regional presence in Singapore and Dubai, marking the first phase of the company’s global footprint.",
    icon: "/assets/images/about-us/2016.png",
  },
  {
    year: "2022",
    title: "Expansion: Hong Kong & Indonesia",
    description:
      "Expanded operations into Hong Kong and Indonesia to serve growing enterprise demand across the region.",
    icon: "/assets/images/about-us/2016.png",
  },
  {
    year: "2024",
    title: "Entered Qatar & Malaysia",
    description:
      "Entered the Qatar and Malaysia markets, enhancing regional coverage and strengthening cybersecurity capabilities.",
    icon: "/assets/images/about-us/2016.png",
  },
  {
    year: "2025",
    title: "250+ employees in 7 countries",
    description:
      "Grew to 250+ employees across 7 countries with advanced Network Operations and cybersecurity delivery at scale.",
    icon: "/assets/images/about-us/2014.png",
  },
];

export default function JourneySection() {
  return (
    <section className="py-24 bg-white w-full">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-2xl font-semibold mb-12">
          A journey of innovation and impact
        </h2>

        {/* SCROLLABLE LIST (FULL WIDTH, NO BOX) */}
        <div className="max-h-[520px] overflow-y-auto">

          {journeyData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[60px_80px_1fr_1.2fr] gap-6 py-8 border-b border-gray-200 items-start"
            >
              {/* ICON */}
              <img
                src={item.icon}
                alt={item.year}
                className="w-10 h-10 object-contain"
              />

              {/* YEAR */}
              <span className="text-red-500 font-semibold">
                {item.year}
              </span>

              {/* TITLE */}
              <h4 className="font-semibold text-gray-900">
                {item.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
