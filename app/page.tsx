import styles from "@/app/page.module.css";
import Footer from "@/app/components/Footer";
import { getLessonsFormatterAndSlug } from "@/app/components/mdx-content";
import Link from "next/link";
import NavDesktop from "@/app/components/NavDesktop";

export default async function Home() {
  const lessons = await getLessonsFormatterAndSlug();
  return (
    <main className={styles.main}>
      <NavDesktop />
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
      <Footer />
    </main>
  );
}
