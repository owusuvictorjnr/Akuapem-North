"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";

export default function Personalities() {
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
      position: "Constuency Chairman for Akuapem North",
      image: "/img/perf.png",
    },
  ];

  // Slick carousel settings
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
    <div className="relative z-10">
      <Slider {...settings}>
        {personalities.map((person, i) => (
          <div
            key={i}
            className="w-full min-h-96 flex items-center justify-center"
          >
            <div className="text-center mt-10 space-y-1">
              <div className="space-y-5">
                <h3 className="text-xl font-bold">{person.name}</h3>
                <p className="text-lg">{person.position}</p>
              </div>
              <div className="flex justify-center">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={1000}
                  height={1000}
                  className="w-[30rem] h-[30rem] lg:w-[30rem] lg:h-[30rem]  mx-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
