import Link from "next/link";

const styles = {
  container: "flex justify-between flex-col md:flex-row w-full md:py-5",
  leftColumn: "basis-1/3 flex flex-col py-8",
  heading: "text-[42px] font-bold mb-4",
  paragraph: "mb-8",
  buttonContainer: "flex flex-wrap gap-4",
  viewLessonsLink:
    "px-6 py-2 text-black bg-[#F0C808] rounded hover:bg-[#C9A900] transition-colors",
  freeResourcesButton:
    "px-6 py-2 text-black border border-[#0E4873] rounded hover:bg-[#0E4873] hover:text-white transition-colors",
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
          <Link href="/#lessons" className={styles.viewLessonsLink}>
            View Lessons
          </Link>
          <button className={styles.freeResourcesButton}>
            Free Online Resources
          </button>
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
