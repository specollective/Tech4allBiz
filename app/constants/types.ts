import { CompileMDXResult } from "next-mdx-remote/rsc";

export type FormattedLesson = {
  slug: string;
  author: string;
  title: string;
  description: string;
  lessonTime: string;
  skillsLearned: string[];
};

export type Frontmatter = {
  title: string;
  author: string;
  description: string;
  lessonTime: string;
  steps: number;
  skillsLearned: string;
};

export type FrontmatterProps = {
  frontmatter: Frontmatter;
};

export type Lesson = {
  frontmatter: Frontmatter;
  slug: string;
  compiledContent: CompileMDXResult;
};

export type LessonStepProps = {
  title: string;
  description: string;
  embedURL: string;
  step: string;
};

export type SkillsProp = {
  skillsTags: string;
};
