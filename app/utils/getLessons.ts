import { promises as fs } from "fs";
import { CompileMDXResult, compileMDX } from "next-mdx-remote/rsc";
import path from "path";

import LessonStep from "@/app/components/lesson/LessonStep";
import slugify from "@/app/utils/slugify";
import { Frontmatter, Lesson } from "@/app/constants/types";

export async function getLessons() {
  const lessonsDirectory = path.join(process.cwd(), "lessons");
  const fileNames = await fs.readdir(lessonsDirectory);
  const lessons: Lesson[] = [];

  for (const fileName of fileNames) {
    const filepath = path.join(lessonsDirectory, fileName);
    const slug = slugify(fileName.replace(/\.mdx$/, ""));
    const rawMDX = await fs.readFile(filepath, "utf-8");
    const compiledContent = await compileMDX({
      source: rawMDX,
      components: {
        LessonStep,
      },
      options: { parseFrontmatter: true },
    });

    const lesson: Lesson = {
      frontmatter: compiledContent.frontmatter as Frontmatter,
      slug: slug,
      compiledContent: compiledContent as CompileMDXResult,
    };

    lessons.push(lesson);
  }

  return lessons;
}
