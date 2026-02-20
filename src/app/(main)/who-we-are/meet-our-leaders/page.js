import InnerPageBanner from "@/components/layout/InnerPageBanner";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import PageWrapper from "@/components/services/PageWrapper";
import sanityClient from "@/lib/sanityClient";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60; 
export const metadata = {
  title: "Leadership Team | LA Technologies Pvt Ltd",
  description:
    "Meet the leadership team driving innovation and excellence at LA Technologies Pvt Ltd in cyber security, IT infrastructure, and digital transformation.",
};

export default async function OurTeam() {
  const items = await sanityClient.fetch(`
    *[_type == "videoBlock"] | order(_createdAt asc){
      _id,
      title,
      description,
      align,
      "videoUrl": video.asset->url
    }
  `)

  return (
    <main>
      <InnerPageBanner
        bgImage="/assets/images/about-us/meet-our-leaders-banner.jpg"
        title="The People Who Make It Happen"
        titleTag="h1"
        description="A passionate team dedicated to building meaningful solutions."
      />

      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">

          <PageWrapper>
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Real stories from the team shaping our
                <br />
                culture and success.
              </h2>
            </div>
          </PageWrapper>

          {/* ===== Video Blocks From Sanity ===== */}
          <div className="space-y-30">
            {items?.map((item) => (
              <div
                key={item._id}
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
                      src={item.videoUrl}
                      controls
                      preload="metadata"
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </PageWrapper>
                </div>

                {/* Content */}
                <div>
                  <PageWrapper>
                    <h3 className="text-xl font-semibold mb-3">
                      {item.title}
                    </h3>
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
        text="Driving digital growth with trusted technology solutions"
        buttonText="Talk to an Expert"
        iconSrc="/assets/images/home/phone.svg"
      />
    </main>
  )
}