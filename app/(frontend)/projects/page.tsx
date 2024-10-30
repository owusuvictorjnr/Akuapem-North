import Image from "next/image";
import React from "react";

const projImage = [
  {
    title: "Water Supply Initiative in Akropong",
    description: "This is a water supply initiative in Akropong",
    image: "/proj/proj-8.jpg",
  },

  {
    title: "Road Construction in Abiriw",
    description: "This is a road construction project in Abiriw",
    image: "/proj/proj-1.jpg",
  },

  {
    title: "Education Initiative in Larteh",
    description: "This is an education initiative in Larteh",
    image: "/proj/proj-2.jpg",
  },

  {
    title: "Agricultural Initiative in Adukrom",
    description: "This is an agricultural initiative in Adukrom",
    image: "/proj/proj-3.jpg",
  },

  {
    title: "Youth Empowerment in Mamfe",
    description: "This is a youth empowerment project in Mamfe",
    image: "/proj/proj-4.jpg",
  },

  {
    title: "Water Supply Initiative in Akropong",
    description: "This is a water supply initiative in Akropong",
    image: "/proj/proj-5.png",
  },

  {
    title: "Healthcare Initiative in Amanokrom",
    description: "This is a healthcare initiative in Amanokrom",
    image: "/proj/proj-6.jpg",
  },

  {
    title: "Road Construction in Abiriw",
    description: "This is a road construction project in Abiriw",
    image: "/proj/proj-7.jpg",
  },
];
export default function ProjectPage() {
  return (
    <div className="">
      <div className="">
        <h1 className="text-center text-2xl font-bold uppercase mb-4 bg-gray-200 py-2">
          Projects
        </h1>
      </div>
      <div className="flex flex-col gap-10">
        {projImage.map((project, i) => (
          <div
            key={i}
            className="bg-gray-200 min-h-[35rem] mx-auto container px- shadow-lg rounded-lg"
          >
            <div className="space-y-3">
              <Image
                src={project.image}
                alt={project.title}
                height={500}
                width={500}
                className="w-full h-[30vh]"
              />
              <div className="space-y-8">
                <h1 className="text-center font-semibold">{project.title}</h1>
                <p className="px-5">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
