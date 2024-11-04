"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";

const personalities = [
  {
    name: "Dr. Alhaji Bawumia",
    position: "Aspiring President of Ghana",
    image: "/img/bawu.png",
  },
  {
    name: "Sammi Awuku",
    position: "Aspiring MP for Akuapem North",
    image: "/img/awuku.png",
  },
  {
    name: "Omane Boamah",
    position: "Constituency Chairman for Akuapem North",
    image: "/img/perf.png",
  },
];

export default function Personalities() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative z-10 p-4 md:p-8 lg:p-12">
      <Slider {...settings}>
        {personalities.map((person, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center min-h-[20rem] space-y-4"
          >
            <div className="text-center space-y-2 px-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                {person.name}
              </h3>
              <p className="text-sm md:text-base lg:text-lg">
                {person.position}
              </p>
            </div>
            <div className="flex justify-center w-full">
              <Image
                src={person.image}
                alt={person.name}
                width={500}
                height={500}
                className="sm:h-[18rem] sm:w-[18rem] md:h-[25rem] md:w-[25rem] lg:h-[30rem] lg:w-[30rem] rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
