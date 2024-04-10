import styles from "@/app/page.module.css";
import Buttons from "@/app/ui/Buttons";
import OnlineResourceCard from "@/app/online-resources/components/OnlineResourceCard";
import { onlineResources } from "@/app/constants/onlineResources";
import VideoHostWebPage from "@/app/online-resources/components/VideoHostWebPages";
import { Title2 } from "@/app/ui/Titles";

const pageStyles = {
  header: "md:basis-2/5",
  resourcesGrid: "grid grid-cols-1 gap-y-10",
  buttonContainer: "w-full flex flex-col md:flex-row gap-4 justify-items-left",
};

export async function generateMetadata() {
  return {
    title: "Tech4All.biz - Free Online Resources",
    description:
      "Access free online resources to help you build skills and confidence step by step.",
  };
}

export default function OnlineResourcesPage() {
  return (
    <main className={styles.main}>
      <Title2 className={pageStyles.header}>Free Online Resources</Title2>
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
