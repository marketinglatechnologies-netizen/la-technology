import InnerPageBanner from "@/components/layout/InnerPageBanner";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import PageWrapper from "@/components/services/PageWrapper";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");

export default function BlogPage() {
  const files = fs.readdirSync(BLOGS_DIR);

  const blogs = files
    .map((file) => {
      const slug = file.replace(".md", "");
      const fileContent = fs.readFileSync(path.join(BLOGS_DIR, file), "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title,
        description: data.description,
        image: data.image,
        date: data.date,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <InnerPageBanner
        bgImage="/assets/images/blogs/blogs-banner.jpg"
        title="Stay Informed Stay Ahead"
        titleTag="h1"
        description={`Our blog is your go-to resource for the latest trends, expert opinions, and actionable insights in Cybersecurity, AI, Networking, and Digital Transformation.`}
      />

      <PageWrapper>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-2xl md:text-3xl font-semibold mb-12">
              What You’ll Find Here
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/insights/blogs/${blog.slug}`}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition overflow-hidden"
                >
                  {/* Image */}
                  <div className="h-[180px] w-full overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-sm font-semibold text-black mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {blog.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </PageWrapper>

      <PageWrapper>
        <section className="py-15 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* LEFT CONTENT */}
              <div>
                <h2 className="text-3xl md:text-3xl font-semibold text-black mb-4">
                  Why Follow Our Blog?
                </h2>

                <p className="text-gray-600 max-w-xl mb-10 leading-relaxed">
                  In a rapidly changing digital landscape, having a trusted
                  source of information is crucial. We curate content
                  specifically for IT leaders and tech enthusiasts.
                </p>

                <div className="space-y-8">
                  {/* ITEM 1 */}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFE6D4] flex items-center justify-center font-semibold text-orange-600">
                      01
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Industry-Relevant Content
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Curated specifically for IT leaders, tech enthusiasts,
                        and businesses looking to scale.
                      </p>
                    </div>
                  </div>

                  {/* ITEM 2 */}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFE6D4] flex items-center justify-center font-semibold text-orange-600">
                      02
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Actionable Insights
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Practical advice you can implement today.
                      </p>
                    </div>
                  </div>

                  {/* ITEM 3 */}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFE6D4] flex items-center justify-center font-semibold text-orange-600">
                      03
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Future-Ready Knowledge
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Stay ahead in a rapidly changing digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE (SINGLE IMAGE) */}
              <div className="flex justify-center lg:justify-end">
                <div className="flex justify-center lg:justify-end">
                  <div className="grid grid-cols-2 grid-rows-[160px_160px] sm:grid-rows-[200px_200px] gap-4 sm:gap-6 w-full max-w-[480px]">
                    {/* TOP LEFT – IMAGE */}
                    <div className="rounded-3xl overflow-hidden">
                      <img
                        src="/assets/images/blogs/why3.png"
                        alt="Creative Workspace"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* TOP RIGHT – IMAGE (SPANS 2 ROWS) */}
                    <div className="row-span-2 rounded-3xl overflow-hidden">
                      <img
                        src="/assets/images/blogs/why1.jpg"
                        alt="Blog Keyboard"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* BOTTOM LEFT – IMAGE */}
                    <div className="rounded-3xl overflow-hidden">
                      <img
                        src="/assets/images/blogs/why2.jpg"
                        alt="Writing Blog"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
