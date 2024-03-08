// pages/lessons/[slug].js
import { promises as fs } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Footer from "@/app/components/Footer";

export default function LessonPage({ serialized, frontmatter }: any) {
  return (
    <main>
      <h1>{frontmatter.title}</h1>
      <MDXRemote {...serialized} />
      <Footer />
    </main>
  );
}

// Dynamic paths for getStaticPaths
export async function getStaticPaths() {
  const lessonsDirectory = path.join(process.cwd(), 'lessons');
  const filenames = await fs.readdir(lessonsDirectory);
  const slugs = filenames.map(file => {
    const slug = file.replace(/\.mdx$/, '');
    return { params: { slug } };
  });

  return {
    paths: slugs,
    fallback: false,
  };
}

// Fetching content for getStaticProps
export async function getStaticProps({ params }: any) {
  const filepath = path.join(process.cwd(), 'lessons', `${params.slug}.mdx`);
  const raw = await fs.readFile(filepath, 'utf-8');
  const serialized = await serialize(raw, { parseFrontmatter: true });

  return {
    props: {
      serialized,
      frontmatter: serialized.frontmatter,
    },
  };
}
