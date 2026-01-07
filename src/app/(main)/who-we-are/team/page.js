import InnerPageBanner from "@/components/layout/InnerPageBanner";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const stories = [
  {
    title: "Lorem ipsum dolor sit",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/assets/images/about-us/team1.jpg",
  },
  {
    title: "Lorem ipsum dolor sit",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/assets/images/about-us/team1.jpg",
  },
  {
    title: "Lorem ipsum dolor sit",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/assets/images/about-us/team1.jpg",
  },
];

export default function OurTeam() {
  return (
    <main>
      <InnerPageBanner
        bgImage="/assets/images/about-us/our-team-banner.jpg"
        title="The People Who Make It Happen"
        titleTag="h1"
        description={`A passionate team dedicated to building meaningful solutions.`}
      />

    
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2 className="text-center text-3xl font-semibold text-gray-900 mb-16">
          Real stories from the team shaping our <br />
          culture and success.
        </h2>

        {/* STORIES */}
        <div className="space-y-16">
          {stories.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* VIDEO THUMBNAIL */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover"
                />

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xl">
                  {item.desc}
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
