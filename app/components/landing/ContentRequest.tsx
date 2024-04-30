import { BodyRegular } from "@/app/ui/Texts";
import { contentRequestForm } from "@/app/constants/siteLinks";

const styles = {
  text: "md:text-[18px] italic",
  formLink: "text-[#1282A2] underline",
};

function ContentRequest() {
  return (
    <BodyRegular className={styles.text}>
      Have requests for additional resources? Fill out our&nbsp;
      <a
        href={contentRequestForm}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.formLink}
      >
        content request form
      </a>
      .
    </BodyRegular>
  );
}

export default ContentRequest;
