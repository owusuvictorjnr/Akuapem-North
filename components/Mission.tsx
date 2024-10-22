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
      <h1 className="capitalize font-bold text-3xl">
        our mission
      </h1>
      <p className="text-center mx-auto container text-gray-400 lg:px-[20rem]">
        To build a united, prosperous, and progressive Akuapem North, where
        every citizen is empowered to reach their full potential. Through
        transparent governance, inclusive policies, and community-driven
        initiatives, we will strengthen our educational systems, enhance
        healthcare, improve infrastructure, and foster economic opportunities.
        Together, we will lay the foundation for sustainable development,
        ensuring that the voice of every citizen is heard and their needs are
        met. Our mission is to serve with integrity, promote equality, and drive
        the constituency toward a brighter and more prosperous future.
      </p>
    </div>
  );
};

export default Mission;
