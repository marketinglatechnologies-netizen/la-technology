import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");

export function getAllBlogs() {
  const files = fs.readdirSync(BLOGS_DIR);

  return files
    .map((file) => {
      const slug = file.replace(".md", "");
      const fileContent = fs.readFileSync(
        path.join(BLOGS_DIR, file),
        "utf-8"
      );

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
}