// import InnerPageBanner from "@/components/layout/InnerPageBanner";
import Image from "next/image";
import Link from "next/link";
import EmployeeTestimonials from "@/components/joinus/EmployeeTestimonials";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

export default function AboutPage() {
  return (
    <main>
      <InnerPageBanner
        bgImage="/assets/images/join-us/banner.jpg"
        title="Where People Power Innovation"
        titleTag="h1"
        description="Experience a workplace built on collaboration, learning, and impact."
      />

      {/* LIFE AT LA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-4xl font-semibold text-black mb-6">
                Life at LA Technologies
              </h2>

              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Life at LA Technologies begins with a belief we hold close: a
                  safer digital world isn’t an abstract; it’s a responsibility.
                  And it starts with us.
                </p>
                <p>
                  Every solution is shaped by one purpose: strengthen cyber
                  resilience in a world that changes fast.
                </p>
                <p>
                  There’s trust, inclusion, and genuine support that people
                  notice almost immediately.
                </p>
                <p>
                  Expertise deepens. Ideas grow wings. People influence more
                  than they ever imagined.
                </p>
              </div>

              <button className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                Explore Careers
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden h-[600px]">
              <img
                src="/assets/images/join-us/team-collaboration.png"
                alt="Life at LA Technologies"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="pt-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
            Benefits
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10">
            Our benefits are crafted to help every employee show up as their
            best, brightest self.
          </p>

          <div className="flex justify-center mb-16">
            <Image
              src="/assets/images/join-us/icon1.png"
              alt="Benefits Icon"
              width={208}
              height={108}
            />
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          <div className="grid grid-cols-2 gap-6">
            <img
              src="/assets/images/join-us/culture1.jpg"
              className="rounded-2xl h-[280px] w-full object-cover"
              alt=""
            />
            <img
              src="/assets/images/join-us/culture2.jpg"
              className="rounded-2xl h-[200px] w-full object-cover"
              alt=""
            />
            <img
              src="/assets/images/join-us/culture3.jpg"
              className="rounded-2xl h-[200px] w-full object-cover"
              alt=""
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Culture</h2>
            <p className="text-gray-600 leading-relaxed">
              Compassion, curiosity, transparency, and courage guide how we
              work, grow, and lead.
            </p>
          </div>
        </div>
      </section>

      {/* DIVERSITY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Diversity & Inclusion
            </h2>
            <p className="text-gray-600">
              We foster a workplace where differences are welcomed and talent
              grows fairly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <img
              src="/assets/images/join-us/diversity-1.jpg"
              className="rounded-2xl h-[260px] w-full object-cover"
              alt=""
            />
            <img
              src="/assets/images/join-us/diversity-2.jpg"
              className="rounded-2xl h-[320px] w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* GROWTH */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          <div className="grid grid-cols-2 gap-6">
            {["growth1", "growth2", "growth3", "growth4"].map((g) => (
              <img
                key={g}
                src={`/assets/images/join-us/${g}.jpg`}
                className="rounded-2xl h-[200px] w-full object-cover"
                alt=""
              />
            ))}
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Growth and Learning
            </h2>
            <p className="text-gray-600">
              Continuous learning keeps every cyber defender future-ready.
            </p>
          </div>
        </div>
      </section>

      <EmployeeTestimonials />

      {/* GLAM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-14">
            Glam of being a LATechie
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[0, 5, 10, 16].map((mt, i) => (
              <Column key={i} offset={`lg:mt-${mt}`} images={["glam.png", "glam.png"]} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl bg-gradient-to-r from-[#E53935] to-[#F68B2C] px-8 py-6 flex items-center justify-between">
            <p className="text-white font-semibold uppercase">
              Driving digital growth with trusted technology solutions
            </p>
            <Link
              href="/contact"
              className="bg-white text-[#E53935] px-6 py-3 rounded-lg"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Column({ images, offset }) {
  return (
    <div className={`space-y-8 ${offset}`}>
      {images.map((img, i) => (
        <div key={i} className="rounded-2xl overflow-hidden h-[260px]">
          <img
            src={`/assets/images/join-us/${img}`}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
