import styles from "@/app/page.module.css";
import Buttons from "@/app/ui/Buttons";

const pageStyles = {
  header: "md:basis-2/5 text-3xl bold",
  buttonContainer: "flex flex-row gap-4",
};

export default function OnlineResourcesPage() {
  return (
    <main className={styles.main}>
      <h2 className={pageStyles.header}>Online Resources</h2>
      <div className={pageStyles.buttonContainer}>
        <Buttons href="/#lessons" variant="lessons" text="View Lessons" />
      </div>
    </main>
  );
}
