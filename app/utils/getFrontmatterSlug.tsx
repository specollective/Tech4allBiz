import { getLessons } from "./getLessons";

import { FormattedLesson } from "@/app/constants/types";

export default async function getLessonsFormatterAndSlug(): Promise<
  FormattedLesson[]
> {
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
