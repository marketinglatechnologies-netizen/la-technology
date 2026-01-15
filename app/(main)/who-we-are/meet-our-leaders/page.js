import InnerPageBanner from "@/components/layout/InnerPageBanner";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const items = [
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/images/about-us/team.jpg",
    align: "left",
  },
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/images/about-us/team2.jpg",
    align: "right",
  },
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/images/about-us/team3.jpg",
    align: "left",
  },
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/images/about-us/team4.jpg",
    align: "right",
  },
];

export default function OurTeam() {
  return (
    <main>
      <InnerPageBanner
        bgImage="/assets/images/about-us/meet-our-leaders-banner.jpg"
        title="The People Who Make It Happen"
        titleTag="h1"
        description={`A passionate team dedicated to building meaningful solutions.`}
      />

    
     <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
        
        {/* ===== Section Heading ===== */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Real stories from the team shaping our
            <br />
            culture and success.
          </h2>
        </div>

        {/* ===== Video Blocks ===== */}
        <div className="space-y-20">
          {items.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
            >
              {/* Video */}
              <div
                className={`relative rounded-2xl overflow-hidden ${
                  item.align === "right" ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={350}
                  className="w-full h-auto object-cover"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg">
                    ▶
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
<section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-2xl bg-gradient-to-r from-[#E53935] to-[#F68B2C] px-8 py-6 md:px-12 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* TEXT */}
          <p className="text-white font-semibold uppercase text-sm md:text-base tracking-wide text-center md:text-left">
            Driving digital growth with trusted technology solutions – <br className="hidden md:block" />
            reach out to us now
          </p>

          {/* BUTTON */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#E53935] font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Talk to an Expert
          </Link>

        </div>

      </div>
    </section>

    </main>
  );
}
