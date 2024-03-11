import { promises as fs } from "fs";
import { CompileMDXResult, compileMDX } from "next-mdx-remote/rsc";
import path from "path";

import LessonStep from "@/app/components/LessonStep";

type Frontmatter = {
  title: string;
  author: string;
  description: string;
  lessonTime: string;
  steps: number;
  skillsLearned: string;
};
type Lesson = {
  frontmatter: Frontmatter;
  slug: string;
  compiledContent: CompileMDXResult;
};

type FormattedLesson = {
  slug: string;
  author: string;
  title: string;
  description: string;
  lessonTime: string;
  skillsLearned: string[];
};

function slugify(str: string) {
  return str
    .replace(/^\d+-/, "") // Remove leading numbers followed by a hyphen (e.g., "1-")
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Add a hyphen between camelCase words
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^-\w]+/g, "") // Remove all non-word chars except hyphens
    .replace(/--+/g, "-"); // Replace multiple hyphens with single hyphen
}
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

export async function getLessonsFormatterAndSlug(): Promise<FormattedLesson[]> {
  const lessons = await getLessons();
  const formattedLessons = lessons.map(({ frontmatter, slug }) => {
    const { title, author, description, lessonTime, skillsLearned } =
      frontmatter;
    const skillsArray = skillsLearned
      .split(/\s+#/)
      .map((skill) => skill.replace(/^#/, ""));

    return {
      slug,
      title,
      author,
      description,
      lessonTime,
      skillsLearned: skillsArray,
    };
  });

  return formattedLessons;
}
