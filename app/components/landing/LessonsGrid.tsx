import Image from "next/image";

import Clock from "@/public/clock.svg";
import getFrontmatterSlug from "@/app/utils/getFrontmatterSlug";
import Button from "@/app/ui/Buttons";
import { Title3, Title4 } from "@/app/ui/Titles";
import { BodyRegular, SmallText } from "@/app/ui/Texts";

const styles = {
  container: "py-8",
  header: "flex justify-between items-center mb-6",
  title: "text-2xl font-bold",
  gridContainer: "grid grid-cols-1 md:grid-cols-3 gap-6",
  lessonCard:
    "flex flex-col gap-5 justify-between border border-[#1282A2] rounded-lg p-4 h-full",
  lessonDetails: "flex flex-col",
  lessonHeader: "basis-14",
  lessonTimeContainer: "flex flex-row justify-between gap-3 items-center py-3",
  lessonTime: "flex flex-row gap-2 items-center",
  lessonDescription: "line-clamp-3",
  buttonContainer: "w-full flex flex-col md:flex-row gap-4 justify-items-left",
};

export default async function LessonsGrid() {
  const lessons = await getFrontmatterSlug();
  return (
    <div id="lessons" className={styles.container}>
      <div className={styles.header}>
        <Title3>Lessons</Title3>
      </div>
      <div className={styles.gridContainer}>
        {lessons.map((lesson) => (
          <div key={lesson.slug} className={styles.lessonCard}>
            <div className={styles.lessonDetails}>
              <Title4 className={styles.lessonHeader}>{lesson.title}</Title4>
              <div className={styles.lessonTimeContainer}>
                <SmallText>By: {lesson.author}</SmallText>
                <div className={styles.lessonTime}>
                  <Image src={Clock} alt="Clock" width={14} height={14} />
                  <SmallText>{lesson.lessonTime}</SmallText>
                </div>
              </div>
              <BodyRegular className={styles.lessonDescription}>
                {lesson.description}
              </BodyRegular>
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
