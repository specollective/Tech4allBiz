import { getLessons } from "@/app/components/mdx-content";
// import Page from "@/app/components/Page";
import { redirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

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
    <section>
      <h1>{lesson.frontmatter.title}</h1>
      <MDXRemote source={lesson.source} />
    </section>
  );
}
