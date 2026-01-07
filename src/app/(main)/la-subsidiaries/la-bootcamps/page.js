import InnerPageBanner from "@/components/layout/InnerPageBanner";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};
const highlightsData = [
  {
    id: 1,
    icon: "/assets/images/la/bootcamps/service1.png",
    title: "Live Project Exposure",
    description:
      "Students work on actual client projects under expert supervision.",
  },
  {
    id: 2,
    icon: "/assets/images/la/bootcamps/service2.png",
    title: "Placement Assistance",
    description:
      "Strong industry network for job opportunities in cybersecurity roles.",
  },
  {
    id: 3,
    icon: "/assets/images/la/bootcamps/service3.png",
    title: "Globally Recognized Certifications",
    description: "Boost your career profile with credentials that matter.",
  },
];

const whyChooseData = [
  {
    id: 1,
    icon: "/assets/images/la/bootcamps/service1.png",
    title: "Industry-Integrated Learning",
    description:
      "Practical training with real-time tools and technologies used by professionals.",
  },
  {
    id: 2,
    icon: "/assets/images/la/bootcamps/service2.png",
    title: "Expert Mentorship",
    description:
      "Learn from seasoned cybersecurity specialists with years of enterprise experience.",
  },
  {
    id: 3,
    icon: "/assets/images/la/bootcamps/service3.png",
    title: "Career-Focused Curriculum",
    description:
      "Tailored courses aligned with AICTE guidelines and industry standards.",
  },
  {
    id: 4,
    icon: "/assets/images/la/bootcamps/service4.png",
    title: "Hands-On Labs",
    description:
      "Exploring 5G-based enterprise solutions, simulated attacks, penetration testing, and security audits.",
  },
];

const programsData = [
  {
    id: 1,
    image: "/assets/images/la/bootcamps/program1.png",
    title: "Certification in Cybersecurity",
    duration: "4 Months",
    description:
      "Ideal for beginners and professionals seeking a strong foundation in cybersecurity fundamentals.",
  },
  {
    id: 2,
    image: "/assets/images/la/bootcamps/program2.png",
    title: "PG Diploma in Cybersecurity",
    duration: "12 Months",
    description:
      "Advanced program covering network security, ethical hacking, cloud security, and compliance.",
  },
  {
    id: 3,
    image: "/assets/images/la/bootcamps/program3.png",
    title: "Diploma in Cybersecurity",
    duration: "24 Months",
    description:
      "Comprehensive learning with deep technical exposure, live projects, and advanced security modules.",
  },
  {
    id: 4,
    image: "/assets/images/la/bootcamps/program4.png",
    title: "Customized Programs",
    duration: "Flexible",
    description:
      "Flexible training designed to meet specific learning goals for students, professionals, or organizations.",
  },
];

export default function LaBootCamp() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/la/bootcamps/bootcamp-bg.png"
          title="LA Bootcamps – Learn Cybersecurity from Industry Experts "
          titleTag="h1"
          description={`Your gateway to hands-on cybersecurity training, powered by LA Technologies. `}
        />
      </div>

      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              About LA Bootcamps
            </h2>

            <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-xl">
              LA Bootcamps is a subsidiary of LA Technologies, designed to
              bridge the gap between academic learning and real-world
              cybersecurity expertise. Unlike traditional institutes, our
              students train inside a live corporate environment, gaining
              exposure to enterprise-grade security operations and real
              projects.
            </p>

            <button
              className="mt-8 inline-flex items-center gap-3 rounded-lg
                   bg-gradient-to-r from-red-500 to-orange-500
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

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* LEFT COLUMN – STACKED IMAGES */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/la/bootcamps/abt1.png"
                  alt="Cybersecurity infrastructure"
                  className="w-full object-cover"
                />
              </div>

              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/la/bootcamps/abt2.png"
                  alt="Data center security"
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT COLUMN – SMALLER, CENTERED IMAGE */}
            <div className="flex items-center">
              <div className="rounded-2xl overflow-hidden max-h-[300px] w-full">
                <img
                  src="/assets/images/la/bootcamps/abt3.png"
                  alt="Security operations center"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Why Choose LA Bootcamps?
            </h2>

            <p className="mt-4 text-gray-600">
              From infrastructure to security, we deliver technology that works
              seamlessly together.
            </p>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
            {whyChooseData.map((item) => (
              <div key={item.id}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mb-4 w-15 h-15"
                />

                <h3 className="text-orange-400 font-medium text-base mb-2 text-left">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed text-left">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-[#FFF7EB] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Programs We Offer
            </h2>

            <p className="mt-4 text-sm text-orange-600">
              We provide structured programs for different career stages, along
              with customized training solutions for individuals and
              organizations.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programsData.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl overflow-hidden
                         shadow-md hover:shadow-lg transition flex flex-col"
              >
                {/* Image */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-orange-600 font-medium text-base mb-2">
                    {program.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span>⏱</span>
                    <span>Duration: {program.duration}</span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                    {program.description}
                  </p>

                  <button
                    className="mt-5 inline-flex items-center gap-2
                            bg-gradient-to-r from-[#E11D48] to-[#F97316]
                             text-white text-sm font-medium
                             px-4 py-2 rounded-lg transition self-start"
                  >
                    Start Course
                    <span>›</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Key Highlights
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From infrastructure to security, we deliver technology that works
            seamlessly together.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <button
              className="inline-flex items-center justify-center
                       bg-gradient-to-r from-[#E11D48] to-[#F97316]
                       text-white text-sm font-medium
                       px-6 py-3 rounded-lg
                       hover:opacity-90 transition"
            >
              Talk to an Expert
            </button>
          </div>

          {/* Gradient Divider */}
          <div className="mt-10 h-[2px] w-full bg-gradient-to-r from-[#F97316] to-[#E11D48] rounded-full" />

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightsData.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-orange-400 
                         bg-white p-6 text-left shadow-lg shadow-orange-200
                         transition"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mb-4"
                />

                <h3 className="text-orange-600 font-medium text-base mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
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
                FUTURE-READY LEARNING
              </h3>

              <p className="text-white/90 text-sm md:text-base max-w-2xl">
                We continuously upgrade our curriculum to include AI-driven
                security, IoT protection, and cloud-native security solutions,
                ensuring our learners stay ahead in the evolving threat
                landscape.
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
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
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
      </section>
    </>
  );
}
