import HomeHero from "@/components/sections/HomeHero";
import ServicesSection from "@/components/home/ServicesSection";
import LogoSlider from "@/components/sections/LogoSlider";
import DynamicMasonryGrid from "@/components/ui/DynamicMasonryGrid";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import TestimonialsSection from "@/components/home/testimonials";
import dynamic from "next/dynamic";
import VendorLogo from "@/components/home/vendorslogo";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import IndustryGrid from "@/components/sections/IndustrySection";

export default function HomePage() {
  const caseStudies = [
    {
      title: "Secure Digital Banking Transformation Using Netskope",
      image: "/assets/images/home/case1.png",
      link: "/case-studies/secure-digital-banking-netskope",
    },
    {
      title: "Pan-India Power Manufacturing OT Cybersecurity Transformation",
      image: "/assets/images/home/case2.png",
      link: "/case-studies/pan-india-power-manufacturing",
    },
    {
      title: "Authentication IoT Security Enhancement for Smart Devices",
      image: "/assets/images/home/case3.png",
      link: "/case-studies/iot-security-enhancement",
    },
    {
      title: "Authentication IoT Security Enhancement for Smart Devices",
      image: "/assets/images/home/case4.png",
      link: "/case-studies/iot-security-enhancement-2",
    },
  ];

  const heroSlides = [
    {
      type: "image",
      src: "/assets/images/home/home-banner.jpg", // Based on your "Building Technology" mockup
      title: "Redefining Cybersecurity with Innovative, Future-Ready Solutions",
      description:
        "We Design and Implement Cybersecurity Solutions to Scale Businesses ",
      titleTag: "h1",
      descTag: "p",
      titleClassName: "lg:text-[40px] lg:tracking-[2%] lg:font-[700]",
    },
  ];

  const securityMedia = [
    "/assets/images/home/home1.jpg", // Becomes the large left image
    "/assets/images/home/home2.jpg", // Becomes top-right
    "/assets/images/home/home3.jpg", // Becomes bottom-right
  ];

  const industriesData = {
    sectionTitle: "Empowering Every Industry With Secure Innovation",
    items: [
      {
        id: "banks",
        title: "Banks",
        image: "/assets/images/home/bank.png",
      },
      {
        id: "financial-institutions",
        title: "Financial Institutions",
        image: "/assets/images/home/financial-institute.png",
      },
      {
        id: "manufacturing",
        title: "Manufacturing",
        image: "/assets/images/home/manufacturing.png",
      },
      {
        id: "pharma-healthcare",
        title: "Pharma & Health Care",
        image: "/assets/images/home/pharma.png",
      },
      {
        id: "media",
        title: "Media",
        image: "/assets/images/home/media.png",
      },
      {
        id: "ites",
        title: "ITES",
        image: "/assets/images/home/ites.png",
      },
    ],
  };

  return (
    <>
      <section>
        <HomeHero slides={heroSlides} />
      </section>
      <section>
        <LogoSlider />
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
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
      <ServicesSection />
      <section className="py-20">
        <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10">
                Why Industry Leaders <br /> Trust us
              </h2>

              <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex gap-5">
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <img
                      src="assets/images/home/industry.png"
                      alt="Unmatched Industry Knowledge"
                      className="w-12 h-12 object-contain"
                  />
                </div>
              <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                 Unmatched Industry Knowledge
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                  Partnering with us means working with a team that prioritizes your
                  growth, security, and long-term success.
              </p>
            </div>
          </div>

                {/* Item 2 */}
  <div className="flex gap-5">
    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
      <img
        src="assets/images/home/solution.png"
        alt="Comprehensive Solutions"
        className="w-12 h-12 object-contain"
      />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 mb-1">
        Comprehensive Solutions
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        From infrastructure to cybersecurity, we provide end-to-end services
        under one roof.
      </p>
    </div>
  </div>

                {/* Item 3 */}
    <div className="flex gap-5">
    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
      <img
        src="assets/images/home/innovation.png"
        alt="Future-Ready Innovation"
        className="w-12 h-12 object-contain"
      />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 mb-1">
        Future-Ready Innovation
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        We adopt emerging technologies to ensure your business stays
        competitive and resilient.
      </p>
    </div>
  </div>

                {/* Item 4 */}
  <div className="flex gap-5">
    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
      <img
        src="assets/images/home/excellence.png"
        alt="Commitment to Excellence"
        className="w-12 h-12 object-contain"
      />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 mb-1">
        Commitment to Excellence
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        Our client-first approach guarantees reliable support, measurable
        outcomes, and lasting partnerships.
      </p>
    </div>
  </div>
</div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative">
              <div className="flex gap-5">
                <img src="/assets/images/home/industry-leader.png" />
              </div>
              {/* Top small image */}
              <div className="absolute -top-10 left-0 p-2 hidden">
                <img
                  src="/assets/images/home/industry1.png"
                  alt="20+ Years Experience"
                  className="rounded-xl w-48"
                />
              </div>

              {/* Bottom image */}
              <div className="absolute -bottom-8 left-12  p-2 hidden">
                <img
                  src="/assets/images/home/industry2.png"
                  alt="Cybersecurity Laptop"
                  className="rounded-xl w-64"
                />
              </div>

              {/* Main image */}
              <div className="ml-auto w-[360px] p-3 hidden">
                <img
                  src="/assets/images/home/industry3.png"
                  alt="Cyber Security Shield"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

       <IndustryGrid data={industriesData} />

      <section className="bg-[#FFF7EB] py-20">
        <div className="max-w-7xl mx-auto bg-white lg:px-6 md:px-6 px-4 py-16">
          <h2 className="text-center text-2xl lg:text-3xl font-semibold text-gray-900 mb-12">
            Delivering value through execution.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((item, index) => (
              <Link key={index} href={item.link} className="group block">
                <div
                  className="relative overflow-hidden rounded-2xl
                       w-full h-[auto] lg:h-[360px] mx-auto"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-20">
        <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
          {/* Section Heading */}
          <h2 className="text-center text-2xl lg:text-3xl font-semibold text-gray-900 mb-12">
            Insights, ideas, and updates from our team.
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                date: "Dec 4",
                title: "Cybersecurity Best Practices",
                description:
                  "Tips to protect your business from evolving threats.",
                image: "/assets/images/home/insight1.png",
              },
              {
                date: "Dec 4",
                title: "Cybersecurity Best Practices",
                description:
                  "Tips to protect your business from evolving threats.",
                image: "/assets/images/home/insight2.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#FFF3E0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[240px] object-cover"
                  />

                  {/* Date Ribbon */}
                  <div className="absolute top-0 left-4">
                    <div className="relative">
                      <img
                        src="/assets/images/home/flag.png" // your image path
                        alt="Date badge"
                        className="w-15 h-auto"
                      />
                      <span className="absolute inset-0 flex items-center  -translate-y-3 justify-center text-white text-sm font-semibold">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex items-center justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>

                  {/* CTA Button */}
                  <button
                    className="shrink-0 w-11 h-11 rounded-xl
                         bg-gradient-to-r from-[#E11D48] to-[#F97316]
                         flex items-center justify-center
                         text-white hover:opacity-90 transition"
                    aria-label="Read more"
                  >
                    <img src="/assets/images/home/send.svg" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VendorLogo />

      <GradientCtaBanner
        text="DRIVING DIGITAL GROWTH WITH TRUSTED TECHNOLOGY SOLUTIONS- REACH OUT TO US NOW"
        buttonText="Talk to an Expert"
        iconSrc="/assets/images/home/phone.svg"
      />

      <section className="py-20 hidden">
        <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
          <div
            className="flex flex-col lg:flex-row items-center justify-between gap-6
                    bg-gradient-to-r from-[#E11D48] to-[#F97316]
                    rounded-3xl px-8 lg:px-12 py-8"
          >
            {/* Text */}
            <h2 className="text-white text-lg lg:text-xl font-semibold leading-snug text-center lg:text-left">
              DRIVING DIGITAL GROWTH WITH TRUSTED TECHNOLOGY
              <br className="hidden lg:block" />
              SOLUTIONS- REACH OUT TO US NOW
            </h2>

            {/* CTA Button */}
            <button
              className="shrink-0 inline-flex items-center gap-2
             text-[var(--la-orange)] bg-white
             text-sm font-medium
             px-6 py-3 rounded-lg
             hover:bg-gray-100 transition"
            >
              <img
                src="/assets/images/home/phone.svg"
                alt="Phone"
                className="w-4 h-4"
              />
              <span>Talk to an Expert</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
