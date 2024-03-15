import { hostPages } from "@/app/constants/hostPages";

export default function VideoHostWebPage() {
  return (
    <section className="flex flex-col gap-5">
      <h4 className="text-2xl">Video Host Web Pages</h4>
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
