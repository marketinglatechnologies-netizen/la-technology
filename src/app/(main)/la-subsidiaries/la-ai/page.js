import InnerPageBanner from "@/components/layout/InnerPageBanner";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};


const whatWeDoData = [
  {
    id: 1,
    icon: "/assets/images/la/ai/card1.png",
    title: "Generative AI Solutions & Services",
    description:
      "Research, design, and deployment of advanced AI tools for diverse industries, enabling efficiency and innovation.",
  },
  {
    id: 2,
    icon: "/assets/images/la/ai/card2.png",
    title: "AI-Powered Cybersecurity Tools",
    description:
      "Revolutionizing defense mechanisms with intelligent threat detection, prevention, and mitigation—making security proactive and simplified.",
  },
  {
    id: 3,
    icon: "/assets/images/la/ai/card3.png",
    title: "AI-Driven IT Automation",
    description:
      "Tools for advanced IT integration and managed services, reducing manual intervention and optimizing workflows.",
  },
  {
    id: 4,
    icon: "/assets/images/la/ai/card4.png",
    title: "Multi-Cloud Automation",
    description:
      "AI-based orchestration and management tools for seamless deployment and centralized control across cloud platforms.",
  },
  {
    id: 5,
    icon: "/assets/images/la/ai/card5.png",
    title: "AI for Data Analytics",
    description:
      "Advanced analytics solutions to convert enterprise data into actionable insights for smarter decision-making.",
  },
  {
    id: 6,
    icon: "/assets/images/la/ai/card6.png",
    title: "Domain-Specific AI Agents",
    description:
      "Custom AI agents for industry-specific needs, along with general-purpose AI assistants.",
  },
  {
    id: 7,
    icon: "/assets/images/la/ai/card7.png",
    title: "Hosted Gen AI Solutions",
    description:
      "Enterprise-ready platforms to democratize AI adoption and accelerate innovation.",
  },
];

export default function LaAi() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/la/ai/ai-bg.png"
          title="LA AI – Driving Innovation with Artificial Intelligence"
          titleTag="h1"
          description={`Empowering businesses with next-generation AI solutions for cybersecurity, IT automation, and multi-cloud management.`}
        />
      </div>
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Image + Gradient Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left – Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/assets/images/la/ai/ai1.png"
                alt="AI Security Shield"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right – Gradient Block */}
            <div className="rounded-2xl bg-gradient-to-br from-[#F97316] to-[#E11D48]" />

            {/* Bottom Left – Gradient Block */}
            <div className="rounded-2xl bg-gradient-to-br from-[#F97316] to-[#E11D48]" />

            {/* Bottom Right – Image */}
            <div className="rounded-2xl overflow-hidden">
              <img  
                src="/assets/images/la/ai/ai4.png"
                alt="AI Protection Network"
                className="w-full h-full object-cover"
              />
            </div>
          </div> 

          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              About LA AI
            </h2>

            <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-xl">
              LA AI is the innovation arm of LA Technologies, focused on
              building Gen AI-powered solutions and services that transform how
              businesses operate. Our mission is to simplify complexity, enhance
              security, and accelerate digital transformation through
              cutting-edge AI tools and automation.
            </p>

            <button
              className="mt-8 inline-flex items-center gap-3 rounded-lg
                       bg-gradient-to-r from-[#E11D48] to-[#F97316]
                       px-6 py-3 text-white text-sm font-medium
                       hover:opacity-90 transition"
            >
              <img
                src="/assets/images/home/phone2.svg"
                alt="Call icon"
                className="w-4 h-4"
              />
              Talk to an Expert
            </button>
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
              OUR VISION
            </h3>

            <p className="text-white/90 text-sm md:text-base max-w-2xl">
              To empower organizations with future-ready AI solutions that
              simplify operations, strengthen security, and unlock new
              possibilities across IT and business ecosystems.
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
     <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          What We Do
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We specialize in AI-driven solutions across multiple domains:
        </p>

        {/* Gradient Divider */}
        <div className="mt-8 h-[2px] w-full bg-gradient-to-r from-[#F97316] to-[#E11D48] rounded-full" />

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {whatWeDoData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-orange-200 bg-white p-6
                         shadow-lg shadow-orange-200
                         transition"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-15 h-15 mb-4"
              />

              <h3 className="text-gray-900 font-medium text-base mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <button
            className="inline-flex items-center gap-2
                       bg-gradient-to-r from-[#E11D48] to-[#F97316]
                       text-white text-sm font-medium
                       px-8 py-3 rounded-lg
                       hover:opacity-90 transition"
          >
            <img
              src="/assets/images/home/phone2.svg"
              alt="Call icon"
              className="w-4 h-4"
            />
            Talk to an Expert
          </button>
        </div>

      </div>
    </section>
    </>
  );
}
