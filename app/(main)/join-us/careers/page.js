import InnerPageBanner from "@/components/layout/InnerPageBanner";
import JobApplicationForm from "@/components/joinus/JobApplicationForm";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
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
     
  <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-5">
              Where your talent can be best showcased
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Step into a role where your work truly matters—protecting
              critical infrastructure, outsmarting attackers, and shaping
              the future of cyber resilience across industries. In our
              inclusive environment, you’ll have the freedom and tools to
              do your most impactful work.
              <br /><br />
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
    <JobApplicationForm />

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