import { redirect } from "next/navigation";
import { Metadata } from "next";
import { getLessons } from "@/app/utils/getLessons";
import styles from "@/app/page.module.css";
import LessonHero from "@/app/components/lesson/LessonHero";
import SkillsLearned from "@/app/components/lesson/SkillsLearned";
import Button from "@/app/ui/Buttons";

const pageStyle = {
  container:
    "w-full grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-20 justify-items-center",
  btnsContainer: "w-full flex flex-col md:flex-row gap-4 justify-items-left",
};

export async function generateStaticParams() {
  const lessons = await getLessons();

  const paths = lessons
    .filter((lesson) => lesson.slug !== undefined)
    .map((lesson) => ({ slug: lesson.slug }));
  return paths;
}

interface PagePropsType {
  params: { slug: string };
}

const SEO_DEFAULTS = {
  title: "tech4all.biz",
  description:
    "Enabling equitable usage and building of inclusive technology by buildJustly.",
};

export async function generateMetadata({
  params,
}: PagePropsType): Promise<Metadata> {
  const lessons = await getLessons();
  const lesson = lessons.find((page) => page.slug === params.slug);

  return {
    title: lesson?.frontmatter.title || SEO_DEFAULTS.title,
    description: lesson?.frontmatter.description || SEO_DEFAULTS.description,
  };
}

export default async function LessonPage({
  params,
}: {
  params: { slug: string };
}) {
  const lessons = await getLessons();
  const lesson = lessons.find((lesson) => lesson.slug === params.slug);

  if (!lesson) {
    redirect("/");
  }
  return (
    <main className={styles.main}>
      <LessonHero frontmatter={lesson.frontmatter} />
      <section className={pageStyle.container}>
        {lesson.compiledContent.content}
      </section>
      <SkillsLearned skillsTags={lesson.frontmatter.skillsLearned} />
      <section className={pageStyle.btnsContainer}>
        <Button variant="lessons" text="View More Lessons" href="/#lessons" />
        <Button
          variant="secondary"
          text="Free Online Resources"
          href="/online-resources"
        />
      </section>
    </main>
  );
}
