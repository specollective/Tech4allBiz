import Button from "@/app/ui/Buttons";

const styles = {
  container: "flex justify-between flex-col md:flex-row w-full md:py-5",
  leftColumn: "basis-1/3 flex flex-col py-8",
  heading: "text-[42px] font-bold mb-4",
  paragraph: "mb-8",
  buttonContainer: "w-full flex flex-col md:flex-row gap-4 justify-items-left",
  rightColumn: "border basis-1/2 flex",
  videoIframe: "w-full h-auto aspect-video",
};

const LandingHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftColumn}>
        <h1 className={styles.heading}>Tech4allBiz</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Pellentesque a quis mauris
          tempus tortor aliquet arcu eu. A mauris urna duis euismod.
        </p>
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
          src="https://www.youtube.com/embed/lE6RYpe9IT0?si=73rcqCe79hdufTfT"
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
