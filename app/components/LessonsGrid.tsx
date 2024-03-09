import Link from "next/link";
import Image from "next/image";
import Clock from "@/public/clock.svg";

import { getLessonsFormatterAndSlug } from "@/app/components/mdx-content";

export default async function LessonsGrid() {
  const lessons = await getLessonsFormatterAndSlug();
  return (
    <div id="lessons" className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lessons</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.slug}
            className=" flex flex-col gap-5 justify-between border border-[#1282A2] rounded-lg p-4 h-full"
          >
            <div>
              <h2 className="text-lg font-semibold mb-2">
                {lesson.title} - by {lesson.author}
              </h2>
              <div className="flex flex-row gap-3">
                <Image src={Clock} alt="Clock" />
                <p className="text-sm text-black py-4">{lesson.lessonTime}</p>
              </div>
              <p className="flex-grow text-ellipsis overflow-hidden h-40 line-clamp-6">
                {lesson.description}
              </p>
            </div>
            <Link
              href={`/${lesson.slug}`}
              className="w-fit mt-auto inline-block bg-[#1282A2] text-white py-2 px-4 rounded hover:bg-[#0E6881] transition-colors text-center"
            >
              Visit Lesson Page
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
