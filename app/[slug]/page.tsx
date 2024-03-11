import { redirect } from "next/navigation";

import { getLessons } from "@/app/components/mdx-content";
import styles from "@/app/page.module.css";
import LessonHero from "@/app/components/LessonHero";

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
      <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2  md:gap-20 justify-items-center">
        {lesson.compiledContent.content}
      </div>
    </main>
  );
}
