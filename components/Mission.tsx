import Link from "next/link";
import React from "react";
import { TfiAnchor } from "react-icons/tfi";

const Mission = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 mt-36">
      <TfiAnchor
        size={90}
        color="white"
        className="bg-red-500 rounded-full py-2 px-2
      hover:bg-blue-950"
      />
      <h1 className="capitalize font-bold text-blue-700 text-3xl">
        our mission
      </h1>
      <div className="">
        <p className="text-justify mx-auto line-clamp-2 container text-[#565358] lg:px-[20rem]">
          To achieve this vision, we are dedicated to implementing strategic
          programs and initiatives that address the unique needs of Akuapem
          North. Our mission is to empower the youth through quality education,
          support local businesses for economic growth, and provide essential
          services that enhance the well-being of every individual in
        </p>
        <Link href="/about/mission-vision" className="text-blue-700 hover:text-red-500">
          read more
        </Link>
      </div>
    </div>
  );
};

export default Mission;
