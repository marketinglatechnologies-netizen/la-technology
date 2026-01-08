import InnerPageBanner from "@/components/layout/InnerPageBanner";
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
    <>
      <InnerPageBanner
        bgImage="/assets/images/join-us/banner.jpg"
        title="Where People Power Innovation"
        titleTag="h1"
        description={`Experience a workplace built on collaboration, learning, and impact.`}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
                Life at LA Technologies
              </h2>

              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Life at LA Technologies begins with a belief we hold close: a
                  safer digital world isn’t an abstract; it’s a responsibility.
                  And it starts with us.
                </p>

                <p>
                  Not just with the technologies we build, but with the intent
                  behind them. Every solution, whether crafted for clients,
                  partners, or our internal teams, is shaped by one unshakable
                  purpose: strengthen cyber resilience in a world that changes
                  faster than we sometimes expect.
                </p>

                <p>
                  What’s interesting, and often surprising to newcomers, is the
                  atmosphere here. It’s not rigid. Not overwhelmingly corporate.
                  Instead, there’s a sense of trust, inclusion, and genuine
                  support that people notice almost immediately.
                </p>

                <p>
                  Expertise deepens here. Ideas tend to grow wings. And
                  individuals who thought they were ordinary contributors often
                  discover they can influence far more than they ever imagined.
                </p>
              </div>

              <button className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                Explore Careers
              </button>
            </div>

            {/* RIGHT FULL IMAGE */}
            <div className="rounded-2xl overflow-hidden h-[560px] lg:h-[620px]">
              <Image
                src="/assets/images/join-us/team.png"
                alt="Life at LA Technologies"
                width={800}
                height={900}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
