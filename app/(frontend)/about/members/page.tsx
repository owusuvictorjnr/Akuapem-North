// app/about/members/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { ConstMembersData, regMembersData } from "@/data/memberData";

const MembersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 text-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 uppercase">
        Executive Members
      </h1>

      {/* Reg. Executives */}
      <div className="">
        <h2 className="text-xl font-semibold">Regional Executives</h2>
      </div>
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {regMembersData.map((regmember, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <Image
              src={regmember.image}
              alt={regmember.name}
              width={150}
              height={150}
              className=" mb-4"
            />
            <h2 className="text-xl font-semibold">{regmember.name}</h2>
            <p className="text-gray-700">{regmember.position}</p>
          </div>
        ))}
      </div>

      {/* Const. Executives */}
      <div className="mt-36">
        <h2 className="text-xl font-semibold">Constituency Executives</h2>
      </div>
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ConstMembersData.map((constmember, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <Image
              src={constmember.image}
              alt={constmember.name}
              width={150}
              height={150}
              className="mb-4"
            />
            <h2 className="text-xl font-semibold">{constmember.name}</h2>
            <p className="text-gray-700">{constmember.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersPage;
