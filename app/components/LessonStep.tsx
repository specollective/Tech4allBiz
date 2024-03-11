import React from "react";

type LessonStepProps = {
  title: string;
  description: string;
  embedURL: string;
};

export default function LessonStep({
  title,
  description,
  embedURL,
}: LessonStepProps) {
  return (
    <div className="max-w-md py-4 px-8 bg-back shadow-lg rounded-lg my-20">
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <div className="mt-4">
        <iframe
          className="w-full"
          src={embedURL}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
