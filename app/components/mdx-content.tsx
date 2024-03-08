
import { type MDXRemoteSerializeResult } from 'next-mdx-remote';
  
import { promises as fs } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
 
type Frontmatter = {
  title: string;
  description: string;
  lessonTime: string;
  skillsLearned: string;
};
type Lesson = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: Frontmatter;
};
 
type FormattedLesson = {
  title: string;
  description: string;
  lessonTime: string;
  skillsLearned: string[];
};


export async function getLessons() {
  const lessonsDirectory = path.join(process.cwd(), 'lessons');
  const fileNames = await fs.readdir(lessonsDirectory);
  const lessons: Lesson[] = [];

  for (const fileName of fileNames) {
    const filepath = path.join(lessonsDirectory, fileName);
    const raw = await fs.readFile(filepath, 'utf-8');
    const serialized = await serialize(raw, {
      parseFrontmatter: true,
    });

    const lesson: Lesson = {
      serialized: serialized,
      frontmatter: serialized.frontmatter as Frontmatter,
    };

    lessons.push(lesson);
  }

  return lessons;
}

export async function getLessonsFormatter(): Promise<FormattedLesson[]> {
  const lessons = await getLessons();
  const formattedLessons = lessons.map(({ frontmatter }) => {
    const { title, description, lessonTime, skillsLearned } = frontmatter;
    const skillsArray = skillsLearned.split(/\s+#/).map(skill => skill.replace(/^#/, '')); // Remove leading # for each skill

    return {
      title,
      description,
      lessonTime,
      skillsLearned: skillsArray,
    };
  });

  return formattedLessons;
}
