import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");

export async function generateStaticParams() {
  const files = fs.readdirSync(BLOGS_DIR);
  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const filePath = path.join(BLOGS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);

  const formattedDate = data.date
    ? new Date(data.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* FEATURED IMAGE */}

      {data.image && (
        <div className="mb-10 rounded-2xl overflow-hidden">
          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">
            {data.title}
          </h1>

          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[360px] object-cover"
          />
        </div>
      )}

      {/* META */}
      {formattedDate && (
        <p className="text-sm text-gray-500 mb-10">{formattedDate}</p>
      )}

      {/* CONTENT */}
      <article
        className="
    prose 
    prose-lg 
    max-w-none 

    [&>p]:mb-6 
    [&>p]:leading-7

    [&>h1]:font-bold
    [&>h2]:font-semibold
    [&>h3]:font-semibold

    [&>h2]:mt-12 
    [&>h2]:mb-4
  "
        dangerouslySetInnerHTML={{
          __html: processedContent.toString(),
        }}
      />
    </main>
  );
}
