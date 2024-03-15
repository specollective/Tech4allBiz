import styles from "@/app/page.module.css";
import Buttons from "@/app/ui/Buttons";
import OnlineResourceCard from "@/app/components/onlineResources/OnlineResourceCard";
import { onlineResources } from "@/app/constants/onlineResources";
import VideoHostWebPage from "@/app/components/onlineResources/VideoHostWebPages";

const pageStyles = {
  header: "md:basis-2/5 text-3xl bold",
  resourcesGrid:
    "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-48 gap-y-20 py-5 md:py-10",
  buttonContainer: "flex flex-row gap-4",
};

export default function OnlineResourcesPage() {
  return (
    <main className={styles.main}>
      <h2 className={pageStyles.header}>Online Resources</h2>
      <section className={pageStyles.resourcesGrid}>
        {onlineResources.map((resource, index) => (
          <OnlineResourceCard
            key={index}
            title={resource.title}
            description={resource.description}
            url={resource.link}
          />
        ))}
      </section>
      <VideoHostWebPage />
      <section className={pageStyles.buttonContainer}>
        <Buttons href="/#lessons" variant="lessons" text="View Lessons" />
      </section>
    </main>
  );
}
