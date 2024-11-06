"use client";

import React from "react";
import { GiStrong } from "react-icons/gi";

const Together = () => {
  return (
    <>
      <div className="mb-10 space-y-10">
        <div className=" mx-auto mt-52">
          <div className="flex justify-center">
            <GiStrong
              size={90}
              color="white"
              className="bg-red-500 text-center rounded-full py-2 px-2 hover:bg-blue-950"
            />
          </div>
          <h1 className="font-bold text-4xl te capitalize text-blue-700 text-center my-5">
            together we are stronger
          </h1>

          <p className="text-justify px-5 text-[#565358] container mx-auto lg:px-[20rem]">
            In unity, we find strength that no single individual can achieve
            alone. As a community, we stand resilient, embracing our diversity
            and shared aspirations. Every voice matters, every hand builds, and
            every effort counts. Together, we can overcome the challenges that
            lie ahead and build a future of progress, equality, and opportunity
            for all. Now is the time to join hands and work towards a common
            goal — a brighter, stronger Akuapem North where everyone thrives.
            Let&#39;s move forward, united in purpose and unwavering in our
            commitment to making a difference. Together, we are unstoppable.
          </p>
        </div>
      </div>
    </>
  );
};

export default Together;
