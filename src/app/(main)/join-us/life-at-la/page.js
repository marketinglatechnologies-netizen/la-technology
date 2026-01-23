import InnerPageBanner from "@/components/layout/InnerPageBanner";
import Image from "next/image";
import Link from "next/link";
import EmployeeTestimonials from "@/components/joinus/EmployeeTestimonials";
import PageWrapper from "@/components/services/PageWrapper";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

export default function AboutPage() {
  return (
    <main>
      <InnerPageBanner
       bgImage="/assets/images/join-us/la-banner.jpg"
        title="Where People Power Innovation"
        titleTag="h1"
        description={`Experience a workplace built on collaboration, learning, and impact.`}
      />
    
    <PageWrapper>
    <section className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT CONTENT */}
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
                Expertise deepens here. Ideas tend to grow wings. And individuals
                who thought they were “ordinary contributors” often discover
                they can influence far more than they ever imagined.
              </p>
            </div>

            <Link href="/join-us/careers">
            <button className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
              Explore Careers
            </button>
            </Link>
          </div>

          {/* RIGHT FULL IMAGE */}
          <div className="rounded-2xl overflow-hidden h-[380px] sm:h-[500px] lg:h-[600px]">
            <img
              src="/assets/images/join-us/life-at-la-tech.png"
              alt="Life at LA Technologies"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
    </PageWrapper>


 <PageWrapper>
    <section className="pt-12 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
          Benefits
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 leading-relaxed mb-10">
          From holistic wellness and future-ready financial planning to
          meaningful time off and unique perks, our benefits are crafted to
          help every employee show up as their best, brightest self.
          Experience our smart cyber labs and secure workspaces, where
          innovative technology fuels safe collaboration, AI-enhanced
          defenses, and an environment built to unlock your full potential.
        </p>

        {/* ICON IMAGE */}
       <div className="flex justify-center mb-16">
          <Image
            src="/assets/images/join-us/icon1.png"
            alt="Benefits Icon"
            width={208}
            height={108}
            className="opacity-90"
          />
        </div>

        {/* HIGHLIGHT TEXT */}
        <p className="text-gray-700">
          <span className="text-orange-500 font-semibold">
            One more thing worth mentioning: #RestartWithUS
          </span>{" "}
          this is specially designed to enable men or women make a smooth
          transition back to work.
        </p>

      </div>
    </section>
    </PageWrapper>
   

   <PageWrapper>
   <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE COLLAGE */}
          <div className="grid grid-cols-2 gap-6 items-center">

            {/* LEFT IMAGE (REDUCED HEIGHT + CENTERED) */}
            <div className="row-span-2 flex items-center">
              <div className="rounded-2xl overflow-hidden h-[280px] w-full">
                <img
                  src="/assets/images/join-us/culture1-1.jpg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* TOP RIGHT IMAGE */}
            <div className="rounded-2xl overflow-hidden h-[200px]">
              <img
                src="/assets/images/join-us/culture2-2.jpg"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* BOTTOM RIGHT IMAGE */}
            <div className="rounded-2xl overflow-hidden h-[200px]">
              <img
                src="/assets/images/join-us/culture3-3.jpg"
                alt="Cyber lab discussion"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
              Culture
            </h2>

            <p className="text-gray-600 leading-relaxed text-base">
              We believe that leading with compassion, curiosity, transparency
              and courage sparks excellence in everyone. There are moments here,
              during a tough cyber incident, a new product sprint, or a customer
              escalation, where you see these values in action. Someone steps
              up. Someone shares openly. Someone challenges an established idea.
              <br /><br />
              This is how we tackle cyber challenges, grow as a team, and make
              decisions that strengthen both our mission and the security of
              the digital world, and in those moments, you understand: this is
              how we raise the bar. Not through pressure. Through purpose.
            </p>
          </div>

        </div>
      </div>
    </section>
    </PageWrapper>


     <PageWrapper>
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT (CENTERED) */}
          <div className="flex items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
                Diversity & Inclusion
              </h2>

              <p className="text-gray-600 leading-relaxed text-base">
                Together, we foster a workplace where differences are welcomed,
                perspectives are respected, and every person can reach their
                full potential. Our aim is steady and clear: create a space
                where opportunities flow to talent fairly, where potential is
                noticed early, and where everyone has room to grow without
                hesitation.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGES (INCREASED SIZE) */}
          <div className="grid grid-cols-2 gap-6">

            {/* IMAGE 1 */}
            <div className="rounded-2xl overflow-hidden h-[260px]">
              <img
                src="/assets/images/join-us/diversity-1.jpg"
                alt="Inclusive team collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="rounded-2xl overflow-hidden h-[320px]">
              <img
                src="/assets/images/join-us/diversity-2.jpg"
                alt="Professional diverse team"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
     </PageWrapper>

  <PageWrapper>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE GRID */}
          <div className="grid grid-cols-2 gap-6">

            {/* IMAGE 1 */}
            <div className="rounded-2xl overflow-hidden h-[200px]">
              <img
                src="/assets/images/join-us/growth-1.jpg"
                alt="Team celebration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="rounded-2xl overflow-hidden h-[200px]">
              <img
                src="/assets/images/join-us/growth-2.jpg"
                alt="Learning at work"
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="rounded-2xl overflow-hidden h-[200px]">
              <img
                src="/assets/images/join-us/growth-3.jpg"
                alt="Professional growth"
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMAGE 4 */}
            <div className="rounded-2xl overflow-hidden h-[200px]">
              <img
                src="/assets/images/join-us/growth-4.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
              Growth and Learning
            </h2>

            <p className="text-gray-600 leading-relaxed text-base">
              Tech drives everything we do—and every cyber defender here keeps
              pace with the innovations shaping tomorrow. You will learn
              constantly. Sometimes by exploring cutting-edge tools. Sometimes
              through team debates. Sometimes simply by watching how a senior
              engineer breaks down a complex attack pattern with surprising
              clarity. Online and offline trainings.
            </p>
          </div>

        </div>
      </div>
    </section>
    </PageWrapper>

    <PageWrapper>
    <EmployeeTestimonials />
    </PageWrapper>

    <PageWrapper>
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-2xl md:text-4xl font-semibold mb-14">
          Glam of being an LATechie
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* COLUMN 1 */}
          <Column offset="lg:mt-0" images={["team1.png", "team2.png"]} />

          {/* COLUMN 2 */}
          <Column offset="lg:mt-5" images={["team3.png", "team4.png"]} />

          {/* COLUMN 3 */}
          <Column offset="lg:mt-10" images={["team5.png", "team6.png"]} />

          {/* COLUMN 4 */}
          <Column offset="lg:mt-16" images={["team7.png", "team8.png"]} />

        </div>
      </div>
    </section>
    </PageWrapper>
 

     <GradientCtaBanner
            text="  Driving digital growth with trusted technology solutions"
            buttonText="Talk to an Expert"
            iconSrc="/assets/images/home/phone.svg"
          />

    </main>
  );
}

/* COLUMN COMPONENT */
function Column({ images, offset }) {
  return (
    <div className={`space-y-8 ${offset}`}>
      {images.map((img, i) => (
        <ImageBox key={i} src={img} />
      ))}
    </div>
  );
}

/* IMAGE COMPONENT */
function ImageBox({ src }) {
  return (
    <div className="rounded-2xl overflow-hidden h-[260px]">
      <img
        src={`/assets/images/join-us/${src}`}
        alt="Life at LA Technologies"
        className="w-full h-full object-cover"
      />
    </div>
  );
}