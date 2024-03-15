import { LessonStepProps } from "@/app/constants/types";

const styles = {
  container: "flex flex-col gap-y-2 justify-between w-full h-auto",
  stepTitle: "text-2xl font-semibold",
  lessonTitle: "text-gray-800 text-lg font-semibold",
  description: "mt-2 text-gray-600",
  videoIframe: "w-full aspect-video",
};

export default function LessonStep({
  title,
  description,
  embedURL,
  step,
}: LessonStepProps) {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.stepTitle}>Step {step}</h1>
        <h2 className={styles.lessonTitle}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <iframe
        className={styles.videoIframe}
        src={embedURL}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
