import InnerPageBanner from "@/components/layout/InnerPageBanner";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const whatYouWillHearData = [
  {
    id: 1,
    image: "/assets/images/insights/cybersecurity.jpg",
    title: "Cybersecurity Deep Dives",
    description: "Explore strategies to combat evolving threats.",
  },
  {
    id: 2,
    image: "/assets/images/insights/ai.jpg",
    title: "AI & Automation Talks",
    description:
      "Understand how artificial intelligence is transforming businesses.",
  },
  {
    id: 3,
    image: "/assets/images/insights/networking.jpg",
    title: "Networking & Cloud Innovations",
    description:
      "Learn about the latest in connectivity and IT infrastructure.",
  },
  {
    id: 4,
    image: "/assets/images/insights/leadership.jpg",
    title: "Leadership Perspectives",
    description: "Hear from industry leaders and LA Technologies experts.",
  },
];

const points = [
    {
      id: "01",
      title: "Expert Voices",
      description:
        "Direct insights from professionals and innovators.",
    },
    {
      id: "02",
      title: "Actionable Knowledge",
      description:
        "Practical advice for IT leaders and tech enthusiasts.",
    },
    {
      id: "03",
      title: "Future Trends",
      description:
        "Stay ahead of emerging technologies and market shifts.",
    },
  ];

export default function PodcastPage() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/insights/podcast-banner.jpg"
          title="Conversations that matter. Ideas that inspire."
          titleTag="h1"
          description={`Our podcast series brings you expert discussions, industry insights, and thought leadership on the topics shaping the future of technology.`}
        />
      </div>
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
            What You’ll Hear
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatYouWillHearData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-gray-200
                     shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       <section className="w-full bg-white py-15">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
            Why Listen to Our Podcasts?
          </h2>

          <div className="space-y-6">
            {points.map((point) => (
              <div key={point.id} className="flex gap-4 items-start">
                {/* Number */}
                <div className="w-12 h-12 flex items-center justify-center
                                rounded-full bg-orange-100 text-orange-600
                                font-semibold">
                  {point.id}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/assets/images/insights/why-listen.jpg"
            alt="Podcast microphones"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
    </>
  );
}
