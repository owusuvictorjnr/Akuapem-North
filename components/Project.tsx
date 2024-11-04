import { projData } from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  const recentProjects = projData.slice(0, 4); // Show only a few items on the home page

  return (
    <div className="mt-36 min-h-[20rem] space-y-10">
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl">Projects</h1>
      </div>
      <div className="flex flex-col items-center px-10 gap-10 md:grid grid-cols-2 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {recentProjects.map((project, id) => (
          <div
            key={id}
            className="bg-gray-200 rounded w-full md:w-full shadow-md mx-auto cursor-pointer lg:hover:scale-95 duration-100 h-full lg:w-full"
          >
            <div className="text-center">
              <Link href="/projects">
                <Image
                  src={project.image}
                  alt={project.description}
                  height={500}
                  width={500}
                  className="h-52 w-full"
                />
                <div className="flex justify-center items-center mt-5 pb-5">
                  <h2 className="py-2">{project.title}</h2>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center mx-auto items-center bg-rose-400 w-1/2  rounded-md text-center py-2 lg:w-1/4 hover:bg-blue-500">
        <Link
          href="/projects"
          className="text-white font-semibold text-xl capitalize"
        >
          view more
        </Link>
      </div>
    </div>
  );
};

export default Project;
