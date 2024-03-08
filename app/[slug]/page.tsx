import { getLessons } from "../components/mdx-content";
// import Page from "@/app/components/Page";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const lessons = await getLessons();

  const paths = lessons
    .filter((lesson) => lesson.slug !== undefined)
    .map((lesson) => ({
      params: { slug: lesson.slug },
    }));
  return paths;
}

export default async function LessonPage({
  params,
}: {
  params: { slug: string };
}) {
  const lessons = await getLessons();
  const lesson = lessons.find((lesson) => lesson.slug === params.slug);

  if (!lesson) {
    redirect("/");
  }
  return (
    <article>
      <h1>{lesson.frontmatter.title}</h1>
      {/* Render the serialized MDX content */}
      {/* You'll use MDXRemote here if `lesson.serialized` contains serialized MDX content */}
    </article>
  );
}
