import Link from "next/link";
import Image from "next/image";

import Clock from "@/public/clock.svg";
import { getLessonsFormatterAndSlug } from "@/app/components/mdx-content";

const styles = {
  container: "py-8",
  header: "flex justify-between items-center mb-6",
  title: "text-2xl font-bold",
  gridContainer: "grid grid-cols-1 md:grid-cols-3 gap-6",
  lessonCard:
    "flex flex-col gap-5 justify-between border border-[#1282A2] rounded-lg p-4 h-full",
  lessonHeader: "text-lg font-semibold mb-2",
  lessonTimeContainer: "flex flex-row gap-3",
  lessonTime: "text-sm text-black py-4",
  lessonDescription:
    "flex-grow text-ellipsis overflow-hidden h-40 line-clamp-6",
  visitLessonLink:
    "w-fit mt-auto inline-block bg-[#1282A2] text-white py-2 px-4 rounded hover:bg-[#0E6881] transition-colors text-center",
};

export default async function LessonsGrid() {
  const lessons = await getLessonsFormatterAndSlug();
  return (
    <div id="lessons" className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Lessons</h1>
      </div>
      <div className={styles.gridContainer}>
        {lessons.map((lesson) => (
          <div key={lesson.slug} className={styles.lessonCard}>
            <div>
              <h2 className={styles.lessonHeader}>
                {lesson.title} - by {lesson.author}
              </h2>
              <div className={styles.lessonTimeContainer}>
                <Image src={Clock} alt="Clock" />
                <p className={styles.lessonTime}>{lesson.lessonTime}</p>
              </div>
              <p className={styles.lessonDescription}>{lesson.description}</p>
            </div>
            <Link href={`/${lesson.slug}`} className={styles.visitLessonLink}>
              Visit Lesson Page
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
