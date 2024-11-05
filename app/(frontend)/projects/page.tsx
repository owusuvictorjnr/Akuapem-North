"use client";

import { projData } from "@/data/projectData";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectPage() {
  const [project] = useState(projData);

  useEffect(() => {
    // Optionally, fetch news from an API endpoint if needed
  }, []);
  return (
    <div className="mb-10">
      <div className="">
        <h1 className="text-center md:text-2xl text-lg text-blue-500 font-bold uppercase mb-4 bg-gray-200 py-2">
          Projects
        </h1>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 px-5">
        {project.map((project, id) => (
          <div
            key={id}
            className="bg-gray-200 min-h-[35rem] lg:flex pb-10 flex  mx-auto container shadow-lg rounded-lg md:w-[40rem]"
          >
            <div className="space-y-3  mx-auto w-full">
              <Image
                src={project.image}
                alt={project.title}
                height={1000}
                width={1000}
                className="w-full h-[30vh] md:h-[45vh]"
              />
              <div className="space-y-8">
                <h1 className="text-center text-lg font-bold text-blue-500 md:text-2xl">
                  {project.title}
                </h1>
                <p className="px-5 leading-relaxed text-[#565358]">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
