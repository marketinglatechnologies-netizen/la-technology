import InnerPageBanner from "@/components/layout/InnerPageBanner";
import JobApplicationForm from "@/components/joinus/JobApplicationForm";
import PageWrapper from "@/components/services/PageWrapper";

export const metadata = {
  title: "Careers at LA Technologies Pvt Ltd | Join Our Cyber Security Team",
  description:
    "Build your career at LA Technologies Pvt Ltd . Explore exciting opportunities in cyber security, IT infrastructure, OT security, and managed services.",
};

export default function AboutPage() {
  return (
    <main>
      <InnerPageBanner
        bgImage="/assets/images/careers/career-banner.jpg"
        title="Build Your Career With Us"
        titleTag="h1"
        description={`Join a global team where innovation, growth, and opportunity come together.`}
      />

      <PageWrapper>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* LEFT CONTENT */}
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold text-black mb-5">
                  Where your talent can be best showcased
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Step into a role where your work truly matters—protecting
                  critical infrastructure, outsmarting attackers, and shaping
                  the future of cyber resilience across industries. In our
                  inclusive environment, you’ll have the freedom and tools to do
                  your most impactful work.
                  <br />
                  <br />
                  Get to know our culture, explore our Leadership Principles,
                  and review the comprehensive benefits we offer.
                </p>
              </div>

              {/* RIGHT IMAGE GRID */}
              <div className="grid grid-cols-2 gap-6">
                <ImageCard src="career-1.png" />
                <ImageCard src="career-2.jpg" />
                <ImageCard src="career-3.png" />
                <ImageCard src="career-4.jpg" />
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>

      <PageWrapper>
        <JobApplicationForm text="“We’ve been alerted to fraudulent recruitment activities. To protect yourself, ensure emails come from @la-technologiesindia.com, and be wary of any requests for money, which we never make.”" />
      </PageWrapper>
    </main>
  );
}

/* IMAGE CARD */
function ImageCard({ src }) {
  return (
    <div className="rounded-2xl overflow-hidden h-[160px]">
      <img
        src={`/assets/images/careers/${src}`}
        alt="Life at LA Technologies"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
