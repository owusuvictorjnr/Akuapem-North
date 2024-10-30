"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const resp = await axios.get("/api/news");
        setNews(resp.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="mt-36">
      <h1 className="text-center capitalize font-bold text-2xl">news and events</h1>

      <div className="">
        {news.map((item) => (
          <div className="" key={item.id}>
            <h2 className="">{item.title}</h2>
            <p className="">{item.description}</p>
            <Image
              src={item.imageUrl}
              alt={item.title}
              height={500}
              width={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
