// pages/index.js

import styles from "@/app/page.module.css";
import Footer from "@/app/components/Footer";
import { getLessonsFormatter } from '@/app/components/mdx-content';

export  default async function Home(
  
) {

  const lessons = await getLessonsFormatter();
  return (
    <main className={styles.main}>
      <h1>Lessons</h1>
    <div>hellooo</div>
      {/* <ul>
        {lessons.map(({ slug, title }:any) => (
          <li key={slug}>
            <Link href={`/lessons/${slug}`}>
            {title}
            </Link>
          </li>
        ))}
      </ul> */}
      <Footer />
    </main>
  );
}
