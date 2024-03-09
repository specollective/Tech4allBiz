import styles from "@/app/page.module.css";
import Hero from "@/app/components/Hero";
import LessonsGrid from "./components/LessonsGrid";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <LessonsGrid />
    </main>
  );
}
