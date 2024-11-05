import Countdown from "@/components/Countdown";
import SlidingText from "@/components/NewsSlider";
import { newsData } from "@/data/newsData";
import Image from "next/image";

export default function News() {
  const recentNews = newsData.slice(0, 4); // Show only a few items on the home page

  return (
    <div className="mb-8">
      <h2 className="text-center md:text-2xl text-lg text-[#2944D6] font-bold uppercase mb-4 bg-gray-200 py-2">
        Latest News
      </h2>
      <div className="mt-10 flex flex-col lg:grid lg:grid-cols-2 gap-10 px-5">
        {recentNews.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 min-h-[35rem] lg:flex pb-10 flex  mx-auto container shadow-lg rounded-lg md:w-[40rem]"
          >
            <div className="space-y-3 mx-auto w-full">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={1000}
                height={1000}
                className="w-full h-[30vh] md:h-[45vh]"
              />
              <div className="mt-10">
                <h3 className="text-center text-lg font-bold text-[#2944D6] md:text-2xl">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-[#565358] px-10 mt-5 text-sm md:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 mb-4">
        <SlidingText />
      </div>
      <div className="">
        <Countdown />
      </div>
    </div>
  );
}
