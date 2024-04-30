import { BodyRegular } from "@/app/ui/Texts";

const styles = {
  text: "md:text-[18px] italic",
  formLink: "text-blue-600 underline",
};

function ContentRequest() {
  return (
    <BodyRegular className={styles.text}>
      Have requests for additional resources? Fill out our&nbsp;
      <a
        href="https://bit.ly/3JTfH8N"
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
