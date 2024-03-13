import { getLessons } from "@/app/utils/getLessons";

import { getSkillsArray } from "@/app/utils/getSkillsArray";
import { FormattedLesson } from "@/app/constants/types";

export default async function getLessonsFormatterAndSlug(): Promise<
  FormattedLesson[]
> {
  const lessons = await getLessons();
  const formattedLessons = lessons.map(({ frontmatter, slug }) => {
    const { title, author, description, lessonTime, skillsLearned } =
      frontmatter;
    const skillsArray = getSkillsArray(skillsLearned);
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
