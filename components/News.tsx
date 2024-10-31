import { useEffect, useState } from "react";
import { newsData } from "@/data/newsData";
import Image from "next/image";

export default function NewsPage() {
  const [news] = useState(newsData);

  useEffect(() => {
    // Optionally, fetch news from an API endpoint if needed
  }, []);

  return (
    <div className="mt-36">
      <h1 className="text-center font-bold text-2xl">News and Events</h1>
      <div className="flex flex-col items-center px-10 gap-10 md:grid grid-cols-2 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 rounded w-[50vh] md:w-full shadow-md mx-auto cursor-pointer lg:hover:scale-95 duration-100 h-full lg:w-full"
          >
            <div className="">
              <Image
                src={item.imageUrl}
                alt={item.title}
                height={1000}
                width={1000}
                className="h-52"
              />
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
