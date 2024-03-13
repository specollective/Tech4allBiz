import styles from "@/app/page.module.css";
import LandingHero from "@/app/components/LandingHero";
import LessonsGrid from "@/app/components/LessonsGrid";
import SponsorsRow from "@/app/components/Sponsors";

export default async function Home() {
  return (
    <main className={styles.main}>
      <LandingHero />
      <LessonsGrid />
      <SponsorsRow />
    </main>
  );
}
