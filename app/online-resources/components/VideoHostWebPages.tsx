import { hostPages } from "@/app/constants/hostPages";
import { Title3 } from "@/app/ui/Titles";

const styles = {
  container: "flex flex-col gap-5 py-10",
  name: "underline hover:text-[#0E4873]",
};
export default function VideoHostWebPage() {
  return (
    <section className={styles.container}>
      <Title3>Video Host Web Pages</Title3>
      {hostPages.map((host, index) => (
        <a
          key={index}
          href={host.website}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.name}
        >
          {host.name}
        </a>
      ))}
    </section>
  );
}
