"use client";

import Campaigns from "@/components/Campaign";
import Countdown from "@/components/Countdown";
import Mission from "@/components/Mission";
import SlidingText from "@/components/NewsSlider";
import Personalities from "@/components/Personalities";
import Together from "@/components/Together";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section for Background Banner and Carousel */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-10 -z-10">
          <Image
            src="/logo/npp-1.jpg"
            alt="banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Personalities Carousel */}
        <div className="z-10 w-full">
          <Personalities />
        </div>
      </section>

      {/* Section for Together */}
      <section>
        <Together />
        <Campaigns />
        <Mission />
      </section>

      {/* Section for News and Updates */}
      <section className=" mt-10">
        <SlidingText />
      </section>

      {/* Countdown */}
      <Countdown />
    </main>
  );
}
