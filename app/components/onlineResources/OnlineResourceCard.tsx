import { OnlineResourceCardProps } from "@/app/constants/types";
import Buttons from "@/app/ui/Buttons";

const styles = {
  cardContainer: `w-full flex flex-col gap-y-6`,
  header: `basis-3 flex-grow-0 mb-3 font-bold text-2xl`,
  body: `flex-grow text-black`,
  buttonContainer: "w-full flex flex-col md:flex-row gap-4 justify-items-left",
};

export default function OnlineResourceCard({
  title,
  description,
  url,
}: OnlineResourceCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>{title}</div>
      <p className={styles.body}>{description}</p>
      <div className={styles.buttonContainer}>
        <Buttons
          href={url}
          variant="primary"
          className="w-full"
          text="Visit Webpage"
        />
      </div>
    </div>
  );
}
