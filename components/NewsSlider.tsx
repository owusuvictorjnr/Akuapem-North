"use client";

import { useState } from "react";

type NewsItem = {
  title: string;
  content: string;
  // Add more properties if needed
};

export default function NewsSlider({ news }: { news: NewsItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % news.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);

  return (
    <div>
      <button onClick={prevSlide}>Previous</button>
      <div>
        <h3>{news[currentIndex].title}</h3>
        <p>{news[currentIndex].content}</p>
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}
