import Image from "next/image";
import React from "react";

const ProjImage = [
  {
    name: "Water Supply Initiative in Akropong",
    image: "/proj/proj-8.jpg",
  },

  {
    name: "Road Construction in Abiriw",
    image: "/proj/proj-1.jpg",
  },

  {
    name: "Education Initiative in Larteh",
    image: "/proj/proj-2.jpg",
  },

  {
    name: "Agricultural Initiative in Adukrom",
    image: "/proj/proj-3.jpg",
  },

  {
    name: "Youth Empowerment in Mamfe",
    image: "/proj/proj-4.jpg",
  },

  {
    name: "Water Supply Initiative in Akropong",
    image: "/proj/proj-5.png",
  },

  {
    name: "Healthcare Initiative in Amanokrom",
    image: "/proj/proj-6.jpg",
  },

  { 
    name: "Road Construction in Abiriw",
    image: "/proj/proj-7.jpg",
  },
];

const Project = () => {
  return (
    <div className="mt-36 min-h-[20rem] space-y-10 mx-auto ">
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl">Projects</h1>
      </div>
      <div className="flex flex-col items-center gap-10 md:grid grid-cols-1 mx-auto md:grid-cols-4 lg:grid-cols-6">
        {ProjImage.map((project, i) => (
          <div key={i} className="bg-gray-200 rounded">
            <div className="text-center">
              <Image
                src={project.image}
                alt={project.name}
                height={500}
                width={500}
                className="w-96"
              />
              <div className="">
                <h2 className="py-2">{project.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
