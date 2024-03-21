import { FrontmatterProps } from "@/app/constants/types";

const styles = {
  container: "w-full flex flex-col",
  headerRow: "flex flex-row w-full",
  title: "md:basis-3/5 text-3xl bold",
  contentRow: "flex flex-col md:flex-row justify-between  w-full",
  description: "md:basis-3/5 mt-4 mb-4",
  statsContainer: "flex flex-col align-top mt-4",
  statsItem: "",
};

export default function LessonHero({ frontmatter }: FrontmatterProps) {
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <div></div>
      </div>
      <div className={styles.contentRow}>
        <div className={styles.description}>{frontmatter.description}</div>
        <div className={styles.statsContainer}>
          <div className={styles.statsItem}>{`By: ${frontmatter.author}`}</div>
          <div
            className={styles.statsItem}
          >{`Number of Lesson Steps: ${frontmatter.steps}`}</div>
          <div
            className={styles.statsItem}
          >{`Total lesson time: ${frontmatter.lessonTime}`}</div>
        </div>
      </div>
    </div>
  );
}
