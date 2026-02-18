import PageWrapper from "../services/PageWrapper";
import Link from "next/link";

export default function HomeBlogsSection({ blogs = [] }) {
  if (!blogs.length) return null;

  return (
    <PageWrapper>
      <section className="py-20">
        <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">

          {/* Section Heading */}
          <h2 className="text-center text-2xl lg:text-3xl font-semibold text-gray-900 mb-12">
            Insights, ideas, and updates from our team.
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogs.map((blog) => (
              <div
                key={blog.slug}
                className="bg-[#FFF3E0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[240px] object-cover"
                  />

                  {/* Date Ribbon */}
                  <div className="absolute top-0 left-4">
                    <div className="relative">
                      <img
                        src="/assets/images/home/flag.png"
                        alt="Date badge"
                        className="w-15 h-auto"
                      />
                      <span className="absolute inset-0 flex items-center -translate-y-3 justify-center text-white text-sm font-semibold">
                        {blog.publishedAt &&
                          new Date(blog.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                            }
                          )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex items-center justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/insights/blogs/${blog.slug}`}
                    aria-label="Read more"
                  >
                    <button
                      className="shrink-0 w-11 h-11 rounded-xl
                      bg-gradient-to-r from-[#E11D48] to-[#F97316]
                      flex items-center justify-center
                      text-white hover:opacity-90 transition"
                    >
                      <img
                        src="/assets/images/home/send.svg"
                        alt="Read more"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}
