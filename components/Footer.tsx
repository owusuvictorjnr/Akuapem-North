"use client";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="min-h-16 shadow-md ease-in bg-blue-950">
        <div className="grid grid-cols-1 space-y-10 lg:space-y-0 lg:flex lg:justify-between container mx-auto lg:space-x-10">
          <div className="text-2xl capitalize">
            <h1 className="text-white">
              contact <span className="text-red-500">us</span>{" "}
            </h1>
          </div>
          <div className="text-2xl capitalize">
            <h1 className="text-red-500">
              <span className="">nPP motto</span>
            </h1>
          </div>
          <div className="text-2xl capitalize">
            <h1 className="text-white">
              <span className="text-red-500">photos</span>{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 h-5">
        <h1 className="text-xs text-black/40 text-center capitalize">
          powered by <span>vitech solutions</span>
        </h1>
      </div>
    </>
  );
}
