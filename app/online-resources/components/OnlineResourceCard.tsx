import { OnlineResourceCardProps } from "@/app/constants/types";
import Buttons from "@/app/ui/Buttons";
import { Title4 } from "@/app/ui/Titles";

const styles = {
  cardContainer: `w-full flex flex-col gap-y-6`,
  header: `basis-3 flex-grow-0 underline hover:text-[#0E4873]`,
  body: `flex-grow text-black`,
  buttonContainer:
    "w-full md:w-fit flex flex-col md:flex-row gap-4 justify-items-left",
};

export default function OnlineResourceCard({
  title,
  description,
  url,
}: OnlineResourceCardProps) {
  return (
    <div className={styles.cardContainer}>
      <Title4 className={styles.header}>{title}</Title4>
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
