import { promises as fs } from "fs";
import { CompileMDXResult, compileMDX } from "next-mdx-remote/rsc";
import path from "path";

import LessonStep from "./LessonStep";

type Frontmatter = {
  title: string;
  author: string;
  description: string;
  lessonTime: string;
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
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^-\w]+/g, "") // Remove all non-word characters except for hyphen
    .replace(/--+/g, "-"); // Replace multiple - with single hyphen
}

export async function getLessons() {
  const lessonsDirectory = path.join(process.cwd(), "lessons");
  const fileNames = await fs.readdir(lessonsDirectory);
  const lessons: Lesson[] = [];

  for (const fileName of fileNames) {
    const filepath = path.join(lessonsDirectory, fileName);
    const slug = slugify(fileName.replace(/\.mdx$/, "-"));
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
