import Button from "@/app/ui/Buttons";
import { BodyRegular } from "@/app/ui/Texts";
import { Title3 } from "@/app/ui/Titles";

const styles = {
  container: "flex justify-between flex-col md:flex-row w-full md:py-5",
  leftColumn: "basis-1/3 flex flex-col py-8",
  header: "mb-4",
  paragraph: "mb-8",
  buttonContainer: "w-full flex flex-col md:flex-row gap-4 justify-items-left",
  rightColumn: "border basis-1/2 flex",
  videoIframe: "w-full h-auto aspect-video",
};

const LandingHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftColumn}>
        <Title3>
          {" "}
          Welcome to Tech4all.biz
          {" "}
        </Title3>
        <BodyRegular className={styles.paragraph}>
          This website helps small business owners just like you build skills and confidence step by step by showing how other small business owners integrate technology into their businesses.
        </BodyRegular>
        <div className={styles.buttonContainer}>
          <Button href="/#lessons" variant="lessons" text="View Lessons" />
          <Button
            href="/online-resources"
            variant="secondary"
            text="Free Online Resources"
          />
        </div>
      </div>
      <div className={styles.rightColumn}>
        <iframe
          src="https://www.youtube.com/embed/zHKNJj_Avfc?si=hClSZB5cqWZZS6B6"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.videoIframe}
        ></iframe>
      </div>
    </section>
  );
};

export default LandingHero;
