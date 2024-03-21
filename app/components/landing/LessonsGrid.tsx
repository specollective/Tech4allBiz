import Image from "next/image";

import Clock from "@/public/clock.svg";
import getFrontmatterSlug from "@/app/utils/getFrontmatterSlug";
import Button from "@/app/ui/Buttons";

const styles = {
  container: "py-8",
  header: "flex justify-between items-center mb-6",
  title: "text-2xl font-bold",
  gridContainer: "grid grid-cols-1 md:grid-cols-3 gap-6",
  lessonCard:
    "flex flex-col gap-5 justify-between border border-[#1282A2] rounded-lg p-4 h-full",
  lessonDetails: "flex flex-col",
  lessonHeader: "basis-16 text-lg font-semibold",
  lessonTimeContainer:
    "flex flex-row justify-between gap-3 items-center py-3 text-sm text-black font-medium",
  lessonTime: "flex flex-row gap-2 items-center",
  lessonDescription: "line-clamp-3",
  buttonContainer: "w-full flex flex-col md:flex-row gap-4 justify-items-left",
};

export default async function LessonsGrid() {
  const lessons = await getFrontmatterSlug();
  return (
    <div id="lessons" className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Lessons</h1>
      </div>
      <div className={styles.gridContainer}>
        {lessons.map((lesson) => (
          <div key={lesson.slug} className={styles.lessonCard}>
            <div className={styles.lessonDetails}>
              <h2 className={styles.lessonHeader}>{lesson.title}</h2>
              <div className={styles.lessonTimeContainer}>
                By: {lesson.author}
                <div className={styles.lessonTime}>
                  <Image src={Clock} alt="Clock" width={14} height={14} />
                  <p>{lesson.lessonTime}</p>
                </div>
              </div>
              <p className={styles.lessonDescription}>{lesson.description}</p>
            </div>
            <div className={styles.buttonContainer}>
              <Button
                href={`/${lesson.slug}`}
                variant="primary"
                text="View Lesson Details"
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
