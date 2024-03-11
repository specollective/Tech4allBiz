import React from "react";

type LessonStepProps = {
  title: string;
  description: string;
  embedURL: string;
  step: string;
};

export default function LessonStep({
  title,
  description,
  embedURL,
  step,
}: LessonStepProps) {
  return (
    <div className="flex flex-col gap-y-2 justify-between w-full h-auto">
      <div>
        <h1 className="text-2xl font-semibold">Step {step}</h1>
        <h2 className="text-gray-800 text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <iframe
        className="w-full aspect-video"
        src={embedURL}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
