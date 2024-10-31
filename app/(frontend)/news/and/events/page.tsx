import { newsData } from "@/data/newsData";

export default function News() {
  const recentNews = newsData.slice(0, 3); // Show only a few items on the home page

  return (
    <div>
      <h2>Latest News</h2>
      <div>
        {recentNews.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
