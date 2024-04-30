import styles from "@/app/page.module.css";
import LandingHero from "@/app/components/landing/LandingHero";
import LessonsGrid from "@/app/components/landing/LessonsGrid";
import SponsorsRow from "@/app/components/landing/Sponsors";
import ContentRequest from "./components/landing/ContentRequest";

export default async function Home() {
  return (
    <main className={styles.main}>
      <LandingHero />
      <LessonsGrid />
      <ContentRequest />
      <SponsorsRow />
    </main>
  );
}
