import Image from "next/image";
import Link from "next/link";
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
    <div className="mt-36 min-h-[20rem] space-y-10">
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl">Projects</h1>
      </div>
      <div className="flex flex-col items-center px-10 gap-10 md:grid grid-cols-2 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {ProjImage.map((project, i) => (
          <div
            key={i}
            className="bg-gray-200 rounded w-[50vh] md:w-full shadow-md mx-auto cursor-pointer lg:hover:scale-95 duration-100 h-full lg:w-full"
          >
            <div className="text-center">
              <Link href="/projects">
                <Image
                  src={project.image}
                  alt={project.name}
                  height={500}
                  width={500}
                  className="h-52 w-full"
                />
                <div className="flex justify-center items-center mt-5 pb-5">
                  <h2 className="py-2">{project.name}</h2>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          View More
        </button>
      </div>
    </div>
  );
};

export default Project;
