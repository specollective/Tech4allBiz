import { redirect } from "next/navigation";

import { getLessons } from "@/app/utils/getLessons";
import styles from "@/app/page.module.css";
import LessonHero from "@/app/components/lesson/LessonHero";
import SkillsLearned from "@/app/components/lesson/SkillsLearned";
import Button from "@/app/ui/Buttons";

const pageStyle = {
  container:
    "w-full grid grid-cols-1 gap-6 md:grid-cols-2  md:gap-20 justify-items-center",
  btnsContainer: "w-full flex gap-4 justify-items-left",
};

export async function generateStaticParams() {
  const lessons = await getLessons();

  const paths = lessons
    .filter((lesson) => lesson.slug !== undefined)
    .map((lesson) => ({
      params: { slug: lesson.slug },
    }));
  return paths;
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
        <Button variant="lessons" text="View More Lesson" href="/#lessons" />
        <Button
          variant="secondary"
          text="Free Online Resources"
          href="/online-resources"
        />
      </section>
    </main>
  );
}
