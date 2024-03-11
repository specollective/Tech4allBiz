export default function LessonHero({ frontmatter }: any) {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row w-full">
        <h1 className="basis-2/5 text-3xl bold">{frontmatter.title}</h1>
        <div></div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="basis-2/5 mt-4 mb-4">{frontmatter.description}</div>
        <div className="flex flex-col mt-auto">
          <div>{`Number of Lesson Steps: ${frontmatter.steps}`}</div>
          <div>{`Total lesson time: ${frontmatter.lessonTime}`}</div>
        </div>
      </div>
    </div>
  );
}
