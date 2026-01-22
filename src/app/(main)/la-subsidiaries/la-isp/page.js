import InnerPageBanner from "@/components/layout/InnerPageBanner";
import PageWrapper from "@/components/services/PageWrapper";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const coreServices = [
  {
    id: 1,
    icon: "/assets/images/la/isp/router.png",
    alt: "Managed SME Broadband",
    text: "Managed SME Broadband with guaranteed uptime SLA",
  },
  {
    id: 2,
    icon: "/assets/images/la/isp/wifi.png",
    alt: "Internet Lease Line",
    text: "Internet Lease Line (ILL) with 1:1 dedicated bandwidth",
  },
  {
    id: 3,
    icon: "/assets/images/la/isp/team.png",
    alt: "MPLS Network Solutions",
    text: "MPLS Network Solutions for Banking, BFSI, and enterprise clients",
  },
  {
    id: 4,
    icon: "/assets/images/la/isp/support.png",
    alt: "NOC Support",
    text: "End-to-End NOC Support for secure and uninterrupted operations",
  },
];
const trustedConnectivityData = [
  {
    id: 1,
    image: "/assets/images/la/isp/network.png",
    title: "Network Performance & Reliability",
    points: [
      "99.99% Uptime for mission-critical networks",
      "Advanced fiber and wireless, and hybrid connectivity models",
      "Predictive maintenance to prevent outages and ensure continuity",
      "Bandwidth optimization through proactive monitoring and traffic analysis",
    ],
  },
  {
    id: 2,
    image: "/assets/images/la/isp/customer.png",
    title: "Customer-Centric Approach",
    points: [
      "Transparent billing and customer-focused initiatives",
      "Fast issue resolution with MTTR & FCR KPIs",
      "Regular feedback and engagement programs to enhance service quality",
    ],
  },
  {
    id: 3,
    image: "/assets/images/la/isp/value.jpg",
    title: "Value-Added Services",
    points: [
      "Cybersecurity packages for secure connectivity",
      "Managed Wi-Fi & Dedicated IPs",
      "Bundled solutions: Internet + Mobility + Security",
      "Email & Web Hosting, Domain Services",
    ],
  },
  {
    id: 4,
    image: "/assets/images/la/isp/innovation.png",
    title: "Innovation & Future Roadmap",
    points: [
      "Exploring 5G-based enterprise solutions",
      "IoT & Smart Home connectivity",
      "Cloud-based offerings for next-gen businesses",
      "Continuous capacity upgrades and technology refresh initiatives",
    ],
  },
];

export default function LaIsPage() {
  return (
    <>
      <InnerPageBanner
        bgImage="/assets/images/la/isp/la-isp-banner.jpg"
        title="LA ISP – Enterprise Connectivity Solutions "
        titleTag="h1"
        description={`Empowering businesses with reliable, high-performance <br>internet services across India. `}
      />

      <PageWrapper>
        <section className="w-full bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left Image Grid */}
            {/* Image Layout */}
            <div className="grid grid-cols-2 gap-4 items-center">
              {/* Left Image – Centered */}
              <div className="flex items-center h-full">
                <div className="rounded-2xl overflow-hidden w-full">
                  <img
                    src="/assets/images/la/isp/left1.jpg"
                    alt="Global connectivity network"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column Images */}
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/assets/images/la/isp/left2.png"
                    alt="Enterprise infrastructure"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/assets/images/la/isp/left3.jpg"
                    alt="Fiber connectivity"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                Reliable Connectivity for <br className="hidden sm:block" />
                Every Location
              </h2>

              <p className="mt-6 text-gray-600 text-base leading-relaxed">
                LA ISP is a trusted connectivity partner for enterprises, SMEs,
                and government organizations. With strong partnerships across
                600+ ISP operators (A/B/C class), we deliver managed broadband
                and Internet Lease Line (ILL) solutions to Tier 1–5 locations
                with uniform rate contracts, NOC support, and consolidated
                billing.
              </p>

              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                Currently, we manage 15,000+ ISP links pan-India, ensuring
                seamless connectivity through proactive monitoring, maintenance,
                and new link deliveries.
              </p>

              <button
                className="mt-8 inline-flex items-center gap-3 rounded-lg 
                       bg-gradient-to-r from-red-500 to-orange-500 
                       px-6 py-3 text-white text-sm font-medium 
                       hover:opacity-90 transition"
              >
                <span className="inline-flex items-center justify-center w-5 h-5">
                  <img src="/assets/images/home/phone2.svg" />
                </span>
                Talk to an Expert
              </button>
            </div>
          </div>
        </section>
      </PageWrapper>

      <PageWrapper>
        <section className="w-full bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Our Core Services
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From infrastructure to security, we deliver technology that works
              seamlessly together.
            </p>

            <div className="mt-6">
              <button
                className="inline-flex items-center justify-center
                       bg-gradient-to-r from-red-500 to-orange-500
                       text-white text-sm font-medium
                       px-6 py-3 rounded-lg
                       hover:opacity-90 transition"
              >
                Talk to an Expert
              </button>
            </div>

            <div className="mt-10 h-[2px] w-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreServices.map((service) => (
                <div
                  key={service.id}
                  className="rounded-2xl border border-orange-400 p-6 text-left 
                         shadow-lg shadow-orange-200 hover:shadow-md transition"
                >
                  <img
                    src={service.icon}
                    alt={service.alt}
                    className="w-10 h-10 mb-4"
                  />

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageWrapper>

      <PageWrapper>
        <section className="relative w-full py-20 overflow-hidden">
          {/* Section Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10"
            style={{
              backgroundImage: "url('/assets/images/la/isp/bg.png')",
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Heading */}
            <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
              Trusted connectivity with LA ISP
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustedConnectivityData.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-orange-300
                     bg-white/95 p-5 flex flex-col
                     overflow-hidden transition"
                >
                  <div className="rounded-xl overflow-hidden mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                  </div>

                  <h3 className="text-orange-600 font-semibold text-base mb-3">
                    {item.title}
                  </h3>

                  <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                    {item.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center p-16 m-0">
            <button
              className="inline-flex items-center gap-1 rounded-lg 
               bg-gradient-to-r from-red-500 to-orange-500 
               px-6 py-3 text-white text-sm font-medium 
               hover:opacity-90 transition"
            >
              <span className="inline-flex items-center justify-center w-5 h-5">
                <img src="/assets/images/home/phone2.svg" alt="Phone" />
              </span>
              Talk to an Expert
            </button>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
