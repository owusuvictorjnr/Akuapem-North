import React from "react";
import { LiaBullhornSolid } from "react-icons/lia";

const Campaigns = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 mt-36">
      <div className="flex justify-center items-center">
        <LiaBullhornSolid
          size={90}
          color="white"
          className="bg-red-500 text-center rounded-full py-2 px-2 hover:bg-blue-950"
        />
      </div>

      <div className="space-y-3 text-center">
        <h1 className="capitalize font-bold text-3xl">message</h1>

        <p className="font-semibold text-xl">Empowering Communities, Building the Future</p>
      </div>
      <p className="text-center mx-auto container text-gray-400 lg:px-[20rem]">
        Our mission is to create a prosperous, united Akuapem North where every
        individual has the opportunity to thrive. Through transparent
        leadership, we aim to promote development in education, healthcare,
        infrastructure, and economic empowerment. Together, we will ensure that
        no one is left behind in our pursuit of progress. With your support, we
        will continue to build a strong foundation for future generations, drive
        meaningful change, and uphold the values of integrity and service that
        the New Patriotic Party stands for. Let&#39;s rise together for a
        brighter tomorrow.
      </p>
    </div>
  );
};

export default Campaigns;
