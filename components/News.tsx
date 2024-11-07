import { useEffect, useState } from "react";
import { newsData } from "@/data/newsData";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
  const [news] = useState(newsData);

  useEffect(() => {
    // Optionally, fetch news from an API endpoint if needed
  }, []);

  return (
    <div className="mt-36 space-y-5">
      <h1 className="text-center font-bold text-lg md:text-3xl text-blue-700">News and Events</h1>
      <div className="flex flex-col items-center px-10 gap-10 md:grid grid-cols-2 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 rounded w-full md:w-full shadow-md mx-auto cursor-pointer lg:hover:scale-95 duration-100 h-full lg:w-full"
          >
            <div className="text-center">
              <Image
                src={item.imageUrl}
                alt={item.title}
                height={1000}
                width={1000}
                className="w-full h-52"
              />
              <div className="flex justify-center items-center mt-5 pb-5">
                <h2 className="py-2 text-[#565358]">{item.title}</h2>
                {/* <p>{item.description}</p> */}
              </div>
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
}
