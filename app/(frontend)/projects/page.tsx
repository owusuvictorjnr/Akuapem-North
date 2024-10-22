import Image from "next/image";
import React from "react";

const projImage = [
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
export default function ProjectPage() {
  return (
    <div className="mt-36">
      <div className="">
        <h1 className="">Projects</h1>
      </div>
      <div className="">
        {projImage.map((project, i) => (
          <div key={i} className="">
            <div className="">
              <Image
                src={project.image}
                alt={project.name}
                height={200}
                width={200}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
