import styles from "@/app/page.module.css";
import { getLessonsFormatterAndSlug } from "@/app/components/mdx-content";
import Link from "next/link";
import Hero from "@/app/components/Hero";

export default async function Home() {
  const lessons = await getLessonsFormatterAndSlug();
  return (
    <main className={styles.main}>
      <Hero />
      <h1>Lessons</h1>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.slug}>
            <Link href={`/${lesson.slug}`}>
              {lesson.title}
              {lesson.description}
              {lesson.lessonTime}
              {}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
