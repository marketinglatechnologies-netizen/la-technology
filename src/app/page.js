import HomeHero from "@/components/sections/HomeHero";
import LogoSlider from "@/components/sections/LogoSlider";
import DynamicMasonryGrid from "@/components/ui/DynamicMasonryGrid";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const heroSlides = [
    {
      type: "image",
      src: "/assets/images/home/slider-1.jpg", // Based on your "Building Technology" mockup
      title: "Building Technology That Moves Business Forward",
      description:
        "We design and build scalable technology solutions <br /> that help brands grow, innovate, and succeed.",
      titleTag: "h1",
      descTag: "p",
      titleClassName: "lg:text-[40px] lg:tracking-[2%] lg:font-[700]",
    },
  ];

  const securityMedia = [
    "/assets/images/home/who-we-are-1.jpg", // Becomes the large left image
    "/assets/images/home/who-we-are-2.jpg", // Becomes top-right
    "/assets/images/home/who-we-are-3.jpg", // Becomes bottom-right
  ];

  return (
    <main>
      <section>
        <HomeHero slides={heroSlides} />
      </section>
      <section>
        <LogoSlider />
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 xl:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-15 ">
            {/* Left Side: Using the Common Masonry Component */}
            <div className="w-full lg:w-1/2">
              <DynamicMasonryGrid mediaPaths={securityMedia} />
            </div>

            {/* Right Side: Content Management */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 font-montserrat">
                Who We Are
              </h2>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  For 20+ years, we've secured enterprises with scalable,
                  intelligent solutions that mitigate risks, enable agility, and
                  drive growth. With global expertise, strong OEM partnerships,
                  and a consultative approach, we protect what matters most.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  More than a service provider we are your cybersecurity ally,
                  innovation enabler, and partner in progress.
                </p>
              </div>

              <Link
                href="/about"
                className="relative z-10 inline-flex items-center justify-center gap-3 bg-la-gradient px-10 py-3 rounded-xl font-normal shadow-xl hover:opacity-90 transition-all active:scale-95"
              >
                {/* icon with forced visibility */}
                <PhoneCall
                  size={20}
                  className="text-white fill-none stroke-white"
                  strokeWidth={2.5}
                />

                {/* text with forced visibility */}
                <span className="text-white leading-none">Know More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Rest of home components */}
    </main>
  );
}
