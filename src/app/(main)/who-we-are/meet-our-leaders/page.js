import InnerPageBanner from "@/components/layout/InnerPageBanner";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import PageWrapper from "@/components/services/PageWrapper";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const items = [
  {
    title: "Lawrence Albert, Founder & CEO",
    description:
      "Lawrence brings over two decades of experience in the IT and cybersecurity domain. He founded LA Technologies with a vision to deliver enterprise‑grade, future‑ready security and network solutions across industries. Under his leadership, the company has grown into a trusted technology partner for leading BFSI, IT/ITES, and large enterprises across India. Lawrence continues to drive innovation, strategic partnerships, and organizational excellence at LA Technologies.",
    video: "/assets/videos/lawrence-albert.mp4",
    align: "left",
  },
  {
    title: "Siva Rama Krishna, Director of Sales",
    description:
      "Siva spearheads the sales strategy and revenue growth for LA Technologies. With a solid background in enterprise technology solutions and client engagement, he drives business expansion across key sectors. His focus on relationship‑building, solution consulting, and value‑driven engagement positions LA Technologies as a trusted partner for organizations seeking advanced IT and security solutions.",
    video: "/assets/videos/siva-rama-krishna.mp4",
    align: "right",
  },
  {
    title: "Raghunath Reddy, Chief Operating Officer",
    description:
      "Raghunath oversees end‑to‑end business operations, ensuring seamless service delivery and operational efficiency across all verticals. He has extensive experience spanning three decades as CIO and CISO across BFSI organizations and has managed large technical teams and enterprise projects. He plays a key role in strengthening organizational processes and driving scalable growth. His leadership ensures LA Technologies consistently meets performance, quality, and customer‑satisfaction benchmarks.",
    video: "/assets/videos/raghunath-reddy.mp4",
    align: "left",
  },
  {
    title: "Janraj Pednekar, Vice President – Finance",
    description:
      "Janraj leads the financial strategy of LA Technologies, bringing strong expertise in financial planning, compliance, and enterprise risk management. He plays an instrumental role in budgeting, forecasting, and optimizing financial performance. With a deep understanding of corporate finance, Janraj ensures sustainable growth and robust fiscal governance.",
    video: "/assets/videos/janraj-pednekar.mp4",
    align: "right",
  },
  {
    title: "Anish Kurup, Vice President of Technology",
    description:
      "Anish leads the technology initiatives and solution architecture at LA Technologies. With extensive experience across networking, cybersecurity, and cloud environments, he drives the technical roadmap and innovation strategy. His guidance ensures the delivery of resilient, scalable, and future‑ready solutions aligned with evolving industry demands.",
    video: "/assets/videos/anish-kurup.mp4",
    align: "left",
  },
  {
    title: "Ramesh Yadav, Vice President – Operations",
    description:
      "Ramesh brings extensive experience in managing large‑scale operations and service delivery across enterprise technology environments. As Vice President – Operations at LA Technologies, he oversees operational strategy, process optimization, and execution across multiple business verticals. With a strong focus on efficiency, quality assurance, and team leadership, Ramesh plays a critical role in ensuring seamless delivery and operational excellence for clients across industries.",
    video: "/assets/videos/ramesh-yadav.mp4",
    align: "right",
  },
  {
    title: "Dheeraj Kumar, Vice President - Managed Services & PSG",
    description:
      "Dheeraj leads the Managed Services & PSG division at LA Technologies, overseeing Managed Services, IT Staff Augmentation, and TAC operations. With experience across large‑scale enterprise environments, he ensures consistency, performance, and SLA adherence across all managed functions. His leadership focuses on operational stability, efficiency, and continuous improvement, driving long‑term value and service excellence for clients.",
    video: "/assets/videos/dheeraj-kumar.mp4",
    align: "left",
  },
  {
    title: "Anamika Dutta, AVP Marketing",
    description:
      "Anamika comes with close to a decade of marketing expertise working with luxury brands and individual creators in the South-East, APAC, and GCC regions. She is a celebrated public speaker and contributor to several non-profit platforms working towards crushing the glass-ceiling. At LA Technologies, Anamika leads the marketing division and manages high-profile client relations.",
    video: "/assets/videos/anamika-dutta.mp4",
    align: "right",
  },
  {
    title: "Annie Paul, Assistant Vice President – Human Resources",
    description:
      "Annie heads HR strategy, employee development, and organizational culture at LA Technologies. With a sharp focus on talent growth, leadership enablement, and engagement. She shapes forward-thinking policies that fuel continuous learning and build high-performance teams.",
    video: "/assets/videos/annie-paul.mp4",
    align: "left",
  },
  {
    title: "Mamta Meena, Deputy General Manager - Procurement",
    description:
      "Mamta leads procurement operations with expertise in vendor management, strategic sourcing, and supply‑chain optimization. She ensures smooth coordination with technology partners, OEMs, and internal teams to support timely project execution. Her structured procurement frameworks contribute to operational efficiency and cost‑effective delivery with project Execution and Customer Feedback ontime.",
    video: "/assets/videos/mamta-meena.mp4",
    align: "right",
  },
  {
    title: "Meghna Naik, Project Manager",
    description:
      "Meghna oversees key client projects, ensuring timely execution, quality assurance, and seamless communication between technical teams and customers. With a strong understanding of project workflows and stakeholder management, she ensures that every project meets its objectives and delivers measurable value.",
    video: "/assets/videos/meghna-naik.mp4",
    align: "left",
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
          <PageWrapper>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Real stories from the team shaping our
              <br />
              culture and success.
            </h2>
          </div>
          </PageWrapper>

          {/* ===== Video Blocks ===== */}
          <div className="space-y-30">
            {items.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                {/* Video */}
                <div
                  className={`rounded-2xl overflow-hidden ${
                    item.align === "right" ? "lg:order-2" : ""
                  }`}
                >
                  <PageWrapper>
                    <video
                      src={item.video}
                      controls
                      preload="metadata"
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </PageWrapper>
                </div>

                {/* Content */}
                <div>
                  <PageWrapper>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  </PageWrapper>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradientCtaBanner
        text="  Driving digital growth with trusted technology solutions"
        buttonText="Talk to an Expert"
        iconSrc="/assets/images/home/phone.svg"
      />
    </main>
  );
}
