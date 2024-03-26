import { FrontmatterProps } from "@/app/constants/types";
import { Title1 } from "@/app/ui/Titles";

const styles = {
  container: "w-full flex flex-col py-5",
  headerRow: "flex flex-row w-full",
  title: "md:basis-3/5",
  contentRow: "flex flex-col md:flex-row justify-between  w-full",
  description: "md:basis-3/5 mt-4 mb-4",
  statsContainer: "flex flex-col align-top mt-4",
  statsItem: "",
};

export default function LessonHero({ frontmatter }: FrontmatterProps) {
  return (
    <section className={styles.container}>
      <div className={styles.headerRow}>
        <Title1 className={styles.title}>{frontmatter.title}</Title1>
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
    </section>
  );
}
