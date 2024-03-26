import { hostPages } from "@/app/constants/hostPages";
import { Title3 } from "@/app/ui/Titles";

export default function VideoHostWebPage() {
  return (
    <section className="flex flex-col gap-5 py-10">
      <Title3>Video Host Web Pages</Title3>
      {hostPages.map((host, index) => (
        <a
          key={index}
          href={host.website}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          {host.name}
        </a>
      ))}
    </section>
  );
}
