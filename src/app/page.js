import HomeHero from "@/components/sections/HomeHero";
import ServicesSection from "@/components/home/ServicesSection";
import LogoSlider from "@/components/sections/LogoSlider";
import DynamicMasonryGrid from "@/components/ui/DynamicMasonryGrid";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import TestimonialsSection from "@/components/home/testimonials";
import { getAllBlogs } from "@/lib/getBlogs";
import dynamic from "next/dynamic";
import VendorLogo from "@/components/home/vendorslogo";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import IndustryGrid from "@/components/home/IndustryHome";
import PageWrapper from "@/components/services/PageWrapper";
import { sanityClient } from "@/lib/sanityClient";

export default async function HomePage() {
  const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] 
  | order(isFeatured desc, sortOrder asc, publishedAt desc) {
    _id,
    quote,
    personName,
    personTitle,
    companyName,
    "imageUrl": personImage.asset->url
  }
`;

  const testimonials = await sanityClient.fetch(TESTIMONIALS_QUERY);

  const blogs = getAllBlogs().slice(0,2);
  
  const caseStudies = [
    {
      title: "Secure Digital Banking Transformation Using Netskope",
      image: "/assets/images/home/case1.jpg",
      link: "/case-studies/secure-digital-banking-netskope",
    },
    {
      title: "Pan-India Power Manufacturing OT Cybersecurity Transformation",
      image: "/assets/images/home/case2.jpg",
      link: "/case-studies/pan-india-power-manufacturing",
    },
    {
      title: "Authentication IoT Security Enhancement for Smart Devices",
      image: "/assets/images/home/case3.jpg",
      link: "/case-studies/iot-security-enhancement",
    },
    {
      title: "Authentication IoT Security Enhancement for Smart Devices",
      image: "/assets/images/home/case4.jpg",
      link: "/case-studies/iot-security-enhancement-2",
    },
  ];

  const heroSlides = [
  {
    type: "video",
    desktopSrc: "/assets/videos/hero-desktop.mp4",
    mobileSrc: "/assets/videos/hero-mobile.mp4",
    // title: "Redefining Cybersecurity with Innovative, Future-Ready Solutions",
    // description: "We Design and Implement Cybersecurity Solutions to Scale Businesses",
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
        image: "/assets/images/home/bank1.jpg",
      },
      {
        id: "financial-institutions",
        title: "Financial Institutions",
        image: "/assets/images/home/financial1.jpg",
      },
      {
        id: "manufacturing",
        title: "Manufacturing",
        image: "/assets/images/home/manufacturing1.jpg",
      },
      {
        id: "pharma-healthcare",
        title: "Pharma & Health Care",
        image: "/assets/images/home/pharma1.jpg",
      },
      {
        id: "media",
        title: "Media",
        image: "/assets/images/home/media1.jpg",
      },
      {
        id: "ites",
        title: " IT/ITES",
        image: "/assets/images/home/ites1.jpg",
      },
      {
        id: "service providers",
        title: "Service Providers",
        image: "/assets/images/home/service-providers.jpg",
      },
      {
        id: "data center",
        title: "Data Center",
        image: "/assets/images/home/data.jpg",
      },
      {
        id: "government",
        title: "Government",
        image: "/assets/images/home/government.jpg",
      },
    ],
  };

  return (
    <>
      <section>
        <HomeHero slides={heroSlides} />
      </section>
      <section>
        <PageWrapper>
          <LogoSlider />
        </PageWrapper>
      </section>

      <PageWrapper>
        <section className="py-5 bg-white">
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
                    For 20+ years, we&apos;ve secured enterprises with scalable,
                    intelligent solutions that mitigate risks, enable agility,
                    and drive growth. With global expertise, strong OEM
                    partnerships, and a consultative approach, we protect what
                    matters most.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    More than a service provider we are your cybersecurity ally,
                    innovation enabler, and partner in progress.
                  </p>
                </div>

                <Link
                  href="/who-we-are/about-us"
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
      </PageWrapper>

      <PageWrapper>
        <ServicesSection />
      </PageWrapper>

      <PageWrapper>
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
                        Partnering with us means working with a team that
                        prioritizes your growth, security, and long-term
                        success.
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
                        From infrastructure to cybersecurity, we provide
                        end-to-end services under one roof.
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
                        We adopt emerging technologies to ensure your business
                        stays competitive and resilient.
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
                        Our client-first approach guarantees reliable support,
                        measurable outcomes, and lasting partnerships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGES */}
              <div className="relative">
                <div className="flex gap-5">
                  <img src="/assets/images/home/home-main.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>

      <IndustryGrid data={industriesData} />

      <section className="bg-[#FFF7EB] py-20">
        <div className="max-w-7xl mx-auto bg-white lg:px-6 md:px-6 px-4 py-16">
          <h2 className="text-center text-2xl lg:text-3xl font-semibold text-gray-900 mb-12">
            Case Studies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((item) => (
            <Link key={item.link} href={item.link} className="group block">
                <div
                  className="relative overflow-hidden rounded-2xl
                 w-full h-[auto] lg:h-[360px] mx-auto"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* TEXT OVERLAY */}
                  <div className="absolute bottom-5 w-full bg-black/30 backdrop-blur-sm px-4 py-3">
                    <p className="text-white text-sm font-semibold leading-snug line-clamp-2 text-center">
                      {item.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

          <TestimonialsSection
        items={testimonials}
        heading="What our clients have to say about the services we provide at LA Technologies"
      />

      <PageWrapper>
        <section className="py-20">
          <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
            {/* Section Heading */}
            <h2 className="text-center text-2xl lg:text-3xl font-semibold text-gray-900 mb-12">
              Insights, ideas, and updates from our team.
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {blogs.map((blog, index) => (
                <div
                  key={blog.slug}
                  className="bg-[#FFF3E0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-[240px] object-cover"
                    />

                    {/* Date Ribbon */}
                    <div className="absolute top-0 left-4">
                      <div className="relative">
                        <img
                          src="/assets/images/home/flag.png"
                          alt="Date badge"
                          className="w-15 h-auto"
                        />
                        <span className="absolute inset-0 flex items-center -translate-y-3 justify-center text-white text-sm font-semibold">
                          {new Date(blog.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex items-center justify-between gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {blog.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/insights/blogs/${blog.slug}`}
                      aria-label="Read more"
                    >
                      <button
                        className="shrink-0 w-11 h-11 rounded-xl
                    bg-gradient-to-r from-[#E11D48] to-[#F97316]
                    flex items-center justify-center
                    text-white hover:opacity-90 transition"
                      >
                        <img
                          src="/assets/images/home/send.svg"
                          alt="Read more"
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageWrapper>

      <PageWrapper>
        <VendorLogo />
      </PageWrapper>

      <GradientCtaBanner
        text="DRIVING DIGITAL GROWTH WITH TRUSTED TECHNOLOGY SOLUTIONS- REACH OUT TO US NOW"
        buttonText="Talk to an Expert"
        iconSrc="/assets/images/home/phone.svg"
      />
    </>
  );
}
