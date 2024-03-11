import styles from "@/app/page.module.css";
import Hero from "@/app/components/LandingHero";
import LessonsGrid from "./components/LessonsGrid";
import SponsorsRow from "./components/Sponsors";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <LessonsGrid />
      <SponsorsRow />
    </main>
  );
}
