import { LessonStepProps } from "@/app/constants/types";
import { BodyBold, BodyRegular } from "@/app/ui/Texts";
import { Title3 } from "@/app/ui/Titles";

const styles = {
  container: "flex flex-col gap-y-4 justify-between w-full h-auto",
  description: "mt-2",
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
        <Title3>Step {step}</Title3>
        <BodyBold>{title}</BodyBold>
        <BodyRegular className={styles.description}>{description}</BodyRegular>
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
